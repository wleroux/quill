export const ATTRIBUTES = [
  "str",
  "dex",
  "con",
  "int",
  "wis",
  "cha"
] as const;

export type MentalAttribute = "int" | "wis" | "cha";
export function isMentalAttribute(attribute: Attribute): attribute is MentalAttribute {
  return ["int", "wis", "cha"].includes(attribute);
}

export type StrDexAttribute = "str" | "dex";
export function isStrDexAttribute(attribute: Attribute): attribute is StrDexAttribute {
  return attribute === "str" || attribute === "dex";
}

export type StrDexWisAttribute = "str" | "dex" | "wis";
export function isStrDexWisAttribute(attribute: Attribute): attribute is StrDexWisAttribute {
  return attribute === "str" || attribute === "dex" || attribute === "wis";
}

export type StrConAttribute = "str" | "con";
export function isStrConAttribute(attribute: Attribute): attribute is StrConAttribute {
  return attribute === "str" || attribute === "con";
}

export type DexConAttribute = "dex" | "con";
export function isDexConAttribute(attribute: Attribute): attribute is DexConAttribute {
  return attribute === "dex" || attribute === "con";
}

export type DexIntAttribute = "dex" | "int";
export function isDexIntAttribute(attribute: Attribute): attribute is DexIntAttribute {
  return attribute === "dex" || attribute === "int";
}

export type ConWisAttribute = "con" | "wis";
export function isConWisAttribute(attribute: Attribute): attribute is ConWisAttribute {
  return attribute === "con" || attribute === "wis";
}

export type IntWisAttribute = "int" | "wis";
export function isIntWisAttribute(attribute: Attribute): attribute is IntWisAttribute {
  return attribute === "int" || attribute === "wis";
}


export type WisChaAttribute = "wis" | "cha";
export function isWisChaAttribute(attribute: Attribute): attribute is WisChaAttribute {
  return attribute === "wis" || attribute === "cha";
}


export type Attribute = typeof ATTRIBUTES[number];
export const ATTRIBUTE_LABELS: {[key in Attribute]: string} = {
  "str": "Strength",
  "dex": "Dexterity",
  "con": "Constitution",
  "int": "Intelligence",
  "wis": "Wisdom",
  "cha": "Charisma"
};
