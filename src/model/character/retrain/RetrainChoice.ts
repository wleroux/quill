import {ChoiceID} from "@/model/source/choice/ChoiceID";

export type RetrainChoice = {
  type: "retrain";
  data: {
    choiceID: ChoiceID;
  }
};

export const DefaultRetrainChoice: RetrainChoice = {
  type: "retrain",
  data: {
    choiceID: "retrain"
  }
};
