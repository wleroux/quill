import "server-only";
import {CharacterID} from "@/model/character/CharacterID";
import {hasGlobalWritePermissions} from "@/core/Permission";
import {Snowflake} from "discord-api-types/v10";
import {CharacterRepository} from "@/core/character/CharacterRepository";
import {tx} from "@/core/DynamoDBClient";
import {ErrorResult, Result} from "@/model/processor/Result";
import {Character} from "@/model/character/Character";

export const retireCharacter = tx(async function retireCharacter(characterID: CharacterID, authorizingUserID: Snowflake): Promise<Result<Character, string>> {
  // Check Permissions
  const character = await CharacterRepository.getCharacterByID(characterID);
  const isOwner = character.ownerID === authorizingUserID;
  if (!isOwner && !await hasGlobalWritePermissions(authorizingUserID)) return ErrorResult.of("Unauthorized to retire character.");

  // Retire Character
  return CharacterRepository.applyToCharacter(character, [{type: "retire", data: {}}]);
});
