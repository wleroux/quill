import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";
import {EldritchInvocationID} from "@/model/source/model/EldritchInvocation";

export type EldritchInvocationChoice = {
  type: "eldritch-invocation";
  data: {
    label?: string;
    enabled?: Condition<undefined>;
    sourceID: string;
    choiceID: ChoiceID;
    condition?: Condition<EldritchInvocationID>;
  }
}
