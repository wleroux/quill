import {Choice} from "@/model/source/choice/Choice";

export type SpeciesID = string;
export type Species = {
  label: string;
  choices: Choice[];
};
