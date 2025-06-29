import {CharacterID} from "@/model/character/CharacterID";
import {GameID} from "@/model/game/GameID";
import {tx} from "@/core/DynamoDBClient";
import {GameRepository} from "@/core/game/GameRepository";
import {Result, ValidResult} from "@/model/processor/Result";
import {Game} from "@/model/game/Game";

export const addCharactersToGame = tx(async function addCharacterToGame(gameID: GameID, characterIDs: CharacterID[]): Promise<Result<Game, string>> {
  let game = await GameRepository.getGameByID(gameID);
  if (characterIDs.every(characterID => game.characterIDs.includes(characterID))) return ValidResult.of(game);
  return GameRepository.applyToGame(game, [{type: "add-characters-to-game", data: {
    characterIDs: characterIDs
  }}]);
});

