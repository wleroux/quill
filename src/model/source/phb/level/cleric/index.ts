import CLERIC_BASE_LEVELS from "./ClericBase";
import CLERIC_LIFE_LEVELS from "./ClericLife";
import CLERIC_LIGHT_LEVELS from "./ClericLight";
import CLERIC_TRICKERY_LEVELS from "./ClericTrickery";
import CLERIC_WAR_LEVELS from "./ClericWar";
import {ClassID, Level} from "@/model/source/model/Level";

export default {
  ...CLERIC_BASE_LEVELS,
  ...CLERIC_LIFE_LEVELS,
  ...CLERIC_LIGHT_LEVELS,
  ...CLERIC_TRICKERY_LEVELS,
  ...CLERIC_WAR_LEVELS
} as const satisfies {[levelID: ClassID]: Level};