export const SPELLS = [
  "",
  "NA"
] as const;
export type Spell = typeof SPELLS[number];

export const SPELL_LABELS: {[key in Spell]: string} = {
  "": "",
  "NA": "N/A"
} as const;


export type SpellReplacement = {from: Spell, to: Spell};
