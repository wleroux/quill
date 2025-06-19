import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";

export type SimpleChoice = {
  type: "simple";
  data: {
    choiceID: ChoiceID;
    enabled?: Condition<any>;
    label: string;
    options: {
      label: string;
      optionID: string;
    }[]
  }
};
