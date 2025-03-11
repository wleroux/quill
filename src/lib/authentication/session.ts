import {Snowflake} from "discord-api-types/v10";
import {jwtVerify, SignJWT} from "jose";
import {Resource} from "sst";

export async function encrypt(sub: Snowflake) {
  const encodedKey = new TextEncoder().encode(Resource.DiscordClientSecret.value);
  return new SignJWT({sub})
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined) {
  if (session === undefined) return undefined;

  const encodedKey = new TextEncoder().encode(Resource.DiscordClientSecret.value);
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    throw error;
  }
}
