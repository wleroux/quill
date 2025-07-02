import {LevelChoice} from "@/model/character/level/LevelChoice";
import {NameChoice} from "@/model/character/name/NameChoice";
import {RetireChoice} from "@/model/character/retire/RetireChoice";

export type ProgressChoice =
  | LevelChoice
  | NameChoice
  | RetireChoice
  ;
