"use server";
import 'server-only';
import {getUserID} from "@/lib/authentication/getUserID";
import {Character} from "@/model/character/Character";
import {CharacterCreationDecision} from "@/model/character/create/CharacterCreationDecision";
import {createCharacter, getCharacterByID, getCharacterIDsByUserID, retireCharacter} from "@/core/Character";
import {CharacterID} from '@/model/character/CharacterID';
import {queueProcessor} from "@/lib/queue/QueueProcessor";

export async function createCharacterAction(decisions: CharacterCreationDecision) {
  const userID = await getUserID();
  if (!userID) return undefined;
  return await createCharacter(userID, decisions);
}

export async function getCharactersAction(): Promise<{[characterID: CharacterID]: Character}> {
  queueProcessor.wake();
  const userID = await getUserID();
  if (!userID) return {};
  return Object.fromEntries(await Promise.all(
    (await getCharacterIDsByUserID(userID))
      .map(async (characterID) => [characterID, await getCharacterByID(characterID)])
  ));
}

export async function retireCharacterAction(characterID: CharacterID) {
  const authorizingUserID = await getUserID();
  if (!authorizingUserID) return false;
  return retireCharacter(characterID, authorizingUserID);
}