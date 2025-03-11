import {RESTGetAPIOAuth2CurrentAuthorizationResult} from "discord-api-types/v10";

export class UserDiscordClient {
  constructor(private access_token: string) {}
  async GetCurrentAuthorizationInformation(): Promise<RESTGetAPIOAuth2CurrentAuthorizationResult> {
    const response = await fetch(`https://discord.com/api/v10/oauth2/@me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.access_token}`
      }
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(await response.text());
    }
  }
}
