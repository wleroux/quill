import {MetamagicChoice} from "@/model/source/choice/metamagic/MetamagicChoice";
import {MetamagicDecision} from "@/model/source/choice/metamagic/MetamagicDecision";
import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export const metamagicProcessor: Processor<MetamagicChoice, MetamagicDecision | undefined> = (value, choice, decision) => {
  // VALIDATE ENABLED
  if (choice.data.enabled && !choice.data.enabled(undefined, value)) return ValidResult.of(value);

  if (decision === undefined) {
    // VALIDATE REQUIRED
    return ErrorResult.of([new ProcessorError("REQUIRED", [choice.data.choiceID], choice, decision)]);
  } else {
    // VALIDATE METAMAGIC
    if (Object.values(value.metamagics).includes(decision.data.metamagicID))
      return ErrorResult.of([new ProcessorError("ALREADY HAS METAMAGIC", [choice.data.choiceID], choice, decision)]);
    if (choice.data.condition && !choice.data.condition(decision.data.metamagicID, value))
      return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);

    return ValidResult.of({...value, metamagics: {...value.metamagics, [choice.data.choiceID]: decision.data.metamagicID}});
  }
};
