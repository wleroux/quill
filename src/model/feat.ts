import {MusicalInstrumentTool, Tool} from "@/model/tool";
import {Skill} from "@/model/skill";
import {Spell} from "@/model/spell";
import {Attribute, ConWisAttribute, MentalAttribute, StrConAttribute, StrDexAttribute, WisChaAttribute} from "@/model/attribute";

type FeatAlert = {};
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
type FeatHealer = {};
type FeatLucky = {};
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
type FeatSavageAttacker = {};
export type FeatSkilled = {
  selection1: (Skill | Tool);
  selection2: (Skill | Tool);
  selection3: (Skill | Tool);
};
type FeatTavernBrawler = {};
type FeatTough = {};

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
export type FeatActor = {};

export type FeatAttribute<T extends Attribute> = {
  attribute: T
}
export type FeatAthlete = FeatAttribute<StrDexAttribute>;
export type FeatCharger = FeatAttribute<StrDexAttribute>;
export type FeatChef = FeatAttribute<ConWisAttribute>;
export type FeatDefensiveDuelist = {};
export type FeatDualWielder = FeatAttribute<StrDexAttribute>;
export type FeatDurable = {};

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
export type FeatGreatWeaponMaster = {};
export type FeatHeavilyArmored = FeatAttribute<StrConAttribute>;
export type FeatHeavyArmorMaster = FeatAttribute<StrConAttribute>;
export type FeatInspiringLeader = FeatAttribute<WisChaAttribute>;

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
  "inspiring leader"
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
  "inspiring leader": FeatInspiringLeader
};

export const FEATS = [
  ...GENERAL_FEATS,
  ...ORIGIN_FEATS
] as const;

export type Feats = OriginFeats & GeneralFeats;

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
  "charger": "Charger",
  "chef": "Chef",
  "crafter": "Crafter",
  "defensive duelist": "Defensive Duelist",
  "dual wielder": "Dual Wielder",
  "durable": "Durable",
  "elemental adept": "Elemental Adept",
  "fey-touched": "Fey-Touched",
  "grappler": "Grappler",
  "great weapon master": "Great Weapon Master",
  "heavily armored": "Heavily Armored",
  "heavy armor master": "Heavy Armor Master",
  "healer": "Healer",
  "inspiring leader": "Inspiring Leader",
  "lucky": "Lucky",
  "magic initiate": "Magic Initiate",
  "musician": "Musician",
  "savage attacker": "Savage Attacker",
  "skilled": "Skilled",
  "tavern brawler": "Tavern Brawler",
  "tough": "Tough"
};

export const DEFAULT_FEATS: {[key in keyof Feats]: Feats[key]} = {
  "ability score improvement": {
    attribute1: "str",
    attribute2: "str"
  },
  "actor": {},
  "alert": {},
  "athlete": {
    attribute: "str"
  },
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
  "defensive duelist": {},
  "dual wielder": {
    attribute: "str"
  },
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
  "heavily armored": {
    attribute: "str"
  },
  "healer": {},
  "heavy armor master": {
    attribute: "str"
  },
  "inspiring leader": {attribute: "wis"},
  "lucky": {},
  "magic initiate": {
    cantripClass: "cleric",
    cantrip1: "",
    cantrip2: "",
    spellcastingAbility: "wis"
  },
  "musician": {
    selection1: "bagpipes",
    selection2: "drum",
    selection3: "dulcimer",
  },
  "savage attacker": {},
  "skilled": {
    selection1: "athletics",
    selection2: "acrobatics",
    selection3: "sleight of hand"
  },
  "tavern brawler": {},
  "tough": {}
};