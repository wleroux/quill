import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";
import {ItemID} from "@/model/source/model/Item";

export type ItemChoice = {
  type: "item",
  data: {
    label?: string;
    enabled?: Condition<any>;
    choiceID: ChoiceID;
    condition?: Condition<ItemID>;
  }
};
