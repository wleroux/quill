import {ItemID, ItemRarity, ItemTier} from "../../model/Item";
import {REPOSITORY} from "@/model/source/index";
import {all} from "@/model/source/condition/generic/AllCondition";
import {not} from "@/model/source/condition/generic/NotCondition";


export function itemTier(tier: ItemTier) {
  return (item: ItemID): boolean => {
    return REPOSITORY.ITEMS[item].tier === tier;
  };
}

export function itemRarity(rarity: ItemRarity) {
  return (itemID: ItemID): boolean => {
    return REPOSITORY.ITEMS[itemID].rarity === rarity;
  }
}

const mount = (itemID: ItemID) => {
  const item = REPOSITORY.ITEMS[itemID];
  return (item.type === "Mount")
};
function worth(value: number) {
  return (itemID: ItemID) => {
    const item = REPOSITORY.ITEMS[itemID];
    return item.value ? item.value <= value : false;
  };
}

export const initiatePet = all(itemRarity("Mundane"), worth(50_00), mount);

export const initiateMundaneItem = all(itemRarity("Mundane"), worth(50_00), not(mount));

export const minorCommonItem = all(itemTier("Minor"), itemRarity("Common"));
export const minorUncommonItem = all(itemTier("Minor"), itemRarity("Uncommon"));
export const minorRareItem = all(itemTier("Minor"), itemRarity("Rare"));
export const minorVeryRareItem = all(itemTier("Minor"), itemRarity("Very Rare"));
export const minorLegendaryItem = all(itemTier("Minor"), itemRarity("Legendary"));

export const majorCommonItem = all(itemTier("Major"), itemRarity("Common"));
export const majorUncommonItem = all(itemTier("Major"), itemRarity("Uncommon"));
export const majorRareItem = all(itemTier("Major"), itemRarity("Rare"));
export const majorVeryRareItem = all(itemTier("Major"), itemRarity("Very Rare"));
export const majorLegendaryItem = all(itemTier("Major"), itemRarity("Legendary"));
