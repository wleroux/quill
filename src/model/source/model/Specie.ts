import {Choice} from "@/model/source/choice/Choice";

export type SpecieID = string;
export type Specie = {
  label: string;
  choices: Choice[];
};
