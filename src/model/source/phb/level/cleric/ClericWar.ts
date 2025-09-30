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

const PHB_CLERIC_WAR_3: Level = {
  replace: "Cleric 2",
  label: "Cleric (War) 3",
  choices: [
    ...PHB_CLERIC_3.choices,
    {type: "spell", data: {
      choiceID: "cleric (war)::spell-1",
      condition: is("Guiding Bolt")
    }},
    {type: "spell", data: {
      choiceID: "cleric (war)::spell-2",
      condition: is("Magic Weapon")
    }},
    {type: "spell", data: {
      choiceID: "cleric (war)::spell-3",
      condition: is("Shield of Faith")
    }},
    {type: "spell", data: {
      choiceID: "cleric (war)::spell-4",
      condition: is("Spiritual Weapon")
    }}
  ],
  longRest: [
    ...PHB_CLERIC_3.longRest
  ]
} as const;
const PHB_CLERIC_WAR_4: Level = {
  label: "Cleric (War) 4",
  replace: "Cleric (War) 3",
  choices: [
    ...PHB_CLERIC_4.choices
  ],
  longRest: [
    ...PHB_CLERIC_4.longRest
  ]
} as const;
const PHB_CLERIC_WAR_5: Level = {
  label: "Cleric (War) 5",
  replace: "Cleric (War) 4",
  choices: [
    ...PHB_CLERIC_5.choices
  ],
  longRest: [
    ...PHB_CLERIC_5.longRest
  ]
} as const;
const PHB_CLERIC_WAR_6: Level = {
  label: "Cleric (War) 6",
  replace: "Cleric (War) 5",
  choices: [
    ...PHB_CLERIC_6.choices
  ],
  longRest: [
    ...PHB_CLERIC_6.longRest
  ]
} as const;
const PHB_CLERIC_WAR_7: Level = {
  label: "Cleric (War) 7",
  replace: "Cleric (War) 6",
  choices: [
    ...PHB_CLERIC_7.choices
  ],
  longRest: [
    ...PHB_CLERIC_7.longRest
  ]
} as const;
const PHB_CLERIC_WAR_8: Level = {
  label: "Cleric (War) 8",
  replace: "Cleric (War) 7",
  choices: [
    ...PHB_CLERIC_8.choices
  ],
  longRest: [
    ...PHB_CLERIC_8.longRest
  ]
} as const;
const PHB_CLERIC_WAR_9: Level = {
  label: "Cleric (War) 9",
  replace: "Cleric (War) 8",
  choices: [
    ...PHB_CLERIC_9.choices
  ],
  longRest: [
    ...PHB_CLERIC_9.longRest
  ]
} as const;
const PHB_CLERIC_WAR_10: Level = {
  label: "Cleric (War) 10",
  replace: "Cleric (War) 9",
  choices: [
    ...PHB_CLERIC_10.choices
  ],
  longRest: [
    ...PHB_CLERIC_10.longRest
  ]
} as const;
const PHB_CLERIC_WAR_11: Level = {
  label: "Cleric (War) 11",
  replace: "Cleric (War) 10",
  choices: [
    ...PHB_CLERIC_11.choices
  ],
  longRest: [
    ...PHB_CLERIC_11.longRest
  ]
} as const;
const PHB_CLERIC_WAR_12: Level = {
  label: "Cleric (War) 12",
  replace: "Cleric (War) 11",
  choices: [
    ...PHB_CLERIC_12.choices
  ],
  longRest: [
    ...PHB_CLERIC_12.longRest
  ]
} as const;

export default {
  [PHB_CLERIC_WAR_3.label]: PHB_CLERIC_WAR_3,
  [PHB_CLERIC_WAR_4.label]: PHB_CLERIC_WAR_4,
  [PHB_CLERIC_WAR_5.label]: PHB_CLERIC_WAR_5,
  [PHB_CLERIC_WAR_6.label]: PHB_CLERIC_WAR_6,
  [PHB_CLERIC_WAR_7.label]: PHB_CLERIC_WAR_7,
  [PHB_CLERIC_WAR_8.label]: PHB_CLERIC_WAR_8,
  [PHB_CLERIC_WAR_9.label]: PHB_CLERIC_WAR_9,
  [PHB_CLERIC_WAR_10.label]: PHB_CLERIC_WAR_10,
  [PHB_CLERIC_WAR_11.label]: PHB_CLERIC_WAR_11,
  [PHB_CLERIC_WAR_12.label]: PHB_CLERIC_WAR_12
} as const satisfies {[levelID: ClassID]: Level};
