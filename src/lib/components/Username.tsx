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

export async function Username({userID}: {userID: Snowflake}) {
  const client = new BotDiscordClient(Resource.DiscordToken.value);
  const guildID = Resource.DiscordGuildID.value;
  const user = await client.GetGuildMembers(guildID, {limit: "1000"}).then(users => users.find(user => user.user.id === userID));

  if (!user) {
    return <span>{userID}</span>
  } else {
    const name = user.nick ?? user.user.username ?? user.user.id ?? "";
    const src = getGuildAvatar(user.user.id, user.user.discriminator, user.user.avatar, guildID, user.avatar);
    return <span className="inline-flex items-center gap-2">
      <img alt={name} title={name} className="rounded-full w-8 h-8" src={src} />
      {user.nick}
    </span>
  }
}
