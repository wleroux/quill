import {Snowflake} from "discord-api-types/v10";
import {Resource} from "sst";
import {BotDiscordClient} from "@/lib/discord/BotDiscordClient";

const AVATAR_BASE_URL = "https://cdn.discordapp.com"
function getGuildAvatar(userId: string, discriminator: string, userAvatar: string | null | undefined, guildId: string, memberAvatar: string | null | undefined) {
  let src: string;
  if (memberAvatar) {
    src = `${AVATAR_BASE_URL}/guilds/${guildId}/users/${userId}/avatars/${memberAvatar}.png`;
  } else if (userAvatar) {
    src = `${AVATAR_BASE_URL}/avatars/${userId}/${userAvatar}.png`;
  } else {
    src = `${AVATAR_BASE_URL}/embed/avatars/${discriminator}.png`;
  }
  return src;
}

export async function getUserName(userID: Snowflake) {
  const client = new BotDiscordClient(Resource.DiscordToken.value);
  const guildID = Resource.DiscordGuildID.value;
  const member = await client.getGuildMember(guildID, userID);
  if (member === undefined) return `${userID}`;
  return member.nick ?? member.user.username ?? member.user.id ?? "";
}

export async function Username({userID}: {userID: Snowflake}) {
  const client = new BotDiscordClient(Resource.DiscordToken.value);
  const guildID = Resource.DiscordGuildID.value;
  const member = await client.getGuildMember(guildID, userID);

  if (!member) {
    return <span>{userID}</span>
  } else {
    const name = member.nick ?? member.user.username ?? member.user.id ?? "";
    const src = getGuildAvatar(member.user.id, member.user.discriminator, member.user.avatar, guildID, member.avatar);
    return <span className="inline-flex items-center gap-2 text-nowrap overflow-hidden">
      <img alt={name} title={name} className="rounded-full w-8 h-8" src={src} />
      {name}
    </span>
  }
}
