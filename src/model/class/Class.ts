import {ClassSorcerer, DEFAULT_CLASS_SORCERER, getSorcererClassLabel} from "@/model/class/ClassSorcerer";
import {ClassBarbarian, DEFAULT_CLASS_BARBARIAN, getBarbarianClassLabel} from "@/model/class/ClassBarbarian";
import {ClassBard, DEFAULT_CLASS_BARD, getBardClassLabel} from "@/model/class/ClassBard";
import {ClassCleric, DEFAULT_CLASS_CLERIC, getClericClassLabel} from "@/model/class/ClassCleric";
import {ClassDruid, DEFAULT_CLASS_DRUID, getDruidClassLabel} from "@/model/class/ClassDruid";
import {ClassFighter, DEFAULT_CLASS_FIGHTER, getFighterClassLabel} from "@/model/class/ClassFighter";

export type Classes = {
  "barbarian": ClassBarbarian<any>,
  "bard": ClassBard<any>,
  "cleric": ClassCleric<any>,
  "druid": ClassDruid<any>,
  "fighter": ClassFighter<any>,
  "sorcerer": ClassSorcerer<any>
};
export type ClassType = keyof Classes;
export const CLASSES: ClassType[] = [
  "barbarian",
  "bard",
  "cleric",
  "druid",
  "fighter",
  "sorcerer"
] as const;

export type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
export type Class<T extends ClassType> = {
  type: T,
  level: Level,
  data: Classes[T]
};

export const CLASS_LABELS: {[key in ClassType]: string} = {
  "barbarian": "Barbarian",
  "bard": "Bard",
  "cleric": "Cleric",
  "druid": "Druid",
  "fighter": "Fighter",
  "sorcerer": "Sorcerer"
} as const;

export function getClassLabel(clz: Class<any>) {
  if (clz.type === "barbarian") return getBarbarianClassLabel(clz);
  if (clz.type === "bard") return getBardClassLabel(clz);
  if (clz.type === "cleric") return getClericClassLabel(clz);
  if (clz.type === "druid") return getDruidClassLabel(clz);
  if (clz.type === "fighter") return getFighterClassLabel(clz);
  if (clz.type === "sorcerer") return getSorcererClassLabel(clz);
  return `${CLASS_LABELS[clz.type as ClassType]}`
}

export const DEFAULT_CLASSES: {[key in keyof Classes]: Classes[key]} = {
  "barbarian": DEFAULT_CLASS_BARBARIAN,
  "bard": DEFAULT_CLASS_BARD,
  "cleric": DEFAULT_CLASS_CLERIC,
  "druid": DEFAULT_CLASS_DRUID,
  "fighter": DEFAULT_CLASS_FIGHTER,
  "sorcerer": DEFAULT_CLASS_SORCERER
};