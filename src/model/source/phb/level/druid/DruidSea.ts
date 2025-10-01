import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_DRUID_10, PHB_DRUID_11, PHB_DRUID_12, PHB_DRUID_3, PHB_DRUID_4, PHB_DRUID_5, PHB_DRUID_6, PHB_DRUID_7, PHB_DRUID_8, PHB_DRUID_9} from "./DruidBase";
import { is } from "@/model/source/condition/generic/IsCondition";

const PHB_DRUID_SEA_3: Level = {
  replace: "Druid 2",
  label: "Druid (Sea) 3",
  choices: [
    ...PHB_DRUID_3.choices,
    {type: "spell", data: {
      choiceID: "druid (land)::spell-1",
      condition: is("Fog Cloud")
    }},
    {type: "spell", data: {
      choiceID: "druid (land)::spell-2",
      condition: is("Gust of Wind")
    }},
    {type: "spell", data: {
      choiceID: "druid (land)::spell-3",
      condition: is("Ray of Frost")
    }},
    {type: "spell", data: {
      choiceID: "druid (land)::spell-4",
      condition: is("Shatter")
    }},
    {type: "spell", data: {
      choiceID: "druid (land)::spell-5",
      condition: is("Thunderwave")
    }}
  ],
  longRest: [
    ...PHB_DRUID_3.longRest
  ]
} as const;
const PHB_DRUID_SEA_4: Level = {
  replace: "Druid (Sea) 3",
  label: "Druid (Sea) 4",
  choices: [
    ...PHB_DRUID_4.choices
  ],
  longRest: [
    ...PHB_DRUID_4.longRest
  ]
} as const;
const PHB_DRUID_SEA_5: Level = {
  replace: "Druid (Sea) 4",
  label: "Druid (Sea) 5",
  choices: [
    ...PHB_DRUID_5.choices
  ],
  longRest: [
    ...PHB_DRUID_5.longRest
  ]
} as const;
const PHB_DRUID_SEA_6: Level = {
  replace: "Druid (Sea) 5",
  label: "Druid (Sea) 6",
  choices: [
    ...PHB_DRUID_6.choices
  ],
  longRest: [
    ...PHB_DRUID_6.longRest
  ]
} as const;
const PHB_DRUID_SEA_7: Level = {
  replace: "Druid (Sea) 6",
  label: "Druid (Sea) 7",
  choices: [
    ...PHB_DRUID_7.choices
  ],
  longRest: [
    ...PHB_DRUID_7.longRest
  ]
} as const;
const PHB_DRUID_SEA_8: Level = {
  replace: "Druid (Sea) 7",
  label: "Druid (Sea) 8",
  choices: [
    ...PHB_DRUID_8.choices
  ],
  longRest: [
    ...PHB_DRUID_8.longRest
  ]
} as const;
const PHB_DRUID_SEA_9: Level = {
  replace: "Druid (Sea) 8",
  label: "Druid (Sea) 9",
  choices: [
    ...PHB_DRUID_9.choices
  ],
  longRest: [
    ...PHB_DRUID_9.longRest
  ]
} as const;
const PHB_DRUID_SEA_10: Level = {
  replace: "Druid (Sea) 9",
  label: "Druid (Sea) 10",
  choices: [
    ...PHB_DRUID_10.choices
  ],
  longRest: [
    ...PHB_DRUID_10.longRest
  ]
} as const;
const PHB_DRUID_SEA_11: Level = {
  replace: "Druid (Sea) 10",
  label: "Druid (Sea) 11",
  choices: [
    ...PHB_DRUID_11.choices
  ],
  longRest: [
    ...PHB_DRUID_11.longRest
  ]
} as const;
const PHB_DRUID_SEA_12: Level = {
  replace: "Druid (Sea) 11",
  label: "Druid (Sea) 12",
  choices: [
    ...PHB_DRUID_12.choices
  ],
  longRest: [
    ...PHB_DRUID_12.longRest
  ]
} as const;

export default {
  [PHB_DRUID_SEA_3.label]: PHB_DRUID_SEA_3,
  [PHB_DRUID_SEA_4.label]: PHB_DRUID_SEA_4,
  [PHB_DRUID_SEA_5.label]: PHB_DRUID_SEA_5,
  [PHB_DRUID_SEA_6.label]: PHB_DRUID_SEA_6,
  [PHB_DRUID_SEA_7.label]: PHB_DRUID_SEA_7,
  [PHB_DRUID_SEA_8.label]: PHB_DRUID_SEA_8,
  [PHB_DRUID_SEA_9.label]: PHB_DRUID_SEA_9,
  [PHB_DRUID_SEA_10.label]: PHB_DRUID_SEA_10,
  [PHB_DRUID_SEA_11.label]: PHB_DRUID_SEA_11,
  [PHB_DRUID_SEA_12.label]: PHB_DRUID_SEA_12,
} as const satisfies {[levelID: ClassID]: Level};
