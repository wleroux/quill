import {Choice} from "@/model/source/choice/Choice";
import {Condition} from "@/model/source/condition/Condition";

export type EldritchInvocationID = string;

export type EldritchInvocation = {
  label: string;
  repeatable?: boolean;
  prerequisite?: Condition<undefined>;
  choices: Choice[];
};
