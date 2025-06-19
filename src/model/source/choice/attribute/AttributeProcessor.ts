import {AttributeChoice} from "@/model/source/choice/attribute/AttributeChoice";
import {AttributeDecision} from "@/model/source/choice/attribute/AttributeDecision";
import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export const attributeProcessor: Processor<AttributeChoice, AttributeDecision | undefined> = (character, choice, decision) => {
  // VALIDATE ENABLED
  if (choice.data.enabled && !choice.data.enabled(undefined, character))
    return ValidResult.of(character);

  if (decision === undefined) {
    // VALIDATE REQUIRED
    return ErrorResult.of([new ProcessorError("MISSING DECISION", [choice.data.choiceID], choice, decision)]);
  } else {
    // VALIDATE SELECTION
    if (character.stats[decision.data.attributeID] >= 20)
      return ErrorResult.of([new ProcessorError("HAS MAX VALUE", [choice.data.choiceID], choice, decision)]);
    if (choice.data.condition && !choice.data.condition(decision.data.attributeID, character))
      return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);

    return ValidResult.of({
      ...character,
      stats: {
        ...character.stats,
        [decision.data.attributeID]: Math.min(character.stats[decision.data.attributeID] + 1, 20)
      }
    });
  }
}
