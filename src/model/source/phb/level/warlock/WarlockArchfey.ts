import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_WARLOCK_3, PHB_WARLOCK_4,
  PHB_WARLOCK_5,
  PHB_WARLOCK_6,
  PHB_WARLOCK_7,
  PHB_WARLOCK_8,
  PHB_WARLOCK_9,
  PHB_WARLOCK_10,
  PHB_WARLOCK_11,
  PHB_WARLOCK_12
} from "./WarlockBase";
import {is} from "@/model/source/condition/generic/IsCondition";
import {SpellID} from "@/model/source/model/Spell";

const PHB_WARLOCK_ARCHFEY_3: Level = {
  replace: "Warlock 2",
  label: "Warlock (Archfey) 3",
  choices: [
    ...PHB_WARLOCK_3.choices,
    {type: "spell", data: {
      choiceID: "warlock (archfey)::spell-1",
      condition: is<SpellID>("Calm Emotions")
    }},
    {type: "spell", data: {
      choiceID: "warlock (archfey)::spell-2",
      condition: is<SpellID>("Faerie Fire")
    }},
    {type: "spell", data: {
      choiceID: "warlock (archfey)::spell-3",
      condition: is<SpellID>("Misty Step")
    }},
    {type: "spell", data: {
      choiceID: "warlock (archfey)::spell-4",
      condition: is<SpellID>("Phantasmal Force")
    }},
    {type: "spell", data: {
      choiceID: "warlock (archfey)::spell-5",
      condition: is<SpellID>("Sleep")
    }},
  ],
  longRest: [
    ...PHB_WARLOCK_3.longRest
  ]
} as const;
const PHB_WARLOCK_ARCHFEY_4: Level = {
  replace: "Warlock (Archfey) 3",
  label: "Warlock (Archfey) 4",
  choices: [
    ...PHB_WARLOCK_4.choices
  ],
  longRest: [
    ...PHB_WARLOCK_4.longRest
  ]
} as const;
const PHB_WARLOCK_ARCHFEY_5: Level = {
  replace: "Warlock (Archfey) 4",
  label: "Warlock (Archfey) 5",
  choices: [
    ...PHB_WARLOCK_5.choices,
    {type: "spell", data: {
      choiceID: "warlock (archfey)::spell-6",
      condition: is<SpellID>("Blink")
    }},
    {type: "spell", data: {
      choiceID: "warlock (archfey)::spell-7",
      condition: is<SpellID>("Plant Growth")
    }},
  ],
  longRest: [
    ...PHB_WARLOCK_5.longRest
  ]
} as const;
const PHB_WARLOCK_ARCHFEY_6: Level = {
  replace: "Warlock (Archfey) 5",
  label: "Warlock (Archfey) 6",
  choices: [
    ...PHB_WARLOCK_6.choices
  ],
  longRest: [
    ...PHB_WARLOCK_6.longRest
  ]
} as const;
const PHB_WARLOCK_ARCHFEY_7: Level = {
  replace: "Warlock (Archfey) 6",
  label: "Warlock (Archfey) 7",
  choices: [
    ...PHB_WARLOCK_7.choices,
    {type: "spell", data: {
      choiceID: "warlock (archfey)::spell-8",
      condition: is<SpellID>("Dominate Beast")
    }},
    {type: "spell", data: {
      choiceID: "warlock (archfey)::spell-9",
      condition: is<SpellID>("Greater Invisibility")
    }},
  ],
  longRest: [
    ...PHB_WARLOCK_7.longRest
  ]
} as const;
const PHB_WARLOCK_ARCHFEY_8: Level = {
  replace: "Warlock (Archfey) 7",
  label: "Warlock (Archfey) 8",
  choices: [
    ...PHB_WARLOCK_8.choices
  ],
  longRest: [
    ...PHB_WARLOCK_8.longRest
  ]
} as const;
const PHB_WARLOCK_ARCHFEY_9: Level = {
  replace: "Warlock (Archfey) 8",
  label: "Warlock (Archfey) 9",
  choices: [
    ...PHB_WARLOCK_9.choices,
    {type: "spell", data: {
      choiceID: "warlock (archfey)::spell-10",
      condition: is<SpellID>("Dominate Person, ")
    }},
    {type: "spell", data: {
      choiceID: "warlock (archfey)::spell-11",
      condition: is<SpellID>("Seeming")
    }},
  ],
  longRest: [
    ...PHB_WARLOCK_9.longRest
  ]
} as const;
const PHB_WARLOCK_ARCHFEY_10: Level = {
  replace: "Warlock (Archfey) 9",
  label: "Warlock (Archfey) 10",
  choices: [
    ...PHB_WARLOCK_10.choices
  ],
  longRest: [
    ...PHB_WARLOCK_10.longRest
  ]
} as const;
const PHB_WARLOCK_ARCHFEY_11: Level = {
  replace: "Warlock (Archfey) 10",
  label: "Warlock (Archfey) 11",
  choices: [
    ...PHB_WARLOCK_11.choices
  ],
  longRest: [
    ...PHB_WARLOCK_11.longRest
  ]
} as const;
const PHB_WARLOCK_ARCHFEY_12: Level = {
  replace: "Warlock (Archfey) 11",
  label: "Warlock (Archfey) 12",
  choices: [
    ...PHB_WARLOCK_12.choices
  ],
  longRest: [
    ...PHB_WARLOCK_12.longRest
  ]
} as const;
export default {
  [PHB_WARLOCK_ARCHFEY_3.label]: PHB_WARLOCK_ARCHFEY_3,
  [PHB_WARLOCK_ARCHFEY_4.label]: PHB_WARLOCK_ARCHFEY_4,
  [PHB_WARLOCK_ARCHFEY_5.label]: PHB_WARLOCK_ARCHFEY_5,
  [PHB_WARLOCK_ARCHFEY_6.label]: PHB_WARLOCK_ARCHFEY_6,
  [PHB_WARLOCK_ARCHFEY_7.label]: PHB_WARLOCK_ARCHFEY_7,
  [PHB_WARLOCK_ARCHFEY_8.label]: PHB_WARLOCK_ARCHFEY_8,
  [PHB_WARLOCK_ARCHFEY_9.label]: PHB_WARLOCK_ARCHFEY_9,
  [PHB_WARLOCK_ARCHFEY_10.label]: PHB_WARLOCK_ARCHFEY_10,
  [PHB_WARLOCK_ARCHFEY_11.label]: PHB_WARLOCK_ARCHFEY_11,
  [PHB_WARLOCK_ARCHFEY_12.label]: PHB_WARLOCK_ARCHFEY_12,
} as const satisfies {[levelID: ClassID]: Level};
