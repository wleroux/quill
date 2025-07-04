import {Condition} from "@/model/source/condition/Condition";
import { ChoiceID } from "../ChoiceID";
import {FeatID} from "@/model/source/model/Feat";

export type FeatReplacementChoice = {
  type: "feat-replacement";
  data: {
    label?: string;
    required?: Condition<undefined>;
    choiceID: ChoiceID;
    enabled?: Condition<undefined>;
    condition?: Condition<FeatID>;
    sourceID: Condition<string>;
  }
};