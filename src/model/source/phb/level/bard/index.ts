import BARD_BASE_LEVELS from "./BardBase";
import {Level, LevelID} from "@/model/source/model/Level";

export default {
  ...BARD_BASE_LEVELS,
} as const satisfies {[levelID: LevelID]: Level};