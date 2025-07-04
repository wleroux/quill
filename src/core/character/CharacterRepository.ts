import {Resource} from "sst/resource";
import {CharacterID} from "@/model/character/CharacterID";
import {Character, INITIAL_CHARACTER} from "@/model/character/Character";
import {dynamoDBClient, getLoader, send} from "@/core/DynamoDBClient";
import {QueryCommand, QueryCommandOutput} from "@aws-sdk/lib-dynamodb";
import {QueueRepository} from "@/core/queue/QueueRepository";
import {Result, ValidResult} from "@/model/processor/Result";
import {CharacterCreationDecision} from "@/model/character/create/CharacterCreationDecision";
import {PlayerID} from "@/model/player/PlayerID";
import {getMetadata} from "@/core/RequestContext";
import {ulid} from "ulid";
import {retireProcessor} from "@/model/character/retire/RetireProcessor";
import {DefaultRetireChoice} from "@/model/character/retire/RetireChoice";
import {RetireDecision} from "@/model/character/retire/RetireDecision";
import {CharacterCreationChoice} from "@/model/character/create/CharacterCreationChoice";
import {characterCreationProcessor} from "@/model/character/create/CharacterCreationProcessor";
import {Metadata} from "next";
import {ProgressDecision} from "@/model/character/progress/ProgressDecision";
import {getProgressChoice, progressProcessor} from "@/model/character/progress/progressProcessor";

export type CreateCharacterOperation = {type: "create", data: {
  id: CharacterID;
  ownerID: PlayerID;
  decision: CharacterCreationDecision
}};
export type RetireCharacterOperation = {type: "retire", data: {}};
export type TrainCharacterOperation = {type: "train", data: ProgressDecision[]};

export type CharacterOperation =
  | CreateCharacterOperation
  | RetireCharacterOperation
  | TrainCharacterOperation;


export const CharacterReducer = (initialValue: Character | undefined, operation: CharacterOperation): Result<Character, string> => {
  if (initialValue === undefined) {
    switch (operation.type) {
      case "create": return ValidResult.of(INITIAL_CHARACTER(operation.data.id, operation.data.ownerID))
        .flatMap(value => characterCreationProcessor(value, CharacterCreationChoice, operation.data.decision));
    }
  } else {
    switch (operation.type) {
      case "train": {
        return operation.data.reduce(
          (result, decision) => result.flatMap(value => progressProcessor(value, getProgressChoice(value, decision), decision)),
          ValidResult.of(initialValue)
        ).mapError(_ => _.code);
      }
      case "retire": return retireProcessor(initialValue, DefaultRetireChoice, RetireDecision).mapError(_ => "Could not retire character.");
    }
  }
  throw new Error(`Unexpected Operation: ${JSON.stringify(operation)}`);
};

function addAuditLog(id: CharacterID, revision: number, data: any) {
  const Metadata = getMetadata();
  send({Put: {
    TableName: Resource.QuillTable.name,
    Item: {
      PK: `CHARACTER#${id}`,
      SK: `AUDIT#${revision}`,
      Data: data,
      Metadata
    },
    ConditionExpression: "attribute_not_exists(PK) and attribute_not_exists(SK)"
  }});
}
async function getCharacterAuditLogs(id: CharacterID) {
  const Response = await dynamoDBClient.send(new QueryCommand({
    TableName: Resource.QuillTable.name,
    KeyConditionExpression: "PK = :PK AND begins_with(SK, :SK)",
    ExpressionAttributeValues: {
      ":PK": `CHARACTER#${id}`,
      ":SK": "AUDIT#"
    }
  }));
  const logs = [];
  if (Response.Items) {
    for (const Item of Response.Items) {
      logs.push({
        revision: Number.parseInt(Item.SK.substring("AUDIT#".length)),
        metadata: Item.Metadata,
        operations: Item.Data
      });
    }
  }
  return logs;
}
function updateCharacter(value: Character): Character {
  if (value.revision === 0) {
    send({Put: {
      TableName: Resource.QuillTable.name,
      Item: {
        "PK": "CHARACTER",
        "SK": `CHARACTER#${value.id}`,
        "GS1PK": `OWNER#${value.ownerID}`,
        "GS1SK": `CHARACTER#${value.id}`,
        Revision: value.revision + 1,
        Data: {...value, revision: value.revision + 1},
      },
      ConditionExpression: "attribute_not_exists(PK) and attribute_not_exists(SK)"
    }});
  } else {
    send({Put: {
      TableName: Resource.QuillTable.name,
      Item: {
        "PK": "CHARACTER",
        "SK": `CHARACTER#${value.id}`,
        "GS1PK": `OWNER#${value.ownerID}`,
        "GS1SK": `CHARACTER#${value.id}`,
        Revision: value.revision + 1,
        Data: {...value, revision: value.revision + 1},
      },
      ConditionExpression: "Revision = :Revision",
      ExpressionAttributeValues: {
        ":Revision": value.revision
      }
    }});
  }
  return {...value, revision: value.revision + 1};
}


class CharacterLoader {
  private cache: {[characterID: CharacterID]: Character} = {};
  async get(id: CharacterID): Promise<Character> {
    if (this.cache[id]) return this.cache[id];

    const Response: QueryCommandOutput = await dynamoDBClient.send(new QueryCommand({
      TableName: Resource.QuillTable.name,
      KeyConditionExpression: "PK = :PK AND SK = :SK",
      ExpressionAttributeValues: {":PK": "CHARACTER", ":SK": `CHARACTER#${id}`}
    }));
    if (Response.Items) {
      this.cache[id] = Response.Items[0].Data;
      return this.cache[id];
    } else {
      throw new Error("Could not find Character");
    }
  }

  seed(id: CharacterID, value: Character) {
    this.cache[id] = value;
  }

  async getCharactersByOwnerID(userID: PlayerID) {
    const response = await dynamoDBClient.send(new QueryCommand({
      TableName: Resource.QuillTable.name,
      IndexName: "GS1",
      KeyConditionExpression: "GS1PK = :GS1PK AND begins_with(GS1SK, :GS1SK)",
      ExpressionAttributeValues: {
        ":GS1PK": `OWNER#${userID}`,
        ":GS1SK": `CHARACTER#`
      }
    }));
    if (!response.Items) return [];
    return response.Items.map((Item) => {
      const id = Item.Data.id;
      if (!this.cache[id]) this.cache[id] = Item.Data;
      return this.cache[id];
    });
  }

  async getAllCharacters() {
    const characters: Character[] = [];
    let ExclusiveStartKey = undefined;
    do {
      const Response: QueryCommandOutput = await dynamoDBClient.send(new QueryCommand({
        TableName: Resource.QuillTable.name,
        KeyConditionExpression: "PK = :PK",
        ExpressionAttributeValues: {
          ":PK": "CHARACTER"
        },
        ExclusiveStartKey
      }));
      ExclusiveStartKey = Response.LastEvaluatedKey;
      if (Response.Items) {
        characters.push(...Response.Items.map((Item) => {
          const id = Item.Data.id;
          if (!this.cache[id]) this.cache[id] = Item.Data;
          return this.cache[id];
        }));
      }
    } while (ExclusiveStartKey !== undefined);
    return characters;
  }
}

function characterLoader() {
  return getLoader("CHARACTER", () => new CharacterLoader());
}

export const CharacterRepository = {
  applyToCharacter(initialValue: Character | undefined, operations: CharacterOperation[]): Result<Character, string> {
    const finalValue = operations.reduce((initialValue, operation) => {
      return initialValue.flatMap(value => CharacterReducer(value, operation));
    }, ValidResult.of(initialValue));
    if (!finalValue.valid) return finalValue;

    updateCharacter(finalValue.value);
    addAuditLog(finalValue.value.id, finalValue.value.revision, operations);

    characterLoader().seed(finalValue.value.id, finalValue.value);

    // Owner Change
    if (initialValue?.ownerID !== undefined && finalValue.value.ownerID !== initialValue.ownerID) {
      QueueRepository.addQueueMessage(ulid(), {type: "refresh-discord-roles", data: {userID: initialValue.ownerID}});
    }
    // Owner Change / Retirement change
    if (initialValue?.ownerID !== finalValue.value.ownerID || initialValue?.retired !== finalValue.value.retired) {
      QueueRepository.addQueueMessage(ulid(), {type: "refresh-discord-roles", data: {userID: finalValue.value.ownerID}});
    }
    return finalValue;
  },
  async getCharactersByUserID(userID: PlayerID): Promise<Character[]> {
    return characterLoader().getCharactersByOwnerID(userID);
  },
  async getCharacterByID(characterID: CharacterID): Promise<Character> {
    return characterLoader().get(characterID);
  },
  async getAllCharacters(): Promise<Character[]> {
    return characterLoader().getAllCharacters();
  },
  async getCharacterAuditLogs(characterID: CharacterID): Promise<{revision: number, metadata: Metadata, operations: CharacterOperation[]}[]> {
    return getCharacterAuditLogs(characterID);
  },
  async refreshCharacter(value: Character) {
    send({Put: {
      TableName: Resource.QuillTable.name,
      Item: {
        "PK": "CHARACTER",
        "SK": `CHARACTER#${value.id}`,
        "GS1PK": `OWNER#${value.ownerID}`,
        "GS1SK": `CHARACTER#${value.id}`,
        Revision: value.revision,
        Data: value
      },
      ConditionExpression: "Revision = :Revision",
      ExpressionAttributeValues: {
        ":Revision": value.revision
      }
    }});
  }
} as const;
