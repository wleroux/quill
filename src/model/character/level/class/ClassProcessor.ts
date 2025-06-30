import {Processor, ProcessorError} from "@/model/processor/Processor";
import {REPOSITORY} from "@/model/source/index";
import {ClassID} from "@/model/source/model/Level";
import {neverTaken} from "@/model/source/condition/level/NeverTaken";
import {choiceProcessor} from "@/model/source/choice/ChoiceProcessor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";
import {ClassChoice} from "@/model/character/level/class/ClassChoice";
import {ClassDecision} from "@/model/character/level/class/ClassDecision";
import {Character} from "@/model/character/Character";

export function canMulticlass(levels: Character["levels"], value: Character): boolean {
  if (levels.length >= 2) return false;
  for (let level of levels) {
    // get root level
    let _class = REPOSITORY.CLASSES[level.classID];
    while (_class.replace) {
      _class = REPOSITORY.CLASSES[_class.replace];
    }

    // check if they still are eligible
    if (_class.prerequisite && !_class.prerequisite(undefined, value)) {
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
  const _class = REPOSITORY.CLASSES[decision.data.classID];
  if (_class === undefined)
    return ErrorResult.of([new ProcessorError("INVALID LEVEL", [choice.data.choiceID], choice, decision)]);
  if (!neverTaken(decision.data.classID, value))
    return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);
  if (_class.replace) {
    if (!value.levels.some(level => level.classID === _class.replace))
      return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);
    if (value.levels.some(level => REPOSITORY.CLASSES[level.classID].replace === _class.replace))
      return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);
  }
  if (_class.prerequisite && !_class.prerequisite(undefined, value))
    return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);
  if (choice.data.condition && !choice.data.condition(decision.data.classID, value))
    return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);

  // Validate Multi-classing
  if (!canMulticlass(value.levels, value)) {
    if (REPOSITORY.CLASSES[decision.data.classID].replace === undefined)
      return ErrorResult.of([new ProcessorError("CANNOT MULTICLASS", [choice.data.choiceID], choice, decision)]);
  }

  // Validate Level Choices
  value = {...value, levels: [...value.levels, decision.data]};
  for (const levelChoice of _class.choices) {
    const choiceDecision = decision.data.decisions[levelChoice.data.choiceID];
    const result = choiceProcessor(value, levelChoice, choiceDecision).mapError(errors => errors.map(error => error.extend(choice.data.choiceID)));
    if (!result.valid) return result;
    value = result.value;
  }
  return ValidResult.of(value);
}
