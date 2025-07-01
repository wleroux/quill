import {ClassID, Level} from "@/model/source/model/Level";
import {FIGHTER_BASE_LEVELS} from "src/model/source/phb/level/rogue/RougeBase";

export default {
  ...FIGHTER_BASE_LEVELS,
} as const satisfies {[levelID: ClassID]: Level};