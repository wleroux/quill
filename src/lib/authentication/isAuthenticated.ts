"use server";
import {getSession} from "@/lib/authentication/getSession";

export async function isAuthenticated(token?: string) {
  return (await getSession(token))?.sub !== undefined;
}

export async function isScribe(token?: string) {
  return (await getSession(token))?.isScribe ?? false;
}

export async function isGameMaster(token?: string) {
  return (await getSession(token))?.isGameMaster ?? false;
}

export async function isAdministrator(token?: string) {
  return (await getSession(token))?.isAdmin ?? false;
}
