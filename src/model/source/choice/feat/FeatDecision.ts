import {FeatID} from "@/model/source/model/Feat";
import {Decision} from "@/model/source/choice/Decision";
import { ChoiceID } from "../ChoiceID";

export type FeatDecision = {
  type: "feat";
  data: {
    featID: FeatID;
    decisions: {
      [choiceID: ChoiceID]: Decision
    };
  }
};
