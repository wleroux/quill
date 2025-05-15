import {DEFAULT_FEATS, Feat} from "@/model/feat";
import {Class, CLASS_LABELS} from "@/model/class/Class";
import {Skill, SKILLS} from "@/model/skill";
import {MusicalInstrumentTool} from "@/model/tool";
import {Spell, SpellReplacement} from "@/model/spell";

export const DRUID_SUBCLASSES = [
  "land",
  "moon",
  "sea",
  "stars"
] as const;
export type ClassDruidSubClass = typeof DRUID_SUBCLASSES[number];
export type ClassDruidSubClasses = {
  "land": {},
  "moon": {},
  "sea": {}
  "stars": {},
};

export const DRUID_SKILLS = [
  "arcana",
  "animal handling",
  "insight",
  "medicine",
  "nature",
  "perception",
  "religion",
  "survival"
] as const;
export type DruidSkill = typeof DRUID_SKILLS[number];
export function isDruidSkill(skill: Skill): skill is DruidSkill {
  return DRUID_SKILLS.includes(skill as DruidSkill);
}

export const DRUID_SUBCLASS_LABELS: {[subclass in ClassDruidSubClass]: string} = {
  "land": "Land",
  "moon": "Moon",
  "sea": "Sea",
  "stars": "Stars"
};

export const DRUID_PRIMAL_ORDER_ROLES = ["magician", "warden"] as const;
export type PrimalOrderRole = typeof DRUID_PRIMAL_ORDER_ROLES[number];
export type PrimalOrderRoles = {
  "magician": {
    cantrip1: Spell;
  },
  "warden": {}
};
export const DRUID_PRIMAL_ORDER_ROLE_LABELS: {[key in PrimalOrderRole]: string} = {
  "magician": "Magician",
  "warden": "Warden"
};
export const DEFAULT_DRUID_PRIMAL_ORDER_ROLE: {[role in PrimalOrderRole]: {
  type: role,
  data: PrimalOrderRoles[role]
}} = {
  magician: {type: "magician", data: {cantrip1: ""}},
  warden: {type: "warden", data: {}},
};

export const DRUID_ELEMENTAL_FURY_TYPES = [
  "potent spellcasting",
  "primal strike"
] as const;

export type DruidElementalFuryType = typeof DRUID_ELEMENTAL_FURY_TYPES[number];
export const DRUID_ELEMENTAL_FURY_LABELS: {[key in DruidElementalFuryType]: string} = {
  "potent spellcasting": "Potent Spellcasting",
  "primal strike": "Primale Strike"
} as const;

export type ClassDruid<SubClassType extends ClassDruidSubClass> = {
  1: {
    skill1: Skill;
    skill2: Skill;
    cantrip1: Spell;
    cantrip2: Spell;
    role: PrimalOrderRoles[keyof PrimalOrderRoles]
  },
  2: {
  },
  3: {
    subclass: SubClassType;
  },
  4: {
    cantrip1: Spell;
    feat: Feat;
  },
  5: {
  },
  6: {
  },
  7: {
    elementalFury: DruidElementalFuryType
  },
  8: {
    feat: Feat;
  },
  9: {
  },
  10: {
    cantrip1: Spell;
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
} & ClassDruidSubClasses[SubClassType];

const CLASS_DRUID_LEVEL_TEMPLATE: ClassDruid<any> = {
  1: {
    skill1: "history",
    skill2: "insight",
    cantrip1: "",
    cantrip2: "",
    role: DEFAULT_DRUID_PRIMAL_ORDER_ROLE["warden"]
  },
  2: {
  },
  3: {
    subclass: "moon",
  },
  4: {
    cantrip1: "",
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
  },
  5: {
  },
  6: {
  },
  7: {
    elementalFury: "potent spellcasting"
  },
  8: {
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
  },
  9: {
  },
  10: {
    cantrip1: "",
  },
  11: {
  },
  12: {
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
  },
  13: {
  },
  14: {
  },
  15: {
  },
  16: {
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
  },
  17: {
  },
  18: {
  },
  19: {
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
  },
  20: {
  }
} as const;

export const DEFAULT_DRUID_SUBCLASS_LEVELS: {[key in ClassDruidSubClass]: ClassDruid<key>} = {
  "moon": {
    ...CLASS_DRUID_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_DRUID_LEVEL_TEMPLATE[3],
      subclass: "moon"
    }
  },
  "land": {
    ...CLASS_DRUID_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_DRUID_LEVEL_TEMPLATE[3],
      subclass: "land"
    }
  },
  "sea": {
    ...CLASS_DRUID_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_DRUID_LEVEL_TEMPLATE[3],
      subclass: "sea"
    }
  },
  "stars": {
    ...CLASS_DRUID_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_DRUID_LEVEL_TEMPLATE[3],
      subclass: "stars"
    }
  }
};
export const DEFAULT_CLASS_DRUID: ClassDruid<any> = DEFAULT_DRUID_SUBCLASS_LEVELS["moon"];

export function getDruidClassLabel(clz: Class<"druid">) {
  if (clz.level >= 3) {
    const subclass = clz.data[3].subclass as ClassDruidSubClass;
    return `${CLASS_LABELS["druid"]} (${DRUID_SUBCLASS_LABELS[subclass]})`
  }
  return `${CLASS_LABELS["druid"]}`;
}
