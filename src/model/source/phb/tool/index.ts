import {Tool, ToolID} from "@/model/source/model/Tool";
import {PHB_MUSICAL_INSTRUMENT_TOOLS} from "@/model/source/phb/tool/PHBMusticalInstrumentTools";
import {PHB_GAMING_SET_TOOLS} from "@/model/source/phb/tool/PHBGamingSetTools";
import {PHB_OTHER_TOOLS} from "@/model/source/phb/tool/PHBOtherTools";
import {PHB_ARTISAN_TOOLS} from "@/model/source/phb/tool/PHBArtisanTools";

export default {
  ...PHB_ARTISAN_TOOLS,
  ...PHB_MUSICAL_INSTRUMENT_TOOLS,
  ...PHB_GAMING_SET_TOOLS,
  ...PHB_OTHER_TOOLS
} as const satisfies {[toolID: ToolID]: Tool};
