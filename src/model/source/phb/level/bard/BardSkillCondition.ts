import {alwaysTrue} from "@/model/source/condition/generic/TrueCondition";
import {Condition} from "@/model/source/condition/Condition";
import {SkillID} from "@/model/source/model/Skill";

export function bardSkill(): Condition<SkillID> {
  return alwaysTrue()
}
