import {ManeuverID} from "@/model/source/model/Maneuver";

export type ManeuverDecision = {
  type: "maneuver";
  data: {
    maneuverID: ManeuverID;
  }
};
