import {ClassID, Level} from "@/model/source/model/Level";
import {RANGER_BASE_LEVELS} from "./RangerBase";

export default {
  ...RANGER_BASE_LEVELS,
} as const satisfies {[levelID: ClassID]: Level};