import {Item, ItemID} from "@/model/source/model/Item";
import COMMON from "./common";
import MUNDANE from "./mundane";
import PET from "./pet";
import {UNCOMMON} from "@/model/source/phb/item/uncommon";

export default {
  ...MUNDANE,
  ...COMMON,
  ...UNCOMMON,
  ...PET
} as const satisfies {[itemID: ItemID]: Item};