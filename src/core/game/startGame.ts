import {GameTier} from "@/model/game/GameTier";
import {Snowflake} from "discord-api-types/v10";
import {ulid} from "ulid";
import {tx} from "@/core/DynamoDBClient";
import {GameRepository} from "@/core/game/GameRepository";
import {ErrorResult, Result, ValidResult} from "@/model/processor/Result";
import {Game} from "@/model/game/Game";
import {UserRepository} from "@/core/user/UserRepository";

export const startGame = tx(async function startGame(name: string, tier: GameTier, gameMasterID: Snowflake): Promise<Result<Game, string>> {
  const activeGameID = await UserRepository.getActiveGameID(gameMasterID);
  if (activeGameID) return ErrorResult.of("Cannot have multiple active games");

  const gameID = ulid();
  const result = GameRepository.applyToGame(undefined, [{type: "create", data: {
    id: gameID,
    name,
    tier,
    gameMasterID,
  }}]);

  return result.flatMap(game => {
    UserRepository.setActiveGameID(gameMasterID, game.id);
    return ValidResult.of(game);
  });
});
