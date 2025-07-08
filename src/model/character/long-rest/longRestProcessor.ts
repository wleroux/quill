import {Processor} from "@/model/processor/Processor";
import {LongRestChoice} from "@/model/character/long-rest/LongRestChoice";
import {LongRestDecision} from "@/model/character/long-rest/LongRestDecision";
import {ValidResult} from "@/model/processor/Result";
import {choiceProcessor} from "@/model/source/choice/ChoiceProcessor";
import {Character, INITIAL_CHARACTER} from "@/model/character/Character";
import {startingStatProcessor} from "@/model/character/create/starting-stat/StartingStatProcessor";
import {DefaultStartingStatChoice} from "@/model/character/create/starting-stat/StartingStatChoice";
import {DefaultNameChoice} from "@/model/character/name/NameChoice";
import {nameProcessor} from "@/model/character/name/NameProcessor";
import {speciesProcessor} from "@/model/character/create/species/SpeciesProcessor";
import {DefaultSpeciesChoice} from "@/model/character/create/species/SpeciesChoice";
import {backgroundProcessor} from "@/model/character/create/background/BackgroundProcessor";
import {levelProcessor} from "@/model/character/level/LevelProcessor";
import {DefaultLevelChoice} from "@/model/character/level/LevelChoice";
import {DefaultBackgroundChoice} from "@/model/character/create/background/BackgroundChoice";
import {retireProcessor} from "@/model/character/retire/RetireProcessor";
import {DefaultRetireChoice} from "@/model/character/retire/RetireChoice";
import {REPOSITORY} from "@/model/source/index";
import {getAllClassIDs} from "@/model/source/condition/level/NeverTaken";

export function getLongRestChoice(value: Character): LongRestChoice {
  return {
    type: "long-rest",
    data: {
      choiceID: "long-rest",
      choices: getAllClassIDs(value)
        .reverse()
        .flatMap((classID) => REPOSITORY.CLASSES[classID].longRest ?? [])
    }
  };
}

export const longRestProcessor: Processor<LongRestChoice, LongRestDecision | undefined> = (value, choice, decision) => {
  if (decision === undefined) {
    return ValidResult.of(value);
  } else {
    // When long resting, reprocess everything (to get rid of last long rest)
    let result = ValidResult.of(INITIAL_CHARACTER(value.id, value.ownerID));
    result = result.flatMap(v => nameProcessor(v, DefaultNameChoice, {type: "name", data: {name: value.name}}));
    result = result.flatMap(v => startingStatProcessor(v, DefaultStartingStatChoice, {type: "starting-stat", data: value.startingStat}));
    result = result.flatMap(v => speciesProcessor(v, DefaultSpeciesChoice, {type: "species", data: value.species}));
    result = result.flatMap(v => backgroundProcessor(v, DefaultBackgroundChoice, {type: "background", data: value.background}));
    result =
      value.progress.filter(progress => progress.type === "level")
        .reduce((result, progress, index) => result.flatMap(v => levelProcessor(v, DefaultLevelChoice[index], progress)), result);
    result =
      value.progress.filter(progress => progress.type === "retire")
        .reduce((result, progress) => result.flatMap(v => retireProcessor(v, DefaultRetireChoice, progress)), result);

    // Process Long Rest
    result = choice.data.choices.reduce((result, subchoice) => {
      const subdecision = decision.data.decisions[subchoice.data.choiceID];
      return result.flatMap(value => choiceProcessor(value, subchoice, subdecision));
    }, result.flatMap(value => ValidResult.of({
      ...value,
      longRest: decision.data.decisions
    } satisfies Character)));
    return result;
  }
};
