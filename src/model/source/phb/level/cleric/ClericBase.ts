import {ClassID, Level} from "@/model/source/model/Level";
import {isMainClass, noClasses, selectedChoice} from "@/model/source/choice/Choice";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {alwaysFalse} from "@/model/source/condition/generic/FalseCondition";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {is} from "@/model/source/condition/generic/IsCondition";
import {SkillID} from "@/model/source/model/Skill";
import {all} from "@/model/source/condition/generic/AllCondition";
import {cantripSpell} from "@/model/source/condition/spell/CantripSpellCondition";
import {clericSpell} from "@/model/source/phb/level/cleric/clericSpell";
import {AttributeID} from "@/model/source/model/Attribute";
import {SpellID, SpellLevel} from "@/model/source/model/Spell";
import {maxSpellLevel} from "@/model/source/condition/spell/LeveledSpellCondition";
import {Condition} from "@/model/source/condition/Condition";
import {getLevelsIn} from "@/model/source/condition/level/NeverTaken";
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";

const clericCantripSources = is<string>(
  "cleric::cantrip-1",
  "cleric::cantrip-2",
  "cleric::cantrip-3",
  "cleric::cantrip-thaumaturge",
  "cleric::cantrip-4",
  "cleric::cantrip-5"
);

const clericSkill = is<SkillID>("history","insight","medicine","persuasion","religion");
const clericCantripSpell = all(cantripSpell, clericSpell)
const maxClericLeveledSpells = (level: Exclude<SpellLevel, "cantrip">) => all(
  clericSpell,
  maxSpellLevel(level)
);
function getClericMaxSpellLevel(level: number): Exclude<SpellLevel, "cantrip"> {
  if (level < 3) return 1;
  if (level < 5) return 2;
  if (level < 7) return 3;
  if (level < 9) return 4;
  if (level < 11) return 5;
  if (level < 13) return 6;
  if (level < 15) return 7;
  if (level < 17) return 8;
  return 9;
}
const maxClericSpellLongRest: Condition<SpellID> = (_, value) => maxClericLeveledSpells(getClericMaxSpellLevel(getLevelsIn(value, "Cleric 1")))(_, value)

const PHB_CLERIC_1: Level = {
  label: "Cleric 1",
  prerequisite: any(noClasses(), minStat("wis", 13)),
  choices: [
    {type: "saving-throw", data: {
      choiceID: "cleric::saving-throw-1",
      enabled: isMainClass(),
      condition: is<AttributeID>("wis")
    }},
    {type: "saving-throw", data: {
      choiceID: "cleric::saving-throw-2",
      enabled: isMainClass(),
      condition: is<AttributeID>("cha")
    }},
    {type: "skill", data: {
      choiceID: "cleric::skill-1",
      enabled: isMainClass(),
      condition: clericSkill
    }},
    {type: "skill", data: {
      choiceID: "cleric::skill-2",
      enabled: isMainClass(),
      condition: clericSkill
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "cleric::cantrip-1",
      condition: clericCantripSpell
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "cleric::cantrip-2",
      condition: clericCantripSpell
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "cleric::cantrip-3",
      condition: clericCantripSpell
    }},
    {type: "simple", data: {
      label: "Divine Order",
      choiceID: "divine order",
      options: [
        {optionID: "protector", label: "Protector"},
        {optionID: "thaumaturge", label: "Thaumaturge"}
      ]
    }},
    {type: "spell", data: {
      enabled: selectedChoice("divine order", "thaumaturge"),
      label: "Cantrip",
      choiceID: "cleric::cantrip-thaumaturge",
      condition: clericCantripSpell
    }},
    {type: "item", data: {
      choiceID: "cleric::item-1",
      condition: is("Chain Shirt")
    }},
    {type: "item", data: {
      choiceID: "cleric::item-2",
      condition: is("Shield")
    }},
    {type: "item", data: {
      choiceID: "cleric::item-3",
      condition: is("Mace")
    }},
    {type: "item", data: {
      choiceID: "cleric::item-4",
      condition: is("Holy Symbol")
    }},
    {type: "item", data: {
      choiceID: "cleric::item-5",
      condition: is("Priest's Pack")
    }},
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "cleric::spell-1",
      condition: maxClericSpellLongRest
    }},
    {type: "spell", data: {
      choiceID: "cleric::spell-2",
      condition: maxClericSpellLongRest
    }},
    {type: "spell", data: {
      choiceID: "cleric::spell-3",
      condition: maxClericSpellLongRest
    }},
    {type: "spell", data: {
      choiceID: "cleric::spell-4",
      condition: maxClericSpellLongRest
    }}
  ]
} as const;
const PHB_CLERIC_2: Level = {
  label: "Cleric 2",
  replace: "Cleric 1",
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "cleric::cantrip-replacement::2",
      sourceID: clericCantripSources,
      condition: clericCantripSpell
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "cleric::spell-5",
      condition: maxClericSpellLongRest
    }}
  ]
} as const;

export const PHB_CLERIC_3 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "cleric::cantrip-replacement::3",
      sourceID: clericCantripSources,
      condition: clericCantripSpell
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "cleric::spell-6",
      condition: maxClericSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_CLERIC_4 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "cleric::cantrip-replacement::4",
      sourceID: clericCantripSources,
      condition: clericCantripSpell
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "cleric::spell-7",
      condition: maxClericSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_CLERIC_5 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "cleric::cantrip-replacement::5",
      sourceID: clericCantripSources,
      condition: clericCantripSpell
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "cleric::spell-8",
      condition: maxClericSpellLongRest
    }},
    {type: "spell", data: {
      choiceID: "cleric::spell-9",
      condition: maxClericSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_CLERIC_6 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "cleric::cantrip-replacement::6",
      sourceID: clericCantripSources,
      condition: clericCantripSpell
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "cleric::spell-10",
      condition: maxClericSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_CLERIC_7 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "cleric::cantrip-replacement::7",
      sourceID: clericCantripSources,
      condition: clericCantripSpell
    }},
    {type: "simple", data: {
      label: "Blessed Strikes",
      choiceID: "blessed strike",
      options: [
        {optionID: "divine strike", label: "Divine Strike"},
        {optionID: "potent spellcasting", label: "Potent Spellcasting"}
      ]
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "cleric::spell-11",
      condition: maxClericSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_CLERIC_8 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "cleric::cantrip-replacement::8",
      sourceID: clericCantripSources,
      condition: clericCantripSpell
    }},
    {type: "feat", data: {
      choiceID: "feat",
      condition: featType("general", "origin")
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "cleric::spell-12",
      condition: maxClericSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_CLERIC_9 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "cleric::cantrip-replacement::9",
      sourceID: clericCantripSources,
      condition: clericCantripSpell
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "cleric::spell-13",
      condition: maxClericSpellLongRest
    }},
    {type: "spell", data: {
      choiceID: "cleric::spell-14",
      condition: maxClericSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_CLERIC_10 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "cleric::cantrip-replacement::10",
      sourceID: clericCantripSources,
      condition: clericCantripSpell
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "cleric::spell-15",
      condition: maxClericSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_CLERIC_11 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "cleric::cantrip-replacement::11",
      sourceID: clericCantripSources,
      condition: clericCantripSpell
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "cleric::spell-16",
      condition: maxClericSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_CLERIC_12 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "cleric::cantrip-replacement::12",
      sourceID: clericCantripSources,
      condition: clericCantripSpell
    }},
    {type: "feat", data: {
      choiceID: "feat",
      condition: featType("general", "origin")
    }}
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;


export default {
  "Cleric 1": PHB_CLERIC_1,
  "Cleric 2": PHB_CLERIC_2
} as const satisfies {[levelID: ClassID]: Level};
