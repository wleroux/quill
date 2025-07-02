import {Processor, ProcessorError} from "@/model/processor/Processor";
import {RetireDecision} from "@/model/character/retire/RetireDecision";
import {RetireChoice} from "@/model/character/retire/RetireChoice";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export const retireProcessor: Processor<RetireChoice, RetireDecision | undefined> = (value, choice, decision) => {
  if (value.retired)
    return ErrorResult.of([new ProcessorError("ALREADY RETIRED", [], choice, decision)]);
  return ValidResult.of({...value, progress: [
    ...value.progress, decision
    ], retired: true});
};
