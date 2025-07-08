import {Character, INITIAL_CHARACTER} from "@/model/character/Character";
import {ErrorResult, Result, ValidResult} from "@/model/processor/Result";
import {ProcessorError} from "@/model/processor/Processor";
import {startingStatProcessor} from "@/model/character/create/starting-stat/StartingStatProcessor";
import {DefaultStartingStatChoice} from "@/model/character/create/starting-stat/StartingStatChoice";
import {speciesProcessor} from "@/model/character/create/species/SpeciesProcessor";
import {DefaultSpeciesChoice} from "@/model/character/create/species/SpeciesChoice";
import {backgroundProcessor} from "@/model/character/create/background/BackgroundProcessor";
import {DefaultBackgroundChoice} from "@/model/character/create/background/BackgroundChoice";
import {getProgressChoice, progressProcessor} from "@/model/character/progress/progressProcessor";

export function validateCharacter(initialValue: Character): Result<Character, ProcessorError[]> {
  try {
    let result = ValidResult.of(INITIAL_CHARACTER(initialValue.id, initialValue.ownerID));
    result = result.flatMap(value => startingStatProcessor(value, DefaultStartingStatChoice, {
      type: "starting-stat",
      data: initialValue.startingStat
    }));
    result = result.flatMap(value => speciesProcessor(value, DefaultSpeciesChoice, {
      type: "species",
      data: initialValue.species
    }));
    result = result.flatMap(value => backgroundProcessor(value, DefaultBackgroundChoice, {
      type: "background",
      data: initialValue.background
    }));
    for (const progress of initialValue.progress) {
      result = result.flatMap(value => progressProcessor(value, getProgressChoice(value, progress), progress));
    }

    return result;
  } catch (e) {
    // If an exception, just error out completely!
    return ErrorResult.of([new ProcessorError("ERROR", [], undefined, undefined)]);
  }
}
