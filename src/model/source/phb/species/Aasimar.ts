import {Species} from "@/model/source/model/Species";

export const PHB_SPECIES_AASIMAR: Species = {
  label: "Aasimar",
  choices: [
    {type: "simple", data: {
      label: "Size",
      choiceID: "size",
      options: [
        {optionID: "small", label: "Small"},
        {optionID: "medium", label: "Medium"}
      ]
    }}
  ]
};
