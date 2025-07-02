import {ChoiceID} from "@/model/source/choice/ChoiceID";

export type StartingStatChoice = {
  type: "starting-stat";
  data: {
    choiceID: ChoiceID;
    points: number;
  }
};

export const DefaultStartingStatChoice: StartingStatChoice = {
  type: "starting-stat",
  data: {
    choiceID: "starting-stat",
    points: 27
  }
};
