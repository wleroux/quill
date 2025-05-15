import {MusicalInstrumentTool, Tool} from "@/model/tool";
import {Skill} from "@/model/skill";
import {Spell} from "@/model/spell";
import {
  Attribute,
  ConWisAttribute, DexConAttribute,
  DexIntAttribute,
  IntWisAttribute,
  MentalAttribute,
  StrConAttribute,
  StrDexAttribute,
  StrDexWisAttribute,
  WisChaAttribute
} from "@/model/attribute";

type FeatGeneric = {};

type FeatAlert = FeatGeneric;
export type CrafterTool =
  | "carpenter's tools"
  | "leatherworker's tools"
  | "mason's tools"
  | "potter's tools"
  | "smith's tools"
  | "tinker's tools"
  | "weaver's tools"
  | "woodcarver's tools";
export function isCrafterTool(tool: Tool): tool is CrafterTool {
  return [
    "carpenter's tools",
    "leatherworker's tools",
    "mason's tools",
    "potter's tools",
    "smith's tools",
    "tinker's tools",
    "weaver's tools",
    "woodcarver's tools"
  ].includes(tool);
}
export type FeatCrafter = {
  selection1: CrafterTool;
  selection2: CrafterTool;
  selection3: CrafterTool;
};
type FeatHealer = FeatGeneric;
type FeatLucky = FeatGeneric;
export type FeatMagicInitiate = {
  cantripClass: "cleric" | "druid" | "wizard";
  cantrip1: Spell;
  cantrip2: Spell;
  spellcastingAbility: MentalAttribute;
};
export type FeatMusician = {
  selection1: MusicalInstrumentTool;
  selection2: MusicalInstrumentTool;
  selection3: MusicalInstrumentTool;
};
type FeatSavageAttacker = FeatGeneric;
export type FeatSkilled = {
  selection1: (Skill | Tool);
  selection2: (Skill | Tool);
  selection3: (Skill | Tool);
};
type FeatTavernBrawler = FeatGeneric;
type FeatTough = FeatGeneric;

export type OriginFeats = {
  "alert": FeatAlert,
  "crafter": FeatCrafter,
  "healer": FeatHealer,
  "lucky": FeatLucky,
  "magic initiate": FeatMagicInitiate,
  "musician": FeatMusician,
  "savage attacker": FeatSavageAttacker,
  "skilled": FeatSkilled,
  "tavern brawler": FeatTavernBrawler,
  "tough": FeatTough
};

export const ORIGIN_FEATS: (keyof OriginFeats)[] = [
  "alert",
  "crafter",
  "healer",
  "lucky",
  "magic initiate",
  "musician",
  "savage attacker",
  "skilled",
  "tavern brawler",
  "tough"
] as const;

export type OriginFeat = {
  [key in keyof OriginFeats]: {
    type: key,
    data: OriginFeats[key]
  }
}[keyof OriginFeats];

export function isOriginFeat(feat: Feat): feat is OriginFeat {
  return ORIGIN_FEATS.includes(feat.type as OriginFeat["type"]);
}

export const DefaultOriginFeat: OriginFeat = {
  type: "skilled",
  data: {
    selection1: "acrobatics",
    selection2: "arcana",
    selection3: "deception"
  }
};

export type FeatAbilityScoreImprovement = {
  attribute1: Attribute;
  attribute2: Attribute;
};
export type FeatActor = FeatGeneric;

export type FeatAttribute<T extends Attribute> = {
  attribute: T
}
export type FeatAthlete = FeatAttribute<StrDexAttribute>;
export type FeatCharger = FeatAttribute<StrDexAttribute>;
export type FeatChef = FeatAttribute<ConWisAttribute>;
export type FeatDefensiveDuelist = FeatGeneric;
export type FeatDualWielder = FeatAttribute<StrDexAttribute>;
export type FeatDurable = FeatGeneric;

export const ELEMENTAL_ADEPT_ENERGIES = [
  "acid", "cold", "fire", "lightning", "thunder"
] as const;
export type ElementalAdeptEnergy = typeof ELEMENTAL_ADEPT_ENERGIES[number];
export const ELEMENTAL_ADEPT_ENERGY_LABELS: {[key in ElementalAdeptEnergy]: string} = {
  "acid": "Acid",
  "cold": "Cold",
  "fire": "Fire",
  "lightning": "Lightning",
  "thunder": "Thunder"
};
export type FeatElementalAdept = FeatAttribute<MentalAttribute> & {
  energy: ElementalAdeptEnergy;
};

export type FeatFeyTouched = FeatAttribute<MentalAttribute> & {
  spell: Spell;
};

export type FeatGrappler = FeatAttribute<StrDexAttribute>;
export type FeatGreatWeaponMaster = FeatGeneric;
export type FeatHeavilyArmored = FeatAttribute<StrConAttribute>;
export type FeatHeavyArmorMaster = FeatAttribute<StrConAttribute>;
export type FeatInspiringLeader = FeatAttribute<WisChaAttribute>;

export const KEEN_MIND_SKILLS = ["arcana", "history", "investigation", "nature", "religion"] as const;
export type FeatKeenMindSkill = typeof KEEN_MIND_SKILLS[number];
export function isFeatKeenMindSkill(skill: Skill): skill is FeatKeenMindSkill {
  return KEEN_MIND_SKILLS.includes(skill as FeatKeenMindSkill);
}
export type FeatKeenMind = {
  skill: FeatKeenMindSkill;
};
export type FeatLightlyArmored = FeatAttribute<StrDexAttribute>;
export type FeatMageSlayer = FeatAttribute<StrDexAttribute>;
export type FeatMartialWeaponTraining = FeatAttribute<StrDexAttribute>;
export type FeatMediumArmorMaster = FeatAttribute<StrDexAttribute>;
export type FeatModeratelyArmored = FeatAttribute<StrDexAttribute>;
export type FeatMountedCombatant = FeatAttribute<StrDexWisAttribute>;
export type FeatObservant = FeatAttribute<IntWisAttribute>;
export type FeatPiercer = FeatAttribute<StrDexAttribute>;
export type FeatPoisoner = FeatAttribute<DexIntAttribute>;
export type FeatPolearmMaster = FeatAttribute<StrDexAttribute>;
export type FeatResilient = FeatAttribute<Attribute>;
export type FeatRitualCaster = FeatAttribute<MentalAttribute> & {
  spell1: Spell;
  spell2: Spell;
  spell3: Spell;
  spell4: Spell;
  spell5: Spell;
  spell6: Spell;
};
export type FeatSentinel = FeatAttribute<StrDexAttribute>;
export type FeatShadowTouched = FeatAttribute<MentalAttribute>;
export type FeatSharpshooter = {};
export type FeatShieldMaster = {};
export type FeatSkillExpert = {
  attribute: Attribute;
  skill: Skill;
  expertise: Skill;
};
export type FeatSkulker = {};
export type FeatSlasher = FeatAttribute<StrDexAttribute>;
export type FeatSpeedy = FeatAttribute<DexConAttribute>;
export type FeatSpellSniper = FeatAttribute<MentalAttribute>;
export type FeatTelekinetic = FeatAttribute<MentalAttribute>;
export type FeatTelepathic = FeatAttribute<MentalAttribute>;
export type FeatWarCaster = FeatAttribute<MentalAttribute>;
export type FeatWeaponMaster = FeatAttribute<StrDexAttribute>;

export const GENERAL_FEATS = [
  "ability score improvement",
  "actor",
  "athlete",
  "charger",
  "chef",
  "defensive duelist",
  "durable",
  "elemental adept",
  "fey-touched",
  "grappler",
  "heavily armored",
  "inspiring leader",
  "keen mind",
  "mage slayer",
  "martial weapon training",
  "moderately armored",
  "medium armor master",
  "mounted combatant",
  "observant",
  "piercer",
  "poisoner",
  "polearm master",
  "resilient",
  "ritual caster",
  "sentinel",
  "shadow-touched",
  "sharpshooter",
  "shield master",
  "skill expert",
  "skulker",
  "slasher",
  "speedy",
  "spell sniper",
  "telekinetic",
  "telepathic",
  "war caster",
  "weapon master"
];
export type GeneralFeats = {
  "actor": FeatActor
  "ability score improvement": FeatAbilityScoreImprovement,
  "athlete": FeatAthlete,
  "charger": FeatCharger,
  "chef": FeatChef,
  "defensive duelist": FeatDefensiveDuelist
  "dual wielder": FeatDualWielder,
  "durable": FeatDurable,
  "elemental adept": FeatElementalAdept,
  "fey-touched": FeatFeyTouched,
  "grappler": FeatGrappler,
  "great weapon master": FeatGreatWeaponMaster,
  "heavily armored": FeatHeavilyArmored,
  "heavy armor master": FeatHeavyArmorMaster,
  "inspiring leader": FeatInspiringLeader,
  "keen mind": FeatKeenMind,
  "lightly armored": FeatLightlyArmored,
  "mage slayer": FeatMageSlayer,
  "martial weapon training": FeatMartialWeaponTraining,
  "moderately armored": FeatModeratelyArmored,
  "medium armor master": FeatMediumArmorMaster,
  "mounted combatant": FeatMountedCombatant,
  "observant": FeatObservant,
  "piercer": FeatPiercer,
  "poisoner": FeatPoisoner,
  "polearm master": FeatPolearmMaster
  "resilient": FeatResilient,
  "ritual caster": FeatRitualCaster,
  "sentinel": FeatSentinel,
  "shadow-touched": FeatShadowTouched,
  "sharpshooter": FeatSharpshooter,
  "shield master": FeatShieldMaster,
  "skill expert": FeatSkillExpert,
  "skulker": FeatSkulker,
  "slasher": FeatSlasher,
  "speedy": FeatSpeedy,
  "spell sniper": FeatSpellSniper,
  "telekinetic": FeatTelekinetic,
  "telepathic": FeatTelepathic,
  "war caster": FeatWarCaster,
  "weapon master": FeatWeaponMaster
};

export const FIGHTING_STYLE_FEATS = [
  "archery",
  "blind fighting",
  "defense",
  "dueling",
  "great weapon fighting",
  "interception",
  "protection",
  "thrown weapon fighting",
  "two-weapon fighting",
  "unarmed fighting"
] as const;
export type FightingStyleFeats = {
  "archery": FeatGeneric,
  "blind fighting": FeatGeneric,
  "defense": FeatGeneric,
  "dueling": FeatGeneric,
  "great weapon fighting": FeatGeneric,
  "interception": FeatGeneric,
  "protection": FeatGeneric,
  "thrown weapon fighting": FeatGeneric,
  "two-weapon fighting": FeatGeneric,
  "unarmed fighting": FeatGeneric
};
export type FightingStyleFeat = {
  [key in keyof OriginFeats]: {
    type: key,
    data: OriginFeats[key]
  }
}[keyof OriginFeats];


export function isFightingStyleFeat(feat: Feat): feat is FightingStyleFeat {
  return FIGHTING_STYLE_FEATS.includes(feat.type as keyof FightingStyleFeats);
}

export const FEATS = [
  ...GENERAL_FEATS,
  ...ORIGIN_FEATS,
  ...FIGHTING_STYLE_FEATS
] as const;

export type Feats = OriginFeats & GeneralFeats & FightingStyleFeats;

export type Feat = {
  [key in keyof Feats]: {
    type: key,
    data: Feats[key]
  }
}[keyof Feats];

export const FEAT_LABELS: {[key in keyof Feats]: string} = {
  "ability score improvement": "Ability Score Improvement",
  "actor": "Actor",
  "athlete": "Athlete",
  "alert": "Alert",
  "archery": "Archery",
  "blind fighting": "Blind Fighting",
  "charger": "Charger",
  "chef": "Chef",
  "crafter": "Crafter",
  "defense": "Defense",
  "defensive duelist": "Defensive Duelist",
  "dual wielder": "Dual Wielder",
  "dueling": "Dueling",
  "durable": "Durable",
  "elemental adept": "Elemental Adept",
  "fey-touched": "Fey-Touched",
  "grappler": "Grappler",
  "great weapon fighting": "Great Weapon Fighting",
  "great weapon master": "Great Weapon Master",
  "heavily armored": "Heavily Armored",
  "heavy armor master": "Heavy Armor Master",
  "healer": "Healer",
  "keen mind": "Keen Mind",
  "inspiring leader": "Inspiring Leader",
  "interception": "Interception",
  "lightly armored": "Lightly Armored",
  "lucky": "Lucky",
  "mage slayer": "Mage Slayer",
  "magic initiate": "Magic Initiate",
  "martial weapon training": "Martial Weapon Training",
  "medium armor master": "Medium Armor Master",
  "moderately armored": "Moderately Armored",
  "mounted combatant": "Mounted Combatant",
  "observant": "Observant",
  "piercer": "Piercer",
  "poisoner": "Poisoner",
  "polearm master": "Polearm Master",
  "protection": "Protection",
  "resilient": "Resilient",
  "ritual caster": "Ritual Caster",
  "sentinel": "Sentinel",
  "musician": "Musician",
  "savage attacker": "Savage Attacker",
  "shadow-touched": "Shadow-Touched",
  "sharpshooter": "Sharpshooter",
  "shield master": "Shield Master",
  "skilled": "Skilled",
  "skill expert": "Skill Expert",
  "skulker": "Skulker",
  "slasher": "Slasher",
  "speedy": "Speedy",
  "spell sniper": "Spell Sniper",
  "tavern brawler": "Tavern Brawler",
  "telekinetic": "Telekinetic",
  "telepathic": "Telepathic",
  "thrown weapon fighting": "Thrown Weapon Fighting",
  "tough": "Tough",
  "two-weapon fighting": "Two-Weapon Fighting",
  "unarmed fighting": "Unarmed Fighting",
  "war caster": "War Caster",
  "weapon master": "Weapon Master",
};

export const DEFAULT_FEATS: {[key in keyof Feats]: Feats[key]} = {
  "ability score improvement": {
    attribute1: "str",
    attribute2: "str"
  },
  "actor": {},
  "archery": {},
  "alert": {},
  "athlete": {
    attribute: "str"
  },
  "blind fighting": {},
  "charger": {
    attribute: "str"
  },
  "chef": {
    attribute: "con"
  },
  "crafter": {
    selection1: "carpenter's tools",
    selection2: "leatherworker's tools",
    selection3: "mason's tools"
  },
  "defense": {},
  "defensive duelist": {},
  "dual wielder": {
    attribute: "str"
  },
  "dueling": {},
  "durable": {},
  "elemental adept": {
    attribute: "int",
    energy: "acid"
  },
  "fey-touched": {
    attribute: "int",
    spell: ""
  },
  "grappler": {
    attribute: "str"
  },
  "great weapon master": {},
  "great weapon fighting": {},
  "heavily armored": {
    attribute: "str"
  },
  "healer": {},
  "heavy armor master": {
    attribute: "str"
  },
  "inspiring leader": {attribute: "wis"},
  "interception": {},
  "keen mind": {
    skill: "arcana"
  },
  "lightly armored": {
    attribute: "str"
  },
  "lucky": {},
  "mage slayer": {
    attribute: "str"
  },
  "magic initiate": {
    cantripClass: "cleric",
    cantrip1: "",
    cantrip2: "",
    spellcastingAbility: "wis"
  },
  "martial weapon training": {
    attribute: "str"
  },
  "medium armor master": {
    attribute: "str"
  },
  "moderately armored": {
    attribute: "str"
  },
  "mounted combatant": {
    attribute: "str"
  },
  "musician": {
    selection1: "bagpipes",
    selection2: "drum",
    selection3: "dulcimer",
  },
  "observant": {
    attribute: "int"
  },
  "piercer": {
    attribute: "str"
  },
  "poisoner": {
    attribute: "dex"
  },
  "polearm master": {
    attribute: "str"
  },
  "protection": {},
  "resilient": {
    attribute: "str"
  },
  "ritual caster": {
    attribute: "int",
    spell1: "",
    spell2: "",
    spell3: "",
    spell4: "",
    spell5: "",
    spell6: "",
  },
  "savage attacker": {},
  "sentinel": {
    attribute: "str"
  },
  "shadow-touched": {
    attribute: "int"
  },
  "sharpshooter": {},
  "shield master": {},
  "skilled": {
    selection1: "athletics",
    selection2: "acrobatics",
    selection3: "sleight of hand"
  },
  "skill expert": {
    attribute: "int",
    skill: "animal handling",
    expertise: "animal handling"
  },
  "skulker": {},
  "slasher": {
    attribute: "str"
  },
  "speedy": {
    attribute: "dex"
  },
  "spell sniper": {
    attribute: "int"
  },
  "tavern brawler": {},
  "telekinetic": {
    attribute: "int"
  },
  "telepathic": {
    attribute: "int"
  },
  "thrown weapon fighting": {},
  "two-weapon fighting": {},
  "unarmed fighting": {},
  "war caster": {
    attribute: "int"
  },
  "weapon master": {
    attribute: "str"
  },
  "tough": {}
};