import "server-only";
import {tx} from "@/core/DynamoDBClient";
import {CharacterID} from "@/model/character/CharacterID";
import {Result} from "@/model/processor/Result";
import {Character} from "@/model/character/Character";
import {CharacterRepository} from "@/core/character/CharacterRepository";

export const unretireCharacter = tx(async function unretireCharacter(characterID: CharacterID): Promise<Result<Character, string>> {
  // Unretire Character
  const character = await CharacterRepository.getCharacterByID(characterID);
  return CharacterRepository.applyToCharacter(character, [{type: "retrain", data: {
    type: "retrain",
    data: {
      name: {type: "name", data: {name: character.name}},
      species: {type: "species", data: character.species},
      background: {type: "background", data: character.background},
      startingStat: {type: "starting-stat", data: character.startingStat},
      levels: character.progress.filter(progress => progress.type === "level"),
      retire: undefined
    }
  }}]);
});
