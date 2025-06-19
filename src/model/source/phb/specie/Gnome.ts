import {Specie} from "@/model/source/model/Specie";

export const GNOMISH_LINEAGES = [
  "forest gnome",
  "rock gnome"
] as const;
export type GnomishLineage = typeof GNOMISH_LINEAGES[number];
export const GNOMISH_LINEAGE_LABELS: {[key in GnomishLineage]: string} = {
  "forest gnome": "Forest Gnome",
  "rock gnome": "Rock Gnome"
};

export const PHB_SPECIE_GNOME: Specie = {
  label: "Gnome",
  choices: [
    {type: "simple", data: {
      label: "Gnomish Lineage",
      choiceID: "gnomish lineage",
      options: GNOMISH_LINEAGES.map(optionID => ({optionID, label: GNOMISH_LINEAGE_LABELS[optionID]}))
    }},
    {type: "simple", data: {
      label: "Spellcasting Ability",
      choiceID: "gnome::spellcasting ability",
      options: [
        {optionID: "int", label: "Intelligence"},
        {optionID: "wis", label: "Wisdom"},
        {optionID: "cha", label: "Charisma"},
      ]
    }}
  ]
};
