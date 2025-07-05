import {ClassID, Level} from "@/model/source/model/Level";
import ROGUE_BASE_LEVELS from "./RougeBase";
import ROGUE_ARCANE_TRICKSTER_LEVELS from "./RougeArcaneTrickster";
import ROGUE_ASSASSIN_LEVELS from "./RougeAssassin";
import ROGUE_SOULKNIFE_LEVELS from "./RougeSoulknife";
import ROGUE_THIEF_LEVELS from "./RougeThief";

export default {
  ...ROGUE_BASE_LEVELS,
  ...ROGUE_ARCANE_TRICKSTER_LEVELS,
  ...ROGUE_ASSASSIN_LEVELS,
  ...ROGUE_SOULKNIFE_LEVELS,
  ...ROGUE_THIEF_LEVELS
} as const satisfies {[levelID: ClassID]: Level};