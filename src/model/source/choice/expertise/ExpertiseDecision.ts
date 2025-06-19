import {SkillID} from "@/model/source/model/Skill";
import {ChoiceID} from "@/model/source/choice/ChoiceID";

export type ExpertiseDecision = {
  type: "expertise",
  data: {
    skillID: SkillID
  }
};
