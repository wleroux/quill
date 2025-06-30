import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";
import {ClassID} from "@/model/source/model/Level";

export type ClassChoice = {
  type: "class";
  data: {
    label?: string;
    enabled?: Condition<any>;
    choiceID: ChoiceID;
    condition?: Condition<ClassID>;
  }
};