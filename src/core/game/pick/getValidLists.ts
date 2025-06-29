import {Snowflake} from "discord-api-types/v10";
import {botDiscordClient} from "@/lib/discord/BotDiscordClient";
import {getList} from "@/core/game/pick/getList";

export async function getValidLists(channelID: Snowflake, minPlayers: number, maxPlayers: number) {
  const messages = await botDiscordClient.getChannelMessages(channelID);
  const lists = await Promise.all(messages.map(message => getList(message, minPlayers, maxPlayers)));
  return lists.flatMap(result => {
    if (!result.valid) return [];
    if (result.value === undefined) return [];
    return [result.value];
  });
}