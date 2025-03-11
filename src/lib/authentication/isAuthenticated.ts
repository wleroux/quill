"use server";
import {getUserID} from "@/lib/authentication/getUserID";

export async function isAuthenticated() {
  return await getUserID() !== undefined;
}