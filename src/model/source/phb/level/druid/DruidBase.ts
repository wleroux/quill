import {ClassID, Level} from "@/model/source/model/Level";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {isMainClass, noClasses, selectedChoice} from "@/model/source/choice/Choice";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {SkillID} from "@/model/source/model/Skill";
import {is} from "@/model/source/condition/generic/IsCondition";
import {druidCantripSpell} from "@/model/source/phb/level/druid/druidCantripSpell";
import {alwaysFalse} from "@/model/source/condition/generic/FalseCondition";
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";
import {AttributeID} from "@/model/source/model/Attribute";
import {SpellID, SpellLevel} from "@/model/source/model/Spell";
import {all} from "@/model/source/condition/generic/AllCondition";
import {wizardSpell} from "@/model/source/phb/level/wizard/wizardSpell";
import {maxSpellLevel} from "@/model/source/condition/spell/LeveledSpellCondition";
import {Condition} from "@/model/source/condition/Condition";
import {getLevelsIn} from "@/model/source/condition/level/NeverTaken";

const druidForms = [
  "Badger",
  "Boar",
  "Camel",
  "Cat",
  "Constrictor Snake",
  "Crab",
  "Draft Horse",
  "Elk",
  "Frog",
  "Giant Badger",
  "Giant Crab",
  "Giant Weasel",
  "Goat",
  "Lizard",
  "Mastiff",
  "Mule",
  "Octopus",
  "Owl",
  "Panther",
  "Pony",
  "Rat",
  "Riding Horse",
  "Scorpion",
  "Spider",
  "Venomous Snake",
  "Weasel",
  "Wolf"
] as const;

const druidCantripSourceIDs = is(
  "druid::cantrip-1",
  "druid::cantrip-magician",
  "druid::cantrip-2",
  "druid::cantrip-3",
  "druid::cantrip-4",
);
const druidSkills = is<SkillID>("arcana","animal handling","insight","medicine","nature","perception","religion","survival");
const maxDruidLeveledSpells = (level: Exclude<SpellLevel, "cantrip">) => all(
  wizardSpell,
  maxSpellLevel(level)
);
function getDruidMaxSpellLevel(level: number): Exclude<SpellLevel, "cantrip"> {
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
const maxDruidSpellLongRest: Condition<SpellID> = (_, value) => maxDruidLeveledSpells(getDruidMaxSpellLevel(getLevelsIn(value, "Druid 1")))(_, value)

const PHB_DRUID_1: Level = {
  label: "Druid 1",
  prerequisite: any(noClasses(), minStat("wis", 13)),
  choices: [
    {type: "saving-throw", data: {
      choiceID: "druid::saving-throw-1",
      enabled: isMainClass(),
      condition: is<AttributeID>("int")
    }},
    {type: "saving-throw", data: {
      choiceID: "druid::saving-throw-2",
      enabled: isMainClass(),
      condition: is<AttributeID>("wis")
    }},
    {type: "skill", data: {
      choiceID: "druid::skill::skill-1",
      enabled: isMainClass(),
      condition: druidSkills
    }},
    {type: "skill", data: {
      choiceID: "druid::skill::skill-2",
      enabled: isMainClass(),
      condition: druidSkills
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "druid::spell::cantrip-1",
      condition: druidCantripSpell
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "druid::spell::cantrip-2",
      condition: druidCantripSpell
    }},
    {type: "simple", data: {
      label: "Primal Order",
      choiceID: "primal order",
      options: [
        {optionID: "magician", label: "Magician"},
        {optionID: "warden", label: "Warden"}
      ]
    }},
    {type: "spell", data: {
      enabled: selectedChoice("primal order", "magician"),
      label: "Cantrip",
      choiceID: "druid::spell::cantrip-magician",
      condition: druidCantripSpell
    }},
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "druid::spell-1",
      condition: maxDruidSpellLongRest
    }},
    {type: "spell", data: {
      choiceID: "druid::spell-2",
      condition: maxDruidSpellLongRest
    }},
    {type: "spell", data: {
      choiceID: "druid::spell-3",
      condition: maxDruidSpellLongRest
    }},
    {type: "spell", data: {
      choiceID: "druid::spell-4",
      condition: maxDruidSpellLongRest
    }}
  ]
} as const;
const PHB_DRUID_2: Level = {
  label: "Druid 2",
  replace: "Druid 1",
  choices: [
    {type: "spell-replacement", data: {
      label: "Cantrip Replacement",
      choiceID: "druid::cantrip-replacement::2",
      condition: druidCantripSpell,
      required: alwaysFalse(),
      sourceID: druidCantripSourceIDs
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "druid::spell-5",
      condition: maxDruidSpellLongRest
    }},
    {type: "simple", data: {
      choiceID: "druid::known-form-1",
      label: "Known Form",
      options: druidForms.map(value => ({optionID: value, label: value}))
    }},
    {type: "simple", data: {
      choiceID: "druid::known-form-2",
      label: "Known Form",
      options: druidForms.map(value => ({optionID: value, label: value}))
    }},
    {type: "simple", data: {
      choiceID: "druid::known-form-3",
      label: "Known Form",
      options: druidForms.map(value => ({optionID: value, label: value}))
    }},
    {type: "simple", data: {
      choiceID: "druid::known-form-4",
      label: "Known Form",
      options: druidForms.map(value => ({optionID: value, label: value}))
    }}
  ]
} as const;
export const PHB_DRUID_3 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Cantrip Replacement",
      choiceID: "druid::cantrip-replacement::3",
      condition: druidCantripSpell,
      required: alwaysFalse(),
      sourceID: druidCantripSourceIDs
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "druid::spell-6",
      condition: maxDruidSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_DRUID_4 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Cantrip Replacement",
      choiceID: "druid::cantrip-replacement::3",
      condition: druidCantripSpell,
      required: alwaysFalse(),
      sourceID: druidCantripSourceIDs
    }},
    {type: "feat", data: {
      choiceID: "druid::feat-1",
      condition: featType("general", "origin")
    }}
  ],
  longRest: [
    {type: "spell", data: {
      choiceID: "druid::spell-7",
      condition: maxDruidSpellLongRest
    }}
  ]
} as const satisfies Partial<Level>;

export default {
  [PHB_DRUID_1.label]: PHB_DRUID_1,
  [PHB_DRUID_2.label]: PHB_DRUID_2
} as const satisfies {[levelID: ClassID]: Level};
