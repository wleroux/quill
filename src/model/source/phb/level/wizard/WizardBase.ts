import {ClassID, Level} from "@/model/source/model/Level";
import {isMainClass, noClasses} from "@/model/source/choice/Choice";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {is} from "@/model/source/condition/generic/IsCondition";
import {SkillID} from "@/model/source/model/Skill";
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";
import {AttributeID} from "@/model/source/model/Attribute";
import {wizardCantripSpell} from "@/model/source/phb/level/wizard/wizardCantripSpell";
import {Condition} from "@/model/source/condition/Condition";
import {SpellID, SpellLevel} from "@/model/source/model/Spell";
import {getLevelsIn} from "@/model/source/condition/level/NeverTaken";
import {all} from "@/model/source/condition/generic/AllCondition";
import {maxSpellLevel} from "@/model/source/condition/spell/LeveledSpellCondition";
import {wizardSpell} from "@/model/source/phb/level/wizard/wizardSpell";

const wizardSkill = is<SkillID>("arcana","history","insight","investigation","medicine","religion");
const maxWizardLeveledSpells = (level: Exclude<SpellLevel, "cantrip">) => all(
  wizardSpell,
  maxSpellLevel(level)
);
function getWizardMaxSpellLevel(level: number): Exclude<SpellLevel, "cantrip"> {
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
const maxWizardSpellLongRest: Condition<SpellID> = (_, value) => maxWizardLeveledSpells(getWizardMaxSpellLevel(getLevelsIn(value, "Wizard 1")))(_, value)

const PHB_WIZARD_1: Level = {
  label: "Wizard 1",
  prerequisite: any(noClasses(), minStat("int", 13)),
  choices: [
    {type: "saving-throw", data: {
      choiceID: "monk::saving-throw-1",
      enabled: isMainClass(),
      condition: is<AttributeID>("int")
    }},
    {type: "saving-throw", data: {
      choiceID: "monk::saving-throw-2",
      enabled: isMainClass(),
      condition: is<AttributeID>("wis")
    }},
    {type: "skill", data: {
      choiceID: "wizard::skill-1",
      enabled: isMainClass(),
      condition: wizardSkill
    }},
    {type: "skill", data: {
      choiceID: "wizard::skill-2",
      enabled: isMainClass(),
      condition: wizardSkill
    }},
    {type: "item", data: {
      choiceID: "wizard::item-1",
      condition: is("Dagger")
    }},
    {type: "item", data: {
      choiceID: "wizard::item-2",
      condition: is("Quarterstaff")
    }},
    {type: "item", data: {
      choiceID: "wizard::item-3",
      condition: is("Robe")
    }},
    {type: "item", data: {
      choiceID: "wizard::item-4",
      condition: is("Enduring Spellbook")
    }},
    {type: "item", data: {
      choiceID: "wizard::item-5",
      condition: is("Scholar's Pack")
    }},
  ],
  longRest: [
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "wizard::cantrip-1",
      condition: wizardCantripSpell
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "wizard::cantrip-2",
      condition: wizardCantripSpell
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "wizard::cantrip-3",
      condition: wizardCantripSpell
    }},
    {type: "spell", data: {
      choiceID: "wizard::spell-1",
      condition: maxWizardSpellLongRest
    }},
    {type: "spell", data: {
      choiceID: "wizard::spell-2",
      condition: maxWizardSpellLongRest
    }},
    {type: "spell", data: {
      choiceID: "wizard::spell-3",
      condition: maxWizardSpellLongRest
    }},
    {type: "spell", data: {
      choiceID: "wizard::spell-4",
      condition: maxWizardSpellLongRest
    }}
  ]
} as const;
const PHB_WIZARD_2: Level = {
  label: "Wizard 2",
  replace: "Wizard 1",
  choices: [
    {type: "expertise", data: {
      label: "Scholar",
      choiceID: "wizard::expertise::1",
      condition: is<SkillID>("arcana","history","investigation","medicine","nature","religion")
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "wizard::spell-5",
      condition: maxWizardSpellLongRest
    }}
  ]
} as const;
export const PHB_WIZARD_3 = {
  choices: [],
  longRest: [
    {type: "spell", data: {
      choiceID: "wizard::spell-6",
      condition: maxWizardSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_WIZARD_4 = {
  choices: [
    {type: "feat", data: {
      choiceID: "wizard::feat-1",
      condition: featType("general", "origin")
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "wizard::spell-7",
      condition: maxWizardSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_WIZARD_5 = {
  choices: [
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "wizard::spell-8",
      condition: maxWizardSpellLongRest
    }},
    {type: "spell", data: {
      choiceID: "wizard::spell-9",
      condition: maxWizardSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_WIZARD_6 = {
  choices: [
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "wizard::spell-10",
      condition: maxWizardSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_WIZARD_7 = {
  choices: [
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "wizard::spell-11",
      condition: maxWizardSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_WIZARD_8 = {
  choices: [
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "wizard::spell-12",
      condition: maxWizardSpellLongRest
    }},
    {type: "feat", data: {
      choiceID: "wizard::feat-2",
      condition: featType("general", "origin")
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_WIZARD_9 = {
  choices: [
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "wizard::spell-13",
      condition: maxWizardSpellLongRest
    }},
    {type: "spell", data: {
      choiceID: "wizard::spell-14",
      condition: maxWizardSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_WIZARD_10 = {
  choices: [
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "wizard::spell-15",
      condition: maxWizardSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_WIZARD_11 = {
  choices: [
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "wizard::spell-16",
      condition: maxWizardSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_WIZARD_12 = {
  choices: [
    {type: "feat", data: {
      choiceID: "wizard::feat-3",
      condition: featType("general", "origin")
    }}
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;

export default {
  [PHB_WIZARD_1.label]: PHB_WIZARD_1,
  [PHB_WIZARD_2.label]: PHB_WIZARD_2
} as const satisfies {[levelID: ClassID]: Level};
