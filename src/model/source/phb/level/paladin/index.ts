import {ClassID, Level} from "@/model/source/model/Level";
import PALADIN_BASE_LEVELS from "./PaladinBase";
import PALADIN_ANCIENTS_LEVELS from "./PaladinAncients";
import PALADIN_DEVOTION_LEVELS from "./PaladinDevotion";
import PALADIN_GLORY_LEVELS from "./PaladinGlory";
import PALADIN_VENGEANCE_LEVELS from "./PaladinVengeance";

export default {
  ...PALADIN_BASE_LEVELS,
  ...PALADIN_ANCIENTS_LEVELS,
  ...PALADIN_DEVOTION_LEVELS,
  ...PALADIN_GLORY_LEVELS,
  ...PALADIN_VENGEANCE_LEVELS
} as const satisfies {[levelID: ClassID]: Level};