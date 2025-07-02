import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";
import {BackgroundID} from "@/model/source/model/Background";

export type BackgroundChoice = {
  type: "background";
  data: {
    choiceID: ChoiceID;
    condition?: Condition<BackgroundID>;
  }
};

export const DefaultBackgroundChoice: BackgroundChoice = {
  type: "background",
  data: {
    choiceID: "background"
  }
};
