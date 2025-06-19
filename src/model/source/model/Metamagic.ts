import {Choice} from "@/model/source/choice/Choice";

export type MetamagicID = string;
export type Metamagic = {
  label: string;
  choices: Choice[];
};
