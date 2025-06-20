import {Snowflake} from "discord-api-types/v10";
import {getCharacterByID, getCharacterIDsByUserID} from "@/core/Character";
import {botDiscordClient} from "@/lib/discord/BotDiscordClient";
import {Resource} from "sst/resource";

const MANAGED_ROLES = [
  "Player", "Initiate", "Adept", "Vanguard", "Exemplar", "Harbinger"
];

export async function refreshDiscordRoles(userID: Snowflake) {
  const characterIDs = await getCharacterIDsByUserID(userID);
  console.log(`Getting Characters: ${characterIDs}`)
  const characters = Object.fromEntries(await Promise.all(
    characterIDs.map(async (characterID) => [characterID, await getCharacterByID(characterID)])
  ));

  // Calculate Necessary Roles
  const roles = new Set();
  if (characterIDs.length > 0)
    roles.add("Player");
  for (const characterID of characterIDs) {
    const character = characters[characterID];
    if (character.retired) continue;

    if (character.level <= 4) roles.add("Initiate");
    else if (character.level <= 8) roles.add("Adept");
    else if (character.level <= 12) roles.add("Vanguard");
    else if (character.level <= 16) roles.add("Exemplar");
    else roles.add("Harbinger");
  }

  // Synchronize Roles
  const discordRoles = await botDiscordClient.getGuildRoles(Resource.DiscordGuildID.value);
  const managedRoleIDs = Object.fromEntries(MANAGED_ROLES.map(name => [name, discordRoles.find(role => role.name === name)!.id]));

  const guildMember = await botDiscordClient.getGuildMember(Resource.DiscordGuildID.value, userID);
  for (const name of MANAGED_ROLES) {
    const roleID = managedRoleIDs[name];
    const hasRole = guildMember.roles.includes(roleID);
    const needsRole = roles.has(name);

    if (hasRole && !needsRole) {
      await botDiscordClient.removeGuildMemberRole(Resource.DiscordGuildID.value, userID, roleID);
    } else if (!hasRole && needsRole) {
      await botDiscordClient.addGuildMemberRole(Resource.DiscordGuildID.value, userID, roleID);
    }
  }
}
