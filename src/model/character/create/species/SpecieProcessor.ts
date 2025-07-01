import {SpeciesDecision} from "@/model/character/create/species/SpeciesDecision";
import {REPOSITORY} from "@/model/source/index";
import {choiceProcessor} from "@/model/source/choice/ChoiceProcessor";
import {SpeciesChoice} from "@/model/character/create/species/SpeciesChoice";
import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export const specieProcessor: Processor<SpeciesChoice, SpeciesDecision | undefined> = (value, choice, decision) => {
  if (decision === undefined)
    return ErrorResult.of([new ProcessorError("MISSING DECISION", [choice.data.choiceID], choice, decision)]);

  // Validate Specie
  if (choice.data.condition && !choice.data.condition(decision.data.specieID, value))
    return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);
  const specie = REPOSITORY.SPECIES[decision.data.specieID];
  if (specie === undefined)
    return ErrorResult.of([new ProcessorError("INVALID SPECIE", [choice.data.choiceID], choice, decision)]);
  if (specie.prerequisite && !specie.prerequisite(undefined, value))
    return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);

  // Validate Specie Choices
  value = {...value, specie: decision.data};
  for (const specieChoice of specie.choices) {
    const choiceDecision = decision.data.decisions[specieChoice.data.choiceID];
    const result = choiceProcessor(value, specieChoice, choiceDecision).mapError(errors => errors.map(error => error.extend(choice.data.choiceID)));
    if (!result.valid) return result;
    value = result.value;
  }
  return ValidResult.of(value);
}
