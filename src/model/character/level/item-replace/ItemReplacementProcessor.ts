import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";
import {REPOSITORY} from "@/model/source/index";
import {ItemReplacementDecision} from "@/model/character/level/item-replace/ItemReplacementDecision";
import {ItemReplacementChoice} from "@/model/character/level/item-replace/ItemReplacementChoice";

export const itemReplacementProcessor: Processor<ItemReplacementChoice, ItemReplacementDecision | undefined> = (value, choice, decision) => {
  // VALIDATE ENABLED
  if (choice.data.enabled && !choice.data.enabled(undefined, value)) return ValidResult.of(value);

  if (decision === undefined) {
    // VALIDATE REQUIRED
    if (choice.data.required === undefined || choice.data.required(undefined, value))
      return ErrorResult.of([new ProcessorError("REQUIRED", [choice.data.choiceID], choice, decision)]);
    return ValidResult.of(value);
  } else {
    // VALIDATE SOURCE ITEM
    const sourceItemDecision = value.items[decision.data.sourceID];
    if (!sourceItemDecision) return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);
    const sourceItem = REPOSITORY.ITEMS[sourceItemDecision.itemID];
    if (!sourceItem) return ErrorResult.of([new ProcessorError("UNKNOWN ITEM", [choice.data.choiceID], choice, decision)]);

    if (choice.data.condition !== undefined && !choice.data.condition(sourceItemDecision.itemID, value))
      return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);

    const item = REPOSITORY.ITEMS[decision.data.itemID];
    if (!item) return ErrorResult.of([new ProcessorError("UNKNOWN ITEM", [choice.data.choiceID], choice, decision)]);
    if (choice.data.condition !== undefined && !choice.data.condition(decision.data.itemID, value))
      return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);


    if (sourceItem.rarity !== item.rarity || sourceItem.tier !== item.tier)
      return ErrorResult.of([new ProcessorError("RARITY MISMATCH", [choice.data.choiceID], choice, decision)]);

    return ValidResult.of({
      ...value,
      items: {
        ...value.items,
        [decision.data.sourceID]: {
          itemID: decision.data.itemID,
          decisions: decision.data.decisions
        }
      }
    });
  }
}