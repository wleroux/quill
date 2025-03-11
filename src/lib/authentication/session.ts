import {Snowflake} from "discord-api-types/v10";
import {jwtVerify, SignJWT} from "jose";
import {Resource} from "sst";

type Session = {
  sub: Snowflake;
  isScribe: boolean;
  isGameMaster: boolean;
  isAdmin: boolean;
};

export async function encrypt(session: Session) {
  const encodedKey = new TextEncoder().encode(Resource.DiscordClientSecret.value);
  return new SignJWT(session)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined): Promise<Session | undefined> {
  if (session === undefined) return undefined;

  const encodedKey = new TextEncoder().encode(Resource.DiscordClientSecret.value);
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload as Session;
  } catch (error) {
    throw error;
  }
}
