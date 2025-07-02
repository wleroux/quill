import {CharacterID} from "@/model/character/CharacterID";
import {Snowflake} from "discord-api-types/v10";
import {CharacterReducer, CharacterRepository} from "@/core/character/CharacterRepository";
import {Character} from "@/model/character/Character";
import {Result, ValidResult} from "@/model/processor/Result";
import {tx} from "@/core/DynamoDBClient";
import {ProcessorError} from "@/model/processor/Processor";

export const refreshCharacter = tx(async function refreshCharacter(characterID: CharacterID, authorizingUserID: Snowflake): Promise<Result<Character, ProcessorError[]>> {
  const audit = await CharacterRepository.getCharacterAuditLogs(characterID);
  let result = ValidResult.of(undefined as unknown as Character);
  for (const {operations} of audit) {
    for (const operation of operations) {
      result = result.flatMap(value => CharacterReducer(value, operation));
    }
    result = result.flatMap(value => ValidResult.of({...value, revision: value.revision + 1}));
  }
  if (result.valid) {
    await CharacterRepository.refreshCharacter(result.value);
  }

  return result;
});
