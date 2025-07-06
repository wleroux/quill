import {BackgroundDecision} from "@/model/character/create/background/BackgroundDecision";
import {SpeciesDecision} from "@/model/character/create/species/SpeciesDecision";
import {StartingStatDecision} from "@/model/character/create/starting-stat/StartingStatDecision";
import {NameDecision} from "@/model/character/name/NameDecision";
import {LevelDecision} from "@/model/character/level/LevelDecision";
import {RetireDecision} from "@/model/character/retire/RetireDecision";

export type RetrainDecision = {
  type: "retrain";
  data: {
    name: NameDecision;
    startingStat: StartingStatDecision;
    species: SpeciesDecision;
    background: BackgroundDecision;
    levels: LevelDecision[];
    retire?: RetireDecision
  }
};
