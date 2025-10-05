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

const PHB_WARLOCK_GREAT_OLD_ONE_3: Level = {
  replace: "Warlock 2",
  label: "Warlock (Great Old One) 3",
  choices: [
    ...PHB_WARLOCK_3.choices,
    {type: "spell", data: {
      choiceID: "warlock (great old one)::spell-1",
      condition: is<SpellID>("Detect Thoughts")
    }},
    {type: "spell", data: {
      choiceID: "warlock (great old one)::spell-2",
      condition: is<SpellID>("Dissonant Whispers")
    }},
    {type: "spell", data: {
      choiceID: "warlock (great old one)::spell-3",
      condition: is<SpellID>("Phantasmal Force")
    }},
    {type: "spell", data: {
      choiceID: "warlock (great old one)::spell-4",
      condition: is<SpellID>("Tasha's Hideous Laughter")
    }}
  ],
  longRest: [
    ...PHB_WARLOCK_3.longRest
  ]
} as const;
const PHB_WARLOCK_GREAT_OLD_ONE_4: Level = {
  replace: "Warlock (Great Old One) 3",
  label: "Warlock (Great Old One) 4",
  choices: [
    ...PHB_WARLOCK_4.choices
  ],
  longRest: [
    ...PHB_WARLOCK_4.longRest
  ]
} as const;
const PHB_WARLOCK_GREAT_OLD_ONE_5: Level = {
  replace: "Warlock (Great Old One) 4",
  label: "Warlock (Great Old One) 5",
  choices: [
    ...PHB_WARLOCK_5.choices,
    {type: "spell", data: {
      choiceID: "warlock (great old one)::spell-5",
      condition: is<SpellID>("Clairvoyance")
    }},
    {type: "spell", data: {
      choiceID: "warlock (great old one)::spell-6",
      condition: is<SpellID>("Hunger of Hadar")
    }}
  ],
  longRest: [
    ...PHB_WARLOCK_5.longRest
  ]
} as const;
const PHB_WARLOCK_GREAT_OLD_ONE_6: Level = {
  replace: "Warlock (Great Old One) 5",
  label: "Warlock (Great Old One) 6",
  choices: [
    ...PHB_WARLOCK_6.choices
  ],
  longRest: [
    ...PHB_WARLOCK_6.longRest
  ]
} as const;
const PHB_WARLOCK_GREAT_OLD_ONE_7: Level = {
  replace: "Warlock (Great Old One) 6",
  label: "Warlock (Great Old One) 7",
  choices: [
    ...PHB_WARLOCK_7.choices,
    {type: "spell", data: {
      choiceID: "warlock (great old one)::spell-7",
      condition: is<SpellID>("Confusion")
    }},
    {type: "spell", data: {
      choiceID: "warlock (great old one)::spell-8",
      condition: is<SpellID>("Summon Aberration")
    }}
  ],
  longRest: [
    ...PHB_WARLOCK_7.longRest
  ]
} as const;
const PHB_WARLOCK_GREAT_OLD_ONE_8: Level = {
  replace: "Warlock (Great Old One) 7",
  label: "Warlock (Great Old One) 8",
  choices: [
    ...PHB_WARLOCK_8.choices
  ],
  longRest: [
    ...PHB_WARLOCK_8.longRest
  ]
} as const;
const PHB_WARLOCK_GREAT_OLD_ONE_9: Level = {
  replace: "Warlock (Great Old One) 8",
  label: "Warlock (Great Old One) 9",
  choices: [
    ...PHB_WARLOCK_9.choices,
    {type: "spell", data: {
      choiceID: "warlock (great old one)::spell-7",
      condition: is<SpellID>("Modify Memory")
    }},
    {type: "spell", data: {
      choiceID: "warlock (great old one)::spell-8",
      condition: is<SpellID>("Telekinesis")
    }}
  ],
  longRest: [
    ...PHB_WARLOCK_9.longRest
  ]
} as const;
const PHB_WARLOCK_GREAT_OLD_ONE_10: Level = {
  replace: "Warlock (Great Old One) 9",
  label: "Warlock (Great Old One) 10",
  choices: [
    ...PHB_WARLOCK_10.choices
  ],
  longRest: [
    ...PHB_WARLOCK_10.longRest
  ]
} as const;
const PHB_WARLOCK_GREAT_OLD_ONE_11: Level = {
  replace: "Warlock (Great Old One) 10",
  label: "Warlock (Great Old One) 11",
  choices: [
    ...PHB_WARLOCK_11.choices
  ],
  longRest: [
    ...PHB_WARLOCK_11.longRest
  ]
} as const;
const PHB_WARLOCK_GREAT_OLD_ONE_12: Level = {
  replace: "Warlock (Great Old One) 11",
  label: "Warlock (Great Old One) 12",
  choices: [
    ...PHB_WARLOCK_12.choices
  ],
  longRest: [
    ...PHB_WARLOCK_12.longRest
  ]
} as const;

export default {
  [PHB_WARLOCK_GREAT_OLD_ONE_3.label]: PHB_WARLOCK_GREAT_OLD_ONE_3,
  [PHB_WARLOCK_GREAT_OLD_ONE_4.label]: PHB_WARLOCK_GREAT_OLD_ONE_4,
  [PHB_WARLOCK_GREAT_OLD_ONE_5.label]: PHB_WARLOCK_GREAT_OLD_ONE_5,
  [PHB_WARLOCK_GREAT_OLD_ONE_6.label]: PHB_WARLOCK_GREAT_OLD_ONE_6,
  [PHB_WARLOCK_GREAT_OLD_ONE_7.label]: PHB_WARLOCK_GREAT_OLD_ONE_7,
  [PHB_WARLOCK_GREAT_OLD_ONE_8.label]: PHB_WARLOCK_GREAT_OLD_ONE_8,
  [PHB_WARLOCK_GREAT_OLD_ONE_9.label]: PHB_WARLOCK_GREAT_OLD_ONE_9,
  [PHB_WARLOCK_GREAT_OLD_ONE_10.label]: PHB_WARLOCK_GREAT_OLD_ONE_10,
  [PHB_WARLOCK_GREAT_OLD_ONE_11.label]: PHB_WARLOCK_GREAT_OLD_ONE_11,
  [PHB_WARLOCK_GREAT_OLD_ONE_12.label]: PHB_WARLOCK_GREAT_OLD_ONE_12,
} as const satisfies {[levelID: ClassID]: Level};
