import {REPOSITORY} from "@/model/source/index";
import {FeatChoice} from "./FeatChoice";
import {FeatDecision} from "./FeatDecision";
import {choiceProcessor} from "@/model/source/choice/ChoiceProcessor";
import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export const featProcessor: Processor<FeatChoice, FeatDecision | undefined> = (value, choice, decision) => {
  // VALIDATE ENABLED
  if (choice.data.enabled && !choice.data.enabled(undefined, value)) return ValidResult.of(value);

  if (decision === undefined) {
    // VALIDATE REQUIRED
    return ErrorResult.of([new ProcessorError("REQUIRED", [choice.data.choiceID], choice, decision)]);
  } else {
    // VALIDATE FEAT
    if (choice.data.condition !== undefined && !choice.data.condition(decision.data.featID, value))
      return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);
    const feat = REPOSITORY.FEATS[decision.data.featID];
    if (feat === undefined)
      return ErrorResult.of([new ProcessorError("INVALID FEAT", [choice.data.choiceID], choice, decision)]);
    if (feat.prerequisite !== undefined && !feat.prerequisite.evaluate(value, value))
      return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);
    if (value.feats.some(feat => feat.featID === decision.data.featID) && !feat.repeatable)
      return ErrorResult.of([new ProcessorError("NON-REPEATABLE FEAT", [choice.data.choiceID], choice, decision)]);

    // VALIDATE FEAT CHOICES
    value = {
      ...value,
      feats: [...value.feats, decision.data],
      choices: {...value.choices, [choice.data.choiceID]: decision.data.featID}
    };
    for (const featChoice of feat.choices) {
      const choiceDecision = decision.data.decisions[featChoice.data.choiceID];
      const result = choiceProcessor(value, featChoice, choiceDecision).mapError(errors => errors.map(error => error.extend(choice.data.choiceID)));
      if (!result.valid) return result;
      value = result.value;
    }
    return ValidResult.of(value);
  }
}
