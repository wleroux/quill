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

export type Attribute = typeof ATTRIBUTES[number];
export const ATTRIBUTE_LABELS: {[key in Attribute]: string} = {
  "str": "Strength",
  "dex": "Dexterity",
  "con": "Constitution",
  "int": "Intelligence",
  "wis": "Wisdom",
  "cha": "Charisma"
};
