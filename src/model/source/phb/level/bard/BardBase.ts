import {ClassID, Level} from "@/model/source/model/Level";
import {isMainClass, noClasses} from "@/model/source/choice/Choice";
import {bardSkill} from "@/model/source/phb/level/bard/BardSkillCondition";
import {bardCantripSpell} from "@/model/source/phb/level/bard/BardSpellCondition";
import {bardLeveledSpell} from "@/model/source/phb/level/bard/BardLeveledSpellCondition";
import {bardPreparedCantripID, bardPreparedSpellID} from "@/model/source/phb/level/bard/BardPreparedSpellIDCondition";
import {toolType} from "@/model/source/condition/tool/ToolTypeCondition";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {alwaysFalse} from "@/model/source/condition/generic/FalseCondition";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";
import {is} from "@/model/source/condition/generic/IsCondition";
import { AttributeID } from "@/model/source/model/Attribute";

const PHB_BARD_1: Level = {
  label: "Bard 1",
  prerequisite: any(noClasses(), minStat("cha", 13)),
  choices: [
    {type: "saving-throw", data: {
      choiceID: "bard::saving-throw-1",
      enabled: isMainClass(),
      condition: is<AttributeID>("dex")
    }},
    {type: "saving-throw", data: {
      choiceID: "bard::saving-throw-2",
      enabled: isMainClass(),
      condition: is<AttributeID>("cha")
    }},
    {type: "skill", data: {
      choiceID: "bard::skill::skill-1",
      condition: bardSkill()
    }},
    {type: "skill", data: {
      choiceID: "bard::skill::skill-2",
      enabled: isMainClass(),
      condition: bardSkill()
    }},
    {type: "skill", data: {
      choiceID: "bard::skill::skill-3",
      enabled: isMainClass(),
      condition: bardSkill()
    }},
    {type: "tool", data: {
      label: "Musical Instrument",
      choiceID: "bard::tool::tool-1",
      condition: toolType("musical instrument")
    }},
    {type: "tool", data: {
      label: "Musical Instrument",
      choiceID: "bard::tool::tool-2",
      enabled: isMainClass(),
      condition: toolType("musical instrument")
    }},
    {type: "tool", data: {
      label: "Musical Instrument",
      choiceID: "bard::tool::tool-3",
      enabled: isMainClass(),
      condition: toolType("musical instrument")
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "bard::spell::cantrip-1",
      condition: bardCantripSpell
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "bard::spell::cantrip-2",
      condition: bardCantripSpell
    }},
    {type: "spell", data: {
      label: "Level 1 Spell",
      choiceID: "bard::spell::spell-1",
      condition: bardLeveledSpell(1, false),
    }},
    {type: "spell", data: {
      label: "Level 1 Spell",
      choiceID: "bard::spell::spell-2",
      condition: bardLeveledSpell(1, false),
    }},
    {type: "spell", data: {
      label: "Level 1 Spell",
      choiceID: "bard::spell::spell-3",
      condition: bardLeveledSpell(1, false),
    }},
    {type: "spell", data: {
      label: "Level 1 Spell",
      choiceID: "bard::spell::spell-4",
      condition: bardLeveledSpell(1, false),
    }},
    {type: "item", data: {
      choiceID: "bard::item-1",
      condition: is("Leather Armor")
    }},
    {type: "item", data: {
      choiceID: "bard::item-2",
      condition: is("Dagger")
    }},
    {type: "item", data: {
      choiceID: "bard::item-3",
      condition: is("Entertainer's Pack")
    }},
  ],
  longRest: [
  ]
} as const;
const PHB_BARD_2: Level = {
  label: "Bard 2",
  replace: "Bard 1",
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "bard::spell-replacement::2",
      sourceID: bardPreparedCantripID(),
      condition: bardCantripSpell
    }},
    {type: "spell-replacement", data: {
      label: "Replace Prepared Spell",
      required: alwaysFalse(),
      choiceID: "bard::cantrip-replacement::2",
      sourceID: bardPreparedSpellID,
      condition: bardLeveledSpell(1, false),
    }},
    {type: "spell", data: {
      choiceID: "bard::spell::spell-5",
      condition: bardLeveledSpell(1, false),
    }},
    {type: "expertise", data: {
      choiceID: "bard::expertise::expertise-1",
      condition: bardSkill()
    }},
    {type: "expertise", data: {
      choiceID: "bard::expertise::expertise-2",
      condition: bardSkill()
    }}
  ],
  longRest: [
  ]
} as const;

export const BASE_BARD_3 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "bard::spell-replacement::3",
      sourceID: bardPreparedCantripID(),
      condition: bardCantripSpell
    }},
    {type: "spell-replacement", data: {
      label: "Replace Prepared Spell",
      required: alwaysFalse(),
      choiceID: "bard::cantrip-replacement::3",
      sourceID: bardPreparedSpellID,
      condition: bardLeveledSpell(2, false),
    }},
    {type: "spell", data: {
      choiceID: "bard::spell::spell-6",
      condition: bardLeveledSpell(2, false),
    }}
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;
export const BASE_BARD_4 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "bard::spell-replacement::4",
      sourceID: bardPreparedCantripID(),
      condition: bardCantripSpell
    }},
    {type: "spell-replacement", data: {
      label: "Replace Prepared Spell",
      required: alwaysFalse(),
      choiceID: "bard::cantrip-replacement::4",
      sourceID: bardPreparedSpellID,
      condition: bardLeveledSpell(2, false),
    }},
    {type: "spell", data: {
      choiceID: "bard::spell::spell-7",
      condition: bardLeveledSpell(2, false),
    }},
    {type: "feat", data: {
      choiceID: "bard::feat-1",
      condition: featType("general", "origin")
    }}
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;
export const BASE_BARD_5 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "spell-replacement::5",
      sourceID: bardPreparedCantripID(),
      condition: bardCantripSpell
    }},
    {type: "spell-replacement", data: {
      label: "Replace Prepared Spell",
      required: alwaysFalse(),
      choiceID: "bard::cantrip-replacement::5",
      sourceID: bardPreparedSpellID,
      condition: bardLeveledSpell(3, false)
    }},
    {type: "spell", data: {
      choiceID: "bard::spell::spell-8",
      condition: bardLeveledSpell(3, false),
    }},
    {type: "spell", data: {
      choiceID: "bard::spell::spell-9",
      condition: bardLeveledSpell(3, false),
    }},
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;
export const BASE_BARD_6 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "spell-replacement::6",
      sourceID: bardPreparedCantripID(),
      condition: bardCantripSpell
    }},
    {type: "spell-replacement", data: {
      label: "Replace Prepared Spell",
      required: alwaysFalse(),
      choiceID: "bard::cantrip-replacement::6",
      sourceID: bardPreparedSpellID,
      condition: bardLeveledSpell(3, false)
    }},
    {type: "spell", data: {
      choiceID: "bard::spell::spell-10",
      condition: bardLeveledSpell(3, false),
    }}
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;
export const BASE_BARD_7 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "spell-replacement::7",
      sourceID: bardPreparedCantripID(),
      condition: bardCantripSpell
    }},
    {type: "spell-replacement", data: {
      label: "Replace Prepared Spell",
      required: alwaysFalse(),
      choiceID: "bard::cantrip-replacement::7",
      sourceID: bardPreparedSpellID,
      condition: bardLeveledSpell(4, false)
    }},
    {type: "spell", data: {
      choiceID: "bard::spell::spell-11",
      condition: bardLeveledSpell(4, false),
    }}
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;
export const BASE_BARD_8 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "spell-replacement::8",
      sourceID: bardPreparedCantripID(),
      condition: bardCantripSpell
    }},
    {type: "spell-replacement", data: {
      label: "Replace Prepared Spell",
      required: alwaysFalse(),
      choiceID: "bard::cantrip-replacement::8",
      sourceID: bardPreparedSpellID,
      condition: bardLeveledSpell(4, false)
    }},
    {type: "spell", data: {
      choiceID: "bard::spell::spell-12",
      condition: bardLeveledSpell(4, false),
    }},
    {type: "feat", data: {
      choiceID: "bard::feat-2",
      condition: featType("general", "origin")
    }}
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;
export const BASE_BARD_9 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "spell-replacement::9",
      sourceID: bardPreparedCantripID(),
      condition: bardCantripSpell
    }},
    {type: "spell-replacement", data: {
      label: "Replace Prepared Spell",
      required: alwaysFalse(),
      choiceID: "bard::cantrip-replacement::9",
      sourceID: bardPreparedSpellID,
      condition: bardLeveledSpell(5, false)
    }},
    {type: "spell", data: {
      choiceID: "bard::spell::spell-13",
      condition: bardLeveledSpell(5, false),
    }},
    {type: "spell", data: {
      choiceID: "bard::spell::spell-14",
      condition: bardLeveledSpell(5, false),
    }},
    {type: "expertise", data: {
      choiceID: "bard::expertise::expertise-3",
      condition: bardSkill()
    }},
    {type: "expertise", data: {
      choiceID: "bard::expertise::expertise-4",
      condition: bardSkill()
    }},
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;

export const BASE_BARD_10 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "spell-replacement::10",
      sourceID: bardPreparedCantripID(),
      condition: bardCantripSpell
    }},
    {type: "spell-replacement", data: {
      label: "Replace Prepared Spell",
      required: alwaysFalse(),
      choiceID: "bard::cantrip-replacement::10",
      sourceID: bardPreparedSpellID,
      condition: bardLeveledSpell(5, true)
    }},
    {type: "spell", data: {
      choiceID: "bard::spell::spell-15",
      condition: bardLeveledSpell(5, true),
    }}
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;

export const BASE_BARD_11 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "spell-replacement::11",
      sourceID: bardPreparedCantripID(),
      condition: bardCantripSpell
    }},
    {type: "spell-replacement", data: {
      label: "Replace Prepared Spell",
      required: alwaysFalse(),
      choiceID: "bard::cantrip-replacement::11",
      sourceID: bardPreparedSpellID,
      condition: bardLeveledSpell(6, true)
    }},
    {type: "spell", data: {
      choiceID: "bard::spell::spell-16",
      condition: bardLeveledSpell(6, true),
    }}
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;

export const BASE_BARD_12 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "spell-replacement::12",
      sourceID: bardPreparedCantripID(),
      condition: bardCantripSpell
    }},
    {type: "spell-replacement", data: {
      label: "Replace Prepared Spell",
      required: alwaysFalse(),
      choiceID: "bard::cantrip-replacement::12",
      sourceID: bardPreparedSpellID,
      condition: bardLeveledSpell(6, true)
    }},
    {type: "spell", data: {
      choiceID: "bard::spell::spell-12",
      condition: bardLeveledSpell(6, true),
    }},
    {type: "feat", data: {
      choiceID: "bard::feat-3",
      condition: featType("general", "origin")
    }}
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;


export default {
  [PHB_BARD_1.label]: PHB_BARD_1,
  [PHB_BARD_2.label]: PHB_BARD_2
} as const satisfies {[levelID: ClassID]: Level};
