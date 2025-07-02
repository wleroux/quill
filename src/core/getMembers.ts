import {botDiscordClient} from "@/lib/discord/BotDiscordClient";
import {APIGuildMember} from "discord-api-types/v10";
import {Resource} from "sst/resource";

export async function getAllMembers() {
  const result: APIGuildMember[] = [];
  let lastMember = undefined;
  do {
    const guildMembers = await botDiscordClient.getGuildMembers(Resource.DiscordGuildID.value, {
      limit: 1000,
      after: lastMember
    });
    result.push(...guildMembers);
    if (guildMembers.length < 1000) break;
    lastMember = guildMembers[guildMembers.length - 1].user.id;
  } while (true);
  return result;
}
