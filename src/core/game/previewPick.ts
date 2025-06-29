import {ButtonStyle, ChannelType, ComponentType, MessageFlags, Snowflake} from "discord-api-types/v10";
import {botDiscordClient} from "@/lib/discord/BotDiscordClient";
import {ErrorResult, Result, ValidResult} from "@/model/processor/Result";
import {PlayerID} from "@/model/player/PlayerID";
import {GameList} from "./pick/GameList";
import {getGameScore} from "./pick/getGameScore";
import {getGameScoreWeight} from "./pick/getGameScoreWeight";
import {getGameListChance} from "@/core/game/pick/getChanceOfPick";
import {getValidLists} from "@/core/game/pick/getValidLists";


export async function createPickList(channelID: Snowflake, gameMasterID: Snowflake, options?: {
  minPlayers?: number,
  maxPlayers?: number
}): Promise<Result<GameList[], string>> {
  // VALIDATE CHANNEL
  const channel = await botDiscordClient.getChannel(channelID);
  if (channel?.type !== ChannelType.GuildText)
      return ErrorResult.of("Pick List must be in a text channel");
  const parentChannel = (channel.parent_id !== null && channel.parent_id !== undefined)
    ? await botDiscordClient.getChannel(channel.parent_id)
    : undefined;
  if (parentChannel?.name !== "Upcoming Games")
    return ErrorResult.of("Pick List must be in the Upcoming Games category");

  // GET VALID LISTS
  const validLists = await getValidLists(channelID, options?.minPlayers ?? 3, options?.maxPlayers ?? 6);

  // Calculate Individual Odds
  const playerIDs: PlayerID[] = validLists.flatMap(list => list.characters).map(character => character.ownerID).reduce((list, a) => {
    if (list.includes(a)) return list;
    list.push(a);
    return list;
  }, [] as PlayerID[]);
  const playerGameScores: {[playerID: PlayerID]: number} = Object.fromEntries(
    await Promise.all(playerIDs.map(async (playerID) => [playerID, await getGameScore(playerID)]))
  );
  const totalWeight = playerIDs.map(playerID => getGameScoreWeight(playerGameScores[playerID])).reduce((sum, a) => sum + a, 0);
  const playerChances: Map<PlayerID, number> = new Map(await Promise.all(
    playerIDs.map(async (playerID): Promise<[PlayerID, number]> => {
      const weight = getGameScoreWeight(playerGameScores[playerID]) / totalWeight;
      return [playerID, weight];
    })
  ));

  // Calculate Game Odds
  const gameChances: Map<GameList, number> = new Map(await Promise.all(
    validLists.map(async (list): Promise<[GameList, number]> => {
      const weight = await getGameListChance(list, validLists, []);
      return [list, weight];
    })
  ));

  // POST LIST PICK PREVIEW
  await botDiscordClient.createMessage(channelID, {
    components: [
      {
        type: ComponentType.Container,
        components: [{
          type: ComponentType.TextDisplay,
          content:
              `# List Pick Preview\n`+
              `**DM**: <@${gameMasterID}>\n`
        }, {
          type: ComponentType.Separator,
        }, {
          type: ComponentType.TextDisplay,
          content:
            `## Players\n`+
            playerIDs.map(playerID => `- <@${playerID}> (Score ${playerGameScores[playerID]} ⇒ ${Math.round(playerChances.get(playerID)!*10000)/100}%)`).join("\n")
        }, {
          type: ComponentType.Separator,
        }, {
          type: ComponentType.TextDisplay,
          content:
            `## Lists\n`+
            validLists.map(list => `- <@${list.listMakerID}> (${Math.round(gameChances.get(list)!*10000)/100}%)`).join("\n")
        }]
      },
      {
        type: ComponentType.ActionRow,
        components: [
          {type: ComponentType.Button, label: "Roll for List", style: ButtonStyle.Primary, custom_id: `pick:${channelID}:${gameMasterID}:${options?.minPlayers ?? 3}:${options?.maxPlayers ?? 6}`}
        ]
      }
    ],
    flags: MessageFlags.IsComponentsV2
  });

  // RETURN VALID LISTS
  return ValidResult.of(validLists);
}
