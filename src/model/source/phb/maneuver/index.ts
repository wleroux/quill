import {Maneuver, ManeuverID} from "@/model/source/model/Maneuver";

export default {
  "ambush": {
    label: "Ambush",
    choices: []
  },
  "bait and switch": {
    label: "Bait and Switch",
    choices: []
  },
  "commander's strike": {
    label: "Commander's Strike",
    choices: []
  },
  "commanding presence": {
    label: "Commanding Presence",
    choices: []
  },
  "disarming attack": {
    label: "Disarming Attack",
    choices: []
  },
  "distracting strike": {
    label: "Distracting Strike",
    choices: []
  },
  "evasive footwork": {
    label: "Evasive Footwork",
    choices: []
  },
  "feinting attack": {
    label: "Feinting Attack",
    choices: []
  },
  "goading attack": {
    label: "Goading Attack",
    choices: []
  },
  "lunging attack": {
    label: "Lunging Attack",
    choices: []
  },
  "maneuvering attack": {
    label: "Maneuvering Attack",
    choices: []
  },
  "menacing attack": {
    label: "Menacing Attack",
    choices: []
  },
  "parry": {
    label: "Parry",
    choices: []
  },
  "precision attack": {
    label: "Precision Attack",
    choices: []
  },
  "pushing attack": {
    label: "Pushing Attack",
    choices: []
  },
  "rally": {
    label: "Rally",
    choices: []
  },
  "riposte": {
    label: "Riposte",
    choices: []
  },
  "sweeping attack": {
    label: "Sweeping Attack",
    choices: []
  },
  "tactical assessment": {
    label: "Tactical Assessment",
    choices: []
  },
  "trip attack": {
    label: "Trip Attack",
    choices: []
  }
} as const satisfies {[maneuverID in ManeuverID]: Maneuver};
