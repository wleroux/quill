import {APIInteractionGuildMember, APIInteractionResponse, InteractionResponseType, MessageFlags, RouteBases} from "discord-api-types/v10";
import {DiscordColors} from "@/pages/api/discord/DiscordColors";
import {Resource} from "sst/resource";

function getAvatarURL(member: APIInteractionGuildMember): string {
  if (member === undefined) return `${RouteBases.cdn}/embed/avatars/0.png`;
  if (!member.user) return `${RouteBases.cdn}/embed/avatars/0.png`;
  else if (member.avatar) return `${RouteBases.cdn}/guilds/${Resource.DiscordGuildID.value}/users/${member.user!.id}/avatars/${member.avatar}.webp`;
  else if (member.user.avatar) return `${RouteBases.cdn}/avatars/${member.user.id}/${member.user.avatar}.webp`;
  else return `${RouteBases.cdn}/embed/avatars/${parseInt(member.user.discriminator) % 5}.webp`;
}

export function userErrorMessage(title: string, description: string, member: APIInteractionGuildMember): APIInteractionResponse {
  return {
    type: InteractionResponseType.ChannelMessageWithSource,
    data: {
      embeds: [{
        title,
        description,
        color: DiscordColors.ERROR
      }],
      flags: MessageFlags.Ephemeral
    }
  };
}