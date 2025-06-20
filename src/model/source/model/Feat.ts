import {Choice} from "@/model/source/choice/Choice";
import {Condition} from "@/model/source/condition/Condition";
import {Character} from "@/model/character/Character";

export type FeatID = string;
export type FeatCategory =
  | "origin"
  | "general"
  | "fighting style"
  | "epic boon"
  ;
export type Feat = {
  label: string;
  category: FeatCategory;
  prerequisite?: Condition<Character>;
  repeatable?: boolean;
  choices: Choice[];
};





