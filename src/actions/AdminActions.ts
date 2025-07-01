"use server";
import {isAdministrator} from "@/lib/authentication/isAuthenticated";
import {botDiscordClient} from "@/lib/discord/BotDiscordClient";
import {rootCommand} from "@/lib/discord/RootCommand";
import {Resource} from "sst/resource";
import {token} from "./token";

export async function refreshDiscordCommandsAction() {
  if (!(await isAdministrator(await token()))) return false;
  console.log("Updating Discord Commands");
  await botDiscordClient.createGuildApplicationCommands(Resource.DiscordClientID.value, Resource.DiscordGuildID.value, rootCommand.getMetadata());
  console.log("Updated Discord Command");
}
