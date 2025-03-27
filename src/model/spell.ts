export const SPELLS = [
  ""
] as const;
export type Spell = typeof SPELLS[number];

export const SPELL_LABELS: {[key in Spell]: string} = {
  "": "N/A"
} as const;
