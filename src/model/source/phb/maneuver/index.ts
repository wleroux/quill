import {Maneuver, ManeuverID} from "@/model/source/model/Maneuver";

export default {
  "Ambush": {
    label: "Ambush"
  },
  "Bait and Switch": {
    label: "Bait and Switch"
  },
  "Commander's Strike": {
    label: "Commander's Strike"
  },
  "Commanding Presence": {
    label: "Commanding Presence"
  },
  "Disarming Attack": {
    label: "Disarming Attack"
  },
  "Distracting Strike": {
    label: "Distracting Strike"
  },
  "Evasive Footwork": {
    label: "Evasive Footwork"
  },
  "Feinting Attack": {
    label: "Feinting Attack"
  },
  "Goading Attack": {
    label: "Goading Attack"
  },
  "Lunging Attack": {
    label: "Lunging Attack"
  },
  "Maneuvering Attack": {
    label: "Maneuvering Attack"
  },
  "Menacing Attack": {
    label: "Menacing Attack"
  },
  "Parry": {
    label: "Parry"
  },
  "Precision Attack": {
    label: "Precision Attack"
  },
  "Pushing Attack": {
    label: "Pushing Attack"
  },
  "Rally": {
    label: "Rally"
  },
  "Riposte": {
    label: "Riposte"
  },
  "Sweeping Attack": {
    label: "Sweeping Attack"
  },
  "Tactical Assessment": {
    label: "Tactical Assessment"
  },
  "Trip Attack": {
    label: "Trip Attack"
  }
} as const satisfies {[maneuverID in ManeuverID]: Maneuver};
