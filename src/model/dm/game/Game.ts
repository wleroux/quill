import {ContractID} from "@/model/dm/contract/Contract";
import {CharacterID} from "@/model/character/CharacterID";

export type GameStatus = "PENDING" | "STARTED" | "SUCCESS" | "FAILURE" | "CANCELED";

export type Game = {
  contractID: ContractID;
  status: GameStatus;
  gameMasterID: string;
  characterIDs: CharacterID[];
};
