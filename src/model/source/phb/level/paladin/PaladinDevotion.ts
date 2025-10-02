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

const PHB_PALADIN_DEVOTION_3: Level = {
  replace: "Paladin 2",
  label: "Paladin (Devotion) 3",
  choices: [
    ...PHB_PALADIN_3.choices,
    {type: "spell", data: {
      choiceID: "paladin (devotion)::spell-1",
      condition: is<SpellID>("Protection from Evil and Good")
    }},
    {type: "spell", data: {
      choiceID: "paladin (devotion)::spell-2",
      condition: is<SpellID>("Shield of Faith")
    }},
  ],
  longRest: [
    ...PHB_PALADIN_3.longRest
  ]
} as const;
const PHB_PALADIN_DEVOTION_4: Level = {
  replace: "Paladin (Devotion) 3",
  label: "Paladin (Devotion) 4",
  choices: [
    ...PHB_PALADIN_4.choices
  ],
  longRest: [
    ...PHB_PALADIN_4.longRest
  ]
} as const;
const PHB_PALADIN_DEVOTION_5: Level = {
  replace: "Paladin (Devotion) 4",
  label: "Paladin (Devotion) 5",
  choices: [
    ...PHB_PALADIN_5.choices
  ],
  longRest: [
    ...PHB_PALADIN_5.longRest
  ]
} as const;
const PHB_PALADIN_DEVOTION_6: Level = {
  replace: "Paladin (Devotion) 5",
  label: "Paladin (Devotion) 6",
  choices: [
    ...PHB_PALADIN_6.choices
  ],
  longRest: [
    ...PHB_PALADIN_6.longRest
  ]
} as const;
const PHB_PALADIN_DEVOTION_7: Level = {
  replace: "Paladin (Devotion) 6",
  label: "Paladin (Devotion) 7",
  choices: [
    ...PHB_PALADIN_7.choices
  ],
  longRest: [
    ...PHB_PALADIN_7.longRest
  ]
} as const;
const PHB_PALADIN_DEVOTION_8: Level = {
  replace: "Paladin (Devotion) 7",
  label: "Paladin (Devotion) 8",
  choices: [
    ...PHB_PALADIN_8.choices
  ],
  longRest: [
    ...PHB_PALADIN_8.longRest
  ]
} as const;
const PHB_PALADIN_DEVOTION_9: Level = {
  replace: "Paladin (Devotion) 8",
  label: "Paladin (Devotion) 9",
  choices: [
    ...PHB_PALADIN_9.choices
  ],
  longRest: [
    ...PHB_PALADIN_9.longRest
  ]
} as const;
const PHB_PALADIN_ADEVOTION_10: Level = {
  replace: "Paladin (Devotion) 9",
  label: "Paladin (Devotion) 10",
  choices: [
    ...PHB_PALADIN_10.choices
  ],
  longRest: [
    ...PHB_PALADIN_10.longRest
  ]
} as const;
const PHB_PALADIN_ADEVOTION_11: Level = {
  replace: "Paladin (Devotion) 10",
  label: "Paladin (Devotion) 11",
  choices: [
    ...PHB_PALADIN_11.choices
  ],
  longRest: [
    ...PHB_PALADIN_11.longRest
  ]
} as const;
const PHB_PALADIN_ADEVOTION_12: Level = {
  replace: "Paladin (Devotion) 11",
  label: "Paladin (Devotion) 12",
  choices: [
    ...PHB_PALADIN_12.choices
  ],
  longRest: [
    ...PHB_PALADIN_12.longRest
  ]
} as const;

export default {
  [PHB_PALADIN_DEVOTION_3.label]: PHB_PALADIN_DEVOTION_3,
  [PHB_PALADIN_DEVOTION_4.label]: PHB_PALADIN_DEVOTION_4,
  [PHB_PALADIN_DEVOTION_5.label]: PHB_PALADIN_DEVOTION_5,
  [PHB_PALADIN_DEVOTION_6.label]: PHB_PALADIN_DEVOTION_6,
  [PHB_PALADIN_DEVOTION_7.label]: PHB_PALADIN_DEVOTION_7,
  [PHB_PALADIN_DEVOTION_8.label]: PHB_PALADIN_DEVOTION_8,
  [PHB_PALADIN_DEVOTION_9.label]: PHB_PALADIN_DEVOTION_9,
  [PHB_PALADIN_ADEVOTION_10.label]: PHB_PALADIN_ADEVOTION_10,
  [PHB_PALADIN_ADEVOTION_11.label]: PHB_PALADIN_ADEVOTION_11,
  [PHB_PALADIN_ADEVOTION_12.label]: PHB_PALADIN_ADEVOTION_12,
} as const satisfies {[levelID: ClassID]: Level};
