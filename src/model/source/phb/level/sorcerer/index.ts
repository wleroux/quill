import SORCERER_BASE_LEVELS from "./SorcererBase";
import SORCERER_ABERRANT_LEVELS from "./SorcererAberrant";
import SORCERER_CLOCKWORK_LEVELS from "./SorcererClockwork";
import SORCERER_DRACONIC_LEVELS from "./SorcererDraconic";
import SORCERER_WILD_MAGIC_LEVELS from "./SorcererWildMagic";
import {Level, ClassID} from "@/model/source/model/Level";

export default {
  ...SORCERER_BASE_LEVELS,
  ...SORCERER_ABERRANT_LEVELS,
  ...SORCERER_CLOCKWORK_LEVELS,
  ...SORCERER_DRACONIC_LEVELS,
  ...SORCERER_WILD_MAGIC_LEVELS
} as const satisfies {[levelID: ClassID]: Level};