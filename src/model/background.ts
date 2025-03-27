export const BACKGROUNDS = [
  "acolyte",
  "artisan",
  "charlatan",
  "criminal",
  "custom",
  "entertainer",
  "farmer",
  "guard",
  "guide",
  "hermit",
  "merchant",
  "noble",
  "sage",
  "sailor",
  "scribe",
  "soldier",
  "wayfarer"
] as const;

export type Backgrounds = {
  "acolyte": undefined,
  "artisan": undefined,
  "charlatan": undefined,
  "criminal": undefined,
  "custom": undefined,
  "entertainer": undefined,
  "farmer": undefined,
  "guard": undefined,
  "guide": undefined,
  "hermit": undefined,
  "merchant": undefined,
  "noble": undefined,
  "sage": undefined,
  "sailor": undefined,
  "scribe": undefined,
  "soldier": undefined,
  "wayfarer": undefined
};
export type Background = {
  [key in keyof Backgrounds]: {
    type: key,
    data: Backgrounds[key]
  }
}[keyof Backgrounds];

export const BACKGROUND_LABELS: {[key in keyof Backgrounds]: string} = {
  "acolyte": "Acolyte",
  "artisan": "Artisan",
  "charlatan": "Charlatan",
  "criminal": "Criminal",
  "custom": "Custom",
  "entertainer": "Entertainer",
  "farmer": "Farmer",
  "guard": "Guard",
  "guide": "Guide",
  "hermit": "Hermit",
  "merchant": "Merchant",
  "noble": "Noble",
  "sage": "Sage",
  "sailor": "Sailor",
  "scribe": "Scribe",
  "soldier": "Soldier",
  "wayfarer": "Wayfarer"
};
