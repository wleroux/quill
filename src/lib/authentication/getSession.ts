"use server";
import {decrypt} from "@/lib/authentication/session";
import { cookies } from "next/headers";

export async function getSession() {
  const token = (await cookies()).get("token")?.value;
  if (token === undefined || token === "") return undefined;
  return await decrypt(token);
}
