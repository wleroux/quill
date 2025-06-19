import {Processor, ProcessorError} from "@/model/processor/Processor";
import {LevelChoice} from "@/model/source/choice/level/LevelChoice";
import {LevelDecision} from "@/model/source/choice/level/LevelDecision";
import {REPOSITORY} from "@/model/source/index";
import {LevelID} from "@/model/source/model/Level";
import {neverTaken} from "@/model/source/condition/level/NeverTaken";
import {choiceProcessor} from "@/model/source/choice/ChoiceProcessor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export function addLevel(levels: LevelID[], levelID: LevelID): LevelID[] {
  const level = REPOSITORY.LEVELS[levelID];
  if (level === undefined) return levels;

  if (level.replace) {
    const levelIndex = levels.indexOf(level.replace);
    if (levelIndex === -1) return levels;

    return [
      ...levels.slice(0, levelIndex),
      levelID,
      ...levels.slice(levelIndex + 1)
    ];
  } else {
    return [...levels, levelID];
  }
}

export const levelProcessor: Processor<LevelChoice, LevelDecision | undefined> = (value, choice, decision) => {
  // Validate Optional
  if (decision === undefined) {
    if (choice.data.required === undefined || choice.data.required(undefined, value))
      return ErrorResult.of([new ProcessorError("MISSING DECISION", [choice.data.choiceID], choice, decision)]);
    return ValidResult.of(value);
  }

  // Validate Level
  const level = REPOSITORY.LEVELS[decision.data.levelID];
  if (level === undefined)
    return ErrorResult.of([new ProcessorError("INVALID LEVEL", [choice.data.choiceID], choice, decision)]);
  if (!neverTaken(decision.data.levelID, value))
    return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);
  if (level.replace && !value.levels.includes(level.replace))
    return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);
  if (level.prerequisite && !level.prerequisite(undefined, value))
    return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);
  if (choice.data.condition && !choice.data.condition(decision.data.levelID, value))
    return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);

  // Validate Level Choices
  value = {...value, level: value.level + 1, levels: addLevel(value.levels, decision.data.levelID)}
  for (const levelChoice of level.choices) {
    const choiceDecision = decision.data.decisions[levelChoice.data.choiceID];
    const result = choiceProcessor(value, levelChoice, choiceDecision).mapError(errors => errors.map(error => error.extend(choice.data.choiceID)));
    if (!result.valid) return result;
    value = result.value;
  }
  return ValidResult.of(value);
}
