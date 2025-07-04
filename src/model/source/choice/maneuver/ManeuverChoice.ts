import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";
import {ManeuverID} from "@/model/source/model/Maneuver";

export type ManeuverChoice = {
  type: "maneuver";
  data: {
    label?: string;
    choiceID: ChoiceID;
    enabled?: Condition<undefined>;
    condition?: Condition<ManeuverID>;
  }
};