import {MetamagicCondition} from "@/model/source/condition/metamagic/MetamagicCondition";
import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";

export type MetamagicReplacementChoice = {
  type: "metamagic-replacement";
  data: {
    label?: string;
    choiceID: ChoiceID;
    enabled?: Condition<any>;
    required?: Condition<any>;
    sourceID: Condition<ChoiceID>;
    condition?: MetamagicCondition;
  }
};
