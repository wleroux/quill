import {ClassID, Level} from "@/model/source/model/Level";
import RANGER_BASE_LEVELS from "./RangerBase";
import RANGER_BEAST_MASTER_LEVELS from "./RangerBeastMaster";
import RANGER_FEY_WANDERER_LEVELS from "./RangerFeyWanderer";
import RANGER_GLOOM_STALKER_LEVELS from "./RangerGloomStalker";
import RANGER_HUNTER_LEVELS from "./RangerHunter";

export default {
  ...RANGER_BASE_LEVELS,
  ...RANGER_BEAST_MASTER_LEVELS,
  ...RANGER_FEY_WANDERER_LEVELS,
  ...RANGER_GLOOM_STALKER_LEVELS,
  ...RANGER_HUNTER_LEVELS
} as const satisfies {[levelID: ClassID]: Level};