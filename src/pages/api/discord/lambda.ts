import {withMetadata} from "@/core/RequestContext";
import {rootCommand} from "@/pages/api/discord/RootCommand";
import {APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2} from "aws-lambda";
import {verifyKey} from "discord-interactions";
import {APIInteraction} from "discord-api-types/v10";
import {interactionToString} from "./interactionToString";
import {Resource} from "sst/resource";
import {ulid} from "ulid";


/**
 * This handler is only for development mode. In production, we will be using next.js handler. This handler allows us to test integrations using Discord's Integration Endpoint,
 * however it takes a significant amount of time for lambdas to boot up, and terminates when a request is completed (preventing things like queued API Responses / Inline Queue Processor)
 */
export async function handler(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyStructuredResultV2> {
  // Verify Key
  if (event.requestContext.http.method !== "POST" || event.body === undefined) {
    console.error("Bad Request");
    return ({statusCode: 401, body: "Bad request signature"});
  }
  const signature: string = event.headers["x-signature-ed25519"] ?? "";
  const timestamp: string = event.headers['x-signature-timestamp'] ?? "";
  if (!await verifyKey(event.body, signature, timestamp, Resource.DiscordPublicKey.value)) {
    console.error("Bad Request Signature");
    return ({statusCode: 401, body: `Bad request signature`});
  }

  // Process Message
  const request = (JSON.parse(event.body) || {}) as APIInteraction;
  const requestID = ulid();
  return {
    statusCode: 200,
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(await withMetadata({
      requestID,
      workflow: interactionToString(request),
      userID: request.user?.id!,
    }, () => rootCommand.handle(request)))
  };
}