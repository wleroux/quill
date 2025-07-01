import SPECIES from "./specie/index";
import TOOLS from "./tool/index";
import {Source} from "@/model/source/model/Source";
import FEATS from "./feat/index";
import ITEMS from "./item/index";
import BACKGROUNDS from "@/model/source/phb/background/index";
import LEVELS from "@/model/source/phb/level/index";
import MANEUVERS from "./maneuver/index";
import SPELLS from "./spell/index";
import METAMAGICS from "./metamagic/index";
import ELDRITCH_INVOCATIONS from "./eldritch-invocation";

export default {
  BACKGROUNDS,
  ELDRITCH_INVOCATIONS,
  FEATS,
  LEVELS,
  // MANEUVERS,
  METAMAGICS,
  ITEMS,
  SPECIES,
  SPELLS,
  TOOLS,
} as const satisfies Source;