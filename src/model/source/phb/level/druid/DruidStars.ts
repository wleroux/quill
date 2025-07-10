import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_DRUID_3, PHB_DRUID_4} from "./DruidBase";

const PHB_DRUID_STARS_3: Level = {
  replace: "Druid 2",
  label: "Druid (Stars) 3",
  choices: [
    ...PHB_DRUID_3.choices
  ],
  longRest: [
    ...PHB_DRUID_3.longRest
  ]
} as const;
const PHB_DRUID_STARS_4: Level = {
  replace: "Druid (Stars) 3",
  label: "Druid (Stars) 4",
  choices: [
    ...PHB_DRUID_4.choices
  ],
  longRest: [
    ...PHB_DRUID_4.longRest
  ]
} as const;

export default {
  [PHB_DRUID_STARS_3.label]: PHB_DRUID_STARS_3,
  [PHB_DRUID_STARS_4.label]: PHB_DRUID_STARS_4
} as const satisfies {[levelID: ClassID]: Level};
