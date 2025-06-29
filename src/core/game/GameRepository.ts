import {CharacterID} from "@/model/character/CharacterID";
import {GameID} from "@/model/game/GameID";
import {Resource} from "sst/resource";
import {dynamoDBClient, getLoader, send} from "@/core/DynamoDBClient";
import {Snowflake} from "discord-api-types/v10";
import {QueryCommand, QueryCommandOutput} from "@aws-sdk/lib-dynamodb";
import {GameOperation} from "@/model/game/GameOperation";
import {getMetadata} from "../RequestContext";
import {Game} from "@/model/game/Game";
import {PlayerID} from "@/model/player/PlayerID";
import {Result, ValidResult} from "@/model/processor/Result";

const GameReducer = (game: Game | undefined, operation: GameOperation): Result<Game, string> => {
  if (game === undefined) {
    switch (operation.type) {
      case "create": {
        return ValidResult.of({
          id: operation.data.id,
          revision: 0,
          status: "RUNNING",
          tier: operation.data.tier,
          name: operation.data.name,
          characterIDs: [],
          gameMasterID: operation.data.gameMasterID
        });
      }
    }
  } else {
    switch (operation.type) {
      case "add-characters-to-game": {
        const newCharacterIDs = operation.data.characterIDs.filter(characterID => !game.characterIDs.includes(characterID));
        return ValidResult.of({
          ...game,
          characterIDs: [...game.characterIDs, ...newCharacterIDs]
        });
      }
      case "remove-characters-from-game":  {
        return ValidResult.of({
          ...game,
          characterIDs: game.characterIDs.filter(characterID => !operation.data.characterIDs.includes(characterID))
        });
      }
      case "complete-game": {
        return ValidResult.of({
          ...game,
          status: operation.data.status
        });
      }
    }
  }

  throw new Error(`Unsupported operation: ${JSON.stringify(operation)} on ${JSON.stringify(game)}`);
}

function addGameAuditLog(gameID: GameID, revision: number, Data: any, Metadata: any) {
  send({
    Put: {
      TableName: Resource.QuillTable.name,
      Item: {
        PK: `GAME#${gameID}`,
        SK: `AUDIT#${revision}`,
        Data,
        Metadata
      },
      ConditionExpression: "attribute_not_exists(PK) and attribute_not_exists(SK)"
    }
  });
}

function assignCharacterToGame(gameID: GameID, characterID: CharacterID) {
  send({
    Put: {
      TableName: Resource.QuillTable.name,
      Item: {
        "PK": `GAME#${gameID}`,
        "SK": `CHARACTER#${characterID}`,
        "GS1PK": `CHARACTER#${characterID}`,
        "GS1SK": `GAME#${gameID}`,
        GameID: gameID,
        CharacterID: characterID
      }
    }
  });
}

function unassignCharacterFromGame(gameID: GameID, characterID: CharacterID) {
  send({
    Delete: {
      TableName: Resource.QuillTable.name,
      Key: {
        "PK": `GAME#${gameID}`,
        "SK": `CHARACTER#${characterID}`
      }
    }
  });
}

class GameLoader {
  private cache: {[gameID: GameID]: Game} = {};
  async getByID(id: GameID): Promise<Game | undefined> {
    if (this.cache[id]) return this.cache[id];
    const Response = await dynamoDBClient.send(new QueryCommand({
      TableName: Resource.QuillTable.name,
      KeyConditionExpression: "PK = :PK AND SK = :SK",
      ExpressionAttributeValues: {
        ":PK": "GAME",
        ":SK": `GAME#${id}`
      }
    }));
    const value = (!Response.Items || Response.Items.length === 0)
      ? undefined
      : Response.Items[0].Data;
    this.cache[id] = value;
    return value;
  }
  seed(id: GameID, value: Game) {
    this.cache[id] = value;
  }
  async getByGameMasterID(userID: PlayerID): Promise<Game[]> {
    const items = [];
    let ExclusiveStartKey = undefined;
    do {
      const Response: QueryCommandOutput = await dynamoDBClient.send(new QueryCommand({
        TableName: Resource.QuillTable.name,
        IndexName: "GS1",
        KeyConditionExpression: "GS1PK = :GS1PK AND begins_with(GS1SK, :GS1SK)",
        ExclusiveStartKey,
        ExpressionAttributeValues: {
          ":GS1PK": `USER#${userID}`,
          ":GS1SK": `GAME#`
        }
      }));
      ExclusiveStartKey = Response.LastEvaluatedKey;
      if (Response.Items) {
        for (const Item of Response.Items) {
          this.seed(Item.Data.id, Item.Data);
          items.push(Item.Data);
        }
      }
    } while (ExclusiveStartKey !== undefined);
    return items;
  }
  async getByCharacterID(characterID: CharacterID): Promise<Game[]> {
    const items = [];
    let ExclusiveStartKey = undefined;
    do {
      const Response: QueryCommandOutput = await dynamoDBClient.send(new QueryCommand({
        TableName: Resource.QuillTable.name,
        IndexName: "GS1",
        KeyConditionExpression: "GS1PK = :GS1PK AND begins_with(GS1SK, :GS1SK)",
        ExclusiveStartKey,
        ExpressionAttributeValues: {
          ":GS1PK": `CHARACTER#${characterID}`,
          ":GS1SK": `GAME#`
        }
      }));
      ExclusiveStartKey = Response.LastEvaluatedKey;
      if (Response.Items) {
        for (const Item of Response.Items) {
          const game = await this.getByID(Item.GameID);
          if (game) items.push(game);
        }
      }
    } while (ExclusiveStartKey !== undefined);
    return items;
  }
}

function gameLoader(): GameLoader {
  return getLoader("GAME", () => new GameLoader());
}

function updateGame(value: Game) {
  if (value.revision === 0) {
    send({
      Put: {
        TableName: Resource.QuillTable.name,
        Item: {
          "PK": "GAME",
          "SK": `GAME#${value.id}`,
          "Revision": value.revision + 1,
          "GS1PK": `USER#${value.gameMasterID}`,
          "GS1SK": `GAME#${value.id}`,
          Data: {...value, revision: value.revision + 1}
        },
        ConditionExpression: "attribute_not_exists(PK) and attribute_not_exists(SK)"
      }
    });
  } else {
    send({
      Put: {
        TableName: Resource.QuillTable.name,
        Item: {
          "PK": "GAME",
          "SK": `GAME#${value.id}`,
          "Revision": value.revision + 1,
          "GS1PK": `USER#${value.gameMasterID}`,
          "GS1SK": `GAME#${value.id}`,
          Data: {...value, revision: value.revision + 1}
        },
        ConditionExpression: "Revision = :Revision",
        ExpressionAttributeValues: {
          ":Revision": value.revision
        }
      }
    });
  }
}

export const GameRepository = {
  applyToGame(initialValue: Game | undefined, operations: GameOperation[]): Result<Game, string> {
    const finalValue = operations.reduce((game, operation) => {
      return game.flatMap(game => GameReducer(game, operation));
    }, ValidResult.of(initialValue));
    if (!finalValue.valid) return finalValue;

    const metadata = getMetadata();
    updateGame(finalValue.value);
    gameLoader().seed(finalValue.value.id, {...finalValue.value, revision: finalValue.value.revision + 1});
    for (const oldCharacterID of initialValue?.characterIDs ?? []) {
      if (finalValue.value.characterIDs.includes(oldCharacterID)) continue;
      unassignCharacterFromGame(finalValue.value.id, oldCharacterID);
    }
    for (const newCharacterID of finalValue.value.characterIDs) {
      if (initialValue?.characterIDs.includes(newCharacterID)) continue;
      assignCharacterToGame(finalValue.value.id, newCharacterID);
    }
    addGameAuditLog(finalValue.value.id, finalValue.value.revision + 1, operations, metadata);
    return finalValue.flatMap(value => ValidResult.of({...value, revision: value.revision + 1}));
  },
  async getGameByID(gameID: GameID): Promise<Game> {
    const value = await gameLoader().getByID(gameID);
    if (value === undefined) throw new Error("Could not find Game");
    return value;
  },
  async getGamesByCharacterID(characterID: CharacterID): Promise<Game[]> {
    return gameLoader().getByCharacterID(characterID);
  },
  async getGamesByGameMasterID(userID: Snowflake): Promise<Game[]> {
    return gameLoader().getByGameMasterID(userID);
  }
} as const;
