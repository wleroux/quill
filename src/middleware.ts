import {NextRequest, NextResponse} from "next/server";
import {Resource} from "sst";
import {ulid} from "ulid";
import {REDIRECT_URL} from "@/lib/authentication/redirectUrl";
import {encrypt} from "@/lib/authentication/session";
import {UserDiscordClient} from "@/lib/discord/UserDiscordClient";
import {Oauth2DiscordClient} from "@/lib/discord/Oauth2DiscordClient";
import {botDiscordClient} from "@/lib/discord/BotDiscordClient";

export default async function authMiddleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/auth/signin") {
    const state = ulid();
    const response = NextResponse.redirect(
      new URL(`https://discord.com/oauth2/authorize?client_id=${Resource.DiscordClientID.value}&response_type=code&state=${state}&redirect_uri=${encodeURIComponent(REDIRECT_URL)}&scope=identify`)
    );
    response.cookies.set("authState", state, {
      httpOnly: true
    })
    return response;
  } else if (req.nextUrl.pathname === "/auth/signout") {
    const resp = NextResponse.next();
    resp.cookies.delete("token");
    return resp;
  } else if (req.nextUrl.pathname === "/auth/callback") {
    if (req.cookies.has("authState")) {
      const code = req.nextUrl.searchParams.get("code");
      const state = req.nextUrl.searchParams.get("state");
      if (req.cookies.get("authState")!.value !== state || code === null) {
        // Failed Login
        return NextResponse.next();
      }

      const token = await new Oauth2DiscordClient(Resource.DiscordClientID.value, Resource.DiscordClientSecret.value).GetOauth2Token(code);
      const userinfo = await new UserDiscordClient(token.access_token).GetCurrentAuthorizationInformation();
      if (userinfo.user === undefined) return NextResponse.next();

      const member = await botDiscordClient.getGuildMember(Resource.DiscordGuildID.value, userinfo.user!.id);
      if (!member) return NextResponse.next();

      const roles = await botDiscordClient.getGuildRoles(Resource.DiscordGuildID.value);
      const adminRole = roles.find(role => role.name === "Admin");
      const scribeRole = roles.find(role => role.name === "Scribe");
      const gameMasterRole = roles.find(role => role.name === "Game Master");

      const authToken = await encrypt({
        sub: userinfo.user.id,
        isGameMaster: member.roles.includes(gameMasterRole?.id ?? ""),
        isScribe: member.roles.includes(scribeRole?.id ?? ""),
        isAdmin: member.roles.includes(adminRole?.id ?? "")
      });
      const url = req.nextUrl.clone();
      url.pathname = "/";
      [...url.searchParams.keys()].forEach(key => url.searchParams.delete(key));
      const resp = NextResponse.redirect(url);
      resp.cookies.delete("authState");
      resp.cookies.set("token", authToken, {
        httpOnly: true
      });
      return resp;
    }
  }

  return NextResponse.next();
}

export const config = {
  runtime: 'nodejs',
  matcher: [
    '/auth/signin',
    '/auth/signout',
    '/auth/callback'
  ],
}
