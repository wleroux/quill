import {MetamagicCondition} from "@/model/source/condition/metamagic/MetamagicCondition";
import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";

export type MetamagicChoice = {
  type: "metamagic",
  data: {
    label?: string;
    choiceID: ChoiceID;
    sourceID: string;
    enabled?: Condition<any>;
    condition: MetamagicCondition;
  }
};