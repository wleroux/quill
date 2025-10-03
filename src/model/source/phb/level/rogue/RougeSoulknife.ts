import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_ROGUE_10, PHB_ROGUE_11, PHB_ROGUE_12, PHB_ROGUE_3, PHB_ROGUE_4, PHB_ROGUE_5, PHB_ROGUE_6, PHB_ROGUE_7, PHB_ROGUE_8, PHB_ROGUE_9} from "./RougeBase";

const PHB_ROGUE_SOULKNIFE_3: Level = {
  replace: "Rogue 2",
  label: "Rogue (Soulknife) 3",
  choices: [
    ...PHB_ROGUE_3.choices
  ],
  longRest: [
    ...PHB_ROGUE_3.longRest
  ]
} as const;
const PHB_ROGUE_SOULKNIFE_4: Level = {
  replace: "Rogue (Soulknife) 3",
  label: "Rogue (Soulknife) 4",
  choices: [
    ...PHB_ROGUE_4.choices
  ],
  longRest: [
    ...PHB_ROGUE_4.longRest
  ]
} as const;
const PHB_ROGUE_SOULKNIFE_5: Level = {
  replace: "Rogue (Soulknife) 4",
  label: "Rogue (Soulknife) 5",
  choices: [
    ...PHB_ROGUE_5.choices
  ],
  longRest: [
    ...PHB_ROGUE_5.longRest
  ]
} as const;
const PHB_ROGUE_SOULKNIFE_6: Level = {
  replace: "Rogue (Soulknife) 5",
  label: "Rogue (Soulknife) 6",
  choices: [
    ...PHB_ROGUE_6.choices
  ],
  longRest: [
    ...PHB_ROGUE_6.longRest
  ]
} as const;
const PHB_ROGUE_SOULKNIFE_7: Level = {
  replace: "Rogue (Soulknife) 6",
  label: "Rogue (Soulknife) 7",
  choices: [
    ...PHB_ROGUE_7.choices
  ],
  longRest: [
    ...PHB_ROGUE_7.longRest
  ]
} as const;
const PHB_ROGUE_SOULKNIFE_8: Level = {
  replace: "Rogue (Soulknife) 7",
  label: "Rogue (Soulknife) 8",
  choices: [
    ...PHB_ROGUE_8.choices
  ],
  longRest: [
    ...PHB_ROGUE_8.longRest
  ]
} as const;
const PHB_ROGUE_SOULKNIFE_9: Level = {
  replace: "Rogue (Soulknife) 8",
  label: "Rogue (Soulknife) 9",
  choices: [
    ...PHB_ROGUE_9.choices
  ],
  longRest: [
    ...PHB_ROGUE_9.longRest
  ]
} as const;
const PHB_ROGUE_SOULKNIFE_10: Level = {
  replace: "Rogue (Soulknife) 9",
  label: "Rogue (Soulknife) 10",
  choices: [
    ...PHB_ROGUE_10.choices
  ],
  longRest: [
    ...PHB_ROGUE_10.longRest
  ]
} as const;
const PHB_ROGUE_SOULKNIFE_11: Level = {
  replace: "Rogue (Soulknife) 10",
  label: "Rogue (Soulknife) 11",
  choices: [
    ...PHB_ROGUE_11.choices
  ],
  longRest: [
    ...PHB_ROGUE_11.longRest
  ]
} as const;
const PHB_ROGUE_SOULKNIFE_12: Level = {
  replace: "Rogue (Soulknife) 11",
  label: "Rogue (Soulknife) 12",
  choices: [
    ...PHB_ROGUE_12.choices
  ],
  longRest: [
    ...PHB_ROGUE_12.longRest
  ]
} as const;

export default {
  [PHB_ROGUE_SOULKNIFE_3.label]: PHB_ROGUE_SOULKNIFE_3,
  [PHB_ROGUE_SOULKNIFE_4.label]: PHB_ROGUE_SOULKNIFE_4,
  [PHB_ROGUE_SOULKNIFE_5.label]: PHB_ROGUE_SOULKNIFE_5,
  [PHB_ROGUE_SOULKNIFE_6.label]: PHB_ROGUE_SOULKNIFE_6,
  [PHB_ROGUE_SOULKNIFE_7.label]: PHB_ROGUE_SOULKNIFE_7,
  [PHB_ROGUE_SOULKNIFE_8.label]: PHB_ROGUE_SOULKNIFE_8,
  [PHB_ROGUE_SOULKNIFE_9.label]: PHB_ROGUE_SOULKNIFE_9,
  [PHB_ROGUE_SOULKNIFE_10.label]: PHB_ROGUE_SOULKNIFE_10,
  [PHB_ROGUE_SOULKNIFE_11.label]: PHB_ROGUE_SOULKNIFE_11,
  [PHB_ROGUE_SOULKNIFE_12.label]: PHB_ROGUE_SOULKNIFE_12,
} as const satisfies {[levelID: ClassID]: Level};
