import {ItemID} from "@/model/source/model/Item";
import {Decision} from "@/model/source/choice/Decision";
import {ChoiceID} from "@/model/source/choice/ChoiceID";

export type ItemReplacementDecision = {
  type: "item-replacement";
  data: {
    sourceID: string;
    itemID: ItemID;
    decisions: {
      [choiceID: ChoiceID]: Decision
    }
  }
};
