import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";

export type NameChoice = {
  type: "name";
  data: {
    label?: string;
    choiceID: ChoiceID;
    condition: Condition<string>
  }
};