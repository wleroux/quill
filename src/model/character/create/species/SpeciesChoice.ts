import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";
import {SpecieID} from "@/model/source/model/Specie";

export type SpeciesChoice = {
  type: "species";
  data: {
    choiceID: ChoiceID;
    condition?: Condition<SpecieID>;
  };
};

export const DefaultSpeciesChoice = {type: "species", data: {
  choiceID: "species",
  condition: undefined
}} satisfies SpeciesChoice;
