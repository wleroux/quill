import {ClassSorcerer, DEFAULT_CLASS_SORCERER, getSorcererClassLabel} from "@/model/class/ClassSorcerer";
import {ClassBarbarian, DEFAULT_CLASS_BARBARIAN, getBarbarianClassLabel} from "@/model/class/ClassBarbarian";

export const CLASSES = [
  "barbarian",
  "sorcerer"
] as const;
export type ClassType = typeof CLASSES[number];

export type Classes = {
  "barbarian": ClassBarbarian<any>,
  "sorcerer": ClassSorcerer<any>
};

export type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
export type Class<T extends ClassType> = {
  type: T,
  level: Level,
  data: Classes[T]
};

export const CLASS_LABELS: {[key in ClassType]: string} = {
  "barbarian": "Barbarian",
  "sorcerer": "Sorcerer"
} as const;

export function getClassLabel(clz: Class<any>) {
  if (clz.type === "barbarian") return getBarbarianClassLabel(clz);
  if (clz.type === "sorcerer") return getSorcererClassLabel(clz);
  return `${CLASS_LABELS[clz.type as ClassType]}`
}

export const DEFAULT_CLASSES: {[key in keyof Classes]: Classes[key]} = {
  "barbarian": DEFAULT_CLASS_BARBARIAN,
  "sorcerer": DEFAULT_CLASS_SORCERER
};