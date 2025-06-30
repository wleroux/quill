import {ClassID} from "@/model/source/model/Level";
import {Decision} from "@/model/source/choice/Decision";
import {ChoiceID} from "@/model/source/choice/ChoiceID";

export type ClassDecision = {
  type: "class";
  data: {
    classID: ClassID;
    decisions: {
      [decision: ChoiceID]: Decision
    };
  }
};