import {SpellChoice} from "@/model/source/choice/spell/SpellChoice";
import {SpellDecision} from "@/model/source/choice/spell/SpellDecision";
import {REPOSITORY} from "@/model/source/index";
import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export const spellProcessor: Processor<SpellChoice, SpellDecision | undefined> = (value, choice, decision) => {
  // VALIDATE ENABLED
  if (choice.data.enabled && !choice.data.enabled(undefined, value)) return ValidResult.of(value);

  if (decision === undefined) {
    // VALIDATE REQUIRED
    return ErrorResult.of([new ProcessorError("REQUIRED", [choice.data.choiceID], choice, decision)]);
  } else {
    // VALIDATE SPELL
    if (Object.values(value.spells).includes(decision.data.spellID))
      return ErrorResult.of([new ProcessorError("ALREADY HAS SPELL", [choice.data.choiceID], choice, decision)]);
    if (choice.data.condition !== undefined && !choice.data.condition(decision.data.spellID, value))
      return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);
    const spell = REPOSITORY.SPELLS[decision.data.spellID];
    if (spell === undefined)
      return ErrorResult.of([new ProcessorError("INVALID SPELL", [choice.data.choiceID], choice, decision)]);
    if (spell.prerequisite !== undefined && !spell.prerequisite(undefined, value))
      return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);

    return ValidResult.of({
      ...value,
      spells: {
        ...value.spells,
        [choice.data.sourceID]: decision.data.spellID
      }
    });
  }
};
