import {ToolID} from "@/model/source/model/Tool";

export type ToolDecision = {
  type: "tool";
  data: {
    toolID: ToolID;
  }
};
