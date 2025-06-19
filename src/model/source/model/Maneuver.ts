import {Choice} from "@/model/source/choice/Choice";

export type ManeuverID = string;
export type Maneuver = {
  label: string;
  choices: Choice[];
};
