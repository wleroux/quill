import "server-only";
import {APIInteraction} from "discord-api-types/v10";
import {verifyKey} from "discord-interactions";
import {NextApiRequest, NextApiResponse} from "next";
import {Resource} from "sst/resource";
import {IncomingHttpHeaders} from "node:http";
import {buffer} from "node:stream/consumers";
import {ulid} from "ulid";
import {withMetadata} from "@/core/RequestContext";
import {interactionToString} from "@/lib/discord/interactionToString";
import {rootCommand} from "@/lib/discord/RootCommand";

export const config = {
  api: {
    bodyParser: false
  },
}

function getHeader(value: IncomingHttpHeaders, key: string, defaultValue: string) {
  const headerValue = value[key];
  if (Array.isArray(headerValue)) return headerValue.join(",");
  return headerValue ?? defaultValue;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Verify Key
  const body = (await buffer(req)).toString();
  if (req.method !== "POST" || body === undefined) {
    res
      .status(401)
      .send(`Bad request signature`);
    return;
  }
  const signature: string = getHeader(req.headers, "x-signature-ed25519", "");
  const timestamp: string = getHeader(req.headers, 'x-signature-timestamp', "");
  if (!await verifyKey(body, signature, timestamp, Resource.DiscordPublicKey.value)) {
    res
      .status(401)
      .send(`Bad request signature: ${body}`);
    return;
  }

  // Process Message
  const request = (JSON.parse(body) || {}) as APIInteraction;
  const requestID = ulid();
  res
    .status(200)
    .setHeader("content-type", "application/json")
    .send(JSON.stringify(await withMetadata({
      requestID,
      workflow: interactionToString(request),
      userID: request.member?.user.id ?? request.user?.id ?? "0000"
    }, () => rootCommand.handle(request))))
}
