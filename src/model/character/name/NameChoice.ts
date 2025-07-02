import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";
import {minTextLength} from "@/model/source/condition/text/MinLengthCondition";

export type NameChoice = {
  type: "name";
  data: {
    label?: string;
    choiceID: ChoiceID;
    condition: Condition<string>
  }
};

export const DefaultNameChoice: NameChoice = {type: "name", data: {
  choiceID: "name",
  condition: minTextLength(3)
}} satisfies NameChoice;
