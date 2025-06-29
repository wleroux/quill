import {GameTier} from "@/model/game/GameTier";
import {GameID} from "./GameID";
import {PlayerID} from "@/model/player/PlayerID";
import {CharacterID} from "../character/CharacterID";
import {GameStatus} from "@/model/game/GameStatus";

export type CreateGameOperation = {type: "create", data: {
  id: GameID;
  gameMasterID: PlayerID;
  name: string;
  tier: GameTier;
}};
export type AddCharactersGameOperation = {type: "add-characters-to-game", data: {
  characterIDs: CharacterID[];
}};
export type RemoveCharactersGameOperation = {type: "remove-characters-from-game", data: {
  characterIDs: CharacterID[];
}};
export type CompleteGameOperation = {type: "complete-game", data: {
  status: Exclude<GameStatus, "RUNNING">
}};


export type GameOperation =
  | CreateGameOperation
  | AddCharactersGameOperation
  | RemoveCharactersGameOperation
  | CompleteGameOperation
  ;