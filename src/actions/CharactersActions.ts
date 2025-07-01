"use server";
import 'server-only';
import {getUserID} from "@/lib/authentication/getUserID";
import {Character} from "@/model/character/Character";
import {CharacterCreationDecision} from "@/model/character/create/CharacterCreationDecision";
import {CharacterRepository} from "@/core/character/CharacterRepository";
import {CharacterID} from '@/model/character/CharacterID';
import {createCharacter} from '@/core/character/createCharacter';
import {retireCharacter} from '@/core/character/retireCharacter';
import {withMetadata} from "@/core/RequestContext";
import {ulid} from "ulid";
import {isScribe} from "@/lib/authentication/isAuthenticated";

export async function createCharacterAction(decisions: CharacterCreationDecision) {
  const userID = await getUserID();
  if (!userID) return undefined;
  const result = await withMetadata({
    requestID: ulid(),
    userID: userID,
    workflow: "CREATE-CHARACTER"
  }, () => createCharacter(userID, decisions));
  if (!result.valid) throw new Error(result.error);
  return result.value;
}

export async function getCharactersAction(): Promise<Character[]> {
  const userID = await getUserID();
  if (userID === undefined) return [];
  return CharacterRepository.getCharactersByUserID(userID);
}

export async function getAllCharactersAction(): Promise<Character[]> {
  if (!(await isScribe())) return [];
  return CharacterRepository.getAllCharacters();
}


export async function retireCharacterAction(characterID: CharacterID) {
  const authorizingUserID = await getUserID();
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