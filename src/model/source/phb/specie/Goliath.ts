import {Specie} from "@/model/source/model/Specie";

export const GIANT_ANCESTRIES = [
  "cloud giant",
  "fire giant",
  "frost giant",
  "hill giant",
  "stone giant",
  "storm giant"
] as const;
export type GiantAncestry = typeof GIANT_ANCESTRIES[number];
export const GIANT_ANCESTRY_LABELS: {[key in GiantAncestry]: string} = {
  "cloud giant": "Cloud Giant",
  "fire giant": "Fire Giant",
  "frost giant": "Frost Giant",
  "hill giant": "Hill Giant",
  "stone giant": "Stone Giant",
  "storm giant": "Storm Giant"
} as const;

export const PHB_SPECIE_GOLIATH: Specie = {
  label: "Goliath",
  choices: [
    {type: "simple", data: {
      label: "Giant Ancestry",
      choiceID: "giant ancestry",
      options: GIANT_ANCESTRIES.map(optionID => ({optionID, label: GIANT_ANCESTRY_LABELS[optionID]}))
    }}
  ]
};
