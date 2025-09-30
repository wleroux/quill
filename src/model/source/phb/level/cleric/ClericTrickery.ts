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

const PHB_CLERIC_TRICKERY_3: Level = {
  replace: "Cleric 2",
  label: "Cleric (Trickery) 3",
  choices: [
    ...PHB_CLERIC_3.choices,
    {type: "spell", data: {
      choiceID: "cleric (trickery)::spell-1",
      condition: is("Charm Person")
    }},
    {type: "spell", data: {
      choiceID: "cleric (trickery)::spell-2",
      condition: is("Disguise Self")
    }},
    {type: "spell", data: {
      choiceID: "cleric (trickery)::spell-3",
      condition: is("Invisibility")
    }},
    {type: "spell", data: {
      choiceID: "cleric (trickery)::spell-4",
      condition: is("Pass without Trace")
    }}
  ],
  longRest: [
    ...PHB_CLERIC_3.longRest
  ]
} as const;
const PHB_CLERIC_TRICKERY_4: Level = {
  label: "Cleric (Trickery) 4",
  replace: "Cleric (Trickery) 3",
  choices: [
    ...PHB_CLERIC_4.choices
  ],
  longRest: [
    ...PHB_CLERIC_4.longRest
  ]
} as const;
const PHB_CLERIC_TRICKERY_5: Level = {
  label: "Cleric (Trickery) 5",
  replace: "Cleric (Trickery) 4",
  choices: [
    ...PHB_CLERIC_5.choices
  ],
  longRest: [
    ...PHB_CLERIC_5.longRest
  ]
} as const;
const PHB_CLERIC_TRICKERY_6: Level = {
  label: "Cleric (Trickery) 6",
  replace: "Cleric (Trickery) 5",
  choices: [
    ...PHB_CLERIC_6.choices
  ],
  longRest: [
    ...PHB_CLERIC_6.longRest
  ]
} as const;
const PHB_CLERIC_TRICKERY_7: Level = {
  label: "Cleric (Trickery) 7",
  replace: "Cleric (Trickery) 6",
  choices: [
    ...PHB_CLERIC_7.choices
  ],
  longRest: [
    ...PHB_CLERIC_7.longRest
  ]
} as const;
const PHB_CLERIC_TRICKERY_8: Level = {
  label: "Cleric (Trickery) 8",
  replace: "Cleric (Trickery) 7",
  choices: [
    ...PHB_CLERIC_8.choices
  ],
  longRest: [
    ...PHB_CLERIC_8.longRest
  ]
} as const;
const PHB_CLERIC_TRICKERY_9: Level = {
  label: "Cleric (Trickery) 9",
  replace: "Cleric (Trickery) 8",
  choices: [
    ...PHB_CLERIC_9.choices
  ],
  longRest: [
    ...PHB_CLERIC_9.longRest
  ]
} as const;
const PHB_CLERIC_TRICKERY_10: Level = {
  label: "Cleric (Trickery) 10",
  replace: "Cleric (Trickery) 9",
  choices: [
    ...PHB_CLERIC_10.choices
  ],
  longRest: [
    ...PHB_CLERIC_10.longRest
  ]
} as const;
const PHB_CLERIC_TRICKERY_11: Level = {
  label: "Cleric (Trickery) 11",
  replace: "Cleric (Trickery) 10",
  choices: [
    ...PHB_CLERIC_11.choices
  ],
  longRest: [
    ...PHB_CLERIC_11.longRest
  ]
} as const;
const PHB_CLERIC_TRICKERY_12: Level = {
  label: "Cleric (Trickery) 12",
  replace: "Cleric (Trickery) 11",
  choices: [
    ...PHB_CLERIC_12.choices
  ],
  longRest: [
    ...PHB_CLERIC_12.longRest
  ]
} as const;

export default {
  [PHB_CLERIC_TRICKERY_3.label]: PHB_CLERIC_TRICKERY_3,
  [PHB_CLERIC_TRICKERY_4.label]: PHB_CLERIC_TRICKERY_4,
  [PHB_CLERIC_TRICKERY_5.label]: PHB_CLERIC_TRICKERY_5,
  [PHB_CLERIC_TRICKERY_6.label]: PHB_CLERIC_TRICKERY_6,
  [PHB_CLERIC_TRICKERY_7.label]: PHB_CLERIC_TRICKERY_7,
  [PHB_CLERIC_TRICKERY_8.label]: PHB_CLERIC_TRICKERY_8,
  [PHB_CLERIC_TRICKERY_9.label]: PHB_CLERIC_TRICKERY_9,
  [PHB_CLERIC_TRICKERY_10.label]: PHB_CLERIC_TRICKERY_10,
  [PHB_CLERIC_TRICKERY_11.label]: PHB_CLERIC_TRICKERY_11,
  [PHB_CLERIC_TRICKERY_12.label]: PHB_CLERIC_TRICKERY_12
} as const satisfies {[levelID: ClassID]: Level};
