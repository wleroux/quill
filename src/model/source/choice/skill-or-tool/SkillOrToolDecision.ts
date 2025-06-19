import {SkillID} from "@/model/source/model/Skill";
import {ToolID} from "@/model/source/model/Tool";

export type SkillOrToolDecision = {
  type: "skill-or-tool",
  data: {
    skillOrToolID: SkillID | ToolID;
  }
};
