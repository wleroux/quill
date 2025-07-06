import {REPOSITORY} from "@/model/source/index";
import {MetamagicReplacementChoice} from "@/model/source/choice/metamagic-replacement/MetamagicReplacementChoice";
import {MetamagicReplacementDecision} from "@/model/source/choice/metamagic-replacement/MetamagicReplacementDecision";
import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export const metamagicReplacementProcessor: Processor<MetamagicReplacementChoice, MetamagicReplacementDecision | undefined> = (value, choice, decision) => {
  // VALIDATE ENABLED
  if (choice.data.enabled && !choice.data.enabled(undefined, value)) return ValidResult.of(value);
  if (decision === undefined) {
    // VALIDATE REQUIRED
    if (choice.data.required && !choice.data.required(undefined, value))
      return ValidResult.of(value);
    return ErrorResult.of([new ProcessorError("REQUIRED", [choice.data.choiceID], choice, decision)]);
  } else {
    // VALIDATE SOURCE
    if (choice.data.sourceID !== undefined && !choice.data.sourceID(decision.data.sourceID, value))
      return ErrorResult.of([new ProcessorError("REQUIRED", [choice.data.choiceID], choice, decision)]);

    // VALIDATE METAMAGIC
    if (Object.values(value.metamagics).includes(decision.data.metamagicID))
      return ErrorResult.of([new ProcessorError("ALREADY HAS METAMAGIC", [choice.data.choiceID], choice, decision)]);
    if (choice.data.condition !== undefined && !choice.data.condition(decision.data.metamagicID, value))
      return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);
    const metamagic = REPOSITORY.METAMAGICS[decision.data.metamagicID];
    if (metamagic === undefined)
      return ErrorResult.of([new ProcessorError("INVALID METAMAGIC", [choice.data.choiceID], choice, decision)]);

    return ValidResult.of({
      ...value,
      metamagics: {
        ...value.metamagics,
        [decision.data.sourceID]: decision.data.metamagicID
      }
    });
  }
}
