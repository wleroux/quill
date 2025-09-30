import {is} from "@/model/source/condition/generic/IsCondition";
import {ClassID, Level} from "@/model/source/model/Level";
import {
  PHB_CLERIC_10,
  PHB_CLERIC_11,
  PHB_CLERIC_12,
  PHB_CLERIC_3,
  PHB_CLERIC_4,
  PHB_CLERIC_5,
  PHB_CLERIC_6,
  PHB_CLERIC_7,
  PHB_CLERIC_8,
  PHB_CLERIC_9
} from "@/model/source/phb/level/cleric/ClericBase";

const PHB_CLERIC_LIFE_3: Level = {
  replace: "Cleric 2",
  label: "Cleric (Life) 3",
  choices: [
    ...PHB_CLERIC_3.choices,
    {type: "spell", data: {
      choiceID: "cleric (life)::spell-1",
      condition: is("Aid")
    }},
    {type: "spell", data: {
      choiceID: "cleric (life)::spell-2",
      condition: is("Bless")
    }},
    {type: "spell", data: {
      choiceID: "cleric (life)::spell-3",
      condition: is("Cure Wounds")
    }},
    {type: "spell", data: {
      choiceID: "cleric (life)::spell-4",
      condition: is("Lesser Restoration")
    }}
  ],
  longRest: [
    ...PHB_CLERIC_3.longRest
  ]
} as const;
const PHB_CLERIC_LIFE_4: Level = {
  label: "Cleric (Life) 4",
  replace: "Cleric (Life) 3",
  choices: [
    ...PHB_CLERIC_4.choices
  ],
  longRest: [
    ...PHB_CLERIC_4.longRest
  ]
} as const;
const PHB_CLERIC_LIFE_5: Level = {
  label: "Cleric (Life) 5",
  replace: "Cleric (Life) 4",
  choices: [
    ...PHB_CLERIC_5.choices
  ],
  longRest: [
    ...PHB_CLERIC_5.longRest
  ]
} as const;
const PHB_CLERIC_LIFE_6: Level = {
  label: "Cleric (Life) 6",
  replace: "Cleric (Life) 5",
  choices: [
    ...PHB_CLERIC_6.choices
  ],
  longRest: [
    ...PHB_CLERIC_6.longRest
  ]
} as const;
const PHB_CLERIC_LIFE_7: Level = {
  label: "Cleric (Life) 7",
  replace: "Cleric (Life) 6",
  choices: [
    ...PHB_CLERIC_7.choices
  ],
  longRest: [
    ...PHB_CLERIC_7.longRest
  ]
} as const;
const PHB_CLERIC_LIFE_8: Level = {
  label: "Cleric (Life) 8",
  replace: "Cleric (Life) 7",
  choices: [
    ...PHB_CLERIC_8.choices
  ],
  longRest: [
    ...PHB_CLERIC_8.longRest
  ]
} as const;
const PHB_CLERIC_LIFE_9: Level = {
  label: "Cleric (Life) 9",
  replace: "Cleric (Life) 8",
  choices: [
    ...PHB_CLERIC_9.choices
  ],
  longRest: [
    ...PHB_CLERIC_9.longRest
  ]
} as const;
const PHB_CLERIC_LIFE_10: Level = {
  label: "Cleric (Life) 10",
  replace: "Cleric (Life) 9",
  choices: [
    ...PHB_CLERIC_10.choices
  ],
  longRest: [
    ...PHB_CLERIC_10.longRest
  ]
} as const;
const PHB_CLERIC_LIFE_11: Level = {
  label: "Cleric (Life) 11",
  replace: "Cleric (Life) 10",
  choices: [
    ...PHB_CLERIC_11.choices
  ],
  longRest: [
    ...PHB_CLERIC_11.longRest
  ]
} as const;
const PHB_CLERIC_LIFE_12: Level = {
  label: "Cleric (Life) 12",
  replace: "Cleric (Life) 11",
  choices: [
    ...PHB_CLERIC_12.choices
  ],
  longRest: [
    ...PHB_CLERIC_12.longRest
  ]
} as const;

export default {
  [PHB_CLERIC_LIFE_3.label]: PHB_CLERIC_LIFE_3,
  [PHB_CLERIC_LIFE_4.label]: PHB_CLERIC_LIFE_4,
  [PHB_CLERIC_LIFE_5.label]: PHB_CLERIC_LIFE_5,
  [PHB_CLERIC_LIFE_6.label]: PHB_CLERIC_LIFE_6,
  [PHB_CLERIC_LIFE_7.label]: PHB_CLERIC_LIFE_7,
  [PHB_CLERIC_LIFE_8.label]: PHB_CLERIC_LIFE_8,
  [PHB_CLERIC_LIFE_9.label]: PHB_CLERIC_LIFE_9,
  [PHB_CLERIC_LIFE_10.label]: PHB_CLERIC_LIFE_10,
  [PHB_CLERIC_LIFE_11.label]: PHB_CLERIC_LIFE_11,
  [PHB_CLERIC_LIFE_12.label]: PHB_CLERIC_LIFE_12
} as const satisfies {[levelID: ClassID]: Level};
