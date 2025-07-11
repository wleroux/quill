import {Species} from "@/model/source/model/Species";
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";

export const PHB_SPECIES_HUMAN: Species = {
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
      label: "Versatile",
      choiceID: "human::feat::feat-1",
      condition: featType("origin")
    }},
    {type: "skill", data: {
      label: "Skillful",
      choiceID: "human::skill::skill-1"
    }}
  ]
} as const;
