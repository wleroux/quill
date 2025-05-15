import {DEFAULT_FEATS, Feat, FightingStyleFeat, FightingStyleFeats} from "@/model/feat";
import {Class, CLASS_LABELS} from "@/model/class/Class";
import {Skill} from "@/model/skill";
import {ToolArtisan} from "@/model/tool";
import {Maneuver, ManeuverReplacement} from "@/model/Maneuver";
import {Spell, SpellReplacement} from "@/model/spell";

export const FIGHTER_SUBCLASSES = [
  "battle master",
  "champion",
  "eldritch knight",
  "psi warrior"
] as const;
export type ClassFighterSubClass = typeof FIGHTER_SUBCLASSES[number];
export type ClassFighterSubClasses = {
  "battle master": {
    [3]: {
      maneuvers1: Maneuver,
      maneuvers2: Maneuver,
      maneuvers3: Maneuver,
      artisanTool: ToolArtisan,
      skill1: Skill
    },
    [7]: {
      maneuverReplacement?: ManeuverReplacement,
      maneuvers1: Maneuver,
      maneuvers2: Maneuver
    },
    [10]: {
      maneuverReplacement?: ManeuverReplacement,
      maneuvers1: Maneuver,
      maneuvers2: Maneuver
    },
    [15]: {
      maneuverReplacement?: ManeuverReplacement,
      maneuvers1: Maneuver,
      maneuvers2: Maneuver
    },
  },
  "champion": {
    [7]: {
      fightingStyle1: keyof FightingStyleFeats
    }
  },
  "eldritch knight": {
    [3]: {
      cantrip1: Spell;
      cantrip2: Spell;
      spell1: Spell;
      spell2: Spell;
      spell3: Spell;
    },
    [4]: {
      cantripReplacement?: SpellReplacement;
      spellReplacement?: SpellReplacement;
      spell1: Spell;
    },
    [5]: {
      cantripReplacement?: SpellReplacement;
      spellReplacement?: SpellReplacement;
    },
    [6]: {
      cantripReplacement?: SpellReplacement;
      spellReplacement?: SpellReplacement;
    },
    [7]: {
      cantripReplacement?: SpellReplacement;
      spellReplacement?: SpellReplacement;
      spell1: Spell;
    },
    [8]: {
      cantripReplacement?: SpellReplacement;
      spellReplacement?: SpellReplacement;
      spell1: Spell;
    },
    [9]: {
      cantripReplacement?: SpellReplacement;
      spellReplacement?: SpellReplacement;
    },
    [10]: {
      cantripReplacement?: SpellReplacement;
      spellReplacement?: SpellReplacement;
      cantrip1: Spell;
      spell1: Spell;
    },
    [11]: {
      cantripReplacement?: SpellReplacement;
      spellReplacement?: SpellReplacement;
      spell1: Spell;
    },
    [12]: {
      cantripReplacement?: SpellReplacement;
      spellReplacement?: SpellReplacement;
    },
    [13]: {
      cantripReplacement?: SpellReplacement;
      spellReplacement?: SpellReplacement;
      spell1: Spell;
    },
    [14]: {
      cantripReplacement?: SpellReplacement;
      spellReplacement?: SpellReplacement;
      spell1: Spell;
    },
    [15]: {
      cantripReplacement?: SpellReplacement;
      spellReplacement?: SpellReplacement;
    },
    [16]: {
      cantripReplacement?: SpellReplacement;
      spellReplacement?: SpellReplacement;
      spell1: Spell;
    },
    [17]: {
      cantripReplacement?: SpellReplacement;
      spellReplacement?: SpellReplacement;
    },
    [18]: {
      cantripReplacement?: SpellReplacement;
      spellReplacement?: SpellReplacement;
    },
    [19]: {
      cantripReplacement?: SpellReplacement;
      spellReplacement?: SpellReplacement;
      spell1: Spell;
    },
    [20]: {
      cantripReplacement?: SpellReplacement;
      spellReplacement?: SpellReplacement;
      spell1: Spell;
    },
  },
  "psi warrior": {}
};


export const FIGHTER_SKILLS = ["acrobatics", "animal handling", "athletics", "history", "insight", "intimidation", "persuasion", "perception", "survival"] as const;
export type FighterSkill = typeof FIGHTER_SKILLS[number];
export function isFighterSkill(skill: Skill): skill is FighterSkill {
  return FIGHTER_SKILLS.includes(skill as FighterSkill);
}

export const FIGHTER_SUBCLASS_LABELS: {[subclass in ClassFighterSubClass]: string} = {
  "battle master": "Battle Master",
  "champion": "Champion",
  "eldritch knight": "Eldritch Knight",
  "psi warrior": "Psi Warrior"
};

export type ClassFighter<SubClassType extends ClassFighterSubClass> = {
  1: {
    skill1: FighterSkill;
    skill2: FighterSkill;
    fightingStyle1: keyof FightingStyleFeats
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
    feat: Feat;
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
    feat: Feat;
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
} & ClassFighterSubClasses[SubClassType];

const CLASS_FIGHTER_LEVEL_TEMPLATE = {
  1: {
    skill1: "animal handling",
    skill2: "athletics",
    fightingStyle1: "defense",
  },
  2: {},
  3: {
    subclass: "berserker",
  },
  4: {
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]},
  },
  5: {},
  6: {
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]}
  },
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
  14: {
    feat: {type: "skilled", data: DEFAULT_FEATS["skilled"]}
  },
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

export const DEFAULT_FIGHTER_SUBCLASS_LEVELS: {[key in ClassFighterSubClass]: ClassFighter<key>} = {
  "battle master": {
    ...CLASS_FIGHTER_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_FIGHTER_LEVEL_TEMPLATE[3],
      subclass: "battle master",
      artisanTool: "alchemist's supplies",
      maneuvers1: "ambush",
      maneuvers2: "bait and switch",
      maneuvers3: "commander's strike",
      skill1: "animal handling",
    },
    [7]: {
      ...CLASS_FIGHTER_LEVEL_TEMPLATE[7],
      maneuvers1: "commanding presence",
      maneuvers2: "disarming attack"
    },
    [10]: {
      ...CLASS_FIGHTER_LEVEL_TEMPLATE[7],
      maneuvers1: "distracting strike",
      maneuvers2: "evasive footwork"
    },
    [15]: {
      ...CLASS_FIGHTER_LEVEL_TEMPLATE[7],
      maneuvers1: "feinting attack",
      maneuvers2: "goading attack"
    }
  },
  "champion": {
    ...CLASS_FIGHTER_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_FIGHTER_LEVEL_TEMPLATE[3],
      subclass: "champion"
    },
    [7]: {
      ...CLASS_FIGHTER_LEVEL_TEMPLATE[7],
      fightingStyle1: "blind fighting"
    }
  },
  "eldritch knight": {
    ...CLASS_FIGHTER_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_FIGHTER_LEVEL_TEMPLATE[3],
      subclass: "eldritch knight",
      cantrip1: "",
      cantrip2: "",
      spell1: "",
      spell2: "",
      spell3: ""
    },
    [4]: {
      ...CLASS_FIGHTER_LEVEL_TEMPLATE[4],
      spell1: ""
    },
    [7]: {
      ...CLASS_FIGHTER_LEVEL_TEMPLATE[7],
      spell1: ""
    },
    [8]: {
      ...CLASS_FIGHTER_LEVEL_TEMPLATE[8],
      spell1: ""
    },
    [10]: {
      ...CLASS_FIGHTER_LEVEL_TEMPLATE[10],
      cantrip1: "",
      spell1: ""
    },
    [11]: {
      ...CLASS_FIGHTER_LEVEL_TEMPLATE[11],
      spell1: ""
    },
    [13]: {
      ...CLASS_FIGHTER_LEVEL_TEMPLATE[13],
      spell1: ""
    },
    [14]: {
      ...CLASS_FIGHTER_LEVEL_TEMPLATE[14],
      spell1: ""
    },
    [16]: {
      ...CLASS_FIGHTER_LEVEL_TEMPLATE[14],
      spell1: ""
    },
    [19]: {
      ...CLASS_FIGHTER_LEVEL_TEMPLATE[19],
      spell1: ""
    },
    [20]: {
      ...CLASS_FIGHTER_LEVEL_TEMPLATE[20],
      spell1: ""
    }
  },
  "psi warrior": {
    ...CLASS_FIGHTER_LEVEL_TEMPLATE,
    [3]: {
      ...CLASS_FIGHTER_LEVEL_TEMPLATE[3],
      subclass: "psi warrior"
    }
  }
};
export const DEFAULT_CLASS_FIGHTER: ClassFighter<any> = DEFAULT_FIGHTER_SUBCLASS_LEVELS["battle master"];

export function getFighterClassLabel(clz: Class<"fighter">) {
  if (clz.level >= 3) {
    const subclass = clz.data[3].subclass as ClassFighterSubClass;
    return `${CLASS_LABELS["fighter"]} (${FIGHTER_SUBCLASS_LABELS[subclass]})`
  }
  return `${CLASS_LABELS["fighter"]}`;
}
