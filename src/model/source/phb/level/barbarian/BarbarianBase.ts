import {ClassID, Level} from "@/model/source/model/Level";
import {isMainClass, noClasses} from "@/model/source/choice/Choice";
import {barbarianSkills} from "@/model/source/phb/level/barbarian/BarbarianSkillCondition";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";
import {is} from "@/model/source/condition/generic/IsCondition";
import {AttributeID} from "@/model/source/model/Attribute";
import {MELEE_WEAPON_TYPES} from "@/model/source/phb/weapon-mastery/weapons";

const PHB_BARBARIAN_1: Level = {
  label: "Barbarian 1",
  prerequisite: any(noClasses(), minStat("str", 13)),
  choices: [
    {type: "saving-throw", data: {
      choiceID: "barbarian::saving-throw-1",
      enabled: isMainClass(),
      condition: is<AttributeID>("str")
    }},
    {type: "saving-throw", data: {
      choiceID: "barbarian::saving-throw-2",
      enabled: isMainClass(),
      condition: is<AttributeID>("con")
    }},
    {type: "skill", data: {
      choiceID: "skill::barbarian::1",
      enabled: isMainClass(),
      condition: barbarianSkills()
    }},
    {type: "skill", data: {
      choiceID: "skill::barbarian::2",
      enabled: isMainClass(),
      condition: barbarianSkills()
    }},
    {type: "item", data: {
      choiceID: "barbarian::item-1",
      condition: is("Greataxe")
    }},
    {type: "item", data: {
      choiceID: "barbarian::item-2",
      condition: is("Handaxe")
    }},
    {type: "item", data: {
      choiceID: "barbarian::item-3",
      condition: is("Explorer's Pack")
    }}
  ],
  longRest: [
    {type: "simple", data: {
      choiceID: "barbarian::weapon-mastery-1",
      label: "Weapon Mastery",
      options: MELEE_WEAPON_TYPES.map(weaponType => ({optionID: weaponType, label: weaponType}))
    }},
    {type: "simple", data: {
      choiceID: "barbarian::weapon-mastery-2",
      label: "Weapon Mastery",
      options: MELEE_WEAPON_TYPES.map(weaponType => ({optionID: weaponType, label: weaponType}))
    }}
  ]
};
const PHB_BARBARIAN_2: Level = {
  label: "Barbarian 2",
  replace: "Barbarian 1",
  choices: [],
  longRest: []
};

export const PHB_BARBARIAN_3 = {
  choices: [
    {type: "skill", data: {
      label: "Primal Knowledge",
      choiceID: "barbarian::skill-3",
      condition: barbarianSkills()
    }}
  ],
  longRest: []
} as const satisfies Partial<Level>;
export const PHB_BARBARIAN_4 = {
  choices: [
    {type: "feat", data: {
      choiceID: "barbarian::feat-1",
      condition: featType("general", "origin")
    }}
  ],
  longRest: []
} as const satisfies Partial<Level>;

export default {
  [PHB_BARBARIAN_1.label]: PHB_BARBARIAN_1,
  [PHB_BARBARIAN_2.label]: PHB_BARBARIAN_2,
} as const satisfies {[levelID: ClassID]: Level};
