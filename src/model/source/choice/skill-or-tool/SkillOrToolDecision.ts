import {SkillID} from "@/model/source/model/Skill";
import {ToolID} from "@/model/source/model/Tool";
import {Decision} from "@/model/source/choice/Decision";
import {ChoiceID} from "../ChoiceID";

export type SkillOrToolDecision = {
  type: "skill-or-tool",
  data: {
    skillOrToolID: SkillID | ToolID;
    decisions: {[choiceID: ChoiceID]: Decision}
  }
};
