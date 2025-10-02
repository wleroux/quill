import {ClassID, Level} from "@/model/source/model/Level";
import {is} from "@/model/source/condition/generic/IsCondition";
import {PHB_MONK_10, PHB_MONK_11, PHB_MONK_12, PHB_MONK_3, PHB_MONK_4, PHB_MONK_5, PHB_MONK_6, PHB_MONK_7, PHB_MONK_8, PHB_MONK_9} from "@/model/source/phb/level/monk/MonkBase";
import {SpellID} from "@/model/source/model/Spell";

const PHB_MONK_SHADOW_3: Level = {
  replace: "Monk 2",
  label: "Monk (Shadow) 3",
  choices: [
    ...PHB_MONK_3.choices,
    {type: "spell", data: {
      choiceID: "monk (shadow)::spell-1",
      condition: is<SpellID>("Darkness")
    }}
  ],
  longRest: [
    ...PHB_MONK_3.longRest
  ]
} as const;

const PHB_MONK_SHADOW_4: Level = {
  replace: "Monk (Shadow) 3",
  label: "Monk (Shadow) 4",
  choices: [
    ...PHB_MONK_4.choices
  ],
  longRest: [
    ...PHB_MONK_4.longRest
  ]
} as const;
const PHB_MONK_SHADOW_5: Level = {
  replace: "Monk (Shadow) 4",
  label: "Monk (Shadow) 5",
  choices: [
    ...PHB_MONK_5.choices
  ],
  longRest: [
    ...PHB_MONK_5.longRest
  ]
} as const;
const PHB_MONK_SHADOW_6: Level = {
  replace: "Monk (Shadow) 5",
  label: "Monk (Shadow) 6",
  choices: [
    ...PHB_MONK_6.choices
  ],
  longRest: [
    ...PHB_MONK_6.longRest
  ]
} as const;
const PHB_MONK_SHADOW_7: Level = {
  replace: "Monk (Shadow) 6",
  label: "Monk (Shadow) 7",
  choices: [
    ...PHB_MONK_7.choices
  ],
  longRest: [
    ...PHB_MONK_7.longRest
  ]
} as const;
const PHB_MONK_SHADOW_8: Level = {
  replace: "Monk (Shadow) 7",
  label: "Monk (Shadow) 8",
  choices: [
    ...PHB_MONK_8.choices
  ],
  longRest: [
    ...PHB_MONK_8.longRest
  ]
} as const;
const PHB_MONK_SHADOW_9: Level = {
  replace: "Monk (Shadow) 8",
  label: "Monk (Shadow) 9",
  choices: [
    ...PHB_MONK_9.choices
  ],
  longRest: [
    ...PHB_MONK_9.longRest
  ]
} as const;
const PHB_MONK_SHADOW_10: Level = {
  replace: "Monk (Shadow) 9",
  label: "Monk (Shadow) 10",
  choices: [
    ...PHB_MONK_10.choices
  ],
  longRest: [
    ...PHB_MONK_10.longRest
  ]
} as const;
const PHB_MONK_SHADOW_11: Level = {
  replace: "Monk (Shadow) 10",
  label: "Monk (Shadow) 11",
  choices: [
    ...PHB_MONK_11.choices
  ],
  longRest: [
    ...PHB_MONK_11.longRest
  ]
} as const;
const PHB_MONK_SHADOW_12: Level = {
  replace: "Monk (Shadow) 11",
  label: "Monk (Shadow) 12",
  choices: [
    ...PHB_MONK_12.choices
  ],
  longRest: [
    ...PHB_MONK_12.longRest
  ]
} as const;

export default {
  [PHB_MONK_SHADOW_3.label]: PHB_MONK_SHADOW_3,
  [PHB_MONK_SHADOW_4.label]: PHB_MONK_SHADOW_4,
  [PHB_MONK_SHADOW_5.label]: PHB_MONK_SHADOW_5,
  [PHB_MONK_SHADOW_6.label]: PHB_MONK_SHADOW_6,
  [PHB_MONK_SHADOW_7.label]: PHB_MONK_SHADOW_7,
  [PHB_MONK_SHADOW_8.label]: PHB_MONK_SHADOW_8,
  [PHB_MONK_SHADOW_9.label]: PHB_MONK_SHADOW_9,
  [PHB_MONK_SHADOW_10.label]: PHB_MONK_SHADOW_10,
  [PHB_MONK_SHADOW_11.label]: PHB_MONK_SHADOW_11,
  [PHB_MONK_SHADOW_12.label]: PHB_MONK_SHADOW_12
} as const satisfies {[levelID: ClassID]: Level};
