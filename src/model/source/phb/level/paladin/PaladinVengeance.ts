import {ClassID, Level} from "@/model/source/model/Level";
import {is} from "@/model/source/condition/generic/IsCondition";
import {
  PHB_PALADIN_10, PHB_PALADIN_11, PHB_PALADIN_12,
  PHB_PALADIN_3,
  PHB_PALADIN_4,
  PHB_PALADIN_5,
  PHB_PALADIN_6,
  PHB_PALADIN_7,
  PHB_PALADIN_8,
  PHB_PALADIN_9
} from "@/model/source/phb/level/paladin/PaladinBase";
import {SpellID} from "@/model/source/model/Spell";

const PHB_PALADIN_VENGEANCE_3: Level = {
  replace: "Paladin 2",
  label: "Paladin (Vengeance) 3",
  choices: [
    ...PHB_PALADIN_3.choices,
    {type: "spell", data: {
      choiceID: "paladin (vengeance)::spell-1",
      condition: is<SpellID>("Bane")
    }},
    {type: "spell", data: {
      choiceID: "paladin (vengeance)::spell-2",
      condition: is<SpellID>("Hunter's Mark")
    }},
  ],
  longRest: [
    ...PHB_PALADIN_3.longRest
  ]
} as const;
const PHB_PALADIN_VENGEANCE_4: Level = {
  replace: "Paladin (Vengeance) 3",
  label: "Paladin (Vengeance) 4",
  choices: [
    ...PHB_PALADIN_4.choices
  ],
  longRest: [
    ...PHB_PALADIN_4.longRest
  ]
} as const;
const PHB_PALADIN_VENGEANCE_5: Level = {
  replace: "Paladin (Vengeance) 4",
  label: "Paladin (Vengeance) 5",
  choices: [
    ...PHB_PALADIN_5.choices
  ],
  longRest: [
    ...PHB_PALADIN_5.longRest
  ]
} as const;
const PHB_PALADIN_VENGEANCE_6: Level = {
  replace: "Paladin (Vengeance) 5",
  label: "Paladin (Vengeance) 6",
  choices: [
    ...PHB_PALADIN_6.choices
  ],
  longRest: [
    ...PHB_PALADIN_6.longRest
  ]
} as const;
const PHB_PALADIN_VENGEANCE_7: Level = {
  replace: "Paladin (Vengeance) 6",
  label: "Paladin (Vengeance) 7",
  choices: [
    ...PHB_PALADIN_7.choices
  ],
  longRest: [
    ...PHB_PALADIN_7.longRest
  ]
} as const;
const PHB_PALADIN_VENGEANCE_8: Level = {
  replace: "Paladin (Vengeance) 7",
  label: "Paladin (Vengeance) 8",
  choices: [
    ...PHB_PALADIN_8.choices
  ],
  longRest: [
    ...PHB_PALADIN_8.longRest
  ]
} as const;
const PHB_PALADIN_VENGEANCE_9: Level = {
  replace: "Paladin (Vengeance) 8",
  label: "Paladin (Vengeance) 9",
  choices: [
    ...PHB_PALADIN_9.choices
  ],
  longRest: [
    ...PHB_PALADIN_9.longRest
  ]
} as const;
const PHB_PALADIN_VENGEANCE_10: Level = {
  replace: "Paladin (Vengeance) 9",
  label: "Paladin (Vengeance) 10",
  choices: [
    ...PHB_PALADIN_10.choices
  ],
  longRest: [
    ...PHB_PALADIN_10.longRest
  ]
} as const;
const PHB_PALADIN_VENGEANCE_11: Level = {
  replace: "Paladin (Vengeance) 10",
  label: "Paladin (Vengeance) 11",
  choices: [
    ...PHB_PALADIN_11.choices
  ],
  longRest: [
    ...PHB_PALADIN_11.longRest
  ]
} as const;
const PHB_PALADIN_VENGEANCE_12: Level = {
  replace: "Paladin (Vengeance) 11",
  label: "Paladin (Vengeance) 12",
  choices: [
    ...PHB_PALADIN_12.choices
  ],
  longRest: [
    ...PHB_PALADIN_12.longRest
  ]
} as const;

export default {
  [PHB_PALADIN_VENGEANCE_3.label]: PHB_PALADIN_VENGEANCE_3,
  [PHB_PALADIN_VENGEANCE_4.label]: PHB_PALADIN_VENGEANCE_4,
  [PHB_PALADIN_VENGEANCE_5.label]: PHB_PALADIN_VENGEANCE_5,
  [PHB_PALADIN_VENGEANCE_6.label]: PHB_PALADIN_VENGEANCE_6,
  [PHB_PALADIN_VENGEANCE_7.label]: PHB_PALADIN_VENGEANCE_7,
  [PHB_PALADIN_VENGEANCE_8.label]: PHB_PALADIN_VENGEANCE_8,
  [PHB_PALADIN_VENGEANCE_9.label]: PHB_PALADIN_VENGEANCE_9,
  [PHB_PALADIN_VENGEANCE_10.label]: PHB_PALADIN_VENGEANCE_10,
  [PHB_PALADIN_VENGEANCE_11.label]: PHB_PALADIN_VENGEANCE_11,
  [PHB_PALADIN_VENGEANCE_12.label]: PHB_PALADIN_VENGEANCE_12,
} as const satisfies {[classID: ClassID]: Level};