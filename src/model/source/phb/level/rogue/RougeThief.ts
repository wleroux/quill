import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_ROGUE_10, PHB_ROGUE_11, PHB_ROGUE_12, PHB_ROGUE_3, PHB_ROGUE_4, PHB_ROGUE_5, PHB_ROGUE_6, PHB_ROGUE_7, PHB_ROGUE_8, PHB_ROGUE_9} from "./RougeBase";

const PHB_ROGUE_THIEF_3: Level = {
  replace: "Rogue 2",
  label: "Rogue (Thief) 3",
  choices: [
    ...PHB_ROGUE_3.choices
  ],
  longRest: [
    ...PHB_ROGUE_3.longRest
  ]
} as const;
const PHB_ROGUE_THIEF_4: Level = {
  replace: "Rogue (Thief) 3",
  label: "Rogue (Thief) 4",
  choices: [
    ...PHB_ROGUE_4.choices
  ],
  longRest: [
    ...PHB_ROGUE_4.longRest
  ]
} as const;
const PHB_ROGUE_THIEF_5: Level = {
  replace: "Rogue (Thief) 4",
  label: "Rogue (Thief) 5",
  choices: [
    ...PHB_ROGUE_5.choices
  ],
  longRest: [
    ...PHB_ROGUE_5.longRest
  ]
} as const;
const PHB_ROGUE_THIEF_6: Level = {
  replace: "Rogue (Thief) 5",
  label: "Rogue (Thief) 6",
  choices: [
    ...PHB_ROGUE_6.choices
  ],
  longRest: [
    ...PHB_ROGUE_6.longRest
  ]
} as const;
const PHB_ROGUE_THIEF_7: Level = {
  replace: "Rogue (Thief) 6",
  label: "Rogue (Thief) 7",
  choices: [
    ...PHB_ROGUE_7.choices
  ],
  longRest: [
    ...PHB_ROGUE_7.longRest
  ]
} as const;
const PHB_ROGUE_THIEF_8: Level = {
  replace: "Rogue (Thief) 7",
  label: "Rogue (Thief) 8",
  choices: [
    ...PHB_ROGUE_8.choices
  ],
  longRest: [
    ...PHB_ROGUE_8.longRest
  ]
} as const;
const PHB_ROGUE_THIEF_9: Level = {
  replace: "Rogue (Thief) 8",
  label: "Rogue (Thief) 9",
  choices: [
    ...PHB_ROGUE_9.choices
  ],
  longRest: [
    ...PHB_ROGUE_9.longRest
  ]
} as const;
const PHB_ROGUE_THIEF_10: Level = {
  replace: "Rogue (Thief) 9",
  label: "Rogue (Thief) 10",
  choices: [
    ...PHB_ROGUE_10.choices
  ],
  longRest: [
    ...PHB_ROGUE_10.longRest
  ]
} as const;
const PHB_ROGUE_THIEF_11: Level = {
  replace: "Rogue (Thief) 10",
  label: "Rogue (Thief) 11",
  choices: [
    ...PHB_ROGUE_11.choices
  ],
  longRest: [
    ...PHB_ROGUE_11.longRest
  ]
} as const;
const PHB_ROGUE_THIEF_12: Level = {
  replace: "Rogue (Thief) 11",
  label: "Rogue (Thief) 12",
  choices: [
    ...PHB_ROGUE_12.choices
  ],
  longRest: [
    ...PHB_ROGUE_12.longRest
  ]
} as const;

export default {
  [PHB_ROGUE_THIEF_3.label]: PHB_ROGUE_THIEF_3,
  [PHB_ROGUE_THIEF_4.label]: PHB_ROGUE_THIEF_4,
  [PHB_ROGUE_THIEF_5.label]: PHB_ROGUE_THIEF_5,
  [PHB_ROGUE_THIEF_6.label]: PHB_ROGUE_THIEF_6,
  [PHB_ROGUE_THIEF_7.label]: PHB_ROGUE_THIEF_7,
  [PHB_ROGUE_THIEF_8.label]: PHB_ROGUE_THIEF_8,
  [PHB_ROGUE_THIEF_9.label]: PHB_ROGUE_THIEF_9,
  [PHB_ROGUE_THIEF_10.label]: PHB_ROGUE_THIEF_10,
  [PHB_ROGUE_THIEF_11.label]: PHB_ROGUE_THIEF_11,
  [PHB_ROGUE_THIEF_12.label]: PHB_ROGUE_THIEF_12,
} as const satisfies {[levelID: ClassID]: Level};
