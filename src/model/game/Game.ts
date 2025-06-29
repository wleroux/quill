import {GameID} from "./GameID";
import {GameTier} from "./GameTier";
import {GameStatus} from "./GameStatus";
import {CharacterID} from "@/model/character/CharacterID";

export type Game = {
  id: GameID;
  revision: number;
  name: string;
  status: GameStatus;
  tier: GameTier;
  characterIDs: CharacterID[];
  gameMasterID: string;
};
