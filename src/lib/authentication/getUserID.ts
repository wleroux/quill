import {getSession} from "@/lib/authentication/getSession";

export async function getUserID(token?: string) {
  return (await getSession(token))?.sub;
}
