import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {EldritchInvocationID} from "../../model/EldritchInvocation";
import {Decision} from "@/model/source/choice/Decision";

export type EldritchInvocationReplacementDecision = {
  type: "eldritch-invocation-replacement";
  data: {
    sourceID: string;
    eldritchInvocationID: EldritchInvocationID;
    decisions: {[choiceID: ChoiceID]: Decision};
  }
}