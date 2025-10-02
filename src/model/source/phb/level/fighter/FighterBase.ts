import {ClassID, Level} from "@/model/source/model/Level";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {isMainClass, noClasses, selectedChoice} from "@/model/source/choice/Choice";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {SkillID} from "@/model/source/model/Skill";
import {is} from "@/model/source/condition/generic/IsCondition";
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";
import {alwaysFalse} from "@/model/source/condition/generic/FalseCondition";
import {AttributeID} from "@/model/source/model/Attribute";
import {WEAPON_TYPES} from "../../weapon-mastery/weapons";

export const fighterSkills = is<SkillID>("acrobatics","animal handling","athletics","history","insight","intimidation","persuasion","perception","survival");

export const fightingStyleSource = is(
  "fighter::fighting-style::feat-1",
  "fighter (champion)::fighting-style::feat-1"
);

const PHB_FIGHTER_1: Level = {
  label: "Fighter 1",
  prerequisite: any(noClasses(), minStat("str", 13), minStat("dex", 13)),
  choices: [
    {type: "saving-throw", data: {
      choiceID: "fighter::saving-throw-1",
      enabled: isMainClass(),
      condition: is<AttributeID>("str")
    }},
    {type: "saving-throw", data: {
      choiceID: "fighter::saving-throw-2",
      enabled: isMainClass(),
      condition: is<AttributeID>("con")
    }},
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
    }},
    {type: "simple", data: {
      choiceID: "fighter::item-pack-1",
      label: "Item Pack",
      options: [
        {optionID: "heavy", label: "Option A (Heavy)"},
        {optionID: "light", label: "Option B (Light)"},
      ]
    }},
    {type: "item", data: {
      choiceID: "fighter::item-1",
      enabled: selectedChoice("fighter::item-pack-1", "heavy"),
      condition: is("Chain Mail")
    }},
    {type: "item", data: {
      choiceID: "fighter::item-2",
      enabled: selectedChoice("fighter::item-pack-1", "heavy"),
      condition: is("Greatsword")
    }},
    {type: "item", data: {
      choiceID: "fighter::item-3",
      enabled: selectedChoice("fighter::item-pack-1", "heavy"),
      condition: is("Flail")
    }},
    {type: "item", data: {
      choiceID: "fighter::item-4",
      enabled: selectedChoice("fighter::item-pack-1", "heavy"),
      condition: is("Javelin")
    }},
    {type: "item", data: {
      choiceID: "fighter::item-5",
      enabled: selectedChoice("fighter::item-pack-1", "light"),
      condition: is("Studded Leather Armor")
    }},
    {type: "item", data: {
      choiceID: "fighter::item-6",
      enabled: selectedChoice("fighter::item-pack-1", "light"),
      condition: is("Scimitar")
    }},
    {type: "item", data: {
      choiceID: "fighter::item-7",
      enabled: selectedChoice("fighter::item-pack-1", "light"),
      condition: is("Shortsword")
    }},
    {type: "item", data: {
      choiceID: "fighter::item-8",
      enabled: selectedChoice("fighter::item-pack-1", "light"),
      condition: is("Longbow")
    }},
    {type: "item", data: {
      choiceID: "fighter::item-9",
      enabled: selectedChoice("fighter::item-pack-1", "light"),
      condition: is("Arrows (20)")
    }},
    {type: "item", data: {
      choiceID: "fighter::item-10",
      enabled: selectedChoice("fighter::item-pack-1", "light"),
      condition: is("Quiver")
    }},
    {type: "item", data: {
      choiceID: "fighter::item-11",
      enabled: any(
        selectedChoice("fighter::item-pack-1", "light"),
        selectedChoice("fighter::item-pack-1", "heavy")
      ),
      condition: is("Dungeoneer's Pack")
    }}
  ],
  longRest: [
    {type: "simple", data: {
      choiceID: "fighter::weapon-mastery-1",
      label: "Weapon Mastery",
      options: WEAPON_TYPES.map(weaponType => ({optionID: weaponType, label: weaponType}))
    }},
    {type: "simple", data: {
      choiceID: "fighter::weapon-mastery-2",
      label: "Weapon Mastery",
      options: WEAPON_TYPES.map(weaponType => ({optionID: weaponType, label: weaponType}))
    }},
    {type: "simple", data: {
      choiceID: "fighter::weapon-mastery-2",
      label: "Weapon Mastery",
      options: WEAPON_TYPES.map(weaponType => ({optionID: weaponType, label: weaponType}))
    }}
  ]
} as const;

const PHB_FIGHTER_2: Level = {
  label: "Fighter 2",
  replace: "Fighter 1",
  choices: [
    {type: "feat-replacement", data: {
      label: "Replace Fighting Style",
      choiceID: "fighter::fighting-style-replacement-2",
      required: alwaysFalse(),
      sourceID: fightingStyleSource,
      condition: featType("fighting style")
    }}
  ],
  longRest: [
  ]
} as const;

export const PHB_FIGHTER_3 = {
  choices: [
    {type: "feat-replacement", data: {
      label: "Replace Fighting Style",
      choiceID: "fighter::fighting-style-replacement-2",
      required: alwaysFalse(),
      sourceID: fightingStyleSource,
      condition: featType("fighting style")
    }}
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;

export const PHB_FIGHTER_4 = {
  choices: [
    {type: "feat-replacement", data: {
      label: "Replace Fighting Style",
      choiceID: "fighter::fighting-style-replacement-2",
      required: alwaysFalse(),
      sourceID: fightingStyleSource,
      condition: featType("fighting style")
    }},
    {type: "feat", data: {
      choiceID: "fighter::feat-1",
      condition: featType("general", "origin")
    }}
  ],
  longRest: [
    {type: "simple", data: {
      choiceID: "fighter::weapon-mastery-4",
      label: "Weapon Mastery",
      options: WEAPON_TYPES.map(weaponType => ({optionID: weaponType, label: weaponType}))
    }}
  ]
} as const satisfies Partial<Level>;

export const PHB_FIGHTER_5 = {
  choices: [
    {type: "feat-replacement", data: {
      label: "Replace Fighting Style",
      choiceID: "fighting-style-replacement",
      required: alwaysFalse(),
      sourceID: fightingStyleSource,
      condition: featType("fighting style")
    }}
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;
export const PHB_FIGHTER_6 = {
  choices: [
    {type: "feat-replacement", data: {
      label: "Replace Fighting Style",
      choiceID: "fighting-style-replacement",
      required: alwaysFalse(),
      sourceID: fightingStyleSource,
      condition: featType("fighting style")
    }},
    {type: "feat", data: {
      choiceID: "fighter::feat-1",
      condition: featType("general", "origin")
    }}
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;
export const PHB_FIGHTER_7 = {
  choices: [
    {type: "feat-replacement", data: {
      label: "Replace Fighting Style",
      choiceID: "fighting-style-replacement",
      required: alwaysFalse(),
      sourceID: fightingStyleSource,
      condition: featType("fighting style")
    }}
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;
export const PHB_FIGHTER_8 = {
  choices: [
    {type: "feat-replacement", data: {
      label: "Replace Fighting Style",
      choiceID: "fighting-style-replacement",
      required: alwaysFalse(),
      sourceID: fightingStyleSource,
      condition: featType("fighting style")
    }},
    {type: "feat", data: {
      choiceID: "fighter::feat-3",
      condition: featType("general", "origin")
    }}
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;
export const PHB_FIGHTER_9 = {
  choices: [
    {type: "feat-replacement", data: {
      label: "Replace Fighting Style",
      choiceID: "fighting-style-replacement",
      required: alwaysFalse(),
      sourceID: fightingStyleSource,
      condition: featType("fighting style")
    }}
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;
export const PHB_FIGHTER_10 = {
  choices: [
    {type: "feat-replacement", data: {
      label: "Replace Fighting Style",
      choiceID: "fighting-style-replacement",
      required: alwaysFalse(),
      sourceID: fightingStyleSource,
      condition: featType("fighting style")
    }}
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;
export const PHB_FIGHTER_11 = {
  choices: [
    {type: "feat-replacement", data: {
      label: "Replace Fighting Style",
      choiceID: "fighting-style-replacement",
      required: alwaysFalse(),
      sourceID: fightingStyleSource,
      condition: featType("fighting style")
    }}
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;
export const PHB_FIGHTER_12 = {
  choices: [
    {type: "feat-replacement", data: {
      label: "Replace Fighting Style",
      choiceID: "fighting-style-replacement",
      required: alwaysFalse(),
      sourceID: fightingStyleSource,
      condition: featType("fighting style")
    }},
    {type: "feat", data: {
      choiceID: "fighter::feat-4",
      condition: featType("general", "origin")
    }}
  ],
  longRest: [
  ]
} as const satisfies Partial<Level>;


export default {
  [PHB_FIGHTER_1.label]: PHB_FIGHTER_1,
  [PHB_FIGHTER_2.label]: PHB_FIGHTER_2
} as const satisfies {[levelID: ClassID]: Level};
