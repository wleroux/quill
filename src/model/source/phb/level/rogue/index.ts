import {ClassID, Level} from "@/model/source/model/Level";
import {ROGUE_BASE_LEVELS} from "./RougeBase";

export default {
  ...ROGUE_BASE_LEVELS,
} as const satisfies {[levelID: ClassID]: Level};