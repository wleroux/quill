"use server";
import {cookies} from "next/headers";
import {decrypt} from "@/lib/authentication/session";

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  if (token === null || token === undefined) return undefined;
  if (token.value === "") return undefined;
  return await decrypt(token.value);
}
