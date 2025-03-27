export const SKILLS = [
  "athletics",
  "acrobatics",
  "animal handling",
  "arcana",
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

export const SKILL_LABEL: {[skill in Skill[number]]: string} = {
  "athletics": "Athletics",
  "acrobatics": "Acrobatics",
  "animal handling": "Animal Handling",
  "arcana": "Arcana",
  "deception": "Deception",
  "history": "History",
  "insight": "Insight",
  "intimidation": "Intimidation",
  "investigation": "Investigation",
  "medicine": "Medicine",
  "nature": "Nature",
  "perception": "Perception",
  "performance": "Performance",
  "persuasion": "Persuasion",
  "religion": "Religion",
  "sleight of hand": "Sleight of Hand",
  "stealth": "Stealth",
  "survival": "Survival"
} as const;

export type Skill = typeof SKILLS[number];
