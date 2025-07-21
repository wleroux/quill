import {ItemChoice} from "@/model/character/level/item/ItemChoice";
import {ItemDecision} from "@/model/character/level/item/ItemDecision";
import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";
import {REPOSITORY} from "@/model/source/index";
import {choicesReducer} from "@/model/source/choice/ChoiceProcessor";

export const itemProcessor: Processor<ItemChoice, ItemDecision | undefined> = (value, choice, decision) => {
  // VALIDATE ENABLED
  if (choice.data.enabled && !choice.data.enabled(undefined, value)) return ValidResult.of(value);

  if (decision === undefined) {
    // VALIDATE REQUIRED
    return ErrorResult.of([new ProcessorError("REQUIRED", [choice.data.choiceID], choice, decision)]);
  } else {
    // VALIDATE ITEM
    if (choice.data.condition !== undefined && !choice.data.condition(decision.data.itemID, value))
      return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);
    const item = REPOSITORY.ITEMS[decision.data.itemID];
    if (!item)
      return ErrorResult.of([new ProcessorError("UNKNOWN ITEM", [choice.data.choiceID], choice, decision)]);

    return item.choices.reduce(choicesReducer(decision.data.decisions), ValidResult.of({
      ...value,
      items: [...value.items, {
        itemID: decision.data.itemID,
        decisions: decision.data.decisions
      }]
    }));
  }
}