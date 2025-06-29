import {StringCommandOption, SubcommandHandler, UserCommandOption} from "@/pages/api/discord/SubcommandHandler";
import {InteractionResponseType, Snowflake} from "discord-api-types/v10";
import {addCharactersToGame} from "@/core/game/AddCharactersToGame";
import {UserRepository} from "@/core/user/UserRepository";
import {userErrorMessage} from "@/pages/api/discord/message/userErrorMessage";
import {simpleEmbedMessage} from "@/pages/api/discord/message/simpleEmbedMessage";
import {CharacterRepository} from "@/core/character/CharacterRepository";
import {GameRepository} from "@/core/game/GameRepository";

const PLAYER = new UserCommandOption(
  "player",
  "The player",
  {
    required: true
  }
);
const CHARACTER = new StringCommandOption(
  "character",
  "The character",
  {
    required: true,
    autocomplete: async (request, option, context) => {
      const playerID = PLAYER.get(request) as Snowflake;
      const characters = (await CharacterRepository.getCharactersByUserID(playerID))
        .filter(character => !character.retired)
      return {type: InteractionResponseType.ApplicationCommandAutocompleteResult, data: {choices: characters.map(character =>
        ({value: character.id, name: character.name})
      )}};
    }
  }
);

export const gameMasterAddCommand = new SubcommandHandler(
  "add",
  "Add a character to the current game",
  [PLAYER, CHARACTER],
  async (request, context) => {
    const userID = context.member!.user.id;
    const characterID = CHARACTER.get(request);

    const gameID = await UserRepository.getActiveGameID(userID);
    if (gameID === undefined) return userErrorMessage("Cannot Add Character to Game", "You are currently not running any games.", context.member!);

    const result = await addCharactersToGame(gameID, [characterID]);
    if (!result.valid) return userErrorMessage("Cannot Add Character to Game", result.error, context.member!);

    const character = await CharacterRepository.getCharacterByID(characterID);
    const game = await GameRepository.getGameByID(gameID);

    return simpleEmbedMessage(
      "# Character Added to Game\n"+
      `**${character.name}** was added to **${game.name}**`,
      context.member
    );
  }
);
