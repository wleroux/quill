import {Processor, ProcessorError} from "@/model/processor/Processor";
import {EldritchInvocationChoice} from "@/model/source/choice/eldritch-invocation/EldritchInvocationChoice";
import {EldritchInvocationDecision} from "@/model/source/choice/eldritch-invocation/EldritchInvocationDecision";
import {ErrorResult, ValidResult} from "@/model/processor/Result";
import {Character} from "@/model/character/Character";
import {REPOSITORY} from "@/model/source/index";
import {choicesReducer} from "@/model/source/choice/ChoiceProcessor";

export const eldritchInvocationProcessor: Processor<EldritchInvocationChoice, EldritchInvocationDecision | undefined> = (value: Character, choice, decision) => {
  // VERIFY ENABLED
  if (choice.data.enabled && !choice.data.enabled(undefined, value)) return ValidResult.of(value);

  if (decision === undefined) {
    return ErrorResult.of([new ProcessorError("REQUIRED DECISION", [choice.data.choiceID], choice, decision)]);
  } else {
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
    return invocation.choices.reduce(choicesReducer(decision.data.decisions), ValidResult.of({...value, eldritchInvocations: {
      ...value.eldritchInvocations,
      [choice.data.sourceID]: {eldritchInvocationID: decision.data.eldritchInvocationID, decisions: decision.data.decisions}
    }}));
  }
};
