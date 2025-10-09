import {getUserID} from "@/lib/authentication/getUserID";
import {withMetadata} from "@/core/RequestContext";
import {ulid} from "ulid";
import {CharacterID} from "@/model/character/CharacterID";
import {isScribe} from "@/lib/authentication/isAuthenticated";
import {unretireCharacter} from "@/core/character/unretireCharacter";
import {CharacterRepository} from "@/core/character/CharacterRepository";
import {GameRepository} from "@/core/game/GameRepository";
import {getCurrentLevel, getMaxUnretireLevel} from "@/model/character/level/LevelChoice";

export async function POST(
  request: Request,
  {params}: {params: Promise<{characterID: CharacterID}>}
): Promise<Response> {
  const authorizingUserID = await getUserID();
  if (authorizingUserID === undefined) return new Response("Unauthorized", {status: 403});

  const {characterID} = await params;
  const character = await CharacterRepository.getCharacterByID(characterID);
  if (!(await isScribe())) {
    const gamesRan = await GameRepository.getGamesByGameMasterID(character.ownerID);

    // A game master can unretire characters if they've ran enough games
    if (getCurrentLevel(character) > getMaxUnretireLevel(gamesRan)) {
      return new Response("Unauthorized", {status: 403});
    }
  }

  // A player may only have one unretired character at a time
  const characters = await CharacterRepository.getCharactersByUserID(character.ownerID);
  if (characters.some(character => !character.retired)) {
    return new Response("Unauthorized", {status: 403});
  }

  const result = await withMetadata({
    userID: authorizingUserID,
    workflow: "UNRETIRE-CHARACTER",
    requestID: ulid()
  }, () => unretireCharacter(characterID));
  if (result.valid) {
    return Response.json(result.value);
  } else {
    return new Response("Cannot Retire Character", {status: 400});
  }
}