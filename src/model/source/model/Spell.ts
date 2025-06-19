import {Condition} from "@/model/source/condition/Condition";

export type SpellID = string;

export type SpellLevel = "cantrip" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export const SPELL_LEVELS: SpellLevel[] = [
  "cantrip",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9
] as const;

export type SpellSchool =
  | "Abjuration"
  | "Conjuration"
  | "Divination"
  | "Enchantment"
  | "Evocation"
  | "Illusion"
  | "Invocation"
  | "Necromancy"
  | "Transmutation"
  ;
export const SPELL_SCHOOLS: SpellSchool[] = [
  "Abjuration",
  "Conjuration",
  "Divination",
  "Enchantment",
  "Evocation",
  "Illusion",
  "Invocation",
  "Necromancy",
  "Transmutation"
] as const;

export type Spell = {
  label: string;
  level: SpellLevel;
  school: SpellSchool;
  prerequisite?: Condition<any>;
};
