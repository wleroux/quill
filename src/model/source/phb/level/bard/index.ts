import BARD_BASE_LEVELS from "./BardBase";
import BARD_DANCE_LEVELS from "./BardDance";
import BARD_GLAMOUR_LEVELS from "./BardGlamour";
import BARD_LORE_LEVELS from "./BardLore";
import BARD_VALOR_LEVELS from "./BardValor";
import {Level, ClassID} from "@/model/source/model/Level";

export default {
  ...BARD_BASE_LEVELS,
  ...BARD_DANCE_LEVELS,
  ...BARD_GLAMOUR_LEVELS,
  ...BARD_LORE_LEVELS,
  ...BARD_VALOR_LEVELS
} as const satisfies {[levelID: ClassID]: Level};