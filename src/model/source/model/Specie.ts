import {Choice} from "@/model/source/choice/Choice";
import {Decision} from "@/model/source/choice/Decision";
import {ChoiceID} from "../choice/ChoiceID";

export type SpecieID = string;
export type Specie = {
  label: string;
  choices: Choice[];
};
export type SpecieProperties = {
  type: SpecieID;
  decisions: {
    [choiceID: ChoiceID]: Decision
  };
};
