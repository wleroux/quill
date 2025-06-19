import {Specie} from "@/model/source/model/Specie";
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";

export const PHB_SPECIE_HUMAN: Specie = {
  label: "Human",
  choices: [
    {type: "simple", data: {
      label: "Size",
      choiceID: "size",
      options: [
        {optionID: "small", label: "Small"},
        {optionID: "medium", label: "Medium"},
      ]
    }},
    {type: "feat", data: {
      choiceID: "human::feat::feat-1",
      condition: featType("origin")
    }},
    {type: "skill", data: {
      choiceID: "human::skill::skill-1"
    }}
  ]
} as const;
