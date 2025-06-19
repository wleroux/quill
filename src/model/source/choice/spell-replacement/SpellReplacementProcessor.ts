import {REPOSITORY} from "@/model/source/index";
import {SpellReplacementChoice} from "@/model/source/choice/spell-replacement/SpellReplacementChoice";
import {SpellReplacementDecision} from "@/model/source/choice/spell-replacement/SpellReplacementDecision";
import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export const spellReplacementProcessor: Processor<SpellReplacementChoice, SpellReplacementDecision | undefined> = (value, choice, decision) => {
  // VALIDATE ENABLED
  if (choice.data.enabled && !choice.data.enabled(undefined, value))
    return ValidResult.of(value);

  if (decision === undefined) {
    // VALIDATE REQUIRED
    if (choice.data.required?.(undefined, value) ?? true)
      return ErrorResult.of([new ProcessorError("MISSING DECISION", [choice.data.choiceID], choice, decision)]);
    return ValidResult.of(value);
  } else {
    // VALIDATE SOURCE
    if (choice.data.sourceID !== undefined && !choice.data.sourceID(decision.data.sourceID, value))
      return ErrorResult.of([new ProcessorError("INVALID SOURCE", [choice.data.choiceID], choice, decision)]);

    // VALIDATE SPELL
    if (Object.values(value.spells).includes(decision.data.spellID))
      return ErrorResult.of([new ProcessorError("SPELL ALREADY KNOWN", [choice.data.choiceID], choice, decision)]);
    if (choice.data.condition !== undefined && !choice.data.condition(decision.data.spellID, value))
      return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);
    const spell = REPOSITORY.SPELLS[decision.data.spellID];
    if (spell === undefined)
      return ErrorResult.of([new ProcessorError("INVALID SPELL", [choice.data.choiceID], choice, decision)]);
    if (spell.prerequisite !== undefined && !spell.prerequisite(decision.data.spellID, value))
      return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);

    return ValidResult.of({
      ...value,
      spells: {
        ...value.spells,
        [decision.data.sourceID]: decision.data.spellID
      }
    });
  }
}
