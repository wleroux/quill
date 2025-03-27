import {MusicalInstrumentTool, Tool} from "@/model/tool";
import {Skill} from "@/model/skill";
import {Spell} from "@/model/spell";
import {MentalAttribute} from "@/model/attribute";

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
  return ORIGIN_FEATS.includes(feat.type);
}

export const DefaultOriginFeat: OriginFeat = {
  type: "skilled",
  data: {
    selection1: "acrobatics",
    selection2: "arcana",
    selection3: "deception"
  }
};

export const FEATS = [
  ...ORIGIN_FEATS
] as const;

export type Feats = OriginFeats & {
};

export type Feat = {
  [key in keyof Feats]: {
    type: key,
    data: Feats[key]
  }
}[keyof Feats];

export const FEAT_LABELS: {[key in keyof Feats]: string} = {
  "alert": "Alert",
  "crafter": "Crafter",
  "healer": "Healer",
  "lucky": "Lucky",
  "magic initiate": "Magic Initiate",
  "musician": "Musician",
  "savage attacker": "Savage Attacker",
  "skilled": "Skilled",
  "tavern brawler": "Tavern Brawler",
  "tough": "Tough"
};

export const DEFAULT_FEATS: {[key in keyof Feats]: Feats[key]} = {
  "alert": {},
  "crafter": {
    selection1: "carpenter's tools",
    selection2: "leatherworker's tools",
    selection3: "mason's tools"
  },
  "healer": {},
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