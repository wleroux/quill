import {ClassID, Level} from "@/model/source/model/Level";
import {
  BASE_BARD_10,
  BASE_BARD_11,
  BASE_BARD_12,
  BASE_BARD_3,
  BASE_BARD_4,
  BASE_BARD_5,
  BASE_BARD_6,
  BASE_BARD_7,
  BASE_BARD_8,
  BASE_BARD_9
} from "@/model/source/phb/level/bard/BardBase";

const PHB_BARD_DANCE_3: Level = {
  label: "Bard (Dance) 3",
  replace: "Bard 2",
  choices: [
    ...BASE_BARD_3.choices
  ],
  longRest: [
    ...BASE_BARD_3.longRest
  ]
};
const PHB_BARD_DANCE_4: Level = {
  label: "Bard (Dance) 4",
  replace: "Bard (Dance) 3",
  choices: [
    ...BASE_BARD_4.choices
  ],
  longRest: [
    ...BASE_BARD_4.longRest
  ]
};
const PHB_BARD_DANCE_5: Level = {
  label: "Bard (Dance) 5",
  replace: "Bard (Dance) 4",
  choices: [
    ...BASE_BARD_5.choices
  ],
  longRest: [
    ...BASE_BARD_5.longRest
  ]
};
const PHB_BARD_DANCE_6: Level = {
  label: "Bard (Dance) 6",
  replace: "Bard (Dance) 5",
  choices: [
    ...BASE_BARD_6.choices
  ],
  longRest: [
    ...BASE_BARD_6.longRest
  ]
};
const PHB_BARD_DANCE_7: Level = {
  label: "Bard (Dance) 7",
  replace: "Bard (Dance) 6",
  choices: [
    ...BASE_BARD_7.choices
  ],
  longRest: [
    ...BASE_BARD_7.longRest
  ]
};
const PHB_BARD_DANCE_8: Level = {
  label: "Bard (Dance) 8",
  replace: "Bard (Dance) 7",
  choices: [
    ...BASE_BARD_8.choices
  ],
  longRest: [
    ...BASE_BARD_8.longRest
  ]
};
const PHB_BARD_DANCE_9: Level = {
  label: "Bard (Dance) 9",
  replace: "Bard (Dance) 8",
  choices: [
    ...BASE_BARD_9.choices
  ],
  longRest: [
    ...BASE_BARD_9.longRest
  ]
};
const PHB_BARD_DANCE_10: Level = {
  label: "Bard (Dance) 10",
  replace: "Bard (Dance) 9",
  choices: [
    ...BASE_BARD_10.choices
  ],
  longRest: [
    ...BASE_BARD_10.longRest
  ]
};
const PHB_BARD_DANCE_11: Level = {
  label: "Bard (Dance) 11",
  replace: "Bard (Dance) 10",
  choices: [
    ...BASE_BARD_11.choices
  ],
  longRest: [
    ...BASE_BARD_11.longRest
  ]
};
const PHB_BARD_DANCE_12: Level = {
  label: "Bard (Dance) 12",
  replace: "Bard (Dance) 11",
  choices: [
    ...BASE_BARD_12.choices
  ],
  longRest: [
    ...BASE_BARD_12.longRest
  ]
};

export default {
  [PHB_BARD_DANCE_3.label]: PHB_BARD_DANCE_3,
  [PHB_BARD_DANCE_4.label]: PHB_BARD_DANCE_4,
  [PHB_BARD_DANCE_5.label]: PHB_BARD_DANCE_5,
  [PHB_BARD_DANCE_6.label]: PHB_BARD_DANCE_6,
  [PHB_BARD_DANCE_7.label]: PHB_BARD_DANCE_7,
  [PHB_BARD_DANCE_8.label]: PHB_BARD_DANCE_8,
  [PHB_BARD_DANCE_9.label]: PHB_BARD_DANCE_9,
  [PHB_BARD_DANCE_10.label]: PHB_BARD_DANCE_10,
  [PHB_BARD_DANCE_11.label]: PHB_BARD_DANCE_11,
  [PHB_BARD_DANCE_12.label]: PHB_BARD_DANCE_12
} as const satisfies {[levelID: ClassID]: Level};