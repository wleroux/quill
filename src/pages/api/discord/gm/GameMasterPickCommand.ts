import {NumberCommandOption, SubcommandHandler} from "@/pages/api/discord/SubcommandHandler";
import {createPickList} from "@/core/game/previewPick";
import {userErrorMessage} from "@/pages/api/discord/message/userErrorMessage";
import {simpleEmbedMessage} from "@/pages/api/discord/message/simpleEmbedMessage";

const MIN_PLAYERS = new NumberCommandOption("min-players", "Minimum number of players (default: 3)", {
  // min: 3,
  max: 6
});
const MAX_PLAYERS = new NumberCommandOption("max-players", "Maximum number of players (default: 6)", {
  min: 3,
  max: 6
});

export const gameMasterPickCommand = new SubcommandHandler(
  "pick",
  "Picks a list for a game",
  [MIN_PLAYERS, MAX_PLAYERS],
  async (request, context) => {
    const userID = context.member!.user.id;
    const channelID = context.channel_id!;
    const minPlayers = Math.max(3, MIN_PLAYERS.get(request, () => 3));
    const maxPlayers = Math.min(MAX_PLAYERS.get(request, () => 6), 6);
    const result = await createPickList(channelID, userID, {minPlayers, maxPlayers});
    if (!result.valid) return userErrorMessage("Cannot Pick List", result.error, context.member!);
    return simpleEmbedMessage("# Pick List Generated", context.member!);
  }
);
