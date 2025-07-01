import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";
import {EldritchInvocationID} from "../../model/EldritchInvocation";

export type EldritchInvocationReplacementChoice = {
  type: "eldritch-invocation-replacement";
  data: {
    label?: string;
    enabled?: Condition<undefined>;
    choiceID: ChoiceID;
    required?: Condition<undefined>;
    condition?: Condition<EldritchInvocationID>;
  }
}