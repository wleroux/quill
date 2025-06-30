import BARBARIAN_LEVELS from "@/model/source/phb/level/barbarian/index";
import BARD_LEVELS from "@/model/source/phb/level/bard/index";
import FIGHTER_LEVELS from "@/model/source/phb/level/fighter/index";
import MONK_LEVELS from "@/model/source/phb/level/monk/index";
import PALADIN_LEVELS from "@/model/source/phb/level/paladin/index";
import {ClassID, Level} from "@/model/source/model/Level";

export default {
  ...BARBARIAN_LEVELS,
  ...BARD_LEVELS,
  ...FIGHTER_LEVELS,
  ...MONK_LEVELS,
  ...PALADIN_LEVELS
} as const satisfies {[levelID: ClassID]: Level};
