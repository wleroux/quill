import {Choice} from "@/model/source/choice/Choice";
import {Condition} from "@/model/source/condition/Condition";

export type LevelID = string;

export type Level = {
  label: string;
  replace?: LevelID;
  prerequisite?: Condition<any>;
  choices: Choice[];
};
