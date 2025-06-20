"use server";
import {Snowflake} from "discord-api-types/v10";
import "server-only";
import {client} from "@/core/client";
import {QueryCommand, QueryCommandOutput, TransactWriteCommand, TransactWriteCommandInput} from "@aws-sdk/lib-dynamodb";
import {Resource} from "sst/resource";
import {CharacterID} from "@/model/character/CharacterID";
import {Character, INITIAL_CHARACTER} from "@/model/character/Character";
import {CharacterCreationDecision} from "@/model/character/create/CharacterCreationDecision";
import {characterCreationProcessor} from "@/model/character/create/CharacterCreationProcessor";
import {CharacterCreationChoice} from "@/model/character/create/CharacterCreationChoice";
import {ulid} from "ulid";
import {hasGlobalWritePermissions} from "@/core/Permission";
import {retireProcessor} from "@/model/character/retire/RetireProcessor";
import {RetireChoice} from "@/model/character/retire/RetireChoice";
import {RetireDecision} from "@/model/character/retire/RetireDecision";
import {ADD_QUEUE_MESSAGE} from "@/core/Queue";
import {queueProcessor} from "@/lib/queue/QueueProcessor";

function CHARACTER_METADATA(characterID: CharacterID, value: Character): Exclude<TransactWriteCommandInput["TransactItems"], undefined> {
  return [{
    Put: {
      TableName: Resource.QuillTable.name,
      Item: {
        "PK": "CHARACTER",
        "SK": `CHARACTER#${characterID}`,
        CharacterID: characterID,
        Data: value,
      }
    }
  }];
}

function CHARACTER_AUDIT_LOG(id: string, characterID: CharacterID, Action: string, Data: any): Exclude<TransactWriteCommandInput["TransactItems"], undefined> {
  return [{
    Put: {
      TableName: Resource.QuillTable.name,
      Item: {
        PK: `CHARACTER#${characterID}`,
        SK: `AUDIT#${id}`,
        Action,
        Data
      },
      ConditionExpression: "attribute_not_exists(PK) and attribute_not_exists(SK)"
    }
  }];
}
function ASSIGN_CHARACTER_TO_USER(characterID: CharacterID, userID: Snowflake): Exclude<TransactWriteCommandInput["TransactItems"], undefined>  {
  return [{
    Put: {
      TableName: Resource.QuillTable.name,
      Item: {
        PK: `USER#${userID}`,
        SK: `CHARACTER#${characterID}`,
        UserID: userID,
        CharacterID: characterID,
        GS1PK: `CHARACTER#${characterID}`,
        GS1SK: `USER#${userID}`
      },
      ConditionExpression: "attribute_not_exists(PK) AND attribute_not_exists(SK)"
    }
  }];
}

export async function createCharacter(userID: Snowflake, decision: CharacterCreationDecision) {
  const characterIDs = await getCharacterIDsByUserID(userID);
  const characters = await Promise.all(characterIDs.map(characterID => getCharacterByID(characterID)))
  if (characters.some(character => !character.retired)) {
    throw new Error("Only one non-retired character allowed");
  }

  const result = characterCreationProcessor(INITIAL_CHARACTER, CharacterCreationChoice, decision);
  if (!result.valid) throw Error("Character is invalid.");
  const characterID = ulid();
  const now = new Date().toISOString();
  await client.send(new TransactWriteCommand({
    TransactItems: [
      ...CHARACTER_METADATA(characterID, result.value),
      ...CHARACTER_AUDIT_LOG(now, characterID, "CREATE-CHARACTER", decision),
      ...ASSIGN_CHARACTER_TO_USER(characterID, userID),
      ...ADD_QUEUE_MESSAGE(ulid(), {type: "refresh-discord-roles", data: {userID}})
    ]
  }));
  queueProcessor.wake();
}

export async function retireCharacter(characterID: CharacterID, authorizingUserID: Snowflake) {
  // Check Permissions
  const characterIDs = await getCharacterIDsByUserID(authorizingUserID);
  const isOwner = characterIDs.includes(characterID);
  if (!isOwner && !await hasGlobalWritePermissions(authorizingUserID)) {
    return false;
  }

  // Retire Character
  const character = await getCharacterByID(characterID);
  const result = retireProcessor(character, RetireChoice, RetireDecision);
  if (result.valid) {
    const now = new Date().toISOString();
    const userIDs = await getUserIDsByCharacterID(characterID);
    await client.send(new TransactWriteCommand({
      TransactItems: [
        ...CHARACTER_METADATA(characterID, result.value),
        ...CHARACTER_AUDIT_LOG(now, characterID, "RETIRE", RetireDecision),
        ...userIDs.flatMap(userID => ADD_QUEUE_MESSAGE(ulid(), {type: "refresh-discord-roles", data: {userID}}))
      ]
    }));
    queueProcessor.wake();
  }
}

export async function getAllCharacters(): Promise<{[characterID: CharacterID]: Character}> {
  const characters: {[characterID: CharacterID]: Character} = {};
  let ExclusiveStartKey = undefined;
  do {
    const Response: QueryCommandOutput = await client.send(new QueryCommand({
      TableName: Resource.QuillTable.name,
      KeyConditionExpression: "PK = :PK",
      ExpressionAttributeValues: {
        ":PK": "CHARACTER"
      },
      ExclusiveStartKey
    }));
    ExclusiveStartKey = Response.LastEvaluatedKey;
    if (Response.Items) {
      for (const Item of Response.Items) {
        characters[Item.CharacterID] = Item.Data;
      }
    }
  } while (ExclusiveStartKey !== undefined);
  return characters;
}

export async function getCharacterByID(characterID: CharacterID) {
  const Response: QueryCommandOutput = await client.send(new QueryCommand({
    TableName: Resource.QuillTable.name,
    KeyConditionExpression: "PK = :PK AND SK = :SK",
    ExpressionAttributeValues: {
      ":PK": "CHARACTER",
      ":SK": `CHARACTER#${characterID}`
    }
  }));
  if (Response.Items) {
    return Response.Items[0].Data;
  } else {
    return undefined;
  }
}

export async function getCharacterIDsByUserID(snowflake: Snowflake): Promise<CharacterID[]> {
  const response = await client.send(new QueryCommand({
    TableName: Resource.QuillTable.name,
    KeyConditionExpression: "PK = :PK AND begins_with(SK, :SK)",
    ExpressionAttributeValues: {
      ":PK": `USER#${snowflake}`,
      ":SK": `CHARACTER#`
    }
  }));

  if (!response.Items) return [];
  return response.Items.map((Item) => Item.CharacterID);
}

export async function getUserIDsByCharacterID(characterID: CharacterID) {
  let ExclusiveStartKey = undefined;
  const userIDs = [];
  do {
    const Response: QueryCommandOutput = await client.send(new QueryCommand({
      TableName: Resource.QuillTable.name,
      IndexName: "GS1",
      KeyConditionExpression: "GS1PK = :GS1PK AND begins_with(GS1SK, :GS1SK)",
      ExpressionAttributeValues: {
        ":GS1PK": `CHARACTER#${characterID}`,
        ":GS1SK": "USER#"
      },
      ExclusiveStartKey
    }));
    ExclusiveStartKey = Response.LastEvaluatedKey;
    if (Response.Items) {
      for (const Item of Response.Items) {
        userIDs.push(Item.UserID);
      }
    }
  } while (ExclusiveStartKey !== undefined);
  return userIDs;
}