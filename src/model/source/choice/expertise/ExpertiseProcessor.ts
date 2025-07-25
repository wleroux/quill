import {Character} from "@/model/character/Character";
import {ExpertiseChoice} from "@/model/source/choice/expertise/ExpertiseChoice";
import {ExpertiseDecision} from "@/model/source/choice/expertise/ExpertiseDecision";
import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export const expertiseProcessor: Processor<ExpertiseChoice, ExpertiseDecision | undefined> = (value: Character, choice: ExpertiseChoice, decision: ExpertiseDecision | undefined) => {
  // VALIDATE ENABLED
  if (choice.data.enabled && !choice.data.enabled(undefined, value))
    return ValidResult.of(value);

  if (decision === undefined) {
    // VALIDATE REQUIRED
    return ErrorResult.of([new ProcessorError("REQUIRED", [choice.data.choiceID], choice, decision)]);
  } else {
    if (value.skills[decision.data.skillID] !== "proficient")
      return ErrorResult.of([new ProcessorError("NOT PROFICIENT", [choice.data.choiceID], choice, decision)]);
    if (choice.data.condition !== undefined && !choice.data.condition(decision.data.skillID, value))
      return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);
    return ValidResult.of({...value, skills: {...value.skills, [decision.data.skillID]: "expertise"}});
  }
};
