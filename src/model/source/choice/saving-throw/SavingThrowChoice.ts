import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";
import {AttributeID} from "@/model/source/model/Attribute";

export type SavingThrowChoice = {
  type: "saving-throw";
  data: {
    label?: string;
    enabled?: Condition<any>;
    choiceID: ChoiceID;
    condition?: Condition<AttributeID>;
  }
};