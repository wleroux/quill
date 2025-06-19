import {NameChoice} from "@/model/source/choice/name/NameChoice";
import {NameDecision} from "@/model/source/choice/name/NameDecision";
import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export const nameProcessor: Processor<NameChoice, NameDecision | undefined> = (value, choice, decision) => {
  if (decision === undefined) return ErrorResult.of<ProcessorError[]>([new ProcessorError("MISSING DECISION", [choice.data.choiceID], choice, decision)]);
  if (choice.data.condition !== undefined && !choice.data.condition(decision.data.name, value))
    return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);
  return ValidResult.of({
    ...value,
    name: decision!.data.name
  });
}
