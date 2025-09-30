import { is } from "@/model/source/condition/generic/IsCondition";
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

const PHB_CLERIC_LIGHT_3: Level = {
  replace: "Cleric 2",
  label: "Cleric (Light) 3",
  choices: [
    ...PHB_CLERIC_3.choices,
    {type: "spell", data: {
      choiceID: "cleric (light)::spell-1",
      condition: is("Burning Hands")
    }},
    {type: "spell", data: {
      choiceID: "cleric (light)::spell-2",
      condition: is("Faerie Fire")
    }},
    {type: "spell", data: {
      choiceID: "cleric (light)::spell-3",
      condition: is("Scorching Ray")
    }},
    {type: "spell", data: {
      choiceID: "cleric (light)::spell-4",
      condition: is("See Invisibility")
    }}
  ],
  longRest: [
    ...PHB_CLERIC_3.longRest
  ]
} as const;
const PHB_CLERIC_LIGHT_4: Level = {
  label: "Cleric (Light) 4",
  replace: "Cleric (Light) 3",
  choices: [
    ...PHB_CLERIC_4.choices
  ],
  longRest: [
    ...PHB_CLERIC_4.longRest
  ]
} as const;
const PHB_CLERIC_LIGHT_5: Level = {
  label: "Cleric (Light) 5",
  replace: "Cleric (Light) 4",
  choices: [
    ...PHB_CLERIC_5.choices
  ],
  longRest: [
    ...PHB_CLERIC_5.longRest
  ]
} as const;
const PHB_CLERIC_LIGHT_6: Level = {
  label: "Cleric (Light) 6",
  replace: "Cleric (Light) 5",
  choices: [
    ...PHB_CLERIC_6.choices
  ],
  longRest: [
    ...PHB_CLERIC_6.longRest
  ]
} as const;
const PHB_CLERIC_LIGHT_7: Level = {
  label: "Cleric (Light) 7",
  replace: "Cleric (Light) 6",
  choices: [
    ...PHB_CLERIC_7.choices
  ],
  longRest: [
    ...PHB_CLERIC_7.longRest
  ]
} as const;
const PHB_CLERIC_LIGHT_8: Level = {
  label: "Cleric (Light) 8",
  replace: "Cleric (Light) 7",
  choices: [
    ...PHB_CLERIC_8.choices
  ],
  longRest: [
    ...PHB_CLERIC_8.longRest
  ]
} as const;
const PHB_CLERIC_LIGHT_9: Level = {
  label: "Cleric (Light) 9",
  replace: "Cleric (Light) 8",
  choices: [
    ...PHB_CLERIC_9.choices
  ],
  longRest: [
    ...PHB_CLERIC_9.longRest
  ]
} as const;
const PHB_CLERIC_LIGHT_10: Level = {
  label: "Cleric (Light) 10",
  replace: "Cleric (Light) 9",
  choices: [
    ...PHB_CLERIC_10.choices
  ],
  longRest: [
    ...PHB_CLERIC_10.longRest
  ]
} as const;
const PHB_CLERIC_LIGHT_11: Level = {
  label: "Cleric (Light) 11",
  replace: "Cleric (Light) 10",
  choices: [
    ...PHB_CLERIC_11.choices
  ],
  longRest: [
    ...PHB_CLERIC_11.longRest
  ]
} as const;
const PHB_CLERIC_LIGHT_12: Level = {
  label: "Cleric (Light) 12",
  replace: "Cleric (Light) 11",
  choices: [
    ...PHB_CLERIC_12.choices
  ],
  longRest: [
    ...PHB_CLERIC_12.longRest
  ]
} as const;

export default {
  [PHB_CLERIC_LIGHT_3.label]: PHB_CLERIC_LIGHT_3,
  [PHB_CLERIC_LIGHT_4.label]: PHB_CLERIC_LIGHT_4,
  [PHB_CLERIC_LIGHT_5.label]: PHB_CLERIC_LIGHT_5,
  [PHB_CLERIC_LIGHT_6.label]: PHB_CLERIC_LIGHT_6,
  [PHB_CLERIC_LIGHT_7.label]: PHB_CLERIC_LIGHT_7,
  [PHB_CLERIC_LIGHT_8.label]: PHB_CLERIC_LIGHT_8,
  [PHB_CLERIC_LIGHT_9.label]: PHB_CLERIC_LIGHT_9,
  [PHB_CLERIC_LIGHT_10.label]: PHB_CLERIC_LIGHT_10,
  [PHB_CLERIC_LIGHT_11.label]: PHB_CLERIC_LIGHT_11,
  [PHB_CLERIC_LIGHT_12.label]: PHB_CLERIC_LIGHT_12
} as const satisfies {[levelID: ClassID]: Level};
