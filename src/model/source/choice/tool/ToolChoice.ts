import {ToolCondition} from "@/model/source/condition/tool/ToolCondition";
import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";

export type ToolChoice = {
  type: "tool",
  data: {
    label?: string;
    enabled?: Condition<any>;
    choiceID: ChoiceID;
    condition?: ToolCondition;
  }
};
