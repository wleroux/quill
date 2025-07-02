import {Character} from "@/model/character/Character";
import {CharacterCreationDecision} from "@/model/character/create/CharacterCreationDecision";
import {speciesProcessor} from "@/model/character/create/species/SpeciesProcessor";
import {backgroundProcessor} from "@/model/character/create/background/BackgroundProcessor";
import {nameProcessor} from "@/model/character/name/NameProcessor";
import {CharacterCreationChoice} from "@/model/character/create/CharacterCreationChoice";
import {Processor, ProcessorError} from "@/model/processor/Processor";
import {levelProcessor} from "@/model/character/level/LevelProcessor";
import {ErrorResult, Result, ValidResult} from "@/model/processor/Result";
import {startingStatProcessor} from "@/model/character/create/starting-stat/StartingStatProcessor";

export const characterCreationProcessor: Processor<CharacterCreationChoice, CharacterCreationDecision> = (value, choice, decision) => {
  let result: Result<Character, ProcessorError[]> = ValidResult.of(value);
  for (const characterChoice of choice.data.choices) {
    const choiceDecision = decision.data.decisions[characterChoice.data.choiceID];
    if (characterChoice.type === "name" && (choiceDecision === undefined || choiceDecision.type === "name")) {
      result = result.flatMap(value =>
        nameProcessor(value, characterChoice, choiceDecision)
          .mapError(errors => errors.map(error => error.extend(choice.data.choiceID)))
      );
    } else if (characterChoice.type === "species" && (choiceDecision === undefined || choiceDecision.type === "species")) {
      result = result.flatMap(value =>
        speciesProcessor(value, characterChoice, choiceDecision)
          .mapError(errors => errors.map(error => error.extend(choice.data.choiceID)))
      );
    } else if (characterChoice.type === "background" && (choiceDecision === undefined || choiceDecision.type === "background")) {
      result = result.flatMap(value =>
        backgroundProcessor(value, characterChoice, choiceDecision)
          .mapError(errors => errors.map(error => error.extend(choice.data.choiceID)))
      );
    } else if (characterChoice.type === "starting-stat" && (choiceDecision === undefined || choiceDecision.type === "starting-stat")) {
      result = result.flatMap(value =>
        startingStatProcessor(value, characterChoice, choiceDecision)
          .mapError(errors => errors.map(error => error.extend(choice.data.choiceID)))
      );
    } else if (characterChoice.type === "level" && (choiceDecision === undefined || choiceDecision.type === "level")) {
      result = result.flatMap(value =>
        levelProcessor(value, characterChoice, choiceDecision)
          .mapError(errors => errors.map(error => error.extend(choice.data.choiceID)))
      );
    } else {
      result = result.flatMap(_ => ErrorResult.of([new ProcessorError("UNKNOWN CHOICE", [choice.data.choiceID, characterChoice.data.choiceID], characterChoice, choiceDecision)]))
    }
  }
  return result;
}
