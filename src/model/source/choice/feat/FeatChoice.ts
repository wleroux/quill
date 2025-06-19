import {FeatCondition} from "@/model/source/condition/feat/FeatCondition";
import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";

export type FeatChoice = {
  type: "feat";
  data: {
    label?: string;
    enabled?: Condition<any>;
    choiceID: ChoiceID;
    condition?: FeatCondition;
  }
};
