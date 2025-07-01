import {MessageComponentHandler} from "../MessageComponentHandler";
import { APIMessageComponentInteractionData, APIInteraction, APIInteractionResponse } from "discord-api-types/v10";
import {userErrorMessage} from "../message/userErrorMessage";
import {botDiscordClient} from "@/lib/discord/BotDiscordClient";
import {getList} from "@/core/game/pick/getList";
import {addCharactersToGame} from "@/core/game/AddCharactersToGame";
import {UserRepository} from "@/core/user/UserRepository";
import {GameRepository} from "@/core/game/GameRepository";
import {simpleEmbedMessage} from "../message/simpleEmbedMessage";
import {CharacterRepository} from "@/core/character/CharacterRepository";

export class GameMasterAddCharacterMessageComponentHandler implements MessageComponentHandler {
    canHandleMessageComponent(request: APIMessageComponentInteractionData, context: APIInteraction): boolean {
      return (request.custom_id.startsWith("add-characters-to-game"));
    }
    async handleMessageComponent(request: APIMessageComponentInteractionData, context: APIInteraction): Promise<APIInteractionResponse> {
      const [_, gameMasterID, channelID, messageID] = request.custom_id.split(":");
      if (context.member!.user.id !== gameMasterID) return userErrorMessage("Cannot Add Characters", "Only the game master can add characters to a game.", context.member!);

      const message = await botDiscordClient.getChannelMessage(channelID, messageID);
      const list = await getList(message, 0, 6);
      if (!list.valid || list.value === undefined) return userErrorMessage("Cannot Add Characters", "The picked list is no longer valid", context.member!);

      const activeGameID = await UserRepository.getActiveGameID(gameMasterID);
      if (!activeGameID) return userErrorMessage("Cannot Add Characters", "No active game.", context.member!);

      const game = await GameRepository.getGameByID(activeGameID);
      if (game.tier !== list.value.tier) return userErrorMessage("Cannot Add Characters", `The active game is for ${game.tier} but the list is for ${list.value.tier}.`, context.member!);

      const result = await addCharactersToGame(activeGameID, list.value.characters.map(character => character.id));
      if (result.valid) {
        const characters = await Promise.all(result.value.characterIDs.map(characterID => CharacterRepository.getCharacterByID(characterID)))
        return simpleEmbedMessage(
          "# Character Added to Game\n" +
          `**Game:** ${game.name}\n` +
          `**Tier:** ${game.tier}\n` +
          `### Characters\n` +
          characters.map(character => `- <@${character.ownerID}>'s ${character.name}`).join("\n"),
          context.member!
        );
      }
      else return userErrorMessage("Cannot Add Characters", result.error, context.member!);
    }
}