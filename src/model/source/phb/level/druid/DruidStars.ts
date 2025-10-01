import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_DRUID_10, PHB_DRUID_11, PHB_DRUID_12, PHB_DRUID_3, PHB_DRUID_4, PHB_DRUID_5, PHB_DRUID_6, PHB_DRUID_7, PHB_DRUID_8, PHB_DRUID_9} from "./DruidBase";

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
const PHB_DRUID_STARS_5: Level = {
  replace: "Druid (Stars) 4",
  label: "Druid (Stars) 5",
  choices: [
    ...PHB_DRUID_5.choices
  ],
  longRest: [
    ...PHB_DRUID_5.longRest
  ]
} as const;
const PHB_DRUID_STARS_6: Level = {
  replace: "Druid (Stars) 5",
  label: "Druid (Stars) 6",
  choices: [
    ...PHB_DRUID_6.choices
  ],
  longRest: [
    ...PHB_DRUID_6.longRest
  ]
} as const;
const PHB_DRUID_STARS_7: Level = {
  replace: "Druid (Stars) 6",
  label: "Druid (Stars) 7",
  choices: [
    ...PHB_DRUID_7.choices
  ],
  longRest: [
    ...PHB_DRUID_7.longRest
  ]
} as const;
const PHB_DRUID_STARS_8: Level = {
  replace: "Druid (Stars) 7",
  label: "Druid (Stars) 8",
  choices: [
    ...PHB_DRUID_8.choices
  ],
  longRest: [
    ...PHB_DRUID_8.longRest
  ]
} as const;
const PHB_DRUID_STARS_9: Level = {
  replace: "Druid (Stars) 8",
  label: "Druid (Stars) 9",
  choices: [
    ...PHB_DRUID_9.choices
  ],
  longRest: [
    ...PHB_DRUID_9.longRest
  ]
} as const;
const PHB_DRUID_STARS_10: Level = {
  replace: "Druid (Stars) 9",
  label: "Druid (Stars) 10",
  choices: [
    ...PHB_DRUID_10.choices
  ],
  longRest: [
    ...PHB_DRUID_10.longRest
  ]
} as const;
const PHB_DRUID_STARS_11: Level = {
  replace: "Druid (Stars) 10",
  label: "Druid (Stars) 11",
  choices: [
    ...PHB_DRUID_11.choices
  ],
  longRest: [
    ...PHB_DRUID_11.longRest
  ]
} as const;
const PHB_DRUID_STARS_12: Level = {
  replace: "Druid (Stars) 11",
  label: "Druid (Stars) 12",
  choices: [
    ...PHB_DRUID_12.choices
  ],
  longRest: [
    ...PHB_DRUID_12.longRest
  ]
} as const;

export default {
  [PHB_DRUID_STARS_3.label]: PHB_DRUID_STARS_3,
  [PHB_DRUID_STARS_4.label]: PHB_DRUID_STARS_4,
  [PHB_DRUID_STARS_5.label]: PHB_DRUID_STARS_5,
  [PHB_DRUID_STARS_6.label]: PHB_DRUID_STARS_6,
  [PHB_DRUID_STARS_7.label]: PHB_DRUID_STARS_7,
  [PHB_DRUID_STARS_8.label]: PHB_DRUID_STARS_8,
  [PHB_DRUID_STARS_9.label]: PHB_DRUID_STARS_9,
  [PHB_DRUID_STARS_10.label]: PHB_DRUID_STARS_10,
  [PHB_DRUID_STARS_11.label]: PHB_DRUID_STARS_11,
  [PHB_DRUID_STARS_12.label]: PHB_DRUID_STARS_12,
} as const satisfies {[levelID: ClassID]: Level};
