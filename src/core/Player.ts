import {Snowflake} from "discord-api-types/v10";
import {botDiscordClient} from "@/lib/discord/BotDiscordClient";
import {Resource} from "sst/resource";
import {CharacterRepository} from "@/core/character/CharacterRepository";
import {getCurrentLevel} from "@/model/character/level/LevelChoice";

const MANAGED_ROLES = [
  "Player", "Initiate", "Adept", "Vanguard", "Exemplar", "Harbinger"
];

export async function refreshDiscordRoles(userID: Snowflake) {
  const characters = await CharacterRepository.getCharactersByUserID(userID);

  // Calculate Necessary Roles
  const roles = new Set();
  if (characters.length > 0)
    roles.add("Player");
  for (const character of characters) {
    if (character.retired) continue;

    const level = getCurrentLevel(character);
    if (level <= 4) roles.add("Initiate");
    else if (level <= 8) roles.add("Adept");
    else if (level <= 12) roles.add("Vanguard");
    else if (level <= 16) roles.add("Exemplar");
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
