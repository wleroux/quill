import {Skill} from "@/model/skill";
import {OriginFeat} from "@/model/feat";

export type SpecieAasimar = {
  size: "small" | "medium";
};
export const DefaultAasimar: SpecieAasimar = {
  size: "medium"
};

export const DRACONIC_ANCESTRIES = [
  "black",
  "blue",
  "brass",
  "bronze",
  "copper",
  "gold",
  "green",
  "red",
  "silver",
  "white"
] as const;
export type DraconicAncestry = typeof DRACONIC_ANCESTRIES[number];
export const DRACONIC_ANCESTRY_LABELS: {[key in DraconicAncestry]: string} = {
  "black": "Black",
  "blue": "Blue",
  "brass": "Brass",
  "bronze": "Bronze",
  "copper": "Copper",
  "gold": "Gold",
  "green": "Green",
  "red": "Red",
  "silver": "Silver",
  "white": "White"
} as const;
export type SpecieDragonborn = {
  draconicAncestry: DraconicAncestry
};
export const DefaultDragonborn: SpecieDragonborn = {
  draconicAncestry: "black"
};

export type SpecieDrawf = {};
export const DefaultDrawf: SpecieDrawf = {};


export const ELVEN_LINEAGES = [
  "drow",
  "high elf",
  "wood elf"
] as const;
export type ElvenLineage = typeof ELVEN_LINEAGES[number];
export const ELVEN_LINEAGE_LABELS: {[key in ElvenLineage]: string} = {
  "drow": "Drow",
  "high elf": "High Elf",
  "wood elf": "Wood Elf"
} as const;

export type SpecieElf = {
  keenSenses: "insight" | "perception" | "survival";
  elvenLineage: ElvenLineage;
};
export const DefaultElf: SpecieElf = {
  keenSenses: "insight",
  elvenLineage: "drow"
};

export const GNOMISH_LINEAGES = [
  "forest gnome",
  "rock gnome"
] as const;
export type GnomishLineage = typeof GNOMISH_LINEAGES[number];
export const GNOMISH_LINEAGE_LABELS: {[key in GnomishLineage]: string} = {
  "forest gnome": "Forest Gnome",
  "rock gnome": "Rock Gnome"
};

export type SpecieGnome = {
  gnomishLineage: GnomishLineage;
  spellcastingAbility: "int" | "wis" | "cha";
};
export const DefaultGnome: SpecieGnome = {
  gnomishLineage: "forest gnome",
  spellcastingAbility: "wis",
};

export const GIANT_ANCESTRIES = [
  "cloud giant",
  "fire giant",
  "frost giant",
  "hill giant",
  "stone giant",
  "storm giant"
] as const;
export type GiantAncestry = typeof GIANT_ANCESTRIES[number];
export const GIANT_ANCESTRY_LABELS: {[key in GiantAncestry]: string} = {
  "cloud giant": "Cloud Giant",
  "fire giant": "Fire Giant",
  "frost giant": "Frost Giant",
  "hill giant": "Hill Giant",
  "stone giant": "Stone Giant",
  "storm giant": "Storm Giant"
} as const;

export type SpecieGoliath = {
  giantAncestry: GiantAncestry
};
export const DefaultGoliath: SpecieGoliath = {
  giantAncestry: "cloud giant"
};

export type SpecieHalfling = {
};
export const DefaultHalfling: SpecieHalfling = {
};

export type SpecieHuman = {
  size: "small" | "medium";
  skillful: Skill,
  versatile: OriginFeat;
};
export const DefaultHuman: SpecieHuman = {
  size: "medium",
  skillful: "athletics",
  versatile: {
    type: "skilled",
    data: {
      selection1: "acrobatics",
      selection2: "arcana",
      selection3: "deception"
    }
  }
};


export type SpecieOrc = {
};
export const DefaultOrc: SpecieOrc = {
};


export const FIENDISH_LEGACIES = [
  "abyssal",
  "chthonic",
  "infernal"
] as const;
export type FiendishLegacy = typeof FIENDISH_LEGACIES[number];
export const FIENDISH_LEGACY_LABELS: {[key in FiendishLegacy]: string} = {
  "abyssal": "Abyssal",
  "chthonic": "Chthonic",
  "infernal": "Infernal"
} as const;

export type SpecieTiefling = {
  size: "small" | "medium";
  fiendishLegacy: FiendishLegacy;
};
export const DefaultTiefling: SpecieTiefling = {
  size: "medium",
  fiendishLegacy: "abyssal"
};

export type Species = {
  "aasimar": SpecieAasimar;
  "dragonborn": SpecieDragonborn;
  "dwarf": SpecieDrawf;
  "elf": SpecieElf;
  "gnome": SpecieGnome;
  "goliath": SpecieGoliath;
  "halfling": SpecieHalfling;
  "human": SpecieHuman;
  "orc": SpecieOrc;
  "tiefling": SpecieTiefling;
};

export type Specie = {
  [Specie in keyof Species]: {
    type: Specie,
    data: Species[Specie]
  }
}[keyof Species];

export const SPECIES = [
  "aasimar",
  "dragonborn",
  "dwarf",
  "elf",
  "gnome",
  "goliath",
  "halfling",
  "human",
  "orc",
  "tiefling"
] as const;
export const SPECIE_LABELS: {[key in keyof Species]: string} = {
  "aasimar": "Aasimar",
  "dragonborn": "Dragonborn",
  "dwarf": "Dwarf",
  "elf": "Elf",
  "gnome": "Gnome",
  "goliath": "Goliath",
  "halfling": "Halfling",
  "human": "Human",
  "orc": "Orc",
  "tiefling": "Tiefling"
} as const;

export const DEFAULT_SPECIE: Species = {
  "aasimar": DefaultAasimar,
  "dragonborn": DefaultDragonborn,
  "dwarf": DefaultDrawf,
  "elf": DefaultElf,
  "gnome": DefaultGnome,
  "goliath": DefaultGoliath,
  "halfling": DefaultHalfling,
  "human": DefaultHuman,
  "orc": DefaultOrc,
  "tiefling": DefaultTiefling
} as const;
