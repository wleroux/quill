"use server";
import 'server-only';
import {getUserID} from "@/lib/authentication/getUserID";
import {Character} from "@/model/character/Character";
import {CharacterRepository} from "@/core/character/CharacterRepository";
import {CharacterID} from '@/model/character/CharacterID';
import {retireCharacter} from '@/core/character/retireCharacter';
import {withMetadata} from "@/core/RequestContext";
import {ulid} from "ulid";
import {isScribe} from "@/lib/authentication/isAuthenticated";
import {token} from './token';


export async function getCharactersAction(): Promise<Character[]> {
  const userID = await getUserID(await token());
  if (userID === undefined) return [];
  return CharacterRepository.getCharactersByUserID(userID);
}

export async function getAllCharactersAction(): Promise<Character[]> {
  if (!(await isScribe(await token()))) return [];
  return CharacterRepository.getAllCharacters();
}


export async function retireCharacterAction(characterID: CharacterID) {
  const authorizingUserID = await getUserID(await token());
  if (!authorizingUserID) return false;
  const result = await withMetadata({
    userID: authorizingUserID,
    workflow: "RETIRE-CHARACTER",
    requestID: ulid()
  }, () => retireCharacter(characterID, authorizingUserID));
  if (result.valid) {
    return result.value;
  } else {
    throw new Error(result.error);
  }
}