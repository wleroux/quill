import {Choice} from "@/model/source/choice/Choice";

export type ItemTier =
  | "Minor"
  | "Major"
  ;
export type ItemRarity =
  | "Mundane"
  | "Common"
  | "Uncommon"
  | "Rare"
  | "Very Rare"
  | "Legendary"
  ;

export type ItemID = string;
export type Item = {
  label: string;
  tier: ItemTier;
  rarity: ItemRarity;
  value?: number;
  choices: Choice[];
};
