import {ClassID, Level} from "@/model/source/model/Level";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {isMainClass, noClasses, selectedChoice} from "@/model/source/choice/Choice";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {SkillID} from "@/model/source/model/Skill";
import {is} from "@/model/source/condition/generic/IsCondition";
import {all} from "@/model/source/condition/generic/AllCondition";
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";
import {druidCantripSpell} from "@/model/source/phb/level/druid/druidCantripSpell";

const rangerSkills = is<SkillID>("animal handling","athletics","insight","investigation","nature","perception","stealth","survival");

const PHB_RANGER_1: Level = {
  label: "Ranger 1",
  prerequisite: any(noClasses(), all(minStat("dex", 13), minStat("wis", 13))),
  choices: [
    {type: "skill", data: {
      choiceID: "ranger::skill::skill-1",
      condition: rangerSkills
    }},
    {type: "skill", data: {
      choiceID: "ranger::skill::skill-2",
      enabled: isMainClass(),
      condition: rangerSkills
    }},
    {type: "skill", data: {
      choiceID: "ranger::skill::skill-3",
      enabled: isMainClass(),
      condition: rangerSkills
    }},
  ]
} as const;

const PHB_RANGER_2: Level = {
  label: "Ranger 2",
  replace: "Ranger 1",
  choices: [
    {type: "expertise", data: {
      label: "Deft Explorer",
      choiceID: "ranger::expertise::expertise-1",
    }},
    {type: "simple", data: {
      label: "Fighting Style",
      choiceID: "ranger::fighting-style::2",
      options: [
        {optionID: "feat", label: "Fighting Style Feat"},
        {optionID: "druidic warrior", label: "Druidic Warrior"}
      ]
    }},
    {type: "feat", data: {
      label: "Fighting Style Feat",
      enabled: selectedChoice("ranger::fighting-style::2", "feat"),
      choiceID: "ranger::fighting-style::feat-1",
      condition: featType("fighting style")
    }},
    {type: "spell", data: {
      label: "Cantrip",
      enabled: selectedChoice("ranger::fighting-style::2", "druidic warrior"),
      choiceID: "ranger::spell-druidic-warrior-1",
      condition: druidCantripSpell
    }},
    {type: "spell", data: {
      label: "Cantrip",
      enabled: selectedChoice("ranger::fighting-style::2", "druidic warrior"),
      choiceID: "ranger::spell-druidic-warrior-2",
      condition: druidCantripSpell
    }}
  ]
} as const;

export const RANGER_BASE_LEVELS = {
  "Ranger 1": PHB_RANGER_1,
  "Ranger 2": PHB_RANGER_2
} as const satisfies {[levelID: ClassID]: Level};
