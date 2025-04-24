import {DEFAULT_FEATS, Feat} from "@/model/feat";
import {Class, CLASS_LABELS} from "@/model/class/Class";
import {Skill, SKILLS} from "@/model/skill";
import {MusicalInstrumentTool} from "@/model/tool";
import {Spell, SpellReplacement} from "@/model/spell";

export const BARD_SUBCLASSES = [
  "dance",
  "lore",
  "glamour",
  "valor"
] as const;
export type ClassBardSubClass = typeof BARD_SUBCLASSES[number];
export type ClassBardSubClasses = {
  "dance": {},
  "lore": {
    3: {
      skill1: Skill;
      skill2: Skill;
      skill3: Skill;
    },
    6: {
      spell1: Spell;
      spell2: Spell;
    }
  },
  "glamour": {}
  "valor": {},
};

export const BARD_SKILLS = SKILLS;
export type BardSkill = typeof BARD_SKILLS[number];
export function isBardSkill(skill: Skill): skill is BardSkill {
  return true;
}

export const BARD_SUBCLASS_LABELS: {[subclass in ClassBardSubClass]: string} = {
  "dance": "Dance",
  "lore": "Lore",
  "glamour": "Glamour",
  "valor": "Valor"
};

export type ClassBard<SubClassType extends ClassBardSubClass> = {
  1: {
    skill1: BardSkill;
    skill2: BardSkill;
    skill3: BardSkill;
    tool1: MusicalInstrumentTool,
    tool2: MusicalInstrumentTool,
    tool3: MusicalInstrumentTool,
    cantrip1: Spell;
    cantrip2: Spell;
    spell1: Spell;
    spell2: Spell;
    spell3: Spell;
    spell4: Spell;
  },
  2: {
    spellReplacement?: SpellReplacement,
    spell1: Spell;
    expertise1: Skill;
    expertise2: Skill;
  },
  3: {
    spellReplacement?: SpellReplacement,
    spell1: Spell;
    subclass: SubClassType;
  },
  4: {
    spellReplacement?: SpellReplacement,
    cantrip1: Spell;
    spell1: Spell;
    feat: Feat;
  },
  5: {
    spellReplacement?: SpellReplacement,
    spell1: Spell;
    spell2: Spell;
  },
  6: {
    spellReplacement?: SpellReplacement,
    spell1: Spell;
  },
  7: {
    spellReplacement?: SpellReplacement,
    spell1: Spell;
  },
  8: {
    spellReplacement?: SpellReplacement,
    spell1: Spell;
    feat: Feat;
  },
  9: {
    spellReplacement?: SpellReplacement,
    spell1: Spell;
    spell2: Spell;
    expertise1: Skill;
    expertise2: Skill;
  },
  10: {
    spellReplacement?: SpellReplacement,
    cantrip1: Spell;
    spell1: Spell;
  },
  11: {
    spellReplacement?: SpellReplacement,
    spell1: Spell;
  },
  12: {
    spellReplacement?: SpellReplacement,
    feat: Feat;
  },
  13: {
    spellReplacement?: SpellReplacement,
    spell1: Spell;
  },
  14: {
    spellReplacement?: SpellReplacement,
  },
  15: {
    spellReplacement?: SpellReplacement,
    spell1: Spell;
  },
  16: {
    spellReplacement?: SpellReplacement,
    feat: Feat;
  },
  17: {
    spellReplacement?: SpellReplacement,
    spell1: Spell;
  },
  18: {
    spellReplacement?: SpellReplacement,
    spell1: Spell;
  },
  19: {
    spellReplacement?: SpellReplacement,
    spell1: Spell;
    feat: Feat;
  },
  20: {
    spellReplacement?: SpellReplacement,
    spell1: Spell;
  },
} & ClassBardSubClasses[SubClassType];

const CLASS_BARD_LEVEL_TEMPLATE: ClassBard<any> = {
  1: {
    skill1: "animal handling",
    skill2: "athletics",
    skill3: "acrobatics",
    tool1: "bagpipes",
    tool2: "drum",
    tool3: "dulcimer",
    cantrip1: "",
    cantrip2: "",
    spell1: "",
    spell2: "",
    spell3: "",
    spell4: "",
  },
  2: {
    spell1: "",
  },
  3: {
    spell1: "",
    subclass: "lore",
  },
  4: {
    spell1: "",
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
  },
  5: {
    spell1: "",
    spell2: "",
  },
  6: {
    spell1: "",
  },
  7: {
    spell1: "",
  },
  8: {
    spell1: "",
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
  },
  9: {
    spell1: "",
    spell2: "",
  },
  10: {
    spell1: "",
  },
  11: {
    spell1: "",
  },
  12: {
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
  },
  13: {
    spell1: "",
  },
  14: {

  },
  15: {
    spell1: "",
  },
  16: {
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
  },
  17: {
    spell1: "",
  },
  18: {
    spell1: "",
  },
  19: {
    spell1: "",
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
  },
  20: {
    spell1: "",
  }
} as const;

export const DEFAULT_BARD_SUBCLASS_LEVELS: {[key in ClassBardSubClass]: ClassBard<key>} = {
  "lore": {
    ...CLASS_BARD_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_BARD_LEVEL_TEMPLATE[3],
      subclass: "lore",
      skill1: "athletics",
      skill2: "acrobatics",
      skill3: "arcana",
    },
    [6]: {
      ...CLASS_BARD_LEVEL_TEMPLATE[6],
      spell1: "",
      spell2: ""
    }
  },
  "dance": {
    ...CLASS_BARD_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_BARD_LEVEL_TEMPLATE[3],
      subclass: "dance"
    }
  },
  "glamour": {
    ...CLASS_BARD_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_BARD_LEVEL_TEMPLATE[3],
      subclass: "glamour"
    }
  },
  "valor": {
    ...CLASS_BARD_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_BARD_LEVEL_TEMPLATE[3],
      subclass: "valor"
    }
  }
};
export const DEFAULT_CLASS_BARD: ClassBard<any> = DEFAULT_BARD_SUBCLASS_LEVELS["lore"];

export function getBardClassLabel(clz: Class<"sorcerer">) {
  if (clz.level >= 3) {
    const subclass = clz.data[3].subclass as ClassBardSubClass;
    return `${CLASS_LABELS["bard"]} (${BARD_SUBCLASS_LABELS[subclass]})`
  }
  return `${CLASS_LABELS["bard"]}`;
}
