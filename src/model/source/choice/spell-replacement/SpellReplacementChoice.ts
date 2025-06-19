import {Condition} from "@/model/source/condition/Condition";
import {SpellCondition} from "@/model/source/condition/spell/SpellCondition";
import {ChoiceID} from "@/model/source/choice/ChoiceID";

export type SpellReplacementChoice = {
  type: "spell-replacement";
  data: {
    label?: string;
    choiceID: ChoiceID;
    enabled?: Condition<any>;
    required?: Condition<any>;
    sourceID: Condition<string>;
    condition: SpellCondition;
  };
};
