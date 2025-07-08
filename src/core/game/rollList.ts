import {APIComponentInContainer, ButtonStyle, ComponentType, MessageFlags, Snowflake} from "discord-api-types/v10";
import {botDiscordClient} from "@/lib/discord/BotDiscordClient";
import {PlayerID} from "@/model/player/PlayerID";
import {GameList} from "@/core/game/pick/GameList";
import {getValidLists} from "@/core/game/pick/getValidLists";
import {ErrorResult, Result, ValidResult} from "@/model/processor/Result";
import {rollGameList} from "@/core/game/pick/rollGameList";
import {Resource} from "sst/resource";
import {getGameRangeDisplay} from "./pick/PickIteration";

export async function rollList(gameMasterID: PlayerID, channelID: Snowflake, minPlayers: number, maxPlayers: number): Promise<Result<GameList, string>> {
  const channel = await botDiscordClient.getChannel(channelID);
  const validLists = (await getValidLists(channelID, minPlayers, maxPlayers))
    .filter(list => list.listMakerID !== gameMasterID);
  if (validLists.length === 0) return ErrorResult.of(`There are no valid lists.`);

  const [iterations, pickedList] = await rollGameList(validLists);

  const iterationComponents: APIComponentInContainer[] = [];
  for (let index = 0; index < iterations.length; index++) {
    if (index !== 0) iterationComponents.push({type: ComponentType.Separator});
    const iteration = iterations[index];
    iterationComponents.push({
      type: ComponentType.TextDisplay,
      content:
        `## Round ${index + 1} (${iteration.lists.length} lists): Rolled ${iteration.roll + 1}\n` +
        `### Players\n` +
        (Object.keys(iteration.gameRanges)
          .map(playerID => `- <@${playerID}> (Score ${iteration.playerScores[playerID]} ⇒ ${getGameRangeDisplay(iteration.gameRanges[playerID])})`)
          .join("\n")) +
        "\n" +
        `### Player Picked: <@${iteration.selectedPlayer}> (Score ${iteration.playerScores[iteration.selectedPlayer]} ⇒ ${getGameRangeDisplay(iteration.gameRanges[iteration.selectedPlayer])})`
    });
  }

  const winner = await botDiscordClient.getGuildMember(Resource.DiscordGuildID.value, pickedList.listMakerID);

  await botDiscordClient.createMessage(channelID, {
    components: [
      {type: ComponentType.Container, components: iterationComponents},
      {
        type: ComponentType.Container,
        components: [{
          type: ComponentType.TextDisplay,
          content:
            `# Winning List\n` +
            `**[${winner.nick ?? winner.user.username}'s ${pickedList.tier} List](https://discord.com/channels/${Resource.DiscordGuildID.value}/${channelID}/${pickedList.messageID})**\n` +
            pickedList.characters.map(character => `- <@${character.ownerID}>'s ${character.name}`).join("\n")
        }, {
          type: ComponentType.ActionRow,
          components: [{
            type: ComponentType.Button,
            style: ButtonStyle.Primary,
            label: "Add Players to Game",
            custom_id: `add-characters-to-game:${gameMasterID}:${channelID}:${pickedList.messageID}`
          }]
        }]
      }
    ],
    allowed_mentions: {
      users: pickedList.characters.map(character => character.ownerID)
    },
    flags: MessageFlags.IsComponentsV2
  });

  const match = channel.name!.match(/(?:[alse]+)-(.*)/);
  if (match) {
    await botDiscordClient.modifyChannel(channel.id, {
      name: `$rename p-${match[1]}`
    });
  }
  return ValidResult.of(pickedList);
}