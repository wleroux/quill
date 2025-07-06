import {Processor, ProcessorError} from "@/model/processor/Processor";
import {SavingThrowChoice} from "@/model/source/choice/saving-throw/SavingThrowChoice";
import {SavingThrowDecision} from "@/model/source/choice/saving-throw/SavingThrowDecision";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export const savingThrowProcessor: Processor<SavingThrowChoice, SavingThrowDecision | undefined> = (value, choice, decision) => {
  if (choice.data.enabled && !choice.data.enabled(undefined, value)) return ValidResult.of(value);

  if (decision === undefined) {
    return ErrorResult.of([new ProcessorError("MISSING DECISION", [choice.data.choiceID], choice, decision)]);
  } else {
    if (choice.data.condition && !choice.data.condition(decision.data.attributeID, value))
      return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);
    if (value.savingThrows[decision.data.attributeID] !== "untrained")
      return ErrorResult.of([new ProcessorError("ALREADY HAS PROFICIENCY", [choice.data.choiceID], choice, decision)]);
    return ValidResult.of({
      ...value,
      savingThrows: {
        ...value.savingThrows,
        [decision.data.attributeID]: "proficient"
      }
    })
  }

}