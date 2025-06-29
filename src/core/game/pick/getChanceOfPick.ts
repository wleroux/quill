import {CharacterID} from "@/model/character/CharacterID";
import {PlayerID} from "@/model/player/PlayerID";
import {getGameScore} from "@/core/game/pick/getGameScore";
import {getGameScoreWeight} from "@/core/game/pick/getGameScoreWeight";
import {GameList} from "@/core/game/pick/GameList";

export async function getGameListChance(list: GameList, remainingLists: GameList[], selectedPlayerIds: CharacterID[]): Promise<number> {
  const playerWeights: {[playerId: PlayerID]: number} = {};
  for (const list of remainingLists) {
    for (const character of list.characters) {
      if (selectedPlayerIds.some(id => id === character.ownerID)) continue;
      playerWeights[character.ownerID] = getGameScoreWeight(await getGameScore(character.ownerID));
    }
  }

  const totalPlayerScore = Object.values(playerWeights).reduce((sum, a) => sum + a, 0);
  if (totalPlayerScore === 0) return 1 / remainingLists.length;

  let chance = 0;
  for (const selectedCharacterSnapshot of list.characters) {
    if (selectedPlayerIds.some(id => id === selectedCharacterSnapshot.ownerID)) {
      continue;
    }
    const listsWithPlayers = remainingLists.filter(list => list.characters.some(character => character.ownerID === selectedCharacterSnapshot.ownerID));
    const characterChance = playerWeights[selectedCharacterSnapshot.ownerID] / totalPlayerScore;
    const listChance = await getGameListChance(list, listsWithPlayers, [...selectedPlayerIds, selectedCharacterSnapshot.ownerID]);
    chance += characterChance * listChance;
  }

  return chance;
}
