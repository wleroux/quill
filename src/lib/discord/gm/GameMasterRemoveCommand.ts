import {StringCommandOption, SubcommandHandler} from "../SubcommandHandler";
import {InteractionResponseType} from "discord-api-types/v10";
import {removeCharacterFromGame} from "@/core/game/removeCharacterFromGame";
import {UserRepository} from "@/core/user/UserRepository";
import {userErrorMessage} from "../message/userErrorMessage";
import {GameRepository} from "@/core/game/GameRepository";
import {simpleEmbedMessage} from "../message/simpleEmbedMessage";
import {CharacterRepository} from "@/core/character/CharacterRepository";

const CHARACTER = new StringCommandOption(
  "character",
  "The character to remove",
  {
    required: true,
    autocomplete: async (request, option, context) => {
      const userID = context.member!.user.id;
      const activeGameID = await UserRepository.getActiveGameID(userID);
      const characterIDs = (activeGameID === undefined) ? [] : (await GameRepository.getGameByID(activeGameID)).characterIDs;
      const characters = await Promise.all(characterIDs.map(CharacterRepository.getCharacterByID));

      return {
        type: InteractionResponseType.ApplicationCommandAutocompleteResult,
        data: {
          choices: characterIDs.map((characterID, index) => (
            {value: characterID, name: characters[index].name}
          ))
        }
      }
    }
  }
);
export const gameMasterRemoveCommand = new SubcommandHandler(
  "remove",
  "Remove a character from the current game",
  [CHARACTER],
  async (request, context) => {
    const userID = context.member!.user.id;
    const characterID = CHARACTER.get(request);

    const gameID = await UserRepository.getActiveGameID(userID);
    if (gameID === undefined) return userErrorMessage("Cannot Remove Character", "There is currently no active game.", context.member!);
    const game = await GameRepository.getGameByID(gameID);

    await removeCharacterFromGame(characterID, gameID);
    const character = await CharacterRepository.getCharacterByID(characterID);
    return simpleEmbedMessage(
      "# Remove Character from Game\n" +
      `**<@${character.ownerID}>'s ${character.name}** was removed from **${game.name}**`
    );
  }
);
