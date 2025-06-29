import {PlayerID} from "@/model/player/PlayerID";
import {CharacterRepository} from "@/core/character/CharacterRepository";
import {GameRepository} from "@/core/game/GameRepository";

export async function getGameScore(userID: PlayerID): Promise<number> {
  const characters = await CharacterRepository.getCharactersByUserID(userID);
  const gamesRan = (await GameRepository.getGamesByGameMasterID(userID)).filter(game => game.status === "SUCCESS" || game.status === "FAILURE").length;
  const gamesPlayed = (await Promise.all(characters.map(character => GameRepository.getGamesByCharacterID(character.id)))).flatMap(a => a).filter(game => game.status !== "CANCELED").length;
  return gamesPlayed - 2 * gamesRan;
}

