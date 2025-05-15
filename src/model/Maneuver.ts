export const MANEUVERS = [
  "ambush",
  "bait and switch",
  "commander's strike",
  "commanding presence",
  "disarming attack",
  "distracting strike",
  "evasive footwork",
  "feinting attack",
  "goading attack",
  "lunging attack",
  "maneuvering attack",
  "menacing attack",
  "parry",
  "precision attack",
  "pushing attack",
  "rally",
  "riposte",
  "sweeping attack",
  "tactical assessment",
  "trip attack"
] as const;
export type Maneuver = typeof MANEUVERS[number];
export const MANEUVER_LABELS = {
  "ambush": "Ambush",
  "bait and switch": "Bait and Switch",
  "commander's strike": "Commander's Strike",
  "commanding presence": "Commanding Presence",
  "disarming attack": "Disarming Attack",
  "distracting strike": "Distracting Strike",
  "evasive footwork": "Evasive Footwork",
  "feinting attack": "Feinting Attack",
  "goading attack": "Goading Attack",
  "lunging attack": "Lunging Attack",
  "maneuvering attack": "Maneuvering Attack",
  "menacing attack": "Menacing Attack",
  "parry": "Parry",
  "precision attack": "Precision Attack",
  "pushing attack": "Pushing Attack",
  "rally": "Rally",
  "riposte": "Riposte",
  "sweeping attack": "Sweeping Attack",
  "tactical assessment": "Tactical Assessment",
  "trip attack": "Trip Attack"
};

export type ManeuverReplacement = {
  from: Maneuver;
  to: Maneuver;
};
