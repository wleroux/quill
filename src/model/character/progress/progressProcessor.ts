import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ProgressChoice} from "@/model/character/progress/ProgressChoice";
import {ProgressDecision} from "@/model/character/progress/ProgressDecision";
import {ErrorResult} from "@/model/processor/Result";
import {levelProcessor} from "@/model/character/level/LevelProcessor";
import {DefaultLevelChoice, getCurrentLevel} from "@/model/character/level/LevelChoice";
import {nameProcessor} from "@/model/character/name/NameProcessor";
import {DefaultNameChoice} from "@/model/character/name/NameChoice";
import {Character} from "@/model/character/Character";
import {DefaultRetireChoice} from "@/model/character/retire/RetireChoice";
import {retireProcessor} from "@/model/character/retire/RetireProcessor";

export function getProgressChoice(value: Character, decision: ProgressDecision) {
  if (decision.type === "level") {
    return DefaultLevelChoice[getCurrentLevel(value)];
  } else if (decision.type === "name") {
    return DefaultNameChoice;
  } else if (decision.type === "retire") {
    return DefaultRetireChoice;
  } else {
    throw new Error(`Unknown decision: ${JSON.stringify(decision)}`);
  }
}

export const progressProcessor: Processor<ProgressChoice, ProgressDecision | undefined> = (value, choice, decision) => {
  if (choice.type === "level" && (decision === undefined || decision.type === "level")) {
    return levelProcessor(value, choice, decision);
  } else if (choice.type === "name" && (decision === undefined || decision.type === "name")) {
    return nameProcessor(value, choice, decision);
  } else if (choice.type === "retire" && (decision === undefined || decision.type === "retire")) {
    return retireProcessor(value, choice, decision);
  } else {
    return ErrorResult.of([new ProcessorError("UNKNOWN CHOICE", [choice.data.choiceID], choice, decision)]);
  }
}