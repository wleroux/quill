import {Spell, SpellReplacement} from "@/model/spell";
import {DEFAULT_FEATS, Feat} from "@/model/feat";
import {Class, CLASS_LABELS} from "@/model/class/Class";
import {Metamagic, MetamagicReplacement} from "@/model/Metamagic";
import {Skill} from "@/model/skill";

export const DRACONIC_SORCERY_ELEMENTAL_AFFINITIES = [
  "acid", "cold", "fire", "lightning", "poison"
] as const;
export type DraconicSorceryElementalAffinity = typeof DRACONIC_SORCERY_ELEMENTAL_AFFINITIES[number];
export const DRACONIC_SORCERY_ELEMENTAL_AFFINITY_LABELS: {[key in DraconicSorceryElementalAffinity]: string} = {
  "acid": "Acid",
  "cold": "Cold",
  "fire": "Fire",
  "lightning": "Lightning",
  "poison": "Poison",
} as const;
export const SORCERER_SUBCLASSES = [
  "aberrant sorcery",
  "clockwork sorcery",
  "draconic sorcery",
  "wild magic sorcery"
] as const;
export type ClassSorcererSubClass = typeof SORCERER_SUBCLASSES[number];
export type ClassSorcererSubClasses = {
  "aberrant sorcery": {},
  "clockwork sorcery": {},
  "draconic sorcery": {
    6: {
      elementalAffinity: DraconicSorceryElementalAffinity
    }
  },
  "wild magic sorcery": {}
};

export const SORCERER_SKILLS = ["arcana", "deception", "insight", "intimidation", "persuasion", "religion"] as const;
export type SorcererSkill = typeof SORCERER_SKILLS[number];
export function isSorcererSkill(skill: Skill): skill is SorcererSkill {
  return SORCERER_SKILLS.includes(skill as SorcererSkill);
}

export const SORCERER_SUBCLASS_LABELS: {[subclass in ClassSorcererSubClass]: string} = {
  "aberrant sorcery": "Aberrant Sorcery",
  "clockwork sorcery": "Clockwork Sorcery",
  "draconic sorcery": "Draconic Sorcery",
  "wild magic sorcery": "Wild Magic Sorcery"
};

export type ClassSorcerer<SubClassType extends ClassSorcererSubClass> = {
  1: {
    skill1: SorcererSkill;
    skill2: SorcererSkill;
    cantrip1: Spell;
    cantrip2: Spell;
    cantrip3: Spell;
    cantrip4: Spell;
    spell1: Spell;
    spell2: Spell;
  },
  2: {
    spellReplacement?: SpellReplacement,
    spell1: Spell;
    spell2: Spell;
    metamagic1: Metamagic;
    metamagic2: Metamagic;
  },
  3: {
    subclass: SubClassType;
    spellReplacement?: SpellReplacement,
    metamagicReplacement?: MetamagicReplacement,
    cantrip1: Spell;
    spell1: Spell;
    spell2: Spell;
  },
  4: {
    spellReplacement?: SpellReplacement,
    metamagicReplacement?: MetamagicReplacement,
    spell1: Spell;
    feat: Feat;
  },
  5: {
    spellReplacement?: SpellReplacement,
    metamagicReplacement?: MetamagicReplacement,
    spell1: Spell;
    spell2: Spell;
  },
  6: {
    spellReplacement?: SpellReplacement,
    metamagicReplacement?: MetamagicReplacement,
    spell1: Spell;
  },
  7: {
    spellReplacement?: SpellReplacement,
    metamagicReplacement?: MetamagicReplacement,
    spell1: Spell;
  },
  8: {
    spellReplacement?: SpellReplacement,
    metamagicReplacement?: MetamagicReplacement,
    spell1: Spell;
    feat: Feat;
  },
  9: {
    spellReplacement?: SpellReplacement,
    metamagicReplacement?: MetamagicReplacement,
    spell1: Spell;
    spell2: Spell;
  },
  10: {
    spellReplacement?: SpellReplacement,
    metamagicReplacement?: MetamagicReplacement,
    cantrip1: Spell;
    spell1: Spell;
    metamagic1: Metamagic;
    metamagic2: Metamagic;
  },
  11: {
    spellReplacement?: SpellReplacement,
    metamagicReplacement?: MetamagicReplacement,
    spell1: Spell;
  },
  12: {
    spellReplacement?: SpellReplacement,
    metamagicReplacement?: MetamagicReplacement,
    feat: Feat;
  },
  13: {
    spellReplacement?: SpellReplacement,
    metamagicReplacement?: MetamagicReplacement,
    spell1: Spell;
  },
  14: {
    spellReplacement?: SpellReplacement,
    metamagicReplacement?: MetamagicReplacement,
  },
  15: {
    spellReplacement?: SpellReplacement,
    metamagicReplacement?: MetamagicReplacement,
    spell1: Spell;
  },
  16: {
    spellReplacement?: SpellReplacement,
    metamagicReplacement?: MetamagicReplacement,
    feat: Feat;
  },
  17: {
    spellReplacement?: SpellReplacement,
    metamagicReplacement?: MetamagicReplacement,
    spell1: Spell;
    metamagic1: Metamagic;
    metamagic2: Metamagic;
  },
  18: {
    spellReplacement?: SpellReplacement,
    metamagicReplacement?: MetamagicReplacement,
    spell1: Spell;
  },
  19: {
    spellReplacement?: SpellReplacement,
    metamagicReplacement?: MetamagicReplacement,
    spell1: Spell;
    feat: Feat;
  },
  20: {
    spellReplacement?: SpellReplacement,
    metamagicReplacement?: MetamagicReplacement,
    spell1: Spell;
  },
} & ClassSorcererSubClasses[SubClassType];

const CLASS_SORCERER_LEVEL_TEMPLATE = {
  1: {
    skill1: "arcana",
    skill2: "deception",
    cantrip1: "",
    cantrip2: "",
    cantrip3: "",
    cantrip4: "",
    spell1: "",
    spell2: "",
  },
  2: {
    spell1: "",
    spell2: "",
    metamagic1: "careful spell",
    metamagic2: "distant spell"
  },
  3: {
    cantrip1: "",
    spell1: "",
    spell2: "",
    subclass: "draconic sorcery",
  },
  4: {
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
    spell1: ""
  },
  5: {
    spell1: "",
    spell2: ""
  },
  6: {
    spell1: ""
  },
  7: {
    spell1: ""
  },
  8: {
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
    spell1: ""
  },
  9: {
    spell1: "",
    spell2: ""
  },
  10: {
    cantrip1: "",
    metamagic1: "empowered spell",
    metamagic2: "extended spell",
    spell1: ""
  },
  11: {
    spell1: ""
  },
  12: {
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
  },
  13: {
    spell1: ""
  },
  14: {

  },
  15: {
    spell1: ""
  },
  16: {
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
  },
  17: {
    metamagic1: "heightened spell",
    metamagic2: "careful spell",
    spell1: ""
  },
  18: {
    spell1: ""
  },
  19: {
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
    spell1: ""
  },
  20: {
    spell1: ""
  }
} as const;

export const DEFAULT_SORCERER_SUBCLASS_LEVELS: {[key in ClassSorcererSubClass]: ClassSorcerer<key>} = {
  "aberrant sorcery": {
    ...CLASS_SORCERER_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_SORCERER_LEVEL_TEMPLATE[3],
      subclass: "aberrant sorcery"
    }
  },
  "clockwork sorcery": {
    ...CLASS_SORCERER_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_SORCERER_LEVEL_TEMPLATE[3],
      subclass: "clockwork sorcery"
    }
  },
  "draconic sorcery": {
    ...CLASS_SORCERER_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_SORCERER_LEVEL_TEMPLATE[3],
      subclass: "draconic sorcery"
    },
    [6]: {
      ...CLASS_SORCERER_LEVEL_TEMPLATE[6],
      elementalAffinity: "acid"
    }
  },
  "wild magic sorcery": {
    ...CLASS_SORCERER_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_SORCERER_LEVEL_TEMPLATE[3],
      subclass: "wild magic sorcery"
    }
  }
};
export const DEFAULT_CLASS_SORCERER: ClassSorcerer<any> = DEFAULT_SORCERER_SUBCLASS_LEVELS["aberrant sorcery"];

export function getSorcererClassLabel(clz: Class<"sorcerer">) {
  if (clz.level >= 3) {
    const subclass = clz.data[3].subclass as ClassSorcererSubClass;
    return `${CLASS_LABELS["sorcerer"]} (${SORCERER_SUBCLASS_LABELS[subclass]})`
  }
  return `${CLASS_LABELS["sorcerer"]}`;
}
