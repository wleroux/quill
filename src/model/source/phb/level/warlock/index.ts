import WARLOCK_BASE_LEVELS from "./WarlockBase";
import {Level, ClassID} from "@/model/source/model/Level";

export default {
  ...WARLOCK_BASE_LEVELS,
} as const satisfies {[levelID: ClassID]: Level};