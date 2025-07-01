import {
  APIApplicationCommandAutocompleteResponse,
  APIApplicationCommandBasicOption,
  APIApplicationCommandInteractionDataStringOption,
  APIApplicationCommandInteractionDataSubcommandOption,
  APIApplicationCommandOption,
  APIApplicationCommandOptionChoice,
  APIInteraction,
  APIInteractionResponse,
  ApplicationCommandOptionType,
  InteractionResponseType,
  Snowflake
} from "discord-api-types/v10";

export class NumberCommandOption {
  readonly type = ApplicationCommandOptionType.Number;
  constructor(public readonly name: string, private description: string, private options?: {
    min?: number,
    max?: number,
    required?: boolean
  }) {}

  get<T>(request: APIApplicationCommandInteractionDataSubcommandOption, defaultValue: () => T = () => {throw new Error("Expected value.")}): number | T {
    if (!request.options) return defaultValue();
    const option = request.options.find(option => option.name === this.name);
    if (option === undefined) return defaultValue();
    if (typeof option !== "number") return defaultValue();
    return option;
  }

  getMetadata(): APIApplicationCommandBasicOption {
    return ({
      type: ApplicationCommandOptionType.Number,
      name: this.name,
      description: this.description,
      min_value: this.options?.min,
      max_value: this.options?.max,
      required: this.options?.required
    });
  }
}

export class UserCommandOption {
  readonly type = ApplicationCommandOptionType.User;
  constructor(public readonly name: string, private description: string, private options?: {
    required?: boolean
  }) {
  }

  get<T>(request: APIApplicationCommandInteractionDataSubcommandOption, defaultValue: () => T = () => {throw new Error("Expected value.")}): Snowflake | T {
    if (!request.options) return defaultValue();
    const option = request.options.find(option => option.name === this.name);
    if (!option) return defaultValue();
    const value = option.value;
    if (typeof value !== "string") return defaultValue();
    return value;
  }

  getMetadata(): APIApplicationCommandBasicOption {
    return ({
      type: ApplicationCommandOptionType.User,
      name: this.name,
      description: this.description,
      required: this.options?.required
    });
  }
}
export class StringCommandOption {
  readonly type = ApplicationCommandOptionType.String;
  constructor(public readonly name: string, private description: string, private options?: {
    required?: boolean;
    autocomplete: (request: APIApplicationCommandInteractionDataSubcommandOption, option: APIApplicationCommandInteractionDataStringOption, context: APIInteraction) => Promise<APIApplicationCommandAutocompleteResponse>;
  } | {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    choices?: APIApplicationCommandOptionChoice<string>[];
    autocomplete?: undefined;
  }) {}

  async autocomplete(request: APIApplicationCommandInteractionDataSubcommandOption, option: APIApplicationCommandInteractionDataStringOption, context: APIInteraction): Promise<APIApplicationCommandAutocompleteResponse> {
    if (!this.options?.autocomplete) return {type: InteractionResponseType.ApplicationCommandAutocompleteResult, data: {choices: []}};
    return this.options.autocomplete(request, option, context);
  }

  get<T = never>(request: APIApplicationCommandInteractionDataSubcommandOption, defaultValue: () => T = () => {throw new Error("Unspecified Value")}): string | T {
    if (!request.options) return defaultValue();
    const option = request.options.find(option => option.name === this.name);
    if (!option) return defaultValue();
    const value = option.value;
    if (typeof value !== "string") return defaultValue();
    return value;
  }

  getMetadata(): APIApplicationCommandBasicOption {
    if (this.options?.autocomplete !== undefined) {
      return ({
        type: ApplicationCommandOptionType.String,
        name: this.name,
        description: this.description,
        required: this.options?.required,
        autocomplete: true
      });
    } else {
      return ({
        type: ApplicationCommandOptionType.String,
        name: this.name,
        description: this.description,
        required: this.options?.required,
        min_length: this.options?.minLength,
        max_length: this.options?.maxLength,
        autocomplete: false,
        choices: this.options?.choices
      });
    }
  }
}

type CommandOption = NumberCommandOption | UserCommandOption | StringCommandOption;

export class SubcommandHandler {
  constructor(public readonly name: string, private description: string, private options: CommandOption[], private handler: (request: APIApplicationCommandInteractionDataSubcommandOption, context: APIInteraction) => Promise<APIInteractionResponse>) {
  }
  handleChatInput(request: APIApplicationCommandInteractionDataSubcommandOption, context: APIInteraction): Promise<APIInteractionResponse> {
    return this.handler(request, context);
  }
  async handleAutocomplete(request: APIApplicationCommandInteractionDataSubcommandOption, context: APIInteraction): Promise<APIApplicationCommandAutocompleteResponse> {
    if (request.options) {
      for (const focusedOption of request.options) {
        if (focusedOption.type === ApplicationCommandOptionType.String && focusedOption.focused) {
          const option = this.options
            .filter(option => option.type === ApplicationCommandOptionType.String)
            .find(option => option.name === focusedOption.name);
          if (option)
            return option!.autocomplete(request, focusedOption, context);
        }
      }
    }

    return {
      type: InteractionResponseType.ApplicationCommandAutocompleteResult,
      data: {choices: []}
    }
  }
  getMetadata(): APIApplicationCommandOption {
    return ({
      type: ApplicationCommandOptionType.Subcommand,
      name: this.name,
      description: this.description,
      options: this.options.map(option => option.getMetadata())
    });
  }
}
