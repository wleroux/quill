import {DEFAULT_FEATS, Feat} from "@/model/feat";
import {Class, CLASS_LABELS} from "@/model/class/Class";
import {Skill, SKILLS} from "@/model/skill";
import {MusicalInstrumentTool} from "@/model/tool";
import {Spell, SpellReplacement} from "@/model/spell";

export const CLERIC_SUBCLASSES = [
  "life",
  "light",
  "trickery",
  "war"
] as const;
export type ClassClericSubClass = typeof CLERIC_SUBCLASSES[number];
export type ClassClericSubClasses = {
  "life": {},
  "light": {},
  "trickery": {}
  "war": {},
};

export const CLERIC_SKILLS = [
  "history",
  "insight",
  "medicine",
  "persuasion",
  "religion"
] as const;
export type ClericSkill = typeof CLERIC_SKILLS[number];
export function isClericSkill(skill: Skill): skill is ClericSkill {
  return CLERIC_SKILLS.includes(skill as ClericSkill);
}

export const CLERIC_SUBCLASS_LABELS: {[subclass in ClassClericSubClass]: string} = {
  "life": "Life",
  "light": "Light",
  "trickery": "Trickery",
  "war": "War"
};

export type DivineOrderRoles = {
  "protector": {},
  "thaumaturge": {
    cantrip1: Spell
  }
};
export type DivineOrderRole = keyof DivineOrderRoles;

export const DEFAULT_CLERIC_DIVINE_ORDER_ROLE: {[role in DivineOrderRole]: {
  type: role,
  data: DivineOrderRoles[role]
}} = {
  protector: {type: "protector", data: {}},
  thaumaturge: {type: "thaumaturge", data: {
    cantrip1: ""
  }},
};

export type ClassCleric<SubClassType extends ClassClericSubClass> = {
  1: {
    skill1: Skill;
    skill2: Skill;
    cantrip1: Spell;
    cantrip2: Spell;
    cantrip3: Spell;
    cantrip4: Spell;
    role: DivineOrderRoles[keyof DivineOrderRoles]
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
  },
  8: {
    feat: Feat;
  },
  9: {
    spell2: Spell;
    expertise1: Skill;
    expertise2: Skill;
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
    improvedBlessedStrikes: "divine strike" | "potent spellcasting"
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
} & ClassClericSubClasses[SubClassType];

const CLASS_CLERIC_LEVEL_TEMPLATE: ClassCleric<any> = {
  1: {
    skill1: "history",
    skill2: "insight",
    cantrip1: "",
    cantrip2: "",
    cantrip3: "",
    cantrip4: "",
    role: DEFAULT_CLERIC_DIVINE_ORDER_ROLE["protector"]
  },
  2: {
  },
  3: {
    subclass: "life",
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
    improvedBlessedStrikes: "divine strike",
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

export const DEFAULT_CLERIC_SUBCLASS_LEVELS: {[key in ClassClericSubClass]: ClassCleric<key>} = {
  "life": {
    ...CLASS_CLERIC_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_CLERIC_LEVEL_TEMPLATE[3],
      subclass: "life"
    }
  },
  "light": {
    ...CLASS_CLERIC_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_CLERIC_LEVEL_TEMPLATE[3],
      subclass: "light"
    }
  },
  "trickery": {
    ...CLASS_CLERIC_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_CLERIC_LEVEL_TEMPLATE[3],
      subclass: "trickery"
    }
  },
  "war": {
    ...CLASS_CLERIC_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_CLERIC_LEVEL_TEMPLATE[3],
      subclass: "war"
    }
  }
};
export const DEFAULT_CLASS_CLERIC: ClassCleric<any> = DEFAULT_CLERIC_SUBCLASS_LEVELS["life"];

export function getClericClassLabel(clz: Class<"cleric">) {
  if (clz.level >= 3) {
    const subclass = clz.data[3].subclass as ClassClericSubClass;
    return `${CLASS_LABELS["cleric"]} (${CLERIC_SUBCLASS_LABELS[subclass]})`
  }
  return `${CLASS_LABELS["cleric"]}`;
}
