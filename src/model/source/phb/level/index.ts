import BARBARIAN_LEVELS from "@/model/source/phb/level/barbarian/index";
import BARD_LEVELS from "@/model/source/phb/level/bard/index";
import CLERIC_LEVELS from "@/model/source/phb/level/cleric/index";
import DRUID_LEVELS from "@/model/source/phb/level/druid/index";
import FIGHTER_LEVELS from "@/model/source/phb/level/fighter/index";
import MONK_LEVELS from "@/model/source/phb/level/monk/index";
import PALADIN_LEVELS from "@/model/source/phb/level/paladin/index";
import RANGER_LEVELS from "@/model/source/phb/level/ranger/index";
import ROGUE_LEVELS from "@/model/source/phb/level/rogue/index";
import SORCERER_LEVELS from "@/model/source/phb/level/sorcerer/index";
import WARLOCK_LEVELS from "@/model/source/phb/level/warlock/index";
import WIZARD_LEVELS from "@/model/source/phb/level/wizard/index";
import {ClassID, Level} from "@/model/source/model/Level";

export default {
  ...BARBARIAN_LEVELS,
  ...BARD_LEVELS,
  ...CLERIC_LEVELS,
  ...DRUID_LEVELS,
  ...FIGHTER_LEVELS,
  ...MONK_LEVELS,
  ...PALADIN_LEVELS,
  ...RANGER_LEVELS,
  ...ROGUE_LEVELS,
  ...SORCERER_LEVELS,
  ...WARLOCK_LEVELS,
  ...WIZARD_LEVELS
} as const satisfies {[levelID: ClassID]: Level};
