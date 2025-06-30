import BARBARIAN_LEVELS from "@/model/source/phb/level/barbarian/index";
import BARD_LEVELS from "@/model/source/phb/level/bard/index";
import PALADIN_LEVELS from "@/model/source/phb/level/paladin/index";
import {Level, ClassID} from "@/model/source/model/Level";

export default {
  ...BARBARIAN_LEVELS,
  ...BARD_LEVELS,
  ...PALADIN_LEVELS
} as const satisfies {[levelID: ClassID]: Level};
