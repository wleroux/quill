import {Skill, SkillID} from "@/model/source/model/Skill";

export const SKILL_IDS = [
  "acrobatics",
  "animal handling",
  "arcana",
  "athletics",
  "deception",
  "history",
  "insight",
  "intimidation",
  "investigation",
  "medicine",
  "nature",
  "perception",
  "performance",
  "persuasion",
  "religion",
  "sleight of hand",
  "stealth",
  "survival"
] as const;

export const SKILLS = {
  "acrobatics": {
    label: "Acrobatics",
    attribute: "dex",
  },
  "animal handling": {
    label: "Animal Handling",
    attribute: "wis"
  },
  "arcana": {
    label: "Arcana",
    attribute: "int",
  },
  "athletics": {
    label: "Athletics",
    attribute: "str",
  },
  "deception": {
    label: "Deception",
    attribute: "cha",
  },
  "history": {
    label: "History",
    attribute: "int",
  },
  "insight": {
    label: "Insight",
    attribute: "wis",
  },
  "intimidation": {
    label: "Intimidation",
    attribute: "cha",
  },
  "investigation": {
    label: "Investigation",
    attribute: "int",
  },
  "medicine": {
    label: "Medicine",
    attribute: "wis",
  },
  "nature": {
    label: "Nature",
    attribute: "int",
  },
  "perception": {
    label: "Perception",
    attribute: "wis",
  },
  "performance": {
    label: "Performance",
    attribute: "cha",
  },
  "persuasion": {
    label: "Persuasion",
    attribute: "cha",
  },
  "religion": {
    label: "Religion",
    attribute: "int",
  },
  "sleight of hand": {
    label: "Sleight of Hand",
    attribute: "dex"
  },
  "stealth": {
    label: "Stealth",
    attribute: "dex",
  },
  "survival": {
    label: "Survival",
    attribute: "wis",
  }
} as const satisfies {[skill in SkillID]: Skill};
