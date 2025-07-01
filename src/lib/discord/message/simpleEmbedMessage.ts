import {APIInteractionGuildMember, APIInteractionResponse, ComponentType, InteractionResponseType, MessageFlags} from "discord-api-types/v10";

export function simpleEmbedMessage(content: string, author?: APIInteractionGuildMember): APIInteractionResponse {
  return ({
    type: InteractionResponseType.ChannelMessageWithSource,
    data: {
      components: [
        {type: ComponentType.Container, components: [
          {type: ComponentType.TextDisplay, content}
        ]}
      ],
      flags: MessageFlags.Ephemeral | MessageFlags.IsComponentsV2
    }
  });
}