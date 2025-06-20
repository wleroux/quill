import {BackgroundID} from "@/model/source/model/Background";
import {Decision} from "@/model/source/choice/Decision";
import {ChoiceID} from "@/model/source/choice/ChoiceID";

export type BackgroundDecision = {
  type: "background";
  data: {
    backgroundID: BackgroundID;
    decisions: {
      [choiceID: ChoiceID]: Decision
    };
  }
};
