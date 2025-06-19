import {ToolChoice} from "@/model/source/choice/tool/ToolChoice";
import {ToolDecision} from "@/model/source/choice/tool/ToolDecision";
import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export const toolProcessor: Processor<ToolChoice, ToolDecision | undefined> = (value, choice, decision) => {
  // VALIDATE ENABLED
  if (choice.data.enabled && !choice.data.enabled(undefined, value)) return ValidResult.of(value);

  if (decision === undefined) {
    // VALIDATE REQUIRED
    return ErrorResult.of([new ProcessorError("REQUIRED", [choice.data.choiceID], choice, decision)]);
  } else {
    // VALIDATE TOOL
    if (value.tools.includes(decision.data.toolID))
      return ErrorResult.of([new ProcessorError("ALREADY HAS TOOL", [choice.data.choiceID], choice, decision)]);
    if (choice.data.condition !== undefined && !choice.data.condition(decision.data.toolID, value))
      return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);

    return ValidResult.of({
      ...value,
      tools: [...value.tools, decision.data.toolID]
    });
  }
}