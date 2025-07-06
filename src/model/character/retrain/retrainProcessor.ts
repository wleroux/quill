import {Processor} from "@/model/processor/Processor";
import {RetrainChoice} from "@/model/character/retrain/RetrainChoice";
import {RetrainDecision} from "@/model/character/retrain/RetrainDecision";
import {ValidResult} from "@/model/processor/Result";
import {INITIAL_CHARACTER} from "@/model/character/Character";
import {nameProcessor} from "@/model/character/name/NameProcessor";
import {DefaultNameChoice} from "@/model/character/name/NameChoice";
import {startingStatProcessor} from "@/model/character/create/starting-stat/StartingStatProcessor";
import {DefaultStartingStatChoice} from "@/model/character/create/starting-stat/StartingStatChoice";
import {speciesProcessor} from "@/model/character/create/species/SpeciesProcessor";
import {DefaultSpeciesChoice} from "@/model/character/create/species/SpeciesChoice";
import {backgroundProcessor} from "@/model/character/create/background/BackgroundProcessor";
import {DefaultBackgroundChoice} from "@/model/character/create/background/BackgroundChoice";
import {levelProcessor} from "../level/LevelProcessor";
import {DefaultLevelChoice} from "@/model/character/level/LevelChoice";
import {retireProcessor} from "@/model/character/retire/RetireProcessor";
import {DefaultRetireChoice} from "@/model/character/retire/RetireChoice";

export const retrainProcessor: Processor<RetrainChoice, RetrainDecision> = (value, choice, decision) => {
  let result = ValidResult.of(INITIAL_CHARACTER(value.id, value.ownerID));
  result = result.flatMap(value => nameProcessor(value, DefaultNameChoice, decision.data.name));
  result = result.flatMap(value => startingStatProcessor(value, DefaultStartingStatChoice, decision.data.startingStat));
  result = result.flatMap(value => speciesProcessor(value, DefaultSpeciesChoice, decision.data.species));
  result = result.flatMap(value => backgroundProcessor(value, DefaultBackgroundChoice, decision.data.background));
  result = result.flatMap(value => decision.data.levels.reduce(
    (result, progress, currentIndex) => result.flatMap(value => levelProcessor(value, DefaultLevelChoice[currentIndex], progress)),
    ValidResult.of(value)
  ));
  result = result.flatMap(value => {
    if (decision.data.retire)
      return retireProcessor(value, DefaultRetireChoice, decision.data.retire);
    return ValidResult.of(value);
  });
  return result;
}
