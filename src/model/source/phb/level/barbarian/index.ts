import BARBARIAN_BASE_LEVELS from "./BarbarianBase";
import {Level, ClassID} from "@/model/source/model/Level";

export default {
  ...BARBARIAN_BASE_LEVELS,
} as const satisfies {[levelID: ClassID]: Level};
