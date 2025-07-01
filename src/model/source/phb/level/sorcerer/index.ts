import SORCERER_BASE_LEVELS from "./SorcererBase";
import {Level, ClassID} from "@/model/source/model/Level";

export default {
  ...SORCERER_BASE_LEVELS,
} as const satisfies {[levelID: ClassID]: Level};