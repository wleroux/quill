import {Species} from "@/model/source/model/Species";

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

export const PHB_SPECIES_GOLIATH: Species = {
  label: "Goliath",
  choices: [
    {type: "simple", data: {
      label: "Giant Ancestry",
      choiceID: "giant ancestry",
      options: GIANT_ANCESTRIES.map(optionID => ({optionID, label: GIANT_ANCESTRY_LABELS[optionID]}))
    }}
  ]
};
