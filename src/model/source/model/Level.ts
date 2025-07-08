import {Choice} from "@/model/source/choice/Choice";
import {Condition} from "@/model/source/condition/Condition";

export type ClassID = string;

export type Level = {
  label: string;
  replace?: ClassID;
  prerequisite?: Condition<any>;
  longRest?: Choice[];
  choices: Choice[];
};
