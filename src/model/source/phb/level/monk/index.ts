import {ClassID, Level} from "@/model/source/model/Level";
import {MONK_BASE_LEVELS} from "./MonkBase";

export default {
  ...MONK_BASE_LEVELS,
} as const satisfies {[levelID: ClassID]: Level};