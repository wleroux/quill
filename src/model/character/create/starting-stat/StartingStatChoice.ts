import {ChoiceID} from "@/model/source/choice/ChoiceID";

export type StartingStatChoice = {
  type: "starting-stat";
  data: {
    choiceID: ChoiceID;
    points: number;
  }
};