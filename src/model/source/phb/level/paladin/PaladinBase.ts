import {ClassID, Level} from "@/model/source/model/Level";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {isMainClass, noClasses, selectedChoice} from "@/model/source/choice/Choice";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {all} from "@/model/source/condition/generic/AllCondition";
import {SkillID} from "@/model/source/model/Skill";
import {is} from "@/model/source/condition/generic/IsCondition";
import {clericCantripSpell} from "@/model/source/phb/level/cleric/clericCantripSpell";
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";
import {AttributeID} from "@/model/source/model/Attribute";
import {SpellID, SpellLevel} from "@/model/source/model/Spell";
import {getLevelsIn} from "@/model/source/condition/level/NeverTaken";
import {maxSpellLevel} from "@/model/source/condition/spell/LeveledSpellCondition";
import {Condition} from "@/model/source/condition/Condition";
import {WEAPON_TYPES} from "@/model/source/phb/weapon-mastery/weapons";

const paladinSkills = is<SkillID>("athletics", "insight", "intimidation", "medicine", "persuasion", "religion");
const paladinSpells = is<SpellID>(
  // Level 1 Paladin Spells
  "Spell",
  "Bless",
  "Command",
  "Compelled Duel",
  "Cure Wounds",
  "Detect Evil and Good",
  "Detect Magic",
  "Detect Poison and Disease",
  "Divine Favor",
  "Divine Smite",
  "Heroism",
  "Protection from Evil and Good",
  "Purify Food and Drink",
  "Searing Smite",
  "Shield of Faith",
  "Thunderous Smite",
  "Wrathful Smite",
  // Level 2 Paladin Spells
  "Spell",
  "Aid",
  "Find Steed",
  "Gentle Repose",
  "Lesser Restoration",
  "Locate Object",
  "Magic Weapon",
  "Prayer of Healing",
  "Protection from Poison",
  "Shining Smite",
  "Warding Bond",
  "Zone of Truth",
  // Level 3 Paladin Spells
  "Spell",
  "Aura of Vitality",
  "Blinding Smite",
  "Create Food and Water",
  "Crusader’s Mantle",
  "Daylight",
  "Dispel Magic",
  "Elemental Weapon",
  "Magic Circle",
  "Remove Curse",
  "Revivify",
  // Level 4 Paladin Spells
  "Spell",
  "Aura of Life",
  "Aura of Purity",
  "Banishment",
  "Death Ward",
  "Locate Creature",
  "Staggering Smite",
  // Level 5 Paladin Spells
  "Spell",
  "Banishing Smite",
  "Circle of Power",
  "Destructive Wave",
  "Dispel Evil and Good",
  "Geas",
  "Greater Restoration",
  "Raise Dead",
  "Summon Celestial",
);
const maxPaladinLeveledSpells = (level: Exclude<SpellLevel, "cantrip">) => all(
  paladinSpells,
  maxSpellLevel(level)
);
function getPaladinMaxSpellLevel(level: number): Exclude<SpellLevel, "cantrip"> {
  if (level < 5) return 1;
  if (level < 9) return 2;
  if (level < 13) return 3;
  if (level < 17) return 4;
  return 5;
}
const maxPaladinSpellLongRest: Condition<SpellID> = (_, value) => maxPaladinLeveledSpells(getPaladinMaxSpellLevel(getLevelsIn(value, "Paladin 1")))(_, value)


const PHB_PALADIN_1: Level = {
  label: "Paladin 1",
  prerequisite: any(noClasses(), all(minStat("str", 13), minStat("cha", 13))),
  choices: [
    {type: "saving-throw", data: {
      choiceID: "paladin::saving-throw-1",
      enabled: isMainClass(),
      condition: is<AttributeID>("wis")
    }},
    {type: "saving-throw", data: {
      choiceID: "paladin::saving-throw-2",
      enabled: isMainClass(),
      condition: is<AttributeID>("cha")
    }},
    {type: "skill", data: {
      choiceID: "paladin::skill::skill-1",
      enabled: isMainClass(),
      condition: paladinSkills
    }},
    {type: "skill", data: {
      choiceID: "paladin::skill::skill-2",
      enabled: isMainClass(),
      condition: paladinSkills
    }},
    {type: "item", data: {
      choiceID: "paladin::item-1",
      condition: is("Chain Mail")
    }},
    {type: "item", data: {
      choiceID: "paladin::item-2",
      condition: is("Shield")
    }},
    {type: "item", data: {
      choiceID: "paladin::item-3",
      condition: is("Longsword")
    }},
    {type: "item", data: {
      choiceID: "paladin::item-4",
      condition: is("Javelin")
    }},
    {type: "item", data: {
      choiceID: "paladin::item-5",
      condition: is("Holy Symbol")
    }},
    {type: "item", data: {
      choiceID: "paladin::item-6",
      condition: is("Priest's Pack")
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "paladin::spell-1",
      condition: maxPaladinSpellLongRest
    }},
    {type: "spell", data: {
      choiceID: "paladin::spell-2",
      condition: maxPaladinSpellLongRest
    }},
    {type: "simple", data: {
      choiceID: "paladin::weapon-mastery-1",
      label: "Weapon Mastery",
      options: WEAPON_TYPES.map(weaponType => ({optionID: weaponType, label: weaponType}))
    }},
    {type: "simple", data: {
      choiceID: "paladin::weapon-mastery-2",
      label: "Weapon Mastery",
      options: WEAPON_TYPES.map(weaponType => ({optionID: weaponType, label: weaponType}))
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
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "paladin::spell-3",
      condition: maxPaladinSpellLongRest
    }}
  ]
} as const;
export const PHB_PALADIN_3 = {
  choices: [],
  longRest: [
    {type: "spell", data: {
      choiceID: "paladin::spell-4",
      condition: maxPaladinSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_PALADIN_4 = {
  choices: [
    {type: "feat", data: {
      choiceID: "paladin::feat-1",
      condition: featType("general", "origin")
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "paladin::spell-5",
      condition: maxPaladinSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_PALADIN_5 = {
  choices: [
    {type: "spell", data: {
      choiceID: "faithful steed::spell",
      condition: is("Find Steed")
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "paladin::spell-6",
      condition: maxPaladinSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_PALADIN_6 = {
  choices: [
  ],
  longRest: []
} as const satisfies Partial<Level>;
export const PHB_PALADIN_7 = {
  choices: [
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "paladin::spell-7",
      condition: maxPaladinSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_PALADIN_8 = {
  choices: [
    {type: "feat", data: {
      choiceID: "paladin::feat-2",
      condition: featType("general", "origin")
    }}
  ],
  longRest: []
} as const satisfies Partial<Level>;
export const PHB_PALADIN_9 = {
  choices: [
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "paladin::spell-8",
      condition: maxPaladinSpellLongRest
    }},
    {type: "spell", data: {
      choiceID: "paladin::spell-9",
      condition: maxPaladinSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_PALADIN_10 = {
  choices: [
  ],
  longRest: []
} as const satisfies Partial<Level>;
export const PHB_PALADIN_11 = {
  choices: [
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "paladin::spell-10",
      condition: maxPaladinSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_PALADIN_12 = {
  choices: [
    {type: "feat", data: {
      choiceID: "paladin::feat-3",
      condition: featType("general", "origin")
    }}
  ],
  longRest: []
} as const satisfies Partial<Level>;

export default {
  [PHB_PALADIN_1.label]: PHB_PALADIN_1,
  [PHB_PALADIN_2.label]: PHB_PALADIN_2
} as const satisfies {[levelID: ClassID]: Level};
