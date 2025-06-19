import {SimpleChoice} from "@/model/source/choice/simple/SimpleChoice";
import {SimpleDecision} from "@/model/source/choice/simple/SimpleDecision";
import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export const simpleProcessor: Processor<SimpleChoice, SimpleDecision | undefined> = (value, choice, decision) => {
  // VALIDATE ENABLED
  if (choice.data.enabled && !choice.data.enabled(undefined, value)) return ValidResult.of(value);

  if (decision === undefined) {
    // VALIDATE REQUIRED
    return ErrorResult.of([new ProcessorError("REQUIRED", [choice.data.choiceID], choice, decision)]);
  } else {
    // VALIDATE CHOICE
    if (value.choices[choice.data.choiceID] !== undefined)
      return ErrorResult.of([new ProcessorError("CHOICE ALREADY MADE", [choice.data.choiceID], choice, decision)]);
    if (!choice.data.options.some(option => option.optionID === decision?.data.optionID))
      return ErrorResult.of([new ProcessorError("INVALID CHOICE", [choice.data.choiceID], choice, decision)]);

    return ValidResult.of({
      ...value,
      choices: {...value.choices, [choice.data.choiceID]: decision.data.optionID}
    });
  }
};