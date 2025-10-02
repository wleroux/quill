import {ClassID, Level} from "@/model/source/model/Level";
import {is} from "@/model/source/condition/generic/IsCondition";
import {
  PHB_PALADIN_10,
  PHB_PALADIN_11,
  PHB_PALADIN_12,
  PHB_PALADIN_3,
  PHB_PALADIN_4,
  PHB_PALADIN_5,
  PHB_PALADIN_6,
  PHB_PALADIN_7,
  PHB_PALADIN_8,
  PHB_PALADIN_9
} from "@/model/source/phb/level/paladin/PaladinBase";
import {SpellID} from "@/model/source/model/Spell";

const PHB_PALADIN_ANCIENTS_3: Level = {
  replace: "Paladin 2",
  label: "Paladin (Ancients) 3",
  choices: [
    ...PHB_PALADIN_3.choices,
    {type: "spell", data: {
      choiceID: "paladin (ancients)::spell-1",
      condition: is<SpellID>("Ensnaring Strike")
    }},
    {type: "spell", data: {
      choiceID: "paladin (ancients)::spell-2",
      condition: is<SpellID>("Speak with Animals")
    }},
  ],
  longRest: [
    ...PHB_PALADIN_3.longRest
  ]
} as const;
const PHB_PALADIN_ANCIENTS_4: Level = {
  replace: "Paladin (Ancients) 3",
  label: "Paladin (Ancients) 4",
  choices: [
    ...PHB_PALADIN_4.choices
  ],
  longRest: [
    ...PHB_PALADIN_4.longRest
  ]
} as const;
const PHB_PALADIN_ANCIENTS_5: Level = {
  replace: "Paladin (Ancients) 4",
  label: "Paladin (Ancients) 5",
  choices: [
    ...PHB_PALADIN_5.choices
  ],
  longRest: [
    ...PHB_PALADIN_5.longRest
  ]
} as const;
const PHB_PALADIN_ANCIENTS_6: Level = {
  replace: "Paladin (Ancients) 5",
  label: "Paladin (Ancients) 6",
  choices: [
    ...PHB_PALADIN_6.choices
  ],
  longRest: [
    ...PHB_PALADIN_6.longRest
  ]
} as const;
const PHB_PALADIN_ANCIENTS_7: Level = {
  replace: "Paladin (Ancients) 6",
  label: "Paladin (Ancients) 7",
  choices: [
    ...PHB_PALADIN_7.choices
  ],
  longRest: [
    ...PHB_PALADIN_7.longRest
  ]
} as const;
const PHB_PALADIN_ANCIENTS_8: Level = {
  replace: "Paladin (Ancients) 7",
  label: "Paladin (Ancients) 8",
  choices: [
    ...PHB_PALADIN_8.choices
  ],
  longRest: [
    ...PHB_PALADIN_8.longRest
  ]
} as const;
const PHB_PALADIN_ANCIENTS_9: Level = {
  replace: "Paladin (Ancients) 8",
  label: "Paladin (Ancients) 9",
  choices: [
    ...PHB_PALADIN_9.choices
  ],
  longRest: [
    ...PHB_PALADIN_9.longRest
  ]
} as const;
const PHB_PALADIN_ANCIENTS_10: Level = {
  replace: "Paladin (Ancients) 9",
  label: "Paladin (Ancients) 10",
  choices: [
    ...PHB_PALADIN_10.choices
  ],
  longRest: [
    ...PHB_PALADIN_10.longRest
  ]
} as const;
const PHB_PALADIN_ANCIENTS_11: Level = {
  replace: "Paladin (Ancients) 10",
  label: "Paladin (Ancients) 11",
  choices: [
    ...PHB_PALADIN_11.choices
  ],
  longRest: [
    ...PHB_PALADIN_11.longRest
  ]
} as const;
const PHB_PALADIN_ANCIENTS_12: Level = {
  replace: "Paladin (Ancients) 11",
  label: "Paladin (Ancients) 12",
  choices: [
    ...PHB_PALADIN_12.choices
  ],
  longRest: [
    ...PHB_PALADIN_12.longRest
  ]
} as const;

export default {
  [PHB_PALADIN_ANCIENTS_3.label]: PHB_PALADIN_ANCIENTS_3,
  [PHB_PALADIN_ANCIENTS_4.label]: PHB_PALADIN_ANCIENTS_4,
  [PHB_PALADIN_ANCIENTS_5.label]: PHB_PALADIN_ANCIENTS_5,
  [PHB_PALADIN_ANCIENTS_6.label]: PHB_PALADIN_ANCIENTS_6,
  [PHB_PALADIN_ANCIENTS_7.label]: PHB_PALADIN_ANCIENTS_7,
  [PHB_PALADIN_ANCIENTS_8.label]: PHB_PALADIN_ANCIENTS_8,
  [PHB_PALADIN_ANCIENTS_9.label]: PHB_PALADIN_ANCIENTS_9,
  [PHB_PALADIN_ANCIENTS_10.label]: PHB_PALADIN_ANCIENTS_10,
  [PHB_PALADIN_ANCIENTS_11.label]: PHB_PALADIN_ANCIENTS_11,
  [PHB_PALADIN_ANCIENTS_12.label]: PHB_PALADIN_ANCIENTS_12,
} as const satisfies {[levelID: ClassID]: Level};
