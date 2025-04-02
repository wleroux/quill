export const METAMAGIC = [
  "careful spell",
  "distant spell",
  "empowered spell",
  "extended spell",
  "heightened spell",
  "quickened spell",
  "seeking spell",
  "subtle spell",
  "transmuted spell",
  "twinned spell"
] as const;
export type Metamagic = typeof METAMAGIC[number];

export const METAMAGIC_LABELS: {[key in Metamagic]: string} = {
  "careful spell": "Careful Spell",
  "distant spell": "Distant Spell",
  "empowered spell": "Empowered Spell",
  "extended spell": "Extended Spell",
  "heightened spell": "Heightened Spell",
  "quickened spell": "Quickened Spell",
  "seeking spell": "Seeking Spell",
  "subtle spell": "Subtle Spell",
  "transmuted spell": "Transmuted Spell",
  "twinned spell": "Twinned Spell",
} as const;

export type MetamagicReplacement = {from: Metamagic, to: Metamagic};
