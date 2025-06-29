import {GameList} from "@/core/game/pick/GameList";
import {GameRange, PickIteration} from "@/core/game/pick/PickIteration";
import {getGameScore} from "@/core/game/pick/getGameScore";
import {getGameScoreWeight} from "@/core/game/pick/getGameScoreWeight";

export async function rollGameList(lists: GameList[]): Promise<[PickIteration[], GameList]> {
  const players = [...new Set(lists.flatMap(list => list.characters.flatMap(character => character.ownerID)))];
  const playerScores = Object.fromEntries(await Promise.all(players.map(async (playerID) => [playerID, await getGameScore(playerID)])));

  const iterations: PickIteration[] = [];
  let selectedPlayers: string[] = [];
  let remainingLists = lists;
  while (
    remainingLists.length > 1 &&
    remainingLists.some(list => list.characters.some(character => !selectedPlayers.includes(character.ownerID)))
    ) {
    const iteration = rollGameListIteration(remainingLists, playerScores, selectedPlayers);
    selectedPlayers.push(iteration.selectedPlayer);
    remainingLists = remainingLists
      .filter(list => list.characters.some(character => character.ownerID === iteration.selectedPlayer));
    iterations.push(iteration);
  }

  // Select a random list from the remaining lists (with all same players)
  const winningList: GameList = remainingLists[Math.floor(Math.random() * remainingLists.length)];
  return [iterations, winningList];
}

function toGameRanges(weights: {[value: string]: number}): {[playerID: string]: GameRange} {
  const keys = Object.keys(weights);
  if (keys.length === 0) return {};

  let remainingRange = 1000;
  let remainingWeight = Object.values(weights).reduce((sum, weight) => sum + weight, 0);
  let ranges: {[key: string]: GameRange} = {};
  let current = 0;
  for (const key of keys) {
    const weight = Math.round(remainingRange * (weights[key] / remainingWeight));
    remainingWeight -= weights[key];
    remainingRange -= weight;
    ranges[key] = {
      start: current,
      end: current + weight - 1
    };
    current += weight;
  }
  return ranges;
}

function rollGameListIteration(lists: GameList[], playerScores: {[playerID: string]: number}, selectedPlayers: string[]): PickIteration {
  const playerIDs = [...new Set(lists.flatMap(list => list.characters.flatMap(character => character.ownerID)))]
    .filter(playerID => !selectedPlayers.includes(playerID));
  const playerWeights = Object.fromEntries(playerIDs.map((playerID) => [playerID, getGameScoreWeight(playerScores[playerID])]));
  const gameRanges = toGameRanges(playerWeights);

  const roll = Math.floor(Math.random() * 1000);
  const selectedPlayer = playerIDs.find(playerID => {
    const {start, end} = gameRanges[playerID];
    return start <= roll && roll <= end;
  })!;
  return {
    lists,
    playerScores,
    gameRanges,
    roll,
    selectedPlayer
  };
}