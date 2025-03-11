"use server";
import {getSession} from "@/lib/authentication/getSession";

export async function isAuthenticated() {
  return (await getSession())?.sub !== undefined;
}

export async function isScribe() {
  return (await getSession())?.isScribe ?? false;
}

export async function isGameMaster() {
  return (await getSession())?.isGameMaster ?? false;
}

export async function isAdministrator() {
  return (await getSession())?.isAdmin ?? false;
}
