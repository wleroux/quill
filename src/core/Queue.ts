import {client} from "@/core/client";
import {QueueMessage} from "@/model/queue/QueueMessage";
import {QueueMessageID} from "@/model/queue/QueueMessageID";
import {DeleteCommand, QueryCommand, QueryCommandOutput, TransactWriteCommandInput} from "@aws-sdk/lib-dynamodb";
import {Resource} from "sst/resource";

export function ADD_QUEUE_MESSAGE(messageID: QueueMessageID, message: QueueMessage): Exclude<TransactWriteCommandInput["TransactItems"], undefined> {
  return [
    {Put: {
      TableName: Resource.QuillTable.name,
      Item: {
        PK: "QUEUE",
        SK: `MESSAGE#${messageID}`,
        MessageID: messageID,
        Data: message
      },
      ConditionExpression: "attribute_not_exists(PK) and attribute_not_exists(SK)"
    }}
  ];
}

export async function getQueueMessages(): Promise<{[messageID: QueueMessageID]: QueueMessage}> {
  const messages: {[messageID: QueueMessageID]: QueueMessage} = {};
  let ExclusiveStartKey = undefined;
  do {
    const Response: QueryCommandOutput = await client.send(new QueryCommand({
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
}

export async function markMessageAsProcessed(messageID: QueueMessageID) {
  await client.send(new DeleteCommand({
    TableName: Resource.QuillTable.name,
    Key: {
      PK: "QUEUE",
      SK: `MESSAGE#${messageID}`
    },
  }))
}