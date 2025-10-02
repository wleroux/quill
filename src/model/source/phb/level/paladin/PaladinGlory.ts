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

const PHB_PALADIN_GLORY_3: Level = {
  replace: "Paladin 2",
  label: "Paladin (Glory) 3",
  choices: [
    ...PHB_PALADIN_3.choices,
    {type: "spell", data: {
      choiceID: "paladin (glory)::spell-1",
      condition: is<SpellID>("Guiding Bolt")
    }},
    {type: "spell", data: {
      choiceID: "paladin (glory)::spell-2",
      condition: is<SpellID>("Heroism")
    }},
  ],
  longRest: [
    ...PHB_PALADIN_3.longRest
  ]
} as const;
const PHB_PALADIN_GLORY_4: Level = {
  replace: "Paladin (Glory) 3",
  label: "Paladin (Glory) 4",
  choices: [
    ...PHB_PALADIN_4.choices
  ],
  longRest: [
    ...PHB_PALADIN_4.longRest
  ]
} as const;
const PHB_PALADIN_GLORY_5: Level = {
  replace: "Paladin (Glory) 4",
  label: "Paladin (Glory) 5",
  choices: [
    ...PHB_PALADIN_5.choices
  ],
  longRest: [
    ...PHB_PALADIN_5.longRest
  ]
} as const;
const PHB_PALADIN_GLORY_6: Level = {
  replace: "Paladin (Glory) 5",
  label: "Paladin (Glory) 6",
  choices: [
    ...PHB_PALADIN_6.choices
  ],
  longRest: [
    ...PHB_PALADIN_6.longRest
  ]
} as const;
const PHB_PALADIN_GLORY_7: Level = {
  replace: "Paladin (Glory) 6",
  label: "Paladin (Glory) 7",
  choices: [
    ...PHB_PALADIN_7.choices
  ],
  longRest: [
    ...PHB_PALADIN_7.longRest
  ]
} as const;
const PHB_PALADIN_GLORY_8: Level = {
  replace: "Paladin (Glory) 7",
  label: "Paladin (Glory) 8",
  choices: [
    ...PHB_PALADIN_8.choices
  ],
  longRest: [
    ...PHB_PALADIN_8.longRest
  ]
} as const;
const PHB_PALADIN_GLORY_9: Level = {
  replace: "Paladin (Glory) 8",
  label: "Paladin (Glory) 9",
  choices: [
    ...PHB_PALADIN_9.choices
  ],
  longRest: [
    ...PHB_PALADIN_9.longRest
  ]
} as const;
const PHB_PALADIN_GLORY_10: Level = {
  replace: "Paladin (Glory) 9",
  label: "Paladin (Glory) 10",
  choices: [
    ...PHB_PALADIN_10.choices
  ],
  longRest: [
    ...PHB_PALADIN_10.longRest
  ]
} as const;
const PHB_PALADIN_GLORY_11: Level = {
  replace: "Paladin (Glory) 10",
  label: "Paladin (Glory) 11",
  choices: [
    ...PHB_PALADIN_11.choices
  ],
  longRest: [
    ...PHB_PALADIN_11.longRest
  ]
} as const;
const PHB_PALADIN_GLORY_12: Level = {
  replace: "Paladin (Glory) 11",
  label: "Paladin (Glory) 12",
  choices: [
    ...PHB_PALADIN_12.choices
  ],
  longRest: [
    ...PHB_PALADIN_12.longRest
  ]
} as const;

export default {
  [PHB_PALADIN_GLORY_3.label]: PHB_PALADIN_GLORY_3,
  [PHB_PALADIN_GLORY_4.label]: PHB_PALADIN_GLORY_4,
  [PHB_PALADIN_GLORY_5.label]: PHB_PALADIN_GLORY_5,
  [PHB_PALADIN_GLORY_6.label]: PHB_PALADIN_GLORY_6,
  [PHB_PALADIN_GLORY_7.label]: PHB_PALADIN_GLORY_7,
  [PHB_PALADIN_GLORY_8.label]: PHB_PALADIN_GLORY_8,
  [PHB_PALADIN_GLORY_9.label]: PHB_PALADIN_GLORY_9,
  [PHB_PALADIN_GLORY_10.label]: PHB_PALADIN_GLORY_10,
  [PHB_PALADIN_GLORY_11.label]: PHB_PALADIN_GLORY_11,
  [PHB_PALADIN_GLORY_12.label]: PHB_PALADIN_GLORY_12,
} as const satisfies {[levelID: ClassID]: Level};
