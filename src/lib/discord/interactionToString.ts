import {
  APIApplicationCommandInteractionDataOption,
  APIInteraction,
  ApplicationCommandOptionType,
  ApplicationCommandType,
  ComponentType,
  InteractionType,
  ModalSubmitActionRowComponent
} from "discord-api-types/v10";

function optionToString(option: APIApplicationCommandInteractionDataOption): string {
  if (option.type === ApplicationCommandOptionType.SubcommandGroup) {
    return `${option.name} ${option.options.map(optionToString).join(" ")}`;
  } else if (option.type === ApplicationCommandOptionType.Subcommand) {
    if (option.options && option.options.length > 0) {
      return `${option.name} ${option.options.map(optionToString).join(" ")}`
    } else {
      return option.name;
    }
  } else {
    return `${option.name}:${option.value}`
  }
}

function componentToString(component: ModalSubmitActionRowComponent): string {
  return `{${component.components.map(component => {
    switch (component.type) {
      case ComponentType.TextInput: return `\"${component.custom_id}\": \"${component.value}\"`;
    }
  }).join(",")}}`;
}
function getUsername(request: APIInteraction) {
  if (request.member?.user) {
    if (request.member.user.discriminator === "0") return `@${request.member.user.username}`;
    else return `${request.member.user.username}#${request.member.user.discriminator}`;
  } else if (request.user) {
    if (request.user.discriminator === "0") return `@${request.user.username}`;
    else return `${request.user.username}#${request.user.discriminator}`;
  } else {
    return "@unknown";
  }
}

export function interactionToString(request: APIInteraction) {
  const username = getUsername(request);
  const channelId = request.channel?.name || request.channel?.id;
  if (request.type === InteractionType.ApplicationCommand) {
    if (request.data.type === ApplicationCommandType.ChatInput) {
      if (request.data.options && request.data.options.length > 0) {
        return `${username} in #${channelId} => /${request.data.name} ${request.data.options.map(optionToString)}`;
      } else {
        return `${username} in #${channelId} => /${request.data.name}`
      }
    }
  } else if (request.type === InteractionType.ApplicationCommandAutocomplete) {
    if (request.data.type === ApplicationCommandType.ChatInput) {
      if (request.data.options && request.data.options.length > 0) {
        return `${username} in #${channelId} => autocomplete /${request.data.name} ${request.data.options.map(optionToString)}`;
      } else {
        return `${username} in #${channelId} => autocomplete /${request.data.name}`;
      }
    }
  } else if (request.type === InteractionType.MessageComponent) {
    if (request.data.component_type === ComponentType.Button) {
      return `${username} => ${request.data.custom_id}`;
    } else {
      return `${username} => [${request.data.values.join(", ")}]`;
    }
  } else if (request.type === InteractionType.ModalSubmit) {
    return `${username} => ${request.data.custom_id}(${request.data.components.map(componentToString).join(", ")})`;
  } else if (request.type === InteractionType.Ping) {
    return `${username} => PING`;
  }

  return JSON.stringify(request, null, 2);
}