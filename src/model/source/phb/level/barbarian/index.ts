import BARBARIAN_BASE_LEVELS from "./BarbarianBase";
import BARBARIAN_BERSERKER_LEVELS from "./BarbarianBerserker";
import BARBARIAN_WILD_HEART_LEVELS from "./BarbarianWildHeart";
import BARBARIAN_WORLD_TREE_LEVELS from "./BarbarianWorldTree";
import BARBARIAN_ZEALOT_LEVELS from "./BarbarianZealot";
import {Level, ClassID} from "@/model/source/model/Level";

export default {
  ...BARBARIAN_BASE_LEVELS,
  ...BARBARIAN_BERSERKER_LEVELS,
  ...BARBARIAN_WILD_HEART_LEVELS,
  ...BARBARIAN_WORLD_TREE_LEVELS,
  ...BARBARIAN_ZEALOT_LEVELS
} as const satisfies {[levelID: ClassID]: Level};
