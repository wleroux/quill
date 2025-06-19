import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";
import {LevelID} from "@/model/source/model/Level";

export type LevelChoice = {
  type: "level";
  data: {
    choiceID: ChoiceID;
    enabled?: Condition<any>;
    required?: Condition<any>;
    condition?: Condition<LevelID>;
  }
}
