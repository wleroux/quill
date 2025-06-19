import {AttributeID} from "@/model/source/model/Attribute";
import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";

export type AttributeChoice = {
  type: "attribute",
  data: {
    label?: string;
    choiceID: ChoiceID;
    enabled?: Condition<any>;
    condition?: Condition<AttributeID>;
  }
};
