import {ClassID, Level} from "@/model/source/model/Level";
import {DRUID_BASE_LEVELS} from "./DruidBase";

export default {
  ...DRUID_BASE_LEVELS,
} as const satisfies {[levelID: ClassID]: Level};