import {Processor, ProcessorError} from "@/model/processor/Processor";
import {FeatReplacementChoice} from "@/model/source/choice/feat-replacement/FeatReplacementChoice";
import {FeatReplacementDecision} from "@/model/source/choice/feat-replacement/FeatReplacementDecision";
import {ErrorResult, ValidResult} from "@/model/processor/Result";
import {REPOSITORY} from "@/model/source/index";

export const featReplacementProcessor: Processor<FeatReplacementChoice, FeatReplacementDecision | undefined> = (value, choice, decision) => {
  if (choice.data.enabled && !choice.data.enabled(undefined, value)) return ValidResult.of(value);
  if (decision === undefined) {
    if (choice.data.required && choice.data.required(undefined, value))
      return ErrorResult.of([new ProcessorError("Missing Decision", [choice.data.choiceID], choice, decision)]);
    return ValidResult.of(value);
  } else {
    // FeatValidation
    if (choice.data.sourceID !== undefined && !choice.data.sourceID(decision.data.sourceID, value))
      return ErrorResult.of([new ProcessorError("Invalid Source", [choice.data.choiceID], choice, decision)]);
    if (choice.data.condition !== undefined && !choice.data.condition(decision.data.featID, value))
      return ErrorResult.of([new ProcessorError("Unmet Condition", [choice.data.choiceID], choice, decision)]);

    const feat = REPOSITORY.FEATS[decision.data.featID];
    if (feat === undefined)
      return ErrorResult.of([new ProcessorError("INVALID FEAT", [choice.data.choiceID], choice, decision)]);
    if (feat.prerequisite !== undefined && !feat.prerequisite(value, value))
      return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);
    if (Object.values(value.feats).some(feat => feat.featID === decision.data.featID) && !feat.repeatable)
      return ErrorResult.of([new ProcessorError("NON-REPEATABLE FEAT", [choice.data.choiceID], choice, decision)]);

    return ValidResult.of({
      ...value,
      feats: {
        ...value.feats,
        [decision.data.sourceID]: {
          featID: decision.data.featID,
          decisions: decision.data.decisions
        }
      }
    });
  }
};