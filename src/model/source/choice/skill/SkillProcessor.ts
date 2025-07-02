import {SkillChoice} from "@/model/source/choice/skill/SkillChoice";
import {SkillDecision} from "@/model/source/choice/skill/SkillDecision";
import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export const skillProcessor: Processor<SkillChoice, SkillDecision | undefined> = (value, choice, decision) => {
  if (choice.data.enabled && !choice.data.enabled(undefined, value))
    return ValidResult.of(value);

  // VALIDATE OPTIONAL
  if (decision === undefined)
    return ErrorResult.of([new ProcessorError("MISSING DECISION", [choice.data.choiceID], choice, decision)]);

  // VALIDATE SKILL
  if (value.skills[decision.data.skillID] !== "untrained")
    return ErrorResult.of([new ProcessorError("ALREADY HAS SKILL", [choice.data.choiceID], choice, decision)]);
  if (choice.data.condition !== undefined && !choice.data.condition(decision.data.skillID, value))
    return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);
  return ValidResult.of({...value, skills: {...value.skills, [decision.data.skillID]: "proficient"}});
};
