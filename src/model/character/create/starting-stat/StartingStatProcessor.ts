import {StartingStatChoice} from "@/model/character/create/starting-stat/StartingStatChoice";
import {StartingStatDecision} from "@/model/character/create/starting-stat/StartingStatDecision";
import {ATTRIBUTE_IDS} from "@/model/source/model/Attribute";
import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export function getPointCost(value: number) {
  if (value === 8) return 0;
  if (value === 9) return 1;
  if (value === 10) return 2;
  if (value === 11) return 3;
  if (value === 12) return 4;
  if (value === 13) return 5;
  if (value === 14) return 7;
  if (value === 15) return 9;
  return Number.POSITIVE_INFINITY;
}

export const startingStatProcessor: Processor<StartingStatChoice, StartingStatDecision | undefined> = (value, choice, decision) => {
  if (decision === undefined)
    return ErrorResult.of([new ProcessorError("MISSING DECISION", [choice.data.choiceID], choice, decision)]);
  const cost = ATTRIBUTE_IDS.reduce((sum, attribute) => sum + getPointCost(decision.data[attribute]), 0);
  if (cost !== choice.data.points)
    return ErrorResult.of([new ProcessorError("POINT MISMATCH", [choice.data.choiceID], choice, decision)]);

  return ValidResult.of({
    ...value,
    startingStat: decision.data,
    stats: decision.data
  });
};
