import FIGHTER_BASE_LEVELS from "./FighterBase";
import FIGHTER_BATTLE_MASTER_LEVELS from "./FighterBattleMaster";
import FIGHTER_CHAMPION_LEVELS from "./FighterChampion";
import FIGHTER_ELDRITCH_KNIGHT_LEVELS from "./FighterEldritchKnight";
import FIGHTER_PSI_WARRIOR_LEVELS from "./FighterPsiWarrior";
import {ClassID, Level} from "@/model/source/model/Level";

export default {
  ...FIGHTER_BASE_LEVELS,
  ...FIGHTER_BATTLE_MASTER_LEVELS,
  ...FIGHTER_CHAMPION_LEVELS,
  ...FIGHTER_ELDRITCH_KNIGHT_LEVELS,
  ...FIGHTER_PSI_WARRIOR_LEVELS
} as const satisfies {[levelID: ClassID]: Level};