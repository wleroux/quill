import WARLOCK_BASE_LEVELS from "./WarlockBase";
import WARLOCK_ARCHFEY_LEVELS from "./WarlockArchfey";
import WARLOCK_CELESTIAL_LEVELS from "./WarlockCelestial";
import WARLOCK_FIEND_LEVELS from "./WarlockFiend";
import WARLOCK_GREAT_OLD_ONE_LEVELS from "./WarlockGreatOldOne";
import {Level, ClassID} from "@/model/source/model/Level";

export default {
  ...WARLOCK_BASE_LEVELS,
  ...WARLOCK_ARCHFEY_LEVELS,
  ...WARLOCK_CELESTIAL_LEVELS,
  ...WARLOCK_FIEND_LEVELS,
  ...WARLOCK_GREAT_OLD_ONE_LEVELS
} as const satisfies {[levelID: ClassID]: Level};