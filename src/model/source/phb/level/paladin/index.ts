import {ClassID, Level} from "@/model/source/model/Level";
import {PALADIN_BASE_LEVELS} from "@/model/source/phb/level/paladin/PaladinBase";

export default {
  ...PALADIN_BASE_LEVELS,
} as const satisfies {[levelID: ClassID]: Level};