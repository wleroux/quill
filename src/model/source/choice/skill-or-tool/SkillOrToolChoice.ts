import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";
import {SkillID} from "@/model/source/model/Skill";
import {ToolID} from "@/model/source/model/Tool";

export type SkillOrToolChoice = {
  type: "skill-or-tool",
  data: {
    label?: string;
    choiceID: ChoiceID,
    enabled?: Condition<any>;
    condition?: Condition<SkillID | ToolID>
  }
};
