import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";
import {SpeciesID} from "@/model/source/model/Species";

export type SpeciesChoice = {
  type: "species";
  data: {
    choiceID: ChoiceID;
    condition?: Condition<SpeciesID>;
  };
};

export const DefaultSpeciesChoice = {type: "species", data: {
  choiceID: "species",
  condition: undefined
}} satisfies SpeciesChoice;
