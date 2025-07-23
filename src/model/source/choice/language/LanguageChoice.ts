import {Condition} from "@/model/source/condition/Condition";
import {LanguageID} from "@/model/source/model/Language";
import {ChoiceID} from "@/model/source/choice/ChoiceID";

export type LanguageChoice = {
  type: "language";
  data: {
    choiceID: ChoiceID;
    label?: string;
    required?: Condition<undefined>;
    enabled?: Condition<undefined>;
    condition?: Condition<LanguageID>;
  }
};