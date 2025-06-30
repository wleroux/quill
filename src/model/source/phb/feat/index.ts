import {Feat, FeatID} from "../../model/Feat";
import ORIGIN_FEATS from "./PHBOriginFeats";
import GENERAL_FEATS from "./PHBGeneralFeats";
import FIGHTING_STYLE_FEATS from "./PHBFightingStyleFeats";

export default {
  ...ORIGIN_FEATS,
  ...GENERAL_FEATS,
  ...FIGHTING_STYLE_FEATS
} as const satisfies {[featID: FeatID]: Feat};
