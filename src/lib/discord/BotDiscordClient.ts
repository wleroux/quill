import {APIGuildMember, Snowflake} from "discord-api-types/v10";

const API_ENDPOINT = "https://discord.com/api/v10";

export class BotDiscordClient {
  constructor(
    private token: string
  ) {
  }

  async GetGuildMembers(guildID: Snowflake, options?: {
    limit?: string,
    after?: string
  }): Promise<APIGuildMember[]> {
    const url = `${API_ENDPOINT}/guilds/${guildID}/members?${new URLSearchParams(options).toString()}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bot ${this.token}`
      }
    });
    if (response.ok) return response.json();
    throw new Error(`${url}: ${await response.text()}`);
  }

  async GetGuildMember(guildID: Snowflake, userID: Snowflake): Promise<APIGuildMember> {
    const response = await fetch(`${API_ENDPOINT}/guilds/${guildID}/members/${userID}`);
    if (response.ok) return response.json();
    throw new Error(await response.text());
  }
}
