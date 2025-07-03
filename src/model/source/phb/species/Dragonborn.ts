import {Species} from "@/model/source/model/Species";

export const DRACONIC_ANCESTRIES = [
  "black",
  "blue",
  "brass",
  "bronze",
  "copper",
  "gold",
  "green",
  "red",
  "silver",
  "white"
] as const;
export type DraconicAncestry = typeof DRACONIC_ANCESTRIES[number];
export const DRACONIC_ANCESTRY_LABELS: {[key in DraconicAncestry]: string} = {
  "black": "Black",
  "blue": "Blue",
  "brass": "Brass",
  "bronze": "Bronze",
  "copper": "Copper",
  "gold": "Gold",
  "green": "Green",
  "red": "Red",
  "silver": "Silver",
  "white": "White"
} as const;

export const PHB_SPECIES_DRAGONBORN: Species = {
  label: "Dragonborn",
  choices: [
    {type: "simple", data: {
      label: "Draconic Ancestry",
      choiceID: "draconic ancestry",
      options: DRACONIC_ANCESTRIES.map(optionID => ({optionID, label: DRACONIC_ANCESTRY_LABELS[optionID]}))
    }}
  ]
};
