import "server-only";
import {Resource} from "sst/resource";
import {rootCommand} from "@/lib/discord/RootCommand";
import {isAdministrator} from "@/lib/authentication/isAuthenticated";
import {botDiscordClient} from "@/lib/discord/BotDiscordClient";

export async function POST(): Promise<Response> {
  if (!(await isAdministrator())) return new Response("Unauthorized", {status: 403});
  console.log("Updating Discord Commands");
  await botDiscordClient.createGuildApplicationCommands(Resource.DiscordClientID.value, Resource.DiscordGuildID.value, rootCommand.getMetadata());
  console.log("Updated Discord Command");
  return new Response(undefined, {status: 200});
}
