import {QueueMessageID} from "@/model/queue/QueueMessageID";
import {QueueMessage} from "@/model/queue/QueueMessage";
import {dynamoDBClient, postCommit, send} from "@/core/DynamoDBClient";
import {queueProcessor} from "@/lib/queue/QueueProcessor";
import {Resource} from "sst/resource";
import {QueryCommand, QueryCommandOutput} from "@aws-sdk/lib-dynamodb";

export const QueueRepository = {
  addQueueMessage(messageID: QueueMessageID, message: QueueMessage) {
    send({Put: {
      TableName: Resource.QuillTable.name,
      Item: {
        PK: "QUEUE",
        SK: `MESSAGE#${messageID}`,
        MessageID: messageID,
        Data: message
      },
      ConditionExpression: "attribute_not_exists(PK) and attribute_not_exists(SK)"
    }});
    postCommit(() => queueProcessor.wake());
  },
  async getQueueMessages(): Promise<{[messageID: QueueMessageID]: QueueMessage}> {
    const messages: {[messageID: QueueMessageID]: QueueMessage} = {};
    let ExclusiveStartKey = undefined;
    do {
      const Response: QueryCommandOutput = await dynamoDBClient.send(new QueryCommand({
        TableName: Resource.QuillTable.name,
        KeyConditionExpression: "PK = :PK AND begins_with(SK, :SK)",
        ExpressionAttributeValues: {
          ":PK": "QUEUE",
          ":SK": "MESSAGE#"
        },
        ExclusiveStartKey
      }));
      ExclusiveStartKey = Response.LastEvaluatedKey;
      if (Response.Items) {
        for (const Item of Response.Items) {
          messages[Item.MessageID] = Item.Data;
        }
      }
    } while (ExclusiveStartKey !== undefined)
    return messages;
  },
  async markMessageAsProcessed(messageID: QueueMessageID) {
    send({Delete: {
      TableName: Resource.QuillTable.name,
      Key: {
        PK: "QUEUE",
        SK: `MESSAGE#${messageID}`
      },
    }});
  }
} as const;
