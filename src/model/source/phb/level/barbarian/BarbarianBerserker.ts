import {ClassID, Level} from "@/model/source/model/Level";
import {
  PHB_BARBARIAN_10,
  PHB_BARBARIAN_11,
  PHB_BARBARIAN_12,
  PHB_BARBARIAN_3,
  PHB_BARBARIAN_4,
  PHB_BARBARIAN_5,
  PHB_BARBARIAN_6,
  PHB_BARBARIAN_7,
  PHB_BARBARIAN_8,
  PHB_BARBARIAN_9
} from "@/model/source/phb/level/barbarian/BarbarianBase";

const PHB_BARBARIAN_BERSERKER_3: Level = {
  replace: "Barbarian 2",
  label: "Barbarian (Berserker) 3",
  choices: [
    ...PHB_BARBARIAN_3.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_3.longRest
  ]
};
const PHB_BARBARIAN_BERSERKER_4: Level = {
  replace: "Barbarian (Berserker) 3",
  label: "Barbarian (Berserker) 4",
  choices: [
    ...PHB_BARBARIAN_4.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_4.longRest
  ]
};
const PHB_BARBARIAN_BERSERKER_5: Level = {
  replace: "Barbarian (Berserker) 4",
  label: "Barbarian (Berserker) 5",
  choices: [
    ...PHB_BARBARIAN_5.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_5.longRest
  ]
};
const PHB_BARBARIAN_BERSERKER_6: Level = {
  replace: "Barbarian (Berserker) 5",
  label: "Barbarian (Berserker) 6",
  choices: [
    ...PHB_BARBARIAN_6.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_6.longRest
  ]
};
const PHB_BARBARIAN_BERSERKER_7: Level = {
  replace: "Barbarian (Berserker) 6",
  label: "Barbarian (Berserker) 7",
  choices: [
    ...PHB_BARBARIAN_7.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_7.longRest
  ]
};
const PHB_BARBARIAN_BERSERKER_8: Level = {
  replace: "Barbarian (Berserker) 7",
  label: "Barbarian (Berserker) 8",
  choices: [
    ...PHB_BARBARIAN_8.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_8.longRest
  ]
};
const PHB_BARBARIAN_BERSERKER_9: Level = {
  replace: "Barbarian (Berserker) 8",
  label: "Barbarian (Berserker) 9",
  choices: [
    ...PHB_BARBARIAN_9.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_9.longRest
  ]
};
const PHB_BARBARIAN_BERSERKER_10: Level = {
  replace: "Barbarian (Berserker) 9",
  label: "Barbarian (Berserker) 10",
  choices: [
    ...PHB_BARBARIAN_10.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_10.longRest
  ]
};
const PHB_BARBARIAN_BERSERKER_11: Level = {
  replace: "Barbarian (Berserker) 10",
  label: "Barbarian (Berserker) 11",
  choices: [
    ...PHB_BARBARIAN_11.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_11.longRest
  ]
};
const PHB_BARBARIAN_BERSERKER_12: Level = {
  replace: "Barbarian (Berserker) 11",
  label: "Barbarian (Berserker) 12",
  choices: [
    ...PHB_BARBARIAN_12.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_12.longRest
  ]
};

export default {
  [PHB_BARBARIAN_BERSERKER_3.label]: PHB_BARBARIAN_BERSERKER_3,
  [PHB_BARBARIAN_BERSERKER_4.label]: PHB_BARBARIAN_BERSERKER_4,
  [PHB_BARBARIAN_BERSERKER_5.label]: PHB_BARBARIAN_BERSERKER_5,
  [PHB_BARBARIAN_BERSERKER_6.label]: PHB_BARBARIAN_BERSERKER_6,
  [PHB_BARBARIAN_BERSERKER_7.label]: PHB_BARBARIAN_BERSERKER_7,
  [PHB_BARBARIAN_BERSERKER_8.label]: PHB_BARBARIAN_BERSERKER_8,
  [PHB_BARBARIAN_BERSERKER_9.label]: PHB_BARBARIAN_BERSERKER_9,
  [PHB_BARBARIAN_BERSERKER_10.label]: PHB_BARBARIAN_BERSERKER_10,
  [PHB_BARBARIAN_BERSERKER_11.label]: PHB_BARBARIAN_BERSERKER_11,
  [PHB_BARBARIAN_BERSERKER_12.label]: PHB_BARBARIAN_BERSERKER_12,
} as const satisfies {[levelID: ClassID]: Level};
