import {RESTGetAPIOAuth2CurrentAuthorizationResult, RouteBases, Routes} from "discord-api-types/v10";

export class UserDiscordClient {
  constructor(private access_token: string) {}
  async GetCurrentAuthorizationInformation(): Promise<RESTGetAPIOAuth2CurrentAuthorizationResult> {
    const response = await fetch(`${RouteBases.api}${Routes.oauth2CurrentAuthorization()}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.access_token}`
      }
    });
    if (response.ok) return await response.json();
    throw new Error(await response.text());
  }
}
