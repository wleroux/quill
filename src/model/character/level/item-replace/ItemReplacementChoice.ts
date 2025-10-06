import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";
import {ItemID} from "@/model/source/model/Item";

export type ItemReplacementChoice = {
  type: "item-replacement",
  data: {
    label?: string;
    enabled?: Condition<undefined>;
    required?: Condition<undefined>;
    choiceID: ChoiceID;
    condition?: Condition<ItemID>;
  }
};
