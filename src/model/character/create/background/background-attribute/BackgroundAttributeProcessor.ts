import {BackgroundAttributeChoice} from "@/model/character/create/background/background-attribute/BackgroundAttributeChoice";
import {BackgroundAttributeDecision} from "@/model/character/create/background/background-attribute/BackgroundAttributeDecision";
import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export const backgroundAttributeProcessor: Processor<BackgroundAttributeChoice, BackgroundAttributeDecision | undefined> = (character, choice, decision) => {
  // VALIDATE ENABLED
  if (choice.data.enabled && !choice.data.enabled(undefined, character)) return ValidResult.of(character);

  if (decision === undefined) {
    // VALIDATE REQUIRED
    return ErrorResult.of([new ProcessorError("MISSING DECISION", [choice.data.choiceID], choice, decision)]);
  } else {
    // VALIDATE ATTRIBUTES
    if (choice.data.condition !== undefined) {
      if (!choice.data.condition(decision.data.attributeID1, character))
        return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);
      if (!choice.data.condition(decision.data.attributeID2, character))
        return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);
      if (!choice.data.condition(decision.data.attributeID3, character))
        return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);
    }
    if (decision.data.attributeID1 === undefined)
      return ErrorResult.of([new ProcessorError("MISSING ATTRIBUTE", [choice.data.choiceID], choice, decision)]);
    if (decision.data.attributeID2 === undefined)
      return ErrorResult.of([new ProcessorError("MISSING ATTRIBUTE", [choice.data.choiceID], choice, decision)]);
    if (decision.data.attributeID3 === undefined)
      return ErrorResult.of([new ProcessorError("MISSING ATTRIBUTE", [choice.data.choiceID], choice, decision)]);
    if (decision.data.attributeID1 === decision.data.attributeID2 && decision.data.attributeID1 === decision.data.attributeID3)
      return ErrorResult.of([new ProcessorError("CANNOT SELECT ATTRIBUTE THREE TIMES", [choice.data.choiceID], choice, decision)]);

    let stats = {...character.stats};
    stats[decision.data.attributeID1] = Math.min(stats[decision.data.attributeID1] + 1, 20);
    stats[decision.data.attributeID2] = Math.min(stats[decision.data.attributeID2] + 1, 20);
    stats[decision.data.attributeID3] = Math.min(stats[decision.data.attributeID3] + 1, 20);
    return ValidResult.of({...character, stats});
  }
}
