import {SpellCondition} from "@/model/source/condition/spell/SpellCondition";
import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";

export type SpellChoice = {
  type: "spell",
  data: {
    label?: string;
    choiceID: ChoiceID;
    enabled?: Condition<any>;
    sourceID: string;
    condition?: SpellCondition;
  }
};
