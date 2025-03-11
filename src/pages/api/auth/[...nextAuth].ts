import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { Resource } from "sst";

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: Resource.DiscordClientID.value,
      clientSecret: Resource.DiscordClientSecret.value
    })
  ]
});
