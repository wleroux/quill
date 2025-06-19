import {CharacterID} from "@/model/player/character/CharacterDecision";
import {ContractID} from "@/model/dm/contract/Contract";

export type GameStatus = "PENDING" | "STARTED" | "SUCCESS" | "FAILURE" | "CANCELED";

export type Game = {
  contractID: ContractID;
  status: GameStatus;
  gameMasterID: string;
  characterIDs: CharacterID[];
};
