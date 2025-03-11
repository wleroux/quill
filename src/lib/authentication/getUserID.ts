import {cookies} from "next/headers";
import {decrypt} from "@/lib/authentication/session";

export async function getUserID() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  if (token === null || token === undefined) return undefined;
  if (token.value === "") return undefined;

  const value = await decrypt(token.value);
  return value?.sub;
}
