import {MessageComponentHandler} from "../MessageComponentHandler";
import {APIInteraction, APIInteractionResponse, APIMessageComponentInteractionData} from "discord-api-types/v10";
import {userErrorMessage} from "../message/userErrorMessage";
import {rollList} from "@/core/game/rollList";
import {simpleEmbedMessage} from "../message/simpleEmbedMessage";

export class GameMasterPickMessageComponentHandler implements MessageComponentHandler {
  canHandleMessageComponent(request: APIMessageComponentInteractionData): boolean {
    return (request.custom_id.startsWith("pick:"));
  }
  async handleMessageComponent(request: APIMessageComponentInteractionData, context: APIInteraction): Promise<APIInteractionResponse> {
    const [_, channelID, gameMasterID, minPlayers, maxPlayers] = request.custom_id.split(":");
    if (context.member!.user.id !== gameMasterID) return userErrorMessage("Cannot Pick List", "Only the game master can roll for a list.", context.member!);

    const result = await rollList(gameMasterID, channelID, Number.parseInt(minPlayers), Number.parseInt(maxPlayers));
    if (result.valid) return simpleEmbedMessage(
      "# Pick List\n" +
      `List Selected: <@${result.value.listMakerID}>'s ${result.value.tier} List.`,
      context.member!
    );
    else return userErrorMessage("Pick List", result.error, context.member!);
  }
}