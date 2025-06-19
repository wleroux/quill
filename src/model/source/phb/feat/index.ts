import {Feat, FeatID} from "../../model/Feat";
import ORIGIN_FEATS from "./PHBOriginFeats";
import GENERAL_FEATS from "./PHBGeneralFeats";

export default {
  ...ORIGIN_FEATS,
  ...GENERAL_FEATS
} as const satisfies {[featID: FeatID]: Feat};
