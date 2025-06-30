import {Processor, ProcessorError} from "@/model/processor/Processor";
import {REPOSITORY} from "@/model/source/index";
import {ClassID} from "@/model/source/model/Level";
import {neverTaken} from "@/model/source/condition/level/NeverTaken";
import {choiceProcessor} from "@/model/source/choice/ChoiceProcessor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";
import {ClassChoice} from "@/model/character/level/class/ClassChoice";
import {ClassDecision} from "@/model/character/level/class/ClassDecision";
import {Character} from "@/model/character/Character";

export function canMulticlass(levelIDs: ClassID[], value: Character): boolean {
  if (levelIDs.length >= 2) return false;

  for (let levelID of levelIDs) {
    // get root level
    let level = REPOSITORY.CLASSES[levelID];
    do {
      if (level.replace) levelID = level.replace;
      level = REPOSITORY.CLASSES[levelID];
    } while (level.replace !== undefined);

    if (level.prerequisite && !level.prerequisite(undefined, value)) {
      return false;
    }
  }
  return true;
}

export function addLevel(levels: ClassID[], levelID: ClassID): ClassID[] {
  const level = REPOSITORY.CLASSES[levelID];
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

export const classProcessor: Processor<ClassChoice, ClassDecision | undefined> = (value, choice, decision) => {
  // Validate Optional
  if (decision === undefined) {
    return ErrorResult.of([new ProcessorError("MISSING DECISION", [choice.data.choiceID], choice, decision)]);
  }

  // Validate Level
  const dndClass = REPOSITORY.CLASSES[decision.data.classID];
  if (dndClass === undefined)
    return ErrorResult.of([new ProcessorError("INVALID LEVEL", [choice.data.choiceID], choice, decision)]);
  if (!neverTaken(decision.data.classID, value))
    return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);
  if (dndClass.replace && !value.levels.includes(dndClass.replace))
    return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);
  if (dndClass.prerequisite && !dndClass.prerequisite(undefined, value))
    return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);
  if (choice.data.condition && !choice.data.condition(decision.data.classID, value))
    return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);

  // Validate Multi-classing
  if (!canMulticlass(value.levels, value)) {
    if (REPOSITORY.CLASSES[decision.data.classID].replace === undefined)
      return ErrorResult.of([new ProcessorError("CANNOT MULTICLASS", [choice.data.choiceID], choice, decision)]);
  }

  // Validate Level Choices
  value = {...value, level: value.level + 1, levels: addLevel(value.levels, decision.data.classID)}
  for (const levelChoice of dndClass.choices) {
    const choiceDecision = decision.data.decisions[levelChoice.data.choiceID];
    const result = choiceProcessor(value, levelChoice, choiceDecision).mapError(errors => errors.map(error => error.extend(choice.data.choiceID)));
    if (!result.valid) return result;
    value = result.value;
  }
  return ValidResult.of(value);
}
