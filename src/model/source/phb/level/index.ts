import BARBARIAN_LEVELS from "@/model/source/phb/level/barbarian/index";
import BARD_LEVELS from "@/model/source/phb/level/bard/index";
import {Level, LevelID} from "@/model/source/model/Level";

export default {
  ...BARBARIAN_LEVELS,
  ...BARD_LEVELS
} as const satisfies {[levelID: LevelID]: Level};
