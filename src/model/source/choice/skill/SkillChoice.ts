import {SkillCondition} from "@/model/source/condition/skill/SkillCondition";
import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";

export type SkillChoice = {
  type: "skill",
  data: {
    label?: string;
    choiceID: ChoiceID;
    enabled?: Condition<any>;
    condition?: SkillCondition;
  }
};
