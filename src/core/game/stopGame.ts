import {GameID} from "@/model/game/GameID";
import {GameRepository} from "@/core/game/GameRepository";
import {UserRepository} from "@/core/user/UserRepository";
import {ErrorResult, Result} from "@/model/processor/Result";
import {tx} from "@/core/DynamoDBClient";
import {GameStatus} from "@/model/game/GameStatus";
import {Game} from "@/model/game/Game";

export const stopGame = tx(async function stopGame(gameID: GameID, status: Exclude<GameStatus, "RUNNING">): Promise<Result<Game, string>> {
  const game = await GameRepository.getGameByID(gameID);
  if (game.status !== "RUNNING") return ErrorResult.of("Cannot stop game that isn't running.");

  const activeGameID = await UserRepository.getActiveGameID(game.gameMasterID);
  if (activeGameID === gameID) UserRepository.setActiveGameID(game.gameMasterID, undefined);

  if (status === "CANCELED") {
    return GameRepository.applyToGame(game, [
      {type: "remove-characters-from-game", data: {characterIDs: game.characterIDs}},
      {type: "complete-game", data: {status: status}}
    ]);
  } else {
    return GameRepository.applyToGame(game, [
      {type: "complete-game", data: {status: status}}
    ]);
  }
});
