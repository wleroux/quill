import {ArtisanTool, MusicalTool, Tool} from "@/model/tool";
import {Skill} from "@/model/skill";
import {Spell} from "@/model/spell";

type FeatAlert = {};
export type FeatCrafter = {
  selection1: ArtisanTool;
  selection2: ArtisanTool;
  selection3: ArtisanTool;
};
type FeatHealer = {};
type FeatLucky = {};
export type FeatMagicInitiate = {
  cantripClass: "cleric" | "druid" | "wizard";
  cantrip1: Spell;
  cantrip2: Spell;
  spellcastingAbility: "int" | "wis" | "cha";
};
export type FeatMusician = {
  selection1: MusicalTool;
  selection2: MusicalTool;
  selection3: MusicalTool;
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
export const ORIGIN_FEAT_LABELS: {[key in keyof OriginFeats]: string} = {
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
export const DEFAULT_ORIGIN_FEATS: {[key in keyof OriginFeats]: OriginFeats[key]} = {
  "alert": {},
  "crafter": {
    selection1: "carpenter’s tools",
    selection2: "leatherworker’s tools",
    selection3: "mason’s tools"
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

export type OriginFeat = {
  [key in keyof OriginFeats]: {
    type: key,
    data: OriginFeats[key]
  }
}[keyof OriginFeats];

export type Feats = OriginFeats & {
};

export type Feat = {
  [key in keyof Feats]: {
    type: key,
    data: Feats[key]
  }
}[keyof Feats];
