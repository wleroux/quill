
export type AttributeID = "str" | "dex" | "con" | "int" | "wis" | "cha";
export const ATTRIBUTE_IDS: AttributeID[] = [
  "str",
  "dex",
  "con",
  "int",
  "wis",
  "cha"
] as const;

export type Attribute = {
  label: string;
};