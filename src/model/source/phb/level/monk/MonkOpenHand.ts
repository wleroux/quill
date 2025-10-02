import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_MONK_10, PHB_MONK_11, PHB_MONK_12, PHB_MONK_3, PHB_MONK_4, PHB_MONK_5, PHB_MONK_6, PHB_MONK_7, PHB_MONK_8, PHB_MONK_9} from "@/model/source/phb/level/monk/MonkBase";

const PHB_MONK_OPEN_HAND_3: Level = {
  replace: "Monk 2",
  label: "Monk (Open Hand) 3",
  choices: [
    ...PHB_MONK_3.choices
  ],
  longRest: [
    ...PHB_MONK_3.longRest
  ]
} as const;

const PHB_MONK_OPEN_HAND_4: Level = {
  replace: "Monk (Open Hand) 3",
  label: "Monk (Open Hand) 4",
  choices: [
    ...PHB_MONK_4.choices
  ],
  longRest: [
    ...PHB_MONK_4.longRest
  ]
} as const;
const PHB_MONK_OPEN_HAND_5: Level = {
  replace: "Monk (Open Hand) 4",
  label: "Monk (Open Hand) 5",
  choices: [
    ...PHB_MONK_5.choices
  ],
  longRest: [
    ...PHB_MONK_5.longRest
  ]
} as const;
const PHB_MONK_OPEN_HAND_6: Level = {
  replace: "Monk (Open Hand) 5",
  label: "Monk (Open Hand) 6",
  choices: [
    ...PHB_MONK_6.choices
  ],
  longRest: [
    ...PHB_MONK_6.longRest
  ]
} as const;
const PHB_MONK_OPEN_HAND_7: Level = {
  replace: "Monk (Open Hand) 6",
  label: "Monk (Open Hand) 7",
  choices: [
    ...PHB_MONK_7.choices
  ],
  longRest: [
    ...PHB_MONK_7.longRest
  ]
} as const;
const PHB_MONK_OPEN_HAND_8: Level = {
  replace: "Monk (Open Hand) 7",
  label: "Monk (Open Hand) 8",
  choices: [
    ...PHB_MONK_8.choices
  ],
  longRest: [
    ...PHB_MONK_8.longRest
  ]
} as const;
const PHB_MONK_OPEN_HAND_9: Level = {
  replace: "Monk (Open Hand) 8",
  label: "Monk (Open Hand) 9",
  choices: [
    ...PHB_MONK_9.choices
  ],
  longRest: [
    ...PHB_MONK_9.longRest
  ]
} as const;
const PHB_MONK_OPEN_HAND_10: Level = {
  replace: "Monk (Open Hand 9",
  label: "Monk (Open Hand) 10",
  choices: [
    ...PHB_MONK_10.choices
  ],
  longRest: [
    ...PHB_MONK_10.longRest
  ]
} as const;
const PHB_MONK_OPEN_HAND_11: Level = {
  replace: "Monk (Open Hand 10",
  label: "Monk (Open Hand) 11",
  choices: [
    ...PHB_MONK_11.choices
  ],
  longRest: [
    ...PHB_MONK_11.longRest
  ]
} as const;
const PHB_MONK_OPEN_HAND_12: Level = {
  replace: "Monk (Open Hand 11",
  label: "Monk (Open Hand) 12",
  choices: [
    ...PHB_MONK_12.choices
  ],
  longRest: [
    ...PHB_MONK_12.longRest
  ]
} as const;

export default {
  [PHB_MONK_OPEN_HAND_3.label]: PHB_MONK_OPEN_HAND_3,
  [PHB_MONK_OPEN_HAND_4.label]: PHB_MONK_OPEN_HAND_4,
  [PHB_MONK_OPEN_HAND_5.label]: PHB_MONK_OPEN_HAND_5,
  [PHB_MONK_OPEN_HAND_6.label]: PHB_MONK_OPEN_HAND_6,
  [PHB_MONK_OPEN_HAND_7.label]: PHB_MONK_OPEN_HAND_7,
  [PHB_MONK_OPEN_HAND_8.label]: PHB_MONK_OPEN_HAND_8,
  [PHB_MONK_OPEN_HAND_9.label]: PHB_MONK_OPEN_HAND_9,
  [PHB_MONK_OPEN_HAND_10.label]: PHB_MONK_OPEN_HAND_10,
  [PHB_MONK_OPEN_HAND_11.label]: PHB_MONK_OPEN_HAND_11,
  [PHB_MONK_OPEN_HAND_12.label]: PHB_MONK_OPEN_HAND_12,
} as const satisfies {[levelID: ClassID]: Level};
