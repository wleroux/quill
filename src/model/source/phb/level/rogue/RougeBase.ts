import {ClassID, Level} from "@/model/source/model/Level";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {isMainClass, noClasses} from "@/model/source/choice/Choice";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {SkillID} from "@/model/source/model/Skill";
import {is} from "@/model/source/condition/generic/IsCondition";
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";

const fighterSkills = is<SkillID>("acrobatics","animal handling","athletics","history","insight","intimidation","persuasion","perception","survival");

const PHB_FIGHTER_1: Level = {
  label: "Fighter 1",
  prerequisite: any(noClasses(), minStat("str", 13), minStat("dex", 13)),
  choices: [
    {type: "skill", data: {
      choiceID: "fighter::skill::skill-1",
      enabled: isMainClass(),
      condition: fighterSkills
    }},
    {type: "skill", data: {
      choiceID: "fighter::skill::skill-2",
      enabled: isMainClass(),
      condition: fighterSkills
    }},
    {type: "feat", data: {
      label: "Fighting Style",
      choiceID: "fighter::fighting-style::feat-1",
      condition: featType("fighting style")
    }}
  ]
} as const;

const PHB_FIGHTER_2: Level = {
  label: "Fighter 2",
  replace: "Fighter 1",
  choices: []
} as const;

export const FIGHTER_BASE_LEVELS = {
  "Fighter 1": PHB_FIGHTER_1,
  "Fighter 2": PHB_FIGHTER_2
} as const satisfies {[levelID: ClassID]: Level};
