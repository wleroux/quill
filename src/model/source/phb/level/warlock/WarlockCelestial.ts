import {ClassID, Level} from "@/model/source/model/Level";
import {
  PHB_WARLOCK_10,
  PHB_WARLOCK_11,
  PHB_WARLOCK_12,
  PHB_WARLOCK_3,
  PHB_WARLOCK_4,
  PHB_WARLOCK_5,
  PHB_WARLOCK_6,
  PHB_WARLOCK_7,
  PHB_WARLOCK_8,
  PHB_WARLOCK_9
} from "./WarlockBase";
import {is} from "@/model/source/condition/generic/IsCondition";
import {SpellID} from "@/model/source/model/Spell";

const PHB_WARLOCK_CELESTIAL_3: Level = {
  replace: "Warlock 2",
  label: "Warlock (Celestial) 3",
  choices: [
    ...PHB_WARLOCK_3.choices,
    {type: "spell", data: {
      choiceID: "warlock (celestial)::spell-1",
      condition: is<SpellID>("Aid")
    }},
    {type: "spell", data: {
      choiceID: "warlock (celestial)::spell-2",
      condition: is<SpellID>("Cure Wounds")
    }},
    {type: "spell", data: {
      choiceID: "warlock (celestial)::spell-3",
      condition: is<SpellID>("Guiding Bolt")
    }},
    {type: "spell", data: {
      choiceID: "warlock (celestial)::spell-4",
      condition: is<SpellID>("Lesser Restoration")
    }},
    {type: "spell", data: {
      choiceID: "warlock (celestial)::spell-5",
      condition: is<SpellID>("Light")
    }},
    {type: "spell", data: {
      choiceID: "warlock (celestial)::spell-6",
      condition: is<SpellID>("Sacred Flame")
    }}
  ],
  longRest: [
    ...PHB_WARLOCK_3.longRest
  ]
} as const;
const PHB_WARLOCK_CELESTIAL_4: Level = {
  replace: "Warlock (Celestial) 3",
  label: "Warlock (Celestial) 4",
  choices: [
    ...PHB_WARLOCK_4.choices
  ],
  longRest: [
    ...PHB_WARLOCK_4.longRest
  ]
} as const;
const PHB_WARLOCK_CELESTIAL_5: Level = {
  replace: "Warlock (Celestial) 4",
  label: "Warlock (Celestial) 5",
  choices: [
    ...PHB_WARLOCK_5.choices,
    {type: "spell", data: {
      choiceID: "warlock (celestial)::spell-7",
      condition: is<SpellID>("Daylight")
    }},
    {type: "spell", data: {
      choiceID: "warlock (celestial)::spell-8",
      condition: is<SpellID>("Revivify")
    }}
  ],
  longRest: [
    ...PHB_WARLOCK_5.longRest
  ]
} as const;
const PHB_WARLOCK_CELESTIAL_6: Level = {
  replace: "Warlock (Celestial) 5",
  label: "Warlock (Celestial) 6",
  choices: [
    ...PHB_WARLOCK_6.choices
  ],
  longRest: [
    ...PHB_WARLOCK_6.longRest
  ]
} as const;
const PHB_WARLOCK_CELESTIAL_7: Level = {
  replace: "Warlock (Celestial) 6",
  label: "Warlock (Celestial) 7",
  choices: [
    ...PHB_WARLOCK_7.choices,
    {type: "spell", data: {
      choiceID: "warlock (celestial)::spell-9",
      condition: is<SpellID>("Guardian of Faith")
    }},
    {type: "spell", data: {
      choiceID: "warlock (celestial)::spell-10",
      condition: is<SpellID>("Wall of Fire")
    }}
  ],
  longRest: [
    ...PHB_WARLOCK_7.longRest
  ]
} as const;
const PHB_WARLOCK_CELESTIAL_8: Level = {
  replace: "Warlock (Celestial) 7",
  label: "Warlock (Celestial) 8",
  choices: [
    ...PHB_WARLOCK_8.choices
  ],
  longRest: [
    ...PHB_WARLOCK_8.longRest
  ]
} as const;
const PHB_WARLOCK_CELESTIAL_9: Level = {
  replace: "Warlock (Celestial) 8",
  label: "Warlock (Celestial) 9",
  choices: [
    ...PHB_WARLOCK_9.choices,
    {type: "spell", data: {
      choiceID: "warlock (celestial)::spell-9",
      condition: is<SpellID>("Greater Restoration")
    }},
    {type: "spell", data: {
      choiceID: "warlock (celestial)::spell-10",
      condition: is<SpellID>("Summon Celestial")
    }}
  ],
  longRest: [
    ...PHB_WARLOCK_9.longRest
  ]
} as const;
const PHB_WARLOCK_CELESTIAL_10: Level = {
  replace: "Warlock (Celestial) 9",
  label: "Warlock (Celestial) 10",
  choices: [
    ...PHB_WARLOCK_10.choices
  ],
  longRest: [
    ...PHB_WARLOCK_10.longRest
  ]
} as const;
const PHB_WARLOCK_CELESTIAL_11: Level = {
  replace: "Warlock (Celestial) 10",
  label: "Warlock (Celestial) 11",
  choices: [
    ...PHB_WARLOCK_11.choices
  ],
  longRest: [
    ...PHB_WARLOCK_11.longRest
  ]
} as const;
const PHB_WARLOCK_CELESTIAL_12: Level = {
  replace: "Warlock (Celestial) 11",
  label: "Warlock (Celestial) 12",
  choices: [
    ...PHB_WARLOCK_12.choices
  ],
  longRest: [
    ...PHB_WARLOCK_12.longRest
  ]
} as const;

export default {
  [PHB_WARLOCK_CELESTIAL_3.label]: PHB_WARLOCK_CELESTIAL_3,
  [PHB_WARLOCK_CELESTIAL_4.label]: PHB_WARLOCK_CELESTIAL_4,
  [PHB_WARLOCK_CELESTIAL_5.label]: PHB_WARLOCK_CELESTIAL_5,
  [PHB_WARLOCK_CELESTIAL_6.label]: PHB_WARLOCK_CELESTIAL_6,
  [PHB_WARLOCK_CELESTIAL_7.label]: PHB_WARLOCK_CELESTIAL_7,
  [PHB_WARLOCK_CELESTIAL_8.label]: PHB_WARLOCK_CELESTIAL_8,
  [PHB_WARLOCK_CELESTIAL_9.label]: PHB_WARLOCK_CELESTIAL_9,
  [PHB_WARLOCK_CELESTIAL_10.label]: PHB_WARLOCK_CELESTIAL_10,
  [PHB_WARLOCK_CELESTIAL_11.label]: PHB_WARLOCK_CELESTIAL_11,
  [PHB_WARLOCK_CELESTIAL_12.label]: PHB_WARLOCK_CELESTIAL_12,
} as const satisfies {[levelID: ClassID]: Level};
