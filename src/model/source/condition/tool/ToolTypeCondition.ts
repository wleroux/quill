import {ToolID} from "@/model/source/model/Tool";
import {REPOSITORY} from "@/model/source/index";
import {Condition} from "@/model/source/condition/Condition";

export function toolType(type: "musical instrument" | "artisan tool" | "gaming set"): Condition<ToolID> {
  return (value: ToolID): boolean => {
    const tool = REPOSITORY.TOOLS[value];
    if (tool === undefined) return false;
    return tool.type === type;
  }
}
