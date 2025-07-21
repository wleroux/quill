import {ClassID, Level} from "@/model/source/model/Level";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {isMainClass, noClasses} from "@/model/source/choice/Choice";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {all} from "@/model/source/condition/generic/AllCondition";
import {SkillID} from "@/model/source/model/Skill";
import {is} from "@/model/source/condition/generic/IsCondition";
import {toolType} from "@/model/source/condition/tool/ToolTypeCondition";
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";
import {AttributeID} from "@/model/source/model/Attribute";

const monkSkills = is<SkillID>("acrobatics", "athletics", "history", "insight", "religion", "stealth");

const PHB_MONK_1: Level = {
  label: "Monk 1",
  prerequisite: any(noClasses(), all(minStat("dex", 13), minStat("wis", 13))),
  choices: [
    {type: "saving-throw", data: {
      choiceID: "monk::saving-throw-1",
      enabled: isMainClass(),
      condition: is<AttributeID>("str")
    }},
    {type: "saving-throw", data: {
      choiceID: "monk::saving-throw-2",
      enabled: isMainClass(),
      condition: is<AttributeID>("dex")
    }},
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
    }},
    {type: "item", data: {
      choiceID: "item::item-1",
      condition: is("Spear")
    }},
    {type: "item", data: {
      choiceID: "item::item-2",
      condition: is("Dagger")
    }},
    {type: "item", data: {
      choiceID: "item::item-3",
      condition: is("Explorer's Pack")
    }}
  ],
  longRest: [
  ]
} as const;
const PHB_MONK_2: Level = {
  label: "Monk 2",
  replace: "Monk 1",
  choices: [],
  longRest: [
  ]
} as const;
export const PHB_MONK_3 = {
  choices: [
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;
export const PHB_MONK_4 = {
  choices: [
    {type: "feat", data: {
      choiceID: "monk::feat-1",
      condition: featType("general", "origin")
    }}
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;

export default {
  [PHB_MONK_1.label]: PHB_MONK_1,
  [PHB_MONK_2.label]: PHB_MONK_2
} as const satisfies {[levelID: ClassID]: Level};
