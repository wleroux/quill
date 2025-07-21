import {BackgroundChoice} from "@/model/character/create/background/BackgroundChoice";
import {BackgroundDecision} from "@/model/character/create/background/BackgroundDecision";
import {REPOSITORY} from "@/model/source/index";
import {choicesReducer} from "@/model/source/choice/ChoiceProcessor";
import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export const backgroundProcessor: Processor<BackgroundChoice, BackgroundDecision | undefined> = (value, choice, decision) => {
  // Validate Optional
  if (decision === undefined)
    return ErrorResult.of([new ProcessorError("MISSING DECISION", [choice.data.choiceID], choice, decision)]);

  // Validate Background
  if (choice.data.condition && !choice.data.condition(decision.data.backgroundID, value))
    return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);
  const background = REPOSITORY.BACKGROUNDS[decision.data.backgroundID];
  if (background === undefined)
    return ErrorResult.of([new ProcessorError("INVALID BACKGROUND", [choice.data.choiceID], choice, decision)]);
  if (background.prerequisite !== undefined && !background.prerequisite.evaluate(undefined, value))
    return ErrorResult.of([new ProcessorError("UNMET PREREQUISITE", [choice.data.choiceID], choice, decision)]);

  // Validate Background Choices
  return background.choices.reduce(choicesReducer(decision.data.decisions), ValidResult.of({...value, background: decision.data}));
}
