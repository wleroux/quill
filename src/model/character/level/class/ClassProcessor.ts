import {Processor, ProcessorError} from "@/model/processor/Processor";
import {REPOSITORY} from "@/model/source/index";
import {ClassID} from "@/model/source/model/Level";
import {neverTaken} from "@/model/source/condition/level/NeverTaken";
import {choiceProcessor} from "@/model/source/choice/ChoiceProcessor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";
import {ClassChoice} from "@/model/character/level/class/ClassChoice";
import {ClassDecision} from "@/model/character/level/class/ClassDecision";
import {Character} from "@/model/character/Character";

export function canMulticlass(classes: ClassID[], value: Character): boolean {
  if (classes.length >= 2) return false;
  for (let classID of classes) {
    // get root level
    let _class = REPOSITORY.CLASSES[classID];
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
    if (!value.classIDs.some(classID => classID === _class.replace))
      return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);
    if (value.classIDs.some(classID => REPOSITORY.CLASSES[classID].replace === _class.replace))
      return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);
  }
  if (_class.prerequisite && !_class.prerequisite(undefined, value))
    return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);
  if (choice.data.condition && !choice.data.condition(decision.data.classID, value))
    return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);

  // Validate Multi-classing
  if (!canMulticlass(value.classIDs, value)) {
    if (REPOSITORY.CLASSES[decision.data.classID].replace === undefined)
      return ErrorResult.of([new ProcessorError("CANNOT MULTICLASS", [choice.data.choiceID], choice, decision)]);
  }

  // Validate Level Choices
  if (value.classIDs.includes(_class.replace)) {
    value = {...value, classIDs: [
      ...value.classIDs.slice(0, value.classIDs.indexOf(_class.replace)),
      decision.data.classID,
      ...value.classIDs.slice(value.classIDs.indexOf(_class.replace) + 1),
    ]};
  } else {
    value = {...value, classIDs: [
      ...value.classIDs,
      decision.data.classID
    ]};
  }
  for (const levelChoice of _class.choices) {
    const choiceDecision = decision.data.decisions[levelChoice.data.choiceID];
    const result = choiceProcessor(value, levelChoice, choiceDecision).mapError(errors => errors.map(error => error.extend(choice.data.choiceID)));
    if (!result.valid) return result;
    value = result.value;
  }
  return ValidResult.of(value);
}
