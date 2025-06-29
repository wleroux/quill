import {CharacterID} from "@/model/character/CharacterID";
import {GameID} from "@/model/game/GameID";
import {tx} from "@/core/DynamoDBClient";
import {GameRepository} from "@/core/game/GameRepository";
import {Result, ValidResult} from "@/model/processor/Result";
import {Game} from "@/model/game/Game";

export const removeCharacterFromGame = tx(async function removeCharacterToGame(characterID: CharacterID, gameID: GameID): Promise<Result<Game, string>> {
  let game = await GameRepository.getGameByID(gameID);
  if (!game.characterIDs.includes(characterID)) return ValidResult.of(game);
  return GameRepository.applyToGame(game, [{type: "remove-characters-from-game", data: {
    characterIDs: [characterID]
  }}]);
});

