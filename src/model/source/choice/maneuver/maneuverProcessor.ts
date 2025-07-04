import { Processor, ProcessorError } from "@/model/processor/Processor";
import {ManeuverChoice} from "@/model/source/choice/maneuver/ManeuverChoice";
import {ManeuverDecision} from "@/model/source/choice/maneuver/ManeuverDecision";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export const maneuverProcessor: Processor<ManeuverChoice, ManeuverDecision | undefined> = (value, choice, decision) => {
  // VALIDATE ENABLED
  if (choice.data.enabled && !choice.data.enabled(undefined, value)) return ValidResult.of(value);

  // VALIDATE REQUIRED
  if (decision === undefined) {
    return ErrorResult.of([new ProcessorError("MISSING DECISION", [choice.data.choiceID], choice, decision)]);
  } else {
    if (choice.data.condition && !choice.data.condition(decision.data.maneuverID, value))
      return ErrorResult.of([new ProcessorError("UNMET CONDITION", [choice.data.choiceID], choice, decision)]);
    if (Object.values(value.maneuvers).includes(decision.data.maneuverID))
      return ErrorResult.of([new ProcessorError("ALREADY HAS MANEUVER", [choice.data.choiceID], choice, decision)]);

    return ValidResult.of({
      ...value,
      maneuvers: {
        ...value.maneuvers,
        [choice.data.choiceID]: decision.data.maneuverID
      }
    });
  }
}