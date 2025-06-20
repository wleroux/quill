import "server-only";
import {APIGuildMember, APIRole, Snowflake} from "discord-api-types/v10";
import {Resource} from "sst/resource";

const API_ENDPOINT = "https://discord.com/api/v10";

class BotDiscordClient {
  async listGuildMembers(guildID: Snowflake, options?: {
    limit?: string,
    after?: string
  }): Promise<APIGuildMember[]> {
    const url = `${API_ENDPOINT}/guilds/${guildID}/members?${new URLSearchParams(options).toString()}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bot ${Resource.DiscordToken.value}`
      }
    });
    if (response.ok) return response.json();
    throw new Error(`${url}: ${await response.text()}`);
  }

  async addGuildMemberRole(guildID: Snowflake, userID: Snowflake, roleID: Snowflake) {
    const response = await fetch(`${API_ENDPOINT}/guilds/${guildID}/members/${userID}/roles/${roleID}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bot ${Resource.DiscordToken.value}`
      }
    });
    if (response.ok) return response.json();
    throw new Error(await response.text());
  }

  async removeGuildMemberRole(guildID: Snowflake, userID: Snowflake, roleID: Snowflake) {
    const response = await fetch(`${API_ENDPOINT}/guilds/${guildID}/members/${userID}/roles/${roleID}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bot ${Resource.DiscordToken.value}`
      }
    });
    if (response.ok) return response.json();
    throw new Error(await response.text());
  }


  async getGuildMember(guildID: Snowflake, userID: Snowflake): Promise<APIGuildMember> {
    const response = await fetch(`${API_ENDPOINT}/guilds/${guildID}/members/${userID}`, {
      headers: {
        "Authorization": `Bot ${Resource.DiscordToken.value}`
      }
    });
    if (response.ok) return response.json();
    throw new Error(await response.text());
  }

  async getGuildRoles(guildID: Snowflake): Promise<APIRole[]> {
    const response = await fetch(`${API_ENDPOINT}/guilds/${guildID}/roles`, {
      headers: {
        "Authorization": `Bot ${Resource.DiscordToken.value}`
      },
      cache: "force-cache",
      next: {revalidate: 3600}
    });
    if (response.ok) return response.json();
    throw new Error(await response.text());
  }
}

export const botDiscordClient = new BotDiscordClient();
