import {ClassID, Level} from "@/model/source/model/Level";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {isMainClass, noClasses, selectedChoice} from "@/model/source/choice/Choice";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {all} from "@/model/source/condition/generic/AllCondition";
import {SkillID} from "@/model/source/model/Skill";
import {is} from "@/model/source/condition/generic/IsCondition";
import {clericCantripSpell} from "@/model/source/phb/level/cleric/clericCantripSpell";
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";

const paladinSkills = is<SkillID>("athletics", "insight", "intimidation", "medicine", "persuasion", "religion");

const PHB_PALADIN_1: Level = {
  label: "Paladin 1",
  prerequisite: any(noClasses(), all(minStat("str", 13), minStat("cha", 13))),
  choices: [
    {type: "skill", data: {
      choiceID: "paladin::skill::skill-1",
      enabled: isMainClass(),
      condition: paladinSkills
    }},
    {type: "skill", data: {
      choiceID: "paladin::skill::skill-2",
      enabled: isMainClass(),
      condition: paladinSkills
    }}
  ]
} as const;

const PHB_PALADIN_2: Level = {
  label: "Paladin 2",
  replace: "Paladin 1",
  choices: [
    {type: "simple", data: {
      label: "Fighting Style",
      choiceID: "paladin::fighting-style::2",
      options: [
        {optionID: "feat", label: "Fighting Style Feat"},
        {optionID: "blessed warrior", label: "Blessed Warrior"},
      ]
    }},
    {type: "feat", data: {
      label: "Fighting Style Feat",
      choiceID: "paladin::fighting-style::feat-1",
      enabled: selectedChoice("paladin::fighting-style::2", "feat"),
      condition: featType("fighting style")
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "paladin::blessed-warrior::cantrip-1",
      enabled: selectedChoice("paladin::fighting-style::2", "blessed warrior"),
      condition: clericCantripSpell
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "paladin::blessed-warrior::cantrip-2",
      enabled: selectedChoice("paladin::fighting-style::2", "blessed warrior"),
      condition: clericCantripSpell
    }},
    {type: "spell", data: {
      label: "Spell",
      choiceID: "paladin::divine-smite-1",
      condition: is("Divine Smite")
    }}
  ]
} as const;
export const PHB_PALADIN_3 = {
  choices: []
} as const satisfies Partial<Level>;
export const PHB_PALADIN_4 = {
  choices: [
    {type: "feat", data: {
      choiceID: "paladin::feat-1",
      condition: featType("general", "origin")
    }}
  ]
} as const satisfies Partial<Level>;

export default {
  [PHB_PALADIN_1.label]: PHB_PALADIN_1,
  [PHB_PALADIN_2.label]: PHB_PALADIN_2
} as const satisfies {[levelID: ClassID]: Level};
