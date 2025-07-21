import {SpeciesDecision} from "@/model/character/create/species/SpeciesDecision";
import {REPOSITORY} from "@/model/source/index";
import {choicesReducer} from "@/model/source/choice/ChoiceProcessor";
import {SpeciesChoice} from "@/model/character/create/species/SpeciesChoice";
import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export const speciesProcessor: Processor<SpeciesChoice, SpeciesDecision | undefined> = (value, choice, decision) => {
  if (decision === undefined)
    return ErrorResult.of([new ProcessorError("MISSING DECISION", [choice.data.choiceID], choice, decision)]);

  // Validate Specie
  if (choice.data.condition && !choice.data.condition(decision.data.speciesID, value))
    return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);
  const specie = REPOSITORY.SPECIES[decision.data.speciesID];
  if (specie === undefined)
    return ErrorResult.of([new ProcessorError("INVALID SPECIE", [choice.data.choiceID], choice, decision)]);
  if (specie.prerequisite && !specie.prerequisite(undefined, value))
    return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);

  // Validate Specie Choices
  return specie.choices.reduce(choicesReducer(decision.data.decisions), ValidResult.of({...value, species: decision.data}));
}
