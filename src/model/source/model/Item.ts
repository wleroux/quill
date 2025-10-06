import {Choice} from "@/model/source/choice/Choice";

export type ItemTier =
  | "Minor"
  | "Major"
  ;
export const ITEM_TIERS: ItemTier[] = ["Minor", "Major"] as const satisfies ItemTier[];
export type ItemRarity =
  | "Mundane"
  | "Common"
  | "Uncommon"
  | "Rare"
  | "Very Rare"
  | "Legendary"
  ;
export const ITEM_RARITIES: ItemRarity[] = ["Mundane", "Common", "Uncommon", "Rare", "Very Rare", "Legendary"] as const satisfies ItemRarity[];

export type ItemType =
  | "Mount"
  ;

export type ItemID = string;
export type Item = {
  label: string;
  tier: ItemTier;
  type?: ItemType;
  rarity: ItemRarity;
  value?: number;
  choices: Choice[];
};
