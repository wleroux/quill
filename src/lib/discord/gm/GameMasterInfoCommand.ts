import {SubcommandHandler} from "../SubcommandHandler";
import {UserRepository} from "@/core/user/UserRepository";
import {userErrorMessage} from "../message/userErrorMessage";
import {simpleEmbedMessage} from "../message/simpleEmbedMessage";
import {GameRepository} from "@/core/game/GameRepository";
import {CharacterRepository} from "@/core/character/CharacterRepository";

export const gameMasterInfoCommand = new SubcommandHandler(
  "info",
  "Get information for the current game",
  [],
  async (_, context) => {
    const userID = context.member!.user.id;
    const activeGameID = await UserRepository.getActiveGameID(userID);
    if (!activeGameID) return userErrorMessage("No Active Game", "You are currently not running any games.", context.member!);
    const game = await GameRepository.getGameByID(activeGameID);
    const characters = await Promise.all(game.characterIDs.map(CharacterRepository.getCharacterByID));

    return simpleEmbedMessage(
      `# ${game.name}\n`+
      `**Tier:** ${game.tier}\n` +
      `### Characters:\n` +
      characters.map(character => `- ${character.name}`).join("\n"),
      context.member
    );
  }
);
