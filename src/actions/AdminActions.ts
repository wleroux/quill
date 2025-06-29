"use server";
import {isAdministrator} from "@/lib/authentication/isAuthenticated";
import {botDiscordClient} from "@/lib/discord/BotDiscordClient";
import {Resource} from "sst/resource";
import {rootCommand} from "@/pages/api/discord/RootCommand";

export async function refreshDiscordCommandsAction() {
  if (!(await isAdministrator())) return false;
  console.log("Updating Discord Commands");
  await botDiscordClient.createGuildApplicationCommands(Resource.DiscordClientID.value, Resource.DiscordGuildID.value, rootCommand.getMetadata());
  console.log("Updated Discord Command");
}
