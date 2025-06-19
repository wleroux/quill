import {Choice} from "@/model/source/choice/Choice";

export type ItemID = string;
export type Item = {
  label: string;
  choices: Choice[];
};