import {ClassID, Level} from "@/model/source/model/Level";
import MONK_BASE_LEVELS from "./MonkBase";
import MONK_ELEMENTS_LEVELS from "./MonkElements";
import MONK_MERCY_LEVELS from "./MonkMercy";
import MONK_OPEN_HAND_LEVELS from "./MonkOpenHand";
import MONK_SHADOW_LEVELS from "./MonkShadow";

export default {
  ...MONK_BASE_LEVELS,
  ...MONK_ELEMENTS_LEVELS,
  ...MONK_MERCY_LEVELS,
  ...MONK_OPEN_HAND_LEVELS,
  ...MONK_SHADOW_LEVELS
} as const satisfies {[levelID: ClassID]: Level};