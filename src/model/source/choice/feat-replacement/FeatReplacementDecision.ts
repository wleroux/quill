import {ChoiceID} from "../ChoiceID";
import {FeatID} from "@/model/source/model/Feat";
import {Decision} from "@/model/source/choice/Decision";

export type FeatReplacementDecision = {
  type: "feat-replacement";
  data: {
    sourceID: string;
    featID: FeatID;
    decisions: {[choiceID: ChoiceID]: Decision};
  }
};