import {ClassID, Level} from "@/model/source/model/Level";
import {
  PHB_BARBARIAN_10, PHB_BARBARIAN_11, PHB_BARBARIAN_12,
  PHB_BARBARIAN_3,
  PHB_BARBARIAN_4,
  PHB_BARBARIAN_5,
  PHB_BARBARIAN_6,
  PHB_BARBARIAN_7,
  PHB_BARBARIAN_8,
  PHB_BARBARIAN_9
} from "@/model/source/phb/level/barbarian/BarbarianBase";

const PHB_BARBARIAN_ZEALOT_3: Level = {
  replace: "Barbarian 2",
  label: "Barbarian (Zealot) 3",
  choices: [
    ...PHB_BARBARIAN_3.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_3.longRest
  ]
};
const PHB_BARBARIAN_ZEALOT_4: Level = {
  replace: "Barbarian (Zealot) 3",
  label: "Barbarian (Zealot) 4",
  choices: [
    ...PHB_BARBARIAN_4.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_4.longRest
  ]
};
const PHB_BARBARIAN_ZEALOT_5: Level = {
  replace: "Barbarian (Zealot) 4",
  label: "Barbarian (Zealot) 5",
  choices: [
    ...PHB_BARBARIAN_5.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_5.longRest
  ]
};
const PHB_BARBARIAN_ZEALOT_6: Level = {
  replace: "Barbarian (Zealot) 5",
  label: "Barbarian (Zealot) 6",
  choices: [
    ...PHB_BARBARIAN_6.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_6.longRest,
  ]
};
const PHB_BARBARIAN_ZEALOT_7: Level = {
  replace: "Barbarian (Zealot) 6",
  label: "Barbarian (Zealot) 7",
  choices: [
    ...PHB_BARBARIAN_7.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_7.longRest
  ]
};
const PHB_BARBARIAN_ZEALOT_8: Level = {
  replace: "Barbarian (Zealot) 7",
  label: "Barbarian (Zealot) 8",
  choices: [
    ...PHB_BARBARIAN_8.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_8.longRest
  ]
};
const PHB_BARBARIAN_ZEALOT_9: Level = {
  replace: "Barbarian (Zealot) 8",
  label: "Barbarian (Zealot) 9",
  choices: [
    ...PHB_BARBARIAN_9.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_9.longRest
  ]
};
const PHB_BARBARIAN_ZEALOT_10: Level = {
  replace: "Barbarian (Zealot) 9",
  label: "Barbarian (Zealot) 10",
  choices: [
    ...PHB_BARBARIAN_10.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_10.longRest
  ]
};
const PHB_BARBARIAN_ZEALOT_11: Level = {
  replace: "Barbarian (Zealot) 10",
  label: "Barbarian (Zealot) 11",
  choices: [
    ...PHB_BARBARIAN_11.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_11.longRest
  ]
};
const PHB_BARBARIAN_ZEALOT_12: Level = {
  replace: "Barbarian (Zealot) 11",
  label: "Barbarian (Zealot) 12",
  choices: [
    ...PHB_BARBARIAN_12.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_12.longRest
  ]
};

export default {
  [PHB_BARBARIAN_ZEALOT_3.label]: PHB_BARBARIAN_ZEALOT_3,
  [PHB_BARBARIAN_ZEALOT_4.label]: PHB_BARBARIAN_ZEALOT_4,
  [PHB_BARBARIAN_ZEALOT_5.label]: PHB_BARBARIAN_ZEALOT_5,
  [PHB_BARBARIAN_ZEALOT_6.label]: PHB_BARBARIAN_ZEALOT_6,
  [PHB_BARBARIAN_ZEALOT_7.label]: PHB_BARBARIAN_ZEALOT_7,
  [PHB_BARBARIAN_ZEALOT_8.label]: PHB_BARBARIAN_ZEALOT_8,
  [PHB_BARBARIAN_ZEALOT_9.label]: PHB_BARBARIAN_ZEALOT_9,
  [PHB_BARBARIAN_ZEALOT_10.label]: PHB_BARBARIAN_ZEALOT_10,
  [PHB_BARBARIAN_ZEALOT_11.label]: PHB_BARBARIAN_ZEALOT_11,
  [PHB_BARBARIAN_ZEALOT_12.label]: PHB_BARBARIAN_ZEALOT_12,
} as const satisfies {[levelID: ClassID]: Level};
