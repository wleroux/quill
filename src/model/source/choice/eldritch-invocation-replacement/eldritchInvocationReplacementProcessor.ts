import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";
import {Character} from "@/model/character/Character";
import {REPOSITORY} from "@/model/source/index";
import {choiceProcessor} from "@/model/source/choice/ChoiceProcessor";
import {EldritchInvocationReplacementChoice} from "@/model/source/choice/eldritch-invocation-replacement/EldritchInvocationReplacementChoice";
import {EldritchInvocationReplacementDecision} from "@/model/source/choice/eldritch-invocation-replacement/EldritchInvocationReplacementDecision";

export const eldritchInvocationReplacementProcessor: Processor<EldritchInvocationReplacementChoice, EldritchInvocationReplacementDecision | undefined> = (value: Character, choice, decision) => {
  // VERIFY ENABLED
  if (choice.data.enabled && !choice.data.enabled(undefined, value)) return ValidResult.of(value);

  if (decision === undefined) {
    return ErrorResult.of([new ProcessorError("REQUIRED DECISION", [choice.data.choiceID], choice, decision)]);
  } else {
    // VALIDATE SOURCE
    if ((value.eldritchInvocations ?? {})[decision.data.sourceID] === undefined)
      return ErrorResult.of([new ProcessorError("INVALID SOURCE", [choice.data.choiceID], choice, decision)]);
    value = {
      ...value,
      eldritchInvocations: {
        ...value.eldritchInvocations
      }
    };
    delete value.eldritchInvocations![decision.data.sourceID];
    // Check if all the eldritch invocations are still valid once source is removed
    if (!Object.values(value.eldritchInvocations ?? {}).every(i => {
      const invocation = REPOSITORY.ELDRITCH_INVOCATIONS[i.eldritchInvocationID];
      return invocation.prerequisite === undefined || invocation.prerequisite(undefined, value);
    })) {
      return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);
    }

    // VALIDATE ELDRITCH INVOCATION
    if (choice.data.condition && !choice.data.condition(decision.data.eldritchInvocationID, value))
      return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);
    const invocation = REPOSITORY.ELDRITCH_INVOCATIONS[decision.data.eldritchInvocationID];
    if (!invocation)
      return ErrorResult.of([new ProcessorError("INVALID ELDRITCH INVOCATION", [choice.data.choiceID], choice, decision)]);
    if (invocation.prerequisite && !invocation.prerequisite(undefined, value))
      return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);
    if (invocation.repeatable === undefined || !invocation.repeatable) {
      if (Object.values(value.eldritchInvocations ?? {}).some(i => i.eldritchInvocationID === decision.data.eldritchInvocationID))
        return ErrorResult.of([new ProcessorError("NON-REPEATABLE ELDRITCH INVOCATION", [choice.data.choiceID], choice, decision)]);
    }

    // VALIDATE ELDRITCH INVOCATION CHOICES
    value = {...value, eldritchInvocations: {
      ...value.eldritchInvocations,
      [decision.data.sourceID]: {eldritchInvocationID: decision.data.eldritchInvocationID, decisions: decision.data.decisions}
    }};
    for (const subchoice of invocation.choices) {
      const subdecision = decision.data.decisions[subchoice.data.choiceID];
      const result = choiceProcessor(value, subchoice, subdecision);
      if (!result.valid) return result;
      value = result.value;
    }
    return ValidResult.of(value);
  }
};
