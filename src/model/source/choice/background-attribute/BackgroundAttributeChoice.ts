import {Condition} from "@/model/source/condition/Condition";
import {AttributeID} from "@/model/source/model/Attribute";
import {ChoiceID} from "@/model/source/choice/ChoiceID";

export type BackgroundAttributeChoice = {
  type: "background-attribute",
  data: {
    label?: string;
    choiceID: ChoiceID;
    enabled?: Condition<any>;
    condition?: Condition<AttributeID>
  }
};