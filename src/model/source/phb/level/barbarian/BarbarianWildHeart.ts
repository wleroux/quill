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
import {is} from "@/model/source/condition/generic/IsCondition";

const PHB_BARBARIAN_WILD_HEART_3: Level = {
  replace: "Barbarian 2",
  label: "Barbarian (Wild Heart) 3",
  choices: [
    ...PHB_BARBARIAN_3.choices,
    {type: "spell", data: {
      label: "Animal Speaker",
      choiceID: "barbarian (wild heart)::spell-1",
      condition: is("Beast Sense"),
    }},
    {type: "spell", data: {
      label: "Animal Speaker",
      choiceID: "barbarian (wild heart)::spell-2",
      condition: is("Speak with Animals"),
    }}
  ],
  longRest: [
    ...PHB_BARBARIAN_3.longRest
  ]
};
const PHB_BARBARIAN_WILD_HEART_4: Level = {
  replace: "Barbarian (Wild Heart) 3",
  label: "Barbarian (Wild Heart) 4",
  choices: [
    ...PHB_BARBARIAN_4.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_4.longRest
  ]
};
const PHB_BARBARIAN_WILD_HEART_5: Level = {
  replace: "Barbarian (Wild Heart) 4",
  label: "Barbarian (Wild Heart) 5",
  choices: [
    ...PHB_BARBARIAN_5.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_5.longRest
  ]
};
const PHB_BARBARIAN_WILD_HEART_6: Level = {
  replace: "Barbarian (Wild Heart) 5",
  label: "Barbarian (Wild Heart) 6",
  choices: [
    ...PHB_BARBARIAN_6.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_6.longRest,
    {type: "simple", data: {
      choiceID: "aspect of the wilds",
      label: "Aspect of the Wilds",
      options: [
        {optionID: "owl", label: "Owl"},
        {optionID: "panther", label: "Panther"},
        {optionID: "salmon", label: "Salmon"},
      ]
    }}
  ]
};
const PHB_BARBARIAN_WILD_HEART_7: Level = {
  replace: "Barbarian (Wild Heart) 6",
  label: "Barbarian (Wild Heart) 7",
  choices: [
    ...PHB_BARBARIAN_7.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_7.longRest
  ]
};
const PHB_BARBARIAN_WILD_HEART_8: Level = {
  replace: "Barbarian (Wild Heart) 7",
  label: "Barbarian (Wild Heart) 8",
  choices: [
    ...PHB_BARBARIAN_8.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_8.longRest
  ]
};
const PHB_BARBARIAN_WILD_HEART_9: Level = {
  replace: "Barbarian (Wild Heart) 8",
  label: "Barbarian (Wild Heart) 9",
  choices: [
    ...PHB_BARBARIAN_9.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_9.longRest
  ]
};
const PHB_BARBARIAN_WILD_HEART_10: Level = {
  replace: "Barbarian (Wild Heart) 9",
  label: "Barbarian (Wild Heart) 10",
  choices: [
    ...PHB_BARBARIAN_10.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_10.longRest
  ]
};
const PHB_BARBARIAN_WILD_HEART_11: Level = {
  replace: "Barbarian (Wild Heart) 10",
  label: "Barbarian (Wild Heart) 11",
  choices: [
    ...PHB_BARBARIAN_11.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_11.longRest
  ]
};
const PHB_BARBARIAN_WILD_HEART_12: Level = {
  replace: "Barbarian (Wild Heart) 11",
  label: "Barbarian (Wild Heart) 12",
  choices: [
    ...PHB_BARBARIAN_12.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_12.longRest
  ]
};

export default {
  [PHB_BARBARIAN_WILD_HEART_3.label]: PHB_BARBARIAN_WILD_HEART_3,
  [PHB_BARBARIAN_WILD_HEART_4.label]: PHB_BARBARIAN_WILD_HEART_4,
  [PHB_BARBARIAN_WILD_HEART_5.label]: PHB_BARBARIAN_WILD_HEART_5,
  [PHB_BARBARIAN_WILD_HEART_6.label]: PHB_BARBARIAN_WILD_HEART_6,
  [PHB_BARBARIAN_WILD_HEART_7.label]: PHB_BARBARIAN_WILD_HEART_7,
  [PHB_BARBARIAN_WILD_HEART_8.label]: PHB_BARBARIAN_WILD_HEART_8,
  [PHB_BARBARIAN_WILD_HEART_9.label]: PHB_BARBARIAN_WILD_HEART_9,
  [PHB_BARBARIAN_WILD_HEART_10.label]: PHB_BARBARIAN_WILD_HEART_10,
  [PHB_BARBARIAN_WILD_HEART_11.label]: PHB_BARBARIAN_WILD_HEART_11,
  [PHB_BARBARIAN_WILD_HEART_12.label]: PHB_BARBARIAN_WILD_HEART_12,
} as const satisfies {[levelID: ClassID]: Level};
