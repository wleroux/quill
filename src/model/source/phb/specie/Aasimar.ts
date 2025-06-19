import {Specie} from "@/model/source/model/Specie";

export const PHB_SPECIE_AASIMAR: Specie = {
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
