import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";

const client = DynamoDBDocumentClient.from(new DynamoDBClient({}));
const TABLE_NAME = process.env.TABLE_NAME;
const COUNTER_ID = "portfolio";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

export const handler = async (event) => {
  const method = event.requestContext?.http?.method ?? event.httpMethod;

  if (method === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  try {
    if (method === "POST") {
      const result = await client.send(
        new UpdateCommand({
          TableName: TABLE_NAME,
          Key: { id: COUNTER_ID },
          UpdateExpression: "SET #count = if_not_exists(#count, :zero) + :inc",
          ExpressionAttributeNames: { "#count": "count" },
          ExpressionAttributeValues: { ":zero": 0, ":inc": 1 },
          ReturnValues: "UPDATED_NEW",
        }),
      );

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ count: result.Attributes?.count ?? 0 }),
      };
    }

    const result = await client.send(
      new GetCommand({
        TableName: TABLE_NAME,
        Key: { id: COUNTER_ID },
      }),
    );

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ count: result.Item?.count ?? 0 }),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to update view counter" }),
    };
  }
};
