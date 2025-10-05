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

const PHB_WARLOCK_FIEND_3: Level = {
  replace: "Warlock 2",
  label: "Warlock (Fiend) 3",
  choices: [
    ...PHB_WARLOCK_3.choices,
    {type: "spell", data: {
      choiceID: "warlock (fiend)::spell-1",
      condition: is<SpellID>("Burning Hands")
    }},
    {type: "spell", data: {
      choiceID: "warlock (fiend)::spell-2",
      condition: is<SpellID>("Command")
    }},
    {type: "spell", data: {
      choiceID: "warlock (fiend)::spell-3",
      condition: is<SpellID>("Scorching Ray")
    }},
    {type: "spell", data: {
      choiceID: "warlock (fiend)::spell-4",
      condition: is<SpellID>("Suggestion")
    }}
  ],
  longRest: [
    ...PHB_WARLOCK_3.longRest
  ]
} as const;
const PHB_WARLOCK_FIEND_4: Level = {
  replace: "Warlock (Fiend) 3",
  label: "Warlock (Fiend) 4",
  choices: [
    ...PHB_WARLOCK_4.choices
  ],
  longRest: [
    ...PHB_WARLOCK_4.longRest
  ]
} as const;
const PHB_WARLOCK_FIEND_5: Level = {
  replace: "Warlock (Fiend) 4",
  label: "Warlock (Fiend) 5",
  choices: [
    ...PHB_WARLOCK_5.choices,
    {type: "spell", data: {
      choiceID: "warlock (fiend)::spell-5",
      condition: is<SpellID>("Fireball")
    }},
    {type: "spell", data: {
      choiceID: "warlock (fiend)::spell-6",
      condition: is<SpellID>("Stinking Cloud")
    }}
  ],
  longRest: [
    ...PHB_WARLOCK_5.longRest
  ]
} as const;
const PHB_WARLOCK_FIEND_6: Level = {
  replace: "Warlock (Fiend) 5",
  label: "Warlock (Fiend) 6",
  choices: [
    ...PHB_WARLOCK_6.choices
  ],
  longRest: [
    ...PHB_WARLOCK_6.longRest
  ]
} as const;
const PHB_WARLOCK_FIEND_7: Level = {
  replace: "Warlock (Fiend) 6",
  label: "Warlock (Fiend) 7",
  choices: [
    ...PHB_WARLOCK_7.choices,
    {type: "spell", data: {
      choiceID: "warlock (fiend)::spell-7",
      condition: is<SpellID>("Fire Shield")
    }},
    {type: "spell", data: {
      choiceID: "warlock (fiend)::spell-8",
      condition: is<SpellID>("Wall of Fire")
    }}
  ],
  longRest: [
    ...PHB_WARLOCK_7.longRest
  ]
} as const;
const PHB_WARLOCK_FIEND_8: Level = {
  replace: "Warlock (Fiend) 7",
  label: "Warlock (Fiend) 8",
  choices: [
    ...PHB_WARLOCK_8.choices
  ],
  longRest: [
    ...PHB_WARLOCK_8.longRest
  ]
} as const;
const PHB_WARLOCK_FIEND_9: Level = {
  replace: "Warlock (Fiend) 8",
  label: "Warlock (Fiend) 9",
  choices: [
    ...PHB_WARLOCK_9.choices,
    {type: "spell", data: {
      choiceID: "warlock (fiend)::spell-9",
      condition: is<SpellID>("Geas")
    }},
    {type: "spell", data: {
      choiceID: "warlock (fiend)::spell-10",
      condition: is<SpellID>("Insect Plague")
    }}
  ],
  longRest: [
    ...PHB_WARLOCK_9.longRest
  ]
} as const;
const PHB_WARLOCK_FIEND_10: Level = {
  replace: "Warlock (Fiend) 9",
  label: "Warlock (Fiend) 10",
  choices: [
    ...PHB_WARLOCK_10.choices
  ],
  longRest: [
    ...PHB_WARLOCK_10.longRest
  ]
} as const;
const PHB_WARLOCK_FIEND_11: Level = {
  replace: "Warlock (Fiend) 10",
  label: "Warlock (Fiend) 11",
  choices: [
    ...PHB_WARLOCK_11.choices
  ],
  longRest: [
    ...PHB_WARLOCK_11.longRest
  ]
} as const;
const PHB_WARLOCK_FIEND_12: Level = {
  replace: "Warlock (Fiend) 11",
  label: "Warlock (Fiend) 12",
  choices: [
    ...PHB_WARLOCK_12.choices
  ],
  longRest: [
    ...PHB_WARLOCK_12.longRest
  ]
} as const;

export default {
  [PHB_WARLOCK_FIEND_3.label]: PHB_WARLOCK_FIEND_3,
  [PHB_WARLOCK_FIEND_4.label]: PHB_WARLOCK_FIEND_4,
  [PHB_WARLOCK_FIEND_5.label]: PHB_WARLOCK_FIEND_5,
  [PHB_WARLOCK_FIEND_6.label]: PHB_WARLOCK_FIEND_6,
  [PHB_WARLOCK_FIEND_7.label]: PHB_WARLOCK_FIEND_7,
  [PHB_WARLOCK_FIEND_8.label]: PHB_WARLOCK_FIEND_8,
  [PHB_WARLOCK_FIEND_9.label]: PHB_WARLOCK_FIEND_9,
  [PHB_WARLOCK_FIEND_10.label]: PHB_WARLOCK_FIEND_10,
  [PHB_WARLOCK_FIEND_11.label]: PHB_WARLOCK_FIEND_11,
  [PHB_WARLOCK_FIEND_12.label]: PHB_WARLOCK_FIEND_12,
} as const satisfies {[levelID: ClassID]: Level};
