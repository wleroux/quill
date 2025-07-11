import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {ItemDecision} from "@/model/character/level/item/ItemDecision";
import {ClassDecision} from "@/model/character/level/class/ClassDecision";

export type LevelDecision = {
  type: "level";
  data: {
    decisions: {
      [choiceID: ChoiceID]: ClassDecision | ItemDecision
    }
  }
};
