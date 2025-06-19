import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {SkillCondition} from "@/model/source/condition/skill/SkillCondition";
import {Condition} from "@/model/source/condition/Condition";

export type ExpertiseChoice = {
  type: "expertise";
  data: {
    label?: string;
    choiceID: ChoiceID;
    enabled?: Condition<any>;
    condition?: SkillCondition;
  }
};
