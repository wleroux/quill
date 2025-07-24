import {Item, ItemID} from "@/model/source/model/Item";
import COMMON from "./common";
import MUNDANE from "./mundane";
import PET from "./pet";

export default {
  ...MUNDANE,
  ...COMMON,
  ...PET
} as const satisfies {[itemID: ItemID]: Item};