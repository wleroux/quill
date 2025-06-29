import {Snowflake} from "discord-api-types/v10";
import {Resource} from "sst/resource";
import {GameID} from "@/model/game/GameID";
import {dynamoDBClient, send} from "@/core/DynamoDBClient";
import {QueryCommand} from "@aws-sdk/lib-dynamodb";

export const UserRepository = {
  async getActiveGameID(gameMasterID: Snowflake): Promise<GameID | undefined> {
    const Response = await dynamoDBClient.send(new QueryCommand({
      TableName: Resource.QuillTable.name,
      KeyConditionExpression: "PK = :PK AND SK = :SK",
      ExpressionAttributeValues: {
        ":PK": `USER#${gameMasterID}`,
        ":SK": "GAME"
      }
    }));

    if (Response.Items) {
      if (Response.Items.length > 0) {
        return Response.Items[0].GameID;
      }
    }
    return undefined;
  },
  setActiveGameID(gameMasterID: Snowflake, gameID?: GameID) {
    if (gameID !== undefined) {
      send({Put: {
          TableName: Resource.QuillTable.name,
          Item: {
            PK: `USER#${gameMasterID}`,
            SK: "GAME",
            UserID: gameMasterID,
            GameID: gameID
          },
          ConditionExpression: "attribute_not_exists(PK) and attribute_not_exists(SK)"
        }});
    } else {
      send({Delete: {
        TableName: Resource.QuillTable.name,
        Key: {
          PK: `USER#${gameMasterID}`,
          SK: "GAME"
        },
        ConditionExpression: "attribute_exists(PK) and attribute_exists(SK)"
      }});
    }
  }
} as const;
