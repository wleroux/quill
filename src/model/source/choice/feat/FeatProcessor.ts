import {REPOSITORY} from "@/model/source/index";
import {FeatChoice} from "./FeatChoice";
import {FeatDecision} from "./FeatDecision";
import {choicesReducer} from "@/model/source/choice/ChoiceProcessor";
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
    if (feat.prerequisite !== undefined && !feat.prerequisite(value, value))
      return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);
    if (Object.values(value.feats).some(feat => feat.featID === decision.data.featID) && !feat.repeatable)
      return ErrorResult.of([new ProcessorError("NON-REPEATABLE FEAT", [choice.data.choiceID], choice, decision)]);

    // VALIDATE FEAT CHOICES
    return feat.choices.reduce(choicesReducer(decision.data.decisions), ValidResult.of({
      ...value,
      feats: {
        ...value.feats,
        [choice.data.choiceID]: decision.data,
      },
      choices: {...value.choices, [choice.data.choiceID]: decision.data.featID}
    }));
  }
}
