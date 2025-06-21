import "server-only";
import {APIInteraction, InteractionResponseType, InteractionType, MessageFlags} from "discord-api-types/v10";
import {verifyKey} from "discord-interactions";
import {NextApiRequest, NextApiResponse} from "next";
import {Resource} from "sst/resource";
import {IncomingHttpHeaders} from "node:http";
import {buffer} from "node:stream/consumers";

export const config = {
  api: {
    bodyParser: false
  },
}


function discordInteraction(request: APIInteraction) {
  throw new Error("Invalid Request");
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
  if (!verifyKey(body, signature, timestamp, Resource.DiscordPublicKey.value)) {
    res
      .status(401)
      .send(`Bad request signature: ${body}`);
    return;
  }

  // Process Message
  const content = (JSON.parse(body) || {}) as APIInteraction;

  // Respond to Pings
  if (content.type === InteractionType.Ping) {
    res
      .status(200)
      .setHeader("content-type", "application/json")
      .send(JSON.stringify({type: InteractionResponseType.Pong}));
    return;
  }

  try {
    const response = discordInteraction(content)
    res
      .status(200)
      .setHeader("content-type", "application/json")
      .send(JSON.stringify(response))
  } catch (error) {
    console.error(error);
    res
      .status(200)
      .setHeader("content-type", "application/json")
      .send(JSON.stringify({
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
          embeds: [{
            title: "Internal Server Error",
            description: "An unexpected error with the bot has occurred and an admin has been notified.",
            color: 0xeb7968,
          }],
          flags: MessageFlags.Ephemeral
        }
      }));
  }
}
