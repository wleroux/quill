import {Item, ItemID} from "@/model/source/model/Item";
import COMMON from "./common";
import MUNDANE from "./mundane";

export default {
  ...MUNDANE,
  ...COMMON
} as const satisfies {[itemID: ItemID]: Item};