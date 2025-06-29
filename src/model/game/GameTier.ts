export type GameTier =
  | "Initiate"
  | "Adept"
  | "Vanguard"
  | "Exemplar"
  | "Harbinger"
  ;

export const GAME_TIERS = [
  "Initiate",
  "Adept",
  "Vanguard",
  "Exemplar",
  "Harbinger"
] as const satisfies GameTier[];


export function getTier(level: number): GameTier {
  if (level < 5) return "Initiate";
  if (level < 9) return "Adept";
  if (level < 13) return "Vanguard";
  if (level < 17) return "Exemplar";
  return "Harbinger";
}

export function isGameTier(value: string): value is GameTier {
  return GAME_TIERS.includes(value as GameTier);
}

