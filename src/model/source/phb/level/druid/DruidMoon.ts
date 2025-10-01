import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_DRUID_10, PHB_DRUID_11, PHB_DRUID_12, PHB_DRUID_3, PHB_DRUID_4, PHB_DRUID_5, PHB_DRUID_6, PHB_DRUID_7, PHB_DRUID_8, PHB_DRUID_9} from "./DruidBase";
import { is } from "@/model/source/condition/generic/IsCondition";

const PHB_DRUID_MOON_3: Level = {
  replace: "Druid 2",
  label: "Druid (Moon) 3",
  choices: [
    ...PHB_DRUID_3.choices,
    {type: "spell", data: {
      choiceID: "druid (land)::spell-1",
      condition: is("Cure Wounds")
    }},
    {type: "spell", data: {
      choiceID: "druid (land)::spell-2",
      condition: is("Moonbeam")
    }},
    {type: "spell", data: {
      choiceID: "druid (land)::spell-3",
      condition: is("Starry Wisp")
    }}
  ],
  longRest: [
    ...PHB_DRUID_3.longRest
  ]
} as const;
const PHB_DRUID_MOON_4: Level = {
  replace: "Druid (Moon) 3",
  label: "Druid (Moon) 4",
  choices: [
    ...PHB_DRUID_4.choices
  ],
  longRest: [
    ...PHB_DRUID_4.longRest
  ]
} as const;
const PHB_DRUID_MOON_5: Level = {
  replace: "Druid (Moon) 4",
  label: "Druid (Moon) 5",
  choices: [
    ...PHB_DRUID_5.choices
  ],
  longRest: [
    ...PHB_DRUID_5.longRest
  ]
} as const;
const PHB_DRUID_MOON_6: Level = {
  replace: "Druid (Moon) 5",
  label: "Druid (Moon) 6",
  choices: [
    ...PHB_DRUID_6.choices
  ],
  longRest: [
    ...PHB_DRUID_6.longRest
  ]
} as const;
const PHB_DRUID_MOON_7: Level = {
  replace: "Druid (Moon) 6",
  label: "Druid (Moon) 7",
  choices: [
    ...PHB_DRUID_7.choices
  ],
  longRest: [
    ...PHB_DRUID_7.longRest
  ]
} as const;
const PHB_DRUID_MOON_8: Level = {
  replace: "Druid (Moon) 7",
  label: "Druid (Moon) 8",
  choices: [
    ...PHB_DRUID_8.choices
  ],
  longRest: [
    ...PHB_DRUID_8.longRest
  ]
} as const;
const PHB_DRUID_MOON_9: Level = {
  replace: "Druid (Moon) 8",
  label: "Druid (Moon) 9",
  choices: [
    ...PHB_DRUID_9.choices
  ],
  longRest: [
    ...PHB_DRUID_9.longRest
  ]
} as const;
const PHB_DRUID_MOON_10: Level = {
  replace: "Druid (Moon) 9",
  label: "Druid (Moon) 10",
  choices: [
    ...PHB_DRUID_10.choices
  ],
  longRest: [
    ...PHB_DRUID_10.longRest
  ]
} as const;
const PHB_DRUID_MOON_11: Level = {
  replace: "Druid (Moon) 10",
  label: "Druid (Moon) 11",
  choices: [
    ...PHB_DRUID_11.choices
  ],
  longRest: [
    ...PHB_DRUID_11.longRest
  ]
} as const;
const PHB_DRUID_MOON_12: Level = {
  replace: "Druid (Moon) 11",
  label: "Druid (Moon) 12",
  choices: [
    ...PHB_DRUID_12.choices
  ],
  longRest: [
    ...PHB_DRUID_12.longRest
  ]
} as const;

export default  {
  [PHB_DRUID_MOON_3.label]: PHB_DRUID_MOON_3,
  [PHB_DRUID_MOON_4.label]: PHB_DRUID_MOON_4,
  [PHB_DRUID_MOON_5.label]: PHB_DRUID_MOON_5,
  [PHB_DRUID_MOON_6.label]: PHB_DRUID_MOON_6,
  [PHB_DRUID_MOON_7.label]: PHB_DRUID_MOON_7,
  [PHB_DRUID_MOON_8.label]: PHB_DRUID_MOON_8,
  [PHB_DRUID_MOON_9.label]: PHB_DRUID_MOON_9,
  [PHB_DRUID_MOON_10.label]: PHB_DRUID_MOON_10,
  [PHB_DRUID_MOON_11.label]: PHB_DRUID_MOON_11,
  [PHB_DRUID_MOON_12.label]: PHB_DRUID_MOON_12,
} as const satisfies {[levelID: ClassID]: Level};
