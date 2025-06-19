import {SkillID} from "@/model/source/model/Skill";

export type SkillDecision = {
  type: "skill",
  data: {
    skillID: SkillID
  }
};
