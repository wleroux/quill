import {ToolID} from "@/model/source/model/Tool";
import {ChoiceID} from "../ChoiceID";
import {Decision} from "@/model/source/choice/Decision";

export type ToolDecision = {
  type: "tool";
  data: {
    toolID: ToolID;
    decisions?: {[choiceID: ChoiceID]: Decision};
  }
};
