import CLERIC_BASE_LEVELS from "./ClericBase";
import {Level, ClassID} from "@/model/source/model/Level";

export default {
  ...CLERIC_BASE_LEVELS,
} as const satisfies {[levelID: ClassID]: Level};