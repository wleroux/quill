import {ClassID, Level} from "@/model/source/model/Level";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {isMainClass, noClasses} from "@/model/source/choice/Choice";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {all} from "@/model/source/condition/generic/AllCondition";
import {SkillID} from "@/model/source/model/Skill";
import {is} from "@/model/source/condition/generic/IsCondition";
import {toolType} from "@/model/source/condition/tool/ToolTypeCondition";
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";

const monkSkills = is<SkillID>("acrobatics", "athletics", "history", "insight", "religion", "stealth");

const PHB_MONK_1: Level = {
  label: "Monk 1",
  prerequisite: any(noClasses(), all(minStat("dex", 13), minStat("wis", 13))),
  choices: [
    {type: "skill", data: {
      choiceID: "monk::skill::skill-1",
      enabled: isMainClass(),
      condition: monkSkills
    }},
    {type: "skill", data: {
      choiceID: "monk::skill::skill-2",
      enabled: isMainClass(),
      condition: monkSkills
    }},
    {type: "tool", data: {
      choiceID: "monk::tool::tool-1",
      enabled: isMainClass(),
      condition: any(toolType("artisan tool"), toolType("musical instrument"))
    }}
  ]
} as const;
const PHB_MONK_2: Level = {
  label: "Monk 2",
  replace: "Monk 1",
  choices: []
} as const;
export const PHB_MONK_3 = {
  choices: [
  ]
} as const satisfies Partial<Level>;
export const PHB_MONK_4 = {
  choices: [
    {type: "feat", data: {
      choiceID: "monk::feat-1",
      condition: featType("general", "origin")
    }}
  ]
} as const satisfies Partial<Level>;

export default {
  [PHB_MONK_1.label]: PHB_MONK_1,
  [PHB_MONK_2.label]: PHB_MONK_2
} as const satisfies {[levelID: ClassID]: Level};
