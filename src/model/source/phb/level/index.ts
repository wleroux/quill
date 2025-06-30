import BARBARIAN_LEVELS from "@/model/source/phb/level/barbarian/index";
import BARD_LEVELS from "@/model/source/phb/level/bard/index";
import PALADIN_LEVELS from "@/model/source/phb/level/paladin/index";
import MONK_LEVELS from "@/model/source/phb/level/monk/index";
import {ClassID, Level} from "@/model/source/model/Level";

export default {
  ...BARBARIAN_LEVELS,
  ...BARD_LEVELS,
  ...PALADIN_LEVELS,
  ...MONK_LEVELS
} as const satisfies {[levelID: ClassID]: Level};
