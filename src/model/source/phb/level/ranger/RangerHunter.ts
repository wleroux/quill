import {ClassID, Level} from "@/model/source/model/Level";
import {
  PHB_RANGER_10,
  PHB_RANGER_11, PHB_RANGER_12,
  PHB_RANGER_3,
  PHB_RANGER_4,
  PHB_RANGER_5,
  PHB_RANGER_6,
  PHB_RANGER_7,
  PHB_RANGER_8,
  PHB_RANGER_9
} from "@/model/source/phb/level/ranger/RangerBase";

const PHB_RANGER_HUNTER_3: Level = {
  replace: "Ranger 2",
  label: "Ranger (Hunter) 3",
  choices: [
    ...PHB_RANGER_3.choices
  ],
  longRest: [
    ...PHB_RANGER_3.longRest,
    {type: "simple", data: {
      choiceID: "ranger (hunter)::hunter's prey",
      label: "Hunter's Prey",
      options: [
        {optionID: "Colossus Slayer", label: "Colossus Slayer"},
        {optionID: "Horde Breaker", label: "Horde Breaker"}
      ]
    }}
  ]
} as const;

const PHB_RANGER_HUNTER_4: Level = {
  replace: "Ranger (Hunter) 3",
  label: "Ranger (Hunter) 4",
  choices: [
    ...PHB_RANGER_4.choices
  ],
  longRest: [
    ...PHB_RANGER_4.longRest
  ]
} as const;
const PHB_RANGER_HUNTER_5: Level = {
  replace: "Ranger (Hunter) 4",
  label: "Ranger (Hunter) 5",
  choices: [
    ...PHB_RANGER_5.choices
  ],
  longRest: [
    ...PHB_RANGER_5.longRest
  ]
} as const;
const PHB_RANGER_HUNTER_6: Level = {
  replace: "Ranger (Hunter) 5",
  label: "Ranger (Hunter) 6",
  choices: [
    ...PHB_RANGER_6.choices
  ],
  longRest: [
    ...PHB_RANGER_6.longRest
  ]
} as const;
const PHB_RANGER_HUNTER_7: Level = {
  replace: "Ranger (Hunter) 6",
  label: "Ranger (Hunter) 7",
  choices: [
    ...PHB_RANGER_7.choices
  ],
  longRest: [
    ...PHB_RANGER_7.longRest
  ]
} as const;
const PHB_RANGER_HUNTER_8: Level = {
  replace: "Ranger (Hunter) 7",
  label: "Ranger (Hunter) 8",
  choices: [
    ...PHB_RANGER_8.choices
  ],
  longRest: [
    ...PHB_RANGER_8.longRest
  ]
} as const;
const PHB_RANGER_HUNTER_9: Level = {
  replace: "Ranger (Hunter) 8",
  label: "Ranger (Hunter) 9",
  choices: [
    ...PHB_RANGER_9.choices
  ],
  longRest: [
    ...PHB_RANGER_9.longRest
  ]
} as const;
const PHB_RANGER_HUNTER_10: Level = {
  replace: "Ranger (Hunter) 9",
  label: "Ranger (Hunter) 10",
  choices: [
    ...PHB_RANGER_10.choices
  ],
  longRest: [
    ...PHB_RANGER_10.longRest
  ]
} as const;
const PHB_RANGER_HUNTER_11: Level = {
  replace: "Ranger (Hunter) 10",
  label: "Ranger (Hunter) 11",
  choices: [
    ...PHB_RANGER_11.choices
  ],
  longRest: [
    ...PHB_RANGER_11.longRest
  ]
} as const;
const PHB_RANGER_HUNTER_12: Level = {
  replace: "Ranger (Hunter) 11",
  label: "Ranger (Hunter) 12",
  choices: [
    ...PHB_RANGER_12.choices
  ],
  longRest: [
    ...PHB_RANGER_12.longRest
  ]
} as const;

export default {
  [PHB_RANGER_HUNTER_3.label]: PHB_RANGER_HUNTER_3,
  [PHB_RANGER_HUNTER_4.label]: PHB_RANGER_HUNTER_4,
  [PHB_RANGER_HUNTER_5.label]: PHB_RANGER_HUNTER_5,
  [PHB_RANGER_HUNTER_6.label]: PHB_RANGER_HUNTER_6,
  [PHB_RANGER_HUNTER_7.label]: PHB_RANGER_HUNTER_7,
  [PHB_RANGER_HUNTER_8.label]: PHB_RANGER_HUNTER_8,
  [PHB_RANGER_HUNTER_9.label]: PHB_RANGER_HUNTER_9,
  [PHB_RANGER_HUNTER_10.label]: PHB_RANGER_HUNTER_10,
  [PHB_RANGER_HUNTER_11.label]: PHB_RANGER_HUNTER_11,
  [PHB_RANGER_HUNTER_12.label]: PHB_RANGER_HUNTER_12,
} as const satisfies {[levelID: ClassID]: Level};

