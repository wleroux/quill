import {
  APIApplicationCommandAutocompleteInteraction,
  APIApplicationCommandAutocompleteResponse,
  APIChatInputApplicationCommandInteractionData,
  APIInteraction,
  APIInteractionResponse,
  ApplicationCommandOptionType,
  ApplicationCommandType,
  RESTPostAPIApplicationCommandsJSONBody
} from "discord-api-types/v10";
import {SubcommandHandler} from "./SubcommandHandler";

export class CommandHandler {
  private subcommands: SubcommandHandler[];
  constructor(readonly name: string, readonly description: string, ...subcommands: SubcommandHandler[]) {
    this.subcommands = subcommands;
  }

  handleCommand(request: APIChatInputApplicationCommandInteractionData, context: APIInteraction): Promise<APIInteractionResponse> {
    if (request.options) {
      for (const option of request.options) {
        if (option.type === ApplicationCommandOptionType.Subcommand) {
          const subcommand = this.subcommands.find(subcommand => subcommand.name === option.name)
          if (!subcommand) throw new Error(`Could not find subcommand ${option.name}`);
          return subcommand.handleChatInput(option, context);
        }
      }
    }
    throw new Error("Not implemented.");
  }

  handleAutocomplete(request: APIApplicationCommandAutocompleteInteraction["data"], context: APIInteraction): Promise<APIApplicationCommandAutocompleteResponse> {
    if (request.options) {
      for (const option of request.options) {
        if (option.type === ApplicationCommandOptionType.Subcommand) {
          const subcommand = this.subcommands.find(subcommand => subcommand.name === option.name)
          if (!subcommand) throw new Error(`Could not find subcommand ${option.name}`);
          return subcommand.handleAutocomplete(option, context);
        }
      }
    }
    throw new Error("Not implemented.");
  }

  getMetadata(): RESTPostAPIApplicationCommandsJSONBody {
    return ({
      type: ApplicationCommandType.ChatInput,
      name: this.name,
      description: this.description,
      options: this.subcommands.map(option => option.getMetadata())
    });
  }
}