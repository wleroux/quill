import {ClassID, Level} from "@/model/source/model/Level";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {isMainClass, noClasses} from "@/model/source/choice/Choice";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {SkillID} from "@/model/source/model/Skill";
import {is} from "@/model/source/condition/generic/IsCondition";
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";
import { AttributeID } from "@/model/source/model/Attribute";
import {WEAPON_TYPES} from "@/model/source/phb/weapon-mastery/weapons";

const rogueSkills = is<SkillID>("acrobatics","athletics","deception","insight","intimidation","investigation","perception","persuasion","sleight of hand","stealth");

const PHB_ROGUE_1: Level = {
  label: "Rogue 1",
  prerequisite: any(noClasses(), minStat("dex", 13)),
  choices: [
    {type: "saving-throw", data: {
      choiceID: "rogue::saving-throw-1",
      enabled: isMainClass(),
      condition: is<AttributeID>("dex")
    }},
    {type: "saving-throw", data: {
      choiceID: "rogue::saving-throw-2",
      enabled: isMainClass(),
      condition: is<AttributeID>("int")
    }},
    {type: "skill", data: {
      choiceID: "rogue::skill::skill-1",
      condition: rogueSkills
    }},
    {type: "skill", data: {
      choiceID: "rogue::skill::skill-2",
      enabled: isMainClass(),
      condition: rogueSkills
    }},
    {type: "skill", data: {
      choiceID: "rogue::skill::skill-3",
      enabled: isMainClass(),
      condition: rogueSkills
    }},
    {type: "skill", data: {
      choiceID: "rogue::skill::skill-4",
      enabled: isMainClass(),
      condition: rogueSkills
    }},
    {type: "expertise", data: {
      choiceID: "rogue::expertise::expertise-1"
    }},
    {type: "expertise", data: {
      choiceID: "rogue::expertise::expertise-2"
    }},
  ],
  longRest: [
    {type: "simple", data: {
      choiceID: "rogue::weapon-mastery-1",
      label: "Weapon Mastery",
      options: WEAPON_TYPES.map(weaponType => ({optionID: weaponType, label: weaponType}))
    }},
    {type: "simple", data: {
      choiceID: "rogue::weapon-mastery-2",
      label: "Weapon Mastery",
      options: WEAPON_TYPES.map(weaponType => ({optionID: weaponType, label: weaponType}))
    }}
  ]
} as const;

const PHB_ROGUE_2: Level = {
  label: "Rogue 2",
  replace: "Rogue 1",
  choices: [],
  longRest: []
} as const;
export const PHB_ROGUE_3 = {
  choices: [],
  longRest: []
} as const satisfies Partial<Level>;
export const PHB_ROGUE_4 = {
  choices: [
    {type: "feat", data: {
      choiceID: "rogue::feat-1",
      condition: featType("general", "origin")
    }}
  ],
  longRest: []
} as const satisfies Partial<Level>;

export default {
  [PHB_ROGUE_1.label]: PHB_ROGUE_1,
  [PHB_ROGUE_2.label]: PHB_ROGUE_2
} as const satisfies {[levelID: ClassID]: Level};
