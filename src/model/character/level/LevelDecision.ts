import {LevelID} from "@/model/source/model/Level";
import {Decision} from "@/model/source/choice/Decision";
import {ChoiceID} from "@/model/source/choice/ChoiceID";

export type LevelDecision = {
  type: "level";
  data: {
    levelID: LevelID;
    decisions: {
      [choiceID: ChoiceID]: Decision
    }
  }
};
