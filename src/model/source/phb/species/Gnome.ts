import {Species} from "@/model/source/model/Species";
import {selectedChoice} from "@/model/source/choice/Choice";
import {is} from "@/model/source/condition/generic/IsCondition";

export const GNOMISH_LINEAGES = [
  "forest gnome",
  "rock gnome"
] as const;
export type GnomishLineage = typeof GNOMISH_LINEAGES[number];
export const GNOMISH_LINEAGE_LABELS: {[key in GnomishLineage]: string} = {
  "forest gnome": "Forest Gnome",
  "rock gnome": "Rock Gnome"
};

export const PHB_SPECIES_GNOME: Species = {
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
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "gnome::spell::cantrip-1",
      enabled: selectedChoice("gnomish lineage", "forest gnome"),
      condition: is("Minor Illusion"),
    }},
    {type: "spell", data: {
      label: "Spell",
      choiceID: "gnome::spell::spell-1",
      enabled: selectedChoice("gnomish lineage", "forest gnome"),
      condition: is("Speak with Animals")
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "gnome::spell::cantrip-1",
      enabled: selectedChoice("gnomish lineage", "rock gnome"),
      condition: is("Mending"),
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "gnome::spell::cantrip-2",
      enabled: selectedChoice("gnomish lineage", "rock gnome"),
      condition: is("Prestidigitation")
    }}
  ]
};
