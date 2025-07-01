import {StringCommandOption, SubcommandHandler} from "../SubcommandHandler";
import {GAME_TIERS, isGameTier} from "@/model/game/GameTier";
import {startGame} from "@/core/game/startGame";
import {userErrorMessage} from "../message/userErrorMessage";
import {simpleEmbedMessage} from "../message/simpleEmbedMessage";

const NAME = new StringCommandOption("name", "The name of the game", {
  minLength: 3,
  required: true
});
const TIER = new StringCommandOption("tier", "The tier for the game", {
  required: true,
  choices: GAME_TIERS.map(tier => ({name: tier, value: tier}))
});

export const gameMasterStartCommand = new SubcommandHandler(
  "start",
  "Starts a new game",
  [NAME, TIER],
  async (request, context) => {
    const userID = context.member!.user.id;
    const name = NAME.get(request);
    const tier = TIER.get(request);
    if (!isGameTier(tier)) return userErrorMessage("Cannot Start Game", `Invalid Game Tier: ${tier}.`, context.member!);

    const result = await startGame(name, tier, userID);
    if (!result.valid) return userErrorMessage("Cannot Start Game", result.error, context.member!);

    return simpleEmbedMessage(
      "# Game Started\n" +
      `Game **${result.value.name}** started for ${result.value.tier} tier.`,
      context.member
    );
  }
);
