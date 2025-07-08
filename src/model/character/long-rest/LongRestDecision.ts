import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Decision} from "@/model/source/choice/Decision";

export type LongRestDecision = {
  type: "long-rest";
  data: {
    decisions: {[choice: ChoiceID]: Decision};
  }
};