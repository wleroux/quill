import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import {Resource} from "sst";

function handler(request: Request): Promise<Response> {
  return NextAuth({
    providers: [
      DiscordProvider({
        clientId: Resource.DiscordClientID.value,
        clientSecret: Resource.DiscordClientSecret.value
      })
    ]
  })(request);
}

export {handler as GET, handler as POST};
