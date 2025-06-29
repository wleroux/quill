import {CharacterCreationDecision} from "@/model/character/create/CharacterCreationDecision";
import {Character} from "@/model/character/Character";
import {tx} from "@/core/DynamoDBClient";
import {ulid} from "ulid";
import {CharacterRepository} from "@/core/character/CharacterRepository";
import {ErrorResult, Result} from "@/model/processor/Result";
import {PlayerID} from "@/model/player/PlayerID";

export const createCharacter = tx(async function createCharacter(userID: PlayerID, decision: CharacterCreationDecision): Promise<Result<Character, string>> {
  const characters = await CharacterRepository.getCharactersByUserID(userID);
  if (characters.some(character => !character.retired)) return ErrorResult.of("Only one non-retired character allowed");

  // Create Character
  const characterID = ulid();
  return CharacterRepository.applyToCharacter(undefined, [
    {type: "create", data: {
      id: characterID,
      ownerID: userID,
      decision
    }}
  ]);
});
