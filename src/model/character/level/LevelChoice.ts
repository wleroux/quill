import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";
import {ItemChoice} from "@/model/character/level/item/ItemChoice";
import {ClassChoice} from "./class/ClassChoice";

export type LevelChoice = {
  type: "level";
  data: {
    choiceID: ChoiceID;
    enabled?: Condition<any>;
    choices: (ItemChoice | ClassChoice)[]
  }
}
