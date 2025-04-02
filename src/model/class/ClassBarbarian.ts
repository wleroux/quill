import {Spell, SpellReplacement} from "@/model/spell";
import {DEFAULT_FEATS, Feat} from "@/model/feat";
import {Class, CLASS_LABELS} from "@/model/class/Class";
import {Metamagic, MetamagicReplacement} from "@/model/Metamagic";
import {Skill} from "@/model/skill";

export const BARBARIAN_SUBCLASSES = [
  "berserker",
  "wild heart",
  "world tree",
  "zealot"
] as const;
export type ClassBarbarianSubClass = typeof BARBARIAN_SUBCLASSES[number];
export type ClassBarbarianSubClasses = {
  "berserker": {},
  "wild heart": {},
  "world tree": {},
  "zealot": {}
};


export const BARBARIAN_SKILLS = ["animal handling", "athletics", "intimidation", "nature", "perception", "survival"] as const;
export type BarbarianSkill = typeof BARBARIAN_SKILLS[number];
export function isBarbarianSkill(skill: Skill): skill is BarbarianSkill {
  return BARBARIAN_SKILLS.includes(skill as BarbarianSkill);
}

export const BARBARIAN_SUBCLASS_LABELS: {[subclass in ClassBarbarianSubClass]: string} = {
  "berserker": "Berserker",
  "wild heart": "Wild Heart",
  "world tree": "World Tree",
  "zealot": "Zealot"
};

export type ClassBarbarian<SubClassType extends ClassBarbarianSubClass> = {
  1: {
    skill1: BarbarianSkill;
    skill2: BarbarianSkill;
  },
  2: {},
  3: {
    subclass: SubClassType;
  },
  4: {
    feat: Feat;
  },
  5: {},
  6: {
  },
  7: {
  },
  8: {
    feat: Feat;
  },
  9: {
  },
  10: {
  },
  11: {
  },
  12: {
    feat: Feat;
  },
  13: {
  },
  14: {
  },
  15: {
  },
  16: {
    feat: Feat;
  },
  17: {
  },
  18: {
  },
  19: {
    feat: Feat;
  },
  20: {
  },
} & ClassBarbarianSubClasses[SubClassType];

const CLASS_BARBARIAN_LEVEL_TEMPLATE = {
  1: {
    skill1: "animal handling",
    skill2: "athletics",
  },
  2: {},
  3: {
    subclass: "berserker",
  },
  4: {
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
  },
  5: {},
  6: {},
  7: {},
  8: {
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
  },
  9: {},
  10: {},
  11: {},
  12: {
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
  },
  13: {},
  14: {},
  15: {},
  16: {
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
  },
  17: {},
  18: {},
  19: {
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
  },
  20: {}
} as const;

export const DEFAULT_BARBARIAN_SUBCLASS_LEVELS: {[key in ClassBarbarianSubClass]: ClassBarbarian<key>} = {
  "berserker": {
    ...CLASS_BARBARIAN_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_BARBARIAN_LEVEL_TEMPLATE[3],
      subclass: "berserker"
    }
  },
  "wild heart": {
    ...CLASS_BARBARIAN_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_BARBARIAN_LEVEL_TEMPLATE[3],
      subclass: "wild heart"
    }
  },
  "world tree": {
    ...CLASS_BARBARIAN_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_BARBARIAN_LEVEL_TEMPLATE[3],
      subclass: "world tree"
    }
  },
  "zealot": {
    ...CLASS_BARBARIAN_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_BARBARIAN_LEVEL_TEMPLATE[3],
      subclass: "zealot"
    }
  }
};
export const DEFAULT_CLASS_BARBARIAN: ClassBarbarian<any> = DEFAULT_BARBARIAN_SUBCLASS_LEVELS["zealot"];

export function getBarbarianClassLabel(clz: Class<"sorcerer">) {
  if (clz.level >= 3) {
    const subclass = clz.data[3].subclass as ClassBarbarianSubClass;
    return `${CLASS_LABELS["barbarian"]} (${BARBARIAN_SUBCLASS_LABELS[subclass]})`
  }
  return `${CLASS_LABELS["barbarian"]}`;
}
