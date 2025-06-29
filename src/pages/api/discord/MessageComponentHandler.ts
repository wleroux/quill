import {APIInteraction, APIInteractionResponse, APIMessageComponentInteractionData} from "discord-api-types/v10";

export interface MessageComponentHandler {
  canHandleMessageComponent(request: APIMessageComponentInteractionData, context: APIInteraction): boolean;
  handleMessageComponent(request: APIMessageComponentInteractionData, context: APIInteraction): Promise<APIInteractionResponse>;
}