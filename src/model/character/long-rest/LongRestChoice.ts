import {Choice} from "@/model/source/choice/Choice";
import {ChoiceID} from "@/model/source/choice/ChoiceID";

export type LongRestChoice = {
  type: "long-rest";
  data: {
    choiceID: ChoiceID;
    choices: Choice[];
  }
};
