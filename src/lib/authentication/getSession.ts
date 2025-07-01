"use server";
import {decrypt} from "@/lib/authentication/session";

export async function getSession(token?: string) {
  if (token === undefined || token === "") return undefined;
  return await decrypt(token);
}
