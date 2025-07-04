import {getUserID} from "@/lib/authentication/getUserID";
import {withMetadata} from "@/core/RequestContext";
import {ulid} from "ulid";
import {CharacterID} from "@/model/character/CharacterID";
import {ProgressDecision} from "@/model/character/progress/ProgressDecision";
import {CharacterRepository} from "@/core/character/CharacterRepository";
import {isScribe} from "@/lib/authentication/isAuthenticated";
import {tx} from "@/core/DynamoDBClient";
import {ErrorResult} from "@/model/processor/Result";
import {GameRepository} from "@/core/game/GameRepository";
import {getTier} from "@/model/game/GameTier";
import {getCurrentLevel} from "@/model/character/level/LevelChoice";

export async function POST(
  request: Request,
  {params}: {params: Promise<{characterID: CharacterID}>}
): Promise<Response> {
  const authorizingUserID = await getUserID();
  if (!authorizingUserID) return new Response("Unauthorized", {status: 403});
  const {characterID} = await params;
  const character = await CharacterRepository.getCharacterByID(characterID);
  if (character.ownerID !== authorizingUserID && !(await isScribe())) return new Response("Unauthorized", {status: 403});

  const result = await withMetadata({
    requestID: ulid(),
    workflow: "TRAIN",
    userID: authorizingUserID
  }, tx(async () => {
    const decision = (await request.json()) as ProgressDecision;
    if (decision.type === "name") {
      return CharacterRepository.applyToCharacter(character, [
        {type: "train", data: [decision]}
      ]);
    } else if (decision.type === "level") {
      // Check if you can level up!
      const games = await GameRepository.getGamesByCharacterID(characterID);
      const level = getCurrentLevel(character);
      const tier = getTier(level);
      const tierGames = games.filter(game => game.tier === tier && game.status === "SUCCESS").length;
      if (level <= 2) {
        if (tierGames < 0) return ErrorResult.of("Insufficient Games")
      } else {
        return ErrorResult.of("Cannot level up yet!")
      }

      return CharacterRepository.applyToCharacter(character, [
        {type: "train", data: [decision]}
      ]);
    } else {
      return ErrorResult.of("Invalid");
    }
  }));

  if (result.valid) {
    return Response.json(result.value);
  } else {
    return new Response(`Cannot Train Character: ${result.error}`, {status: 400});
  }
}