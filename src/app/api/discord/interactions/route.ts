import "server-only";
import {APIInteraction} from "discord-api-types/v10";
import {verifyKey} from "discord-interactions";
import {Resource} from "sst/resource";
import {ulid} from "ulid";
import {withMetadata} from "@/core/RequestContext";
import {interactionToString} from "@/lib/discord/interactionToString";
import {rootCommand} from "@/lib/discord/RootCommand";

export async function POST(req: Request): Promise<Response> {
  // Verify Key
  const body = await req.text();
  if (body === undefined) return new Response("Base request", {status: 401});
  const signature: string = req.headers.get("x-signature-ed25519") ?? "";
  const timestamp: string = req.headers.get("x-signature-timestamp") ?? "";
  if (!await verifyKey(body, signature, timestamp, Resource.DiscordPublicKey.value)) {
    return new Response("Bad request signature", {status: 401});
  }

  // Process Message
  const request = (JSON.parse(body) || {}) as APIInteraction;
  const requestID = ulid();
  return Response.json(
    await withMetadata({
      requestID,
      workflow: interactionToString(request),
      userID: request.member?.user.id ?? request.user?.id ?? "0000"
    }, () => rootCommand.handle(request))
  );
}
