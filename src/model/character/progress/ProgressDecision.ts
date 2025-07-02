import {LevelDecision} from "@/model/character/level/LevelDecision";
import {NameDecision} from "@/model/character/name/NameDecision";
import {RetireDecision} from "@/model/character/retire/RetireDecision";

export type ProgressDecision =
  | LevelDecision
  | NameDecision
  | RetireDecision
  ;
