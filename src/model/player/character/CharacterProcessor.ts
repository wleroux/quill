import {Character} from "@/model/player/character/Character";
import {CharacterDecision} from "@/model/player/character/CharacterDecision";
import {specieProcessor} from "@/model/source/choice/specie/SpecieProcessor";
import {backgroundProcessor} from "@/model/source/choice/background/BackgroundProcessor";
import {nameProcessor} from "@/model/source/choice/name/NameProcessor";
import {CharacterChoice} from "@/model/player/character/CharacterChoice";
import {ProcessorError} from "@/model/processor/Processor";
import {levelProcessor} from "@/model/source/choice/level/LevelProcessor";
import {ErrorResult, Result, ValidResult} from "@/model/processor/Result";
import {startingStatProcessor} from "@/model/source/choice/starting-stat/StartingStatProcessor";

export const characterProcessor = (value: Character, choice: CharacterChoice, decision: CharacterDecision): Result<Character, ProcessorError[]> => {
  let result: Result<Character, ProcessorError[]> = ValidResult.of(value);
  for (const characterChoice of choice.data.choices) {
    const choiceDecision = decision.data.decisions[characterChoice.data.choiceID];
    if (characterChoice.type === "name" && (choiceDecision === undefined || choiceDecision.type === "name")) {
      result = result.flatMap(value =>
        nameProcessor(value, characterChoice, choiceDecision)
          .mapError(errors => errors.map(error => error.extend(choice.data.choiceID)))
      );
    } else if (characterChoice.type === "specie" && (choiceDecision === undefined || choiceDecision.type === "specie")) {
      result = result.flatMap(value =>
        specieProcessor(value, characterChoice, choiceDecision)
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
