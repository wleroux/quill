import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";
import {SpecieID} from "@/model/source/model/Specie";

export type SpecieChoice = {
  type: "specie";
  data: {
    choiceID: ChoiceID;
    condition?: Condition<SpecieID>;
  };
};
