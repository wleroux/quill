"use server";
import "server-only";
import {botDiscordClient} from "@/lib/discord/BotDiscordClient";
import {Snowflake} from "discord-api-types/v10";
import {Resource} from "sst/resource";

export async function hasGlobalWritePermissions(userID: Snowflake) {
  const roles = (await botDiscordClient.getGuildRoles(Resource.DiscordGuildID.value)).filter(role => role.name === "Scribe" || role.name === "Moderator" || role.name === "Admin").map(role => role.id);
  const member = await botDiscordClient.getGuildMember(Resource.DiscordGuildID.value, userID);
  if (!member.roles.some(role => roles.includes(role))) {
    return false;
  }
  return true;
}
