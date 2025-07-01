import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {EldritchInvocationID} from "../../model/EldritchInvocation";
import {Decision} from "@/model/source/choice/Decision";

export type EldritchInvocationDecision = {
  type: "eldritch-invocation";
  data: {
    eldritchInvocationID: EldritchInvocationID;
    decisions: {[choiceID: ChoiceID]: Decision};
  }
}
