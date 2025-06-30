import {Processor, ProcessorError} from "@/model/processor/Processor";
import {LevelChoice} from "@/model/character/level/LevelChoice";
import {LevelDecision} from "@/model/character/level/LevelDecision";
import {ErrorResult, ValidResult} from "@/model/processor/Result";
import {classProcessor} from "./class/ClassProcessor";
import {itemProcessor} from "@/model/character/level/item/ItemProcessor";

export const levelProcessor: Processor<LevelChoice, LevelDecision | undefined> = (value, choice, decision) => {
  // Validate Optional
  if (decision === undefined) {
    return ErrorResult.of([new ProcessorError("MISSING DECISION", [choice.data.choiceID], choice, decision)]);
  }

  // Process Level Choices
  return choice.data.choices.reduce((value, subchoice) => {
    const subdecision = decision.data.decisions[subchoice.data.choiceID];
    if (subchoice.type === "class" && (subdecision === undefined || subdecision?.type === "class")) {
      return value.flatMap((value) => classProcessor(value, subchoice, subdecision))
    } else if (subchoice.type === "item" && (subdecision === undefined || subdecision?.type === "item")) {
      return value.flatMap((value) => itemProcessor(value, subchoice, subdecision))
    } else {
      throw new Error(`Unknown Choice Type: ${JSON.stringify(choice)} and ${JSON.stringify(decision)}`)
    }
  }, ValidResult.of(value));
}
