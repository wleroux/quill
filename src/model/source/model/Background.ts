import {Choice} from "@/model/source/choice/Choice";
import {Condition} from "@/model/source/condition/Condition";

export type BackgroundID = string;
export type BackgroundCondition = Condition<Background>;
export type Background = {
  label: string;
  prerequisite?: Condition<undefined>;
  choices: Choice[];
};
