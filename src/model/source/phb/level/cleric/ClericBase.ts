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
import { AttributeID } from "@/model/source/model/Attribute";

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
  ]
} as const satisfies Partial<Level>;


export default {
  "Cleric 1": PHB_CLERIC_1,
  "Cleric 2": PHB_CLERIC_2
} as const satisfies {[levelID: ClassID]: Level};
