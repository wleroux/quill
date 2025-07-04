import {ClassID, Level} from "@/model/source/model/Level";
import DRUID_BASE_LEVELS from "./DruidBase";
import DRUID_LAND_LEVELS from "./DruidLand"
import DRUID_MOON_LEVELS from "./DruidMoon"
import DRUID_SEA_LEVELS from "./DruidSea"
import DRUID_STARS_LEVELS from "./DruidStars"

export default {
  ...DRUID_BASE_LEVELS,
  ...DRUID_LAND_LEVELS,
  ...DRUID_MOON_LEVELS,
  ...DRUID_SEA_LEVELS,
  ...DRUID_STARS_LEVELS,
} as const satisfies {[levelID: ClassID]: Level};