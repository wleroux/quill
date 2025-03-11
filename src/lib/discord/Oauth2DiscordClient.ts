import {RESTPostOAuth2AccessTokenResult} from "discord-api-types/v10";
import {REDIRECT_URL} from "@/lib/authentication/redirectUrl";

const API_ENDPOINT = "https://discord.com/api/v10";

export class Oauth2DiscordClient {
  private token: string;
  constructor(clientID: string, clientSecret: string) {
    this.token = Buffer.from(`${clientID}:${clientSecret}`).toString("base64");
  }

  async GetOauth2Token(code: string): Promise<RESTPostOAuth2AccessTokenResult> {
    const response = await fetch(`${API_ENDPOINT}/oauth2/token`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Authorization": `Basic ${this.token}`
      },
      body: new URLSearchParams({
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": REDIRECT_URL
      }).toString()
    });
    return (await response.json());
  }
}
