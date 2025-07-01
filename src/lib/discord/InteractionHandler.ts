import {CommandHandler} from "./CommandHandler";
import {APIInteraction, APIInteractionResponse, ApplicationCommandType, InteractionResponseType, InteractionType} from "discord-api-types/v10";
import {getMetadata} from "@/core/RequestContext";
import {interactionToString} from "./interactionToString";
import {internalServerErrorMessage} from "./message/internalServerErrorMessage";
import {MessageComponentHandler} from "./MessageComponentHandler";

export class InteractionHandler {
  private commandHandlers: CommandHandler[];
  private messageHandlers: MessageComponentHandler[];
  constructor(commands: CommandHandler[], messageHandler: MessageComponentHandler[]) {
    this.commandHandlers = commands;
    this.messageHandlers = messageHandler;
  }

  getMetadata() {
    return this.commandHandlers.map(command => command.getMetadata());
  }

  async getResponse(request: APIInteraction): Promise<APIInteractionResponse> {
    if (request.type === InteractionType.Ping) {
      return ({type: InteractionResponseType.Pong});
    } else if (request.type === InteractionType.ApplicationCommand) {
      const handler = this.commandHandlers.find(command => command.name === request.data.name);
      if (!handler) throw new Error(`Could not find command handler: ${request.data.name}`);
      if (request.data.type === ApplicationCommandType.ChatInput) {
        return handler.handleCommand(request.data, request);
      }
    } else if (request.type === InteractionType.ApplicationCommandAutocomplete) {
      const handler = this.commandHandlers.find(command => command.name === request.data.name);
      if (!handler) throw new Error(`Could not find command handler: ${request.data.name}`);
      if (request.data.type === ApplicationCommandType.ChatInput) {
        return handler.handleAutocomplete(request.data, request);
      }
    } else if (request.type === InteractionType.MessageComponent) {
      const handler = this.messageHandlers.find(handler => handler.canHandleMessageComponent(request.data, request));
      if (!handler) throw new Error(`Could not find message handler: ${request.data.custom_id}`);
      return handler.handleMessageComponent(request.data, request);
    }
    throw new Error("Not implemented.");
  }

  async handle(request: APIInteraction): Promise<APIInteractionResponse> {
    const metadata = getMetadata();
    try {
      console.log(`Discord Interaction[${metadata.requestID}]: ${interactionToString(request)}\nREQUEST:${JSON.stringify(request)}`)
      const response = await this.getResponse(request);
      console.log(`Discord Interaction[${metadata.requestID}]: ${interactionToString(request)}\nRESPONSE:${JSON.stringify(response)}`);
      return response;
    } catch (error) {
      console.error(`Discord Interaction[${metadata.requestID}]: ${interactionToString(request)}\nERROR:`, error);
      return internalServerErrorMessage(metadata.requestID);
    }
  }
}
