import {Species} from "@/model/source/model/Species";
import {SkillID} from "@/model/source/model/Skill";
import {is} from "@/model/source/condition/generic/IsCondition";

export const ELVEN_LINEAGES = [
  "drow",
  "high elf",
  "wood elf"
] as const;
export type ElvenLineage = typeof ELVEN_LINEAGES[number];
export const ELVEN_LINEAGE_LABELS: {[key in ElvenLineage]: string} = {
  "drow": "Drow",
  "high elf": "High Elf",
  "wood elf": "Wood Elf"
} as const;

export const PHB_SPECIES_ELF: Species = {
  label: "Elf",
  choices: [
    {type: "simple", data: {
      label: "Elven Lineage",
      choiceID: "elven lineage",
      options: ELVEN_LINEAGES.map(optionID => ({optionID, label: ELVEN_LINEAGE_LABELS[optionID]}))
    }},
    {type: "skill", data: {
      label: "Keen Senses",
      choiceID: "elf::skill::skill-1",
      condition: is<SkillID>("insight", "perception", "survival")
    }}
  ]
};
