import {ClassID, Level} from "@/model/source/model/Level";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {isMainClass, noClasses, selectedChoice} from "@/model/source/choice/Choice";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {SkillID} from "@/model/source/model/Skill";
import {is} from "@/model/source/condition/generic/IsCondition";
import {all} from "@/model/source/condition/generic/AllCondition";
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";
import {druidCantripSpell} from "@/model/source/phb/level/druid/druidCantripSpell";
import {AttributeID} from "@/model/source/model/Attribute";
import {SpellID, SpellLevel} from "@/model/source/model/Spell";
import {maxSpellLevel} from "@/model/source/condition/spell/LeveledSpellCondition";
import {Condition} from "@/model/source/condition/Condition";
import {getLevelsIn} from "@/model/source/condition/level/NeverTaken";
import {rangerSpells} from "@/model/source/phb/level/ranger/rangerSpells";
import { WEAPON_TYPES } from "../../weapon-mastery/weapons";

const rangerSkills = is<SkillID>("animal handling","athletics","insight","investigation","nature","perception","stealth","survival");
const maxRangerLeveledSpells = (level: Exclude<SpellLevel, "cantrip">) => all(
  rangerSpells,
  maxSpellLevel(level)
);
function getRangerMaxSpellLevel(level: number): Exclude<SpellLevel, "cantrip"> {
  if (level < 5) return 1;
  if (level < 9) return 2;
  if (level < 13) return 3;
  if (level < 17) return 4;
  return 5;
}
const maxRangerSpellLongRest: Condition<SpellID> = (_, value) => maxRangerLeveledSpells(getRangerMaxSpellLevel(getLevelsIn(value, "Paladin 1")))(_, value)

const PHB_RANGER_1: Level = {
  label: "Ranger 1",
  prerequisite: any(noClasses(), all(minStat("dex", 13), minStat("wis", 13))),
  choices: [
    {type: "saving-throw", data: {
      choiceID: "ranger::saving-throw-1",
      enabled: isMainClass(),
      condition: is<AttributeID>("str")
    }},
    {type: "saving-throw", data: {
      choiceID: "ranger::saving-throw-2",
      enabled: isMainClass(),
      condition: is<AttributeID>("dex")
    }},
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
    {type: "item", data: {
      choiceID: "ranger::item-1",
      condition: is("Studded Leather Armor")
    }},
    {type: "item", data: {
      choiceID: "ranger::item-2",
      condition: is("Scimitar")
    }},
    {type: "item", data: {
      choiceID: "ranger::item-3",
      condition: is("Shortsword")
    }},
    {type: "item", data: {
      choiceID: "ranger::item-4",
      condition: is("Longbow")
    }},
    {type: "item", data: {
      choiceID: "ranger::item-5",
      condition: is("Arrows (20)")
    }},
    {type: "item", data: {
      choiceID: "ranger::item-6",
      condition: is("Quiver")
    }},
    {type: "item", data: {
      choiceID: "ranger::item-7",
      condition: is("Sprig of Mistletoe")
    }},
    {type: "item", data: {
      choiceID: "ranger::item-8",
      condition: is("Explorer's Pack")
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "ranger::spell-1",
      condition: maxRangerSpellLongRest
    }},
    {type: "spell", data: {
      choiceID: "ranger::spell-2",
      condition: maxRangerSpellLongRest
    }},
    {type: "simple", data: {
      choiceID: "ranger::weapon-mastery-1",
      label: "Weapon Mastery",
      options: WEAPON_TYPES.map(weaponType => ({optionID: weaponType, label: weaponType}))
    }},
    {type: "simple", data: {
      choiceID: "ranger::weapon-mastery-2",
      label: "Weapon Mastery",
      options: WEAPON_TYPES.map(weaponType => ({optionID: weaponType, label: weaponType}))
    }}
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
    }},
    {type: "language", data: {
      choiceID: "language-1",
    }},
    {type: "language", data: {
      choiceID: "language-2",
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "ranger::spell-3",
      condition: maxRangerSpellLongRest
    }},
  ]
} as const;

export const PHB_RANGER_3 = {
  choices: [],
  longRest: [
    {type: "spell", data: {
      choiceID: "ranger::spell-4",
      condition: maxRangerSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_RANGER_4 = {
  choices: [
    {type: "feat", data: {
      choiceID: "ranger::feat-1",
      condition: featType("general", "origin"),
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "ranger::spell-5",
      condition: maxRangerSpellLongRest
    }},
  ]
} as const satisfies Partial<Level>;
export const PHB_RANGER_5 = {
  choices: [
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "ranger::spell-6",
      condition: maxRangerSpellLongRest
    }},
  ]
} as const satisfies Partial<Level>;
export const PHB_RANGER_6 = {
  choices: [
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "ranger::spell-6",
      condition: maxRangerSpellLongRest
    }},
  ]
} as const satisfies Partial<Level>;
export const PHB_RANGER_7 = {
  choices: [
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "ranger::spell-6",
      condition: maxRangerSpellLongRest
    }},
  ]
} as const satisfies Partial<Level>;
export const PHB_RANGER_8 = {
  choices: [
    {type: "feat", data: {
      choiceID: "ranger::feat-2",
      condition: featType("general", "origin"),
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "ranger::spell-6",
      condition: maxRangerSpellLongRest
    }},
  ]
} as const satisfies Partial<Level>;
export const PHB_RANGER_9 = {
  choices: [
    {type: "expertise", data: {
      choiceID: "expertise 1",
    }},
    {type: "expertise", data: {
      choiceID: "expertise 2"
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "ranger::spell-6",
      condition: maxRangerSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_RANGER_10 = {
  choices: [
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "ranger::spell-6",
      condition: maxRangerSpellLongRest
    }},
  ]
} as const satisfies Partial<Level>;
export const PHB_RANGER_11 = {
  choices: [
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "ranger::spell-6",
      condition: maxRangerSpellLongRest
    }},
  ]
} as const satisfies Partial<Level>;
export const PHB_RANGER_12 = {
  choices: [
    {type: "feat", data: {
      choiceID: "ranger::feat-3",
      condition: featType("general", "origin"),
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "ranger::spell-6",
      condition: maxRangerSpellLongRest
    }},
  ]
} as const satisfies Partial<Level>;

export default {
  [PHB_RANGER_1.label]: PHB_RANGER_1,
  [PHB_RANGER_2.label]: PHB_RANGER_2
} as const satisfies {[levelID: ClassID]: Level};
