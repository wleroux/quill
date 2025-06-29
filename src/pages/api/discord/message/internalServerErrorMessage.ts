import {DiscordColors} from "@/pages/api/discord/DiscordColors";
import {APIInteractionResponse, InteractionResponseType, MessageFlags} from "discord-api-types/v10";

export function internalServerErrorMessage(requestID: string): APIInteractionResponse {
  return {
    type: InteractionResponseType.ChannelMessageWithSource,
    data: {
      embeds: [{
        title: "Internal Server Error",
        description: "An unexpected error with the bot has occurred and an admin has been notified.",
        footer: {
          text: `Request ID: ${requestID}`
        },
        color: DiscordColors.ERROR,
      }],
      flags: MessageFlags.Ephemeral
    }
  };
}