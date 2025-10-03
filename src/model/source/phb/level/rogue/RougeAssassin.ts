import {ClassID, Level} from "@/model/source/model/Level";
import {is} from "@/model/source/condition/generic/IsCondition";
import {PHB_ROGUE_10, PHB_ROGUE_11, PHB_ROGUE_12, PHB_ROGUE_3, PHB_ROGUE_4, PHB_ROGUE_5, PHB_ROGUE_6, PHB_ROGUE_7, PHB_ROGUE_8, PHB_ROGUE_9} from "./RougeBase";
import {ToolID} from "@/model/source/model/Tool";

const PHB_ROGUE_ASSASSIN_3: Level = {
  replace: "Rogue 2",
  label: "Rogue (Assassin) 3",
  choices: [
    ...PHB_ROGUE_3.choices,
    {type: "tool", data: {
      choiceID: "rogue (assassin)::tool-1",
      condition: is<ToolID>("Disguise Kit")
    }},
    {type: "tool", data: {
      choiceID: "rogue (assassin)::tool-2",
      condition: is<ToolID>("Poisoner's Kit"),
    }}
  ],
  longRest: [
    ...PHB_ROGUE_3.longRest
  ]
} as const;
const PHB_ROGUE_ASSASSIN_4: Level = {
  replace: "Rogue (Assassin) 3",
  label: "Rogue (Assassin) 4",
  choices: [
    ...PHB_ROGUE_4.choices
  ],
  longRest: [
    ...PHB_ROGUE_4.longRest
  ]
} as const;
const PHB_ROGUE_ASSASSIN_5: Level = {
  replace: "Rogue (Assassin) 4",
  label: "Rogue (Assassin) 5",
  choices: [
    ...PHB_ROGUE_5.choices
  ],
  longRest: [
    ...PHB_ROGUE_5.longRest
  ]
} as const;
const PHB_ROGUE_ASSASSIN_6: Level = {
  replace: "Rogue (Assassin) 5",
  label: "Rogue (Assassin) 6",
  choices: [
    ...PHB_ROGUE_6.choices
  ],
  longRest: [
    ...PHB_ROGUE_6.longRest
  ]
} as const;
const PHB_ROGUE_ASSASSIN_7: Level = {
  replace: "Rogue (Assassin) 6",
  label: "Rogue (Assassin) 7",
  choices: [
    ...PHB_ROGUE_7.choices
  ],
  longRest: [
    ...PHB_ROGUE_7.longRest
  ]
} as const;
const PHB_ROGUE_ASSASSIN_8: Level = {
  replace: "Rogue (Assassin) 7",
  label: "Rogue (Assassin) 8",
  choices: [
    ...PHB_ROGUE_8.choices
  ],
  longRest: [
    ...PHB_ROGUE_8.longRest
  ]
} as const;
const PHB_ROGUE_ASSASSIN_9: Level = {
  replace: "Rogue (Assassin) 8",
  label: "Rogue (Assassin) 9",
  choices: [
    ...PHB_ROGUE_9.choices
  ],
  longRest: [
    ...PHB_ROGUE_9.longRest
  ]
} as const;
const PHB_ROGUE_ASSASSIN_10: Level = {
  replace: "Rogue (Assassin) 9",
  label: "Rogue (Assassin) 10",
  choices: [
    ...PHB_ROGUE_10.choices
  ],
  longRest: [
    ...PHB_ROGUE_10.longRest
  ]
} as const;
const PHB_ROGUE_ASSASSIN_11: Level = {
  replace: "Rogue (Assassin) 10",
  label: "Rogue (Assassin) 11",
  choices: [
    ...PHB_ROGUE_11.choices
  ],
  longRest: [
    ...PHB_ROGUE_11.longRest
  ]
} as const;
const PHB_ROGUE_ASSASSIN_12: Level = {
  replace: "Rogue (Assassin) 11",
  label: "Rogue (Assassin) 12",
  choices: [
    ...PHB_ROGUE_12.choices
  ],
  longRest: [
    ...PHB_ROGUE_12.longRest
  ]
} as const;

export default {
  [PHB_ROGUE_ASSASSIN_3.label]: PHB_ROGUE_ASSASSIN_3,
  [PHB_ROGUE_ASSASSIN_4.label]: PHB_ROGUE_ASSASSIN_4,
  [PHB_ROGUE_ASSASSIN_5.label]: PHB_ROGUE_ASSASSIN_5,
  [PHB_ROGUE_ASSASSIN_6.label]: PHB_ROGUE_ASSASSIN_6,
  [PHB_ROGUE_ASSASSIN_7.label]: PHB_ROGUE_ASSASSIN_7,
  [PHB_ROGUE_ASSASSIN_8.label]: PHB_ROGUE_ASSASSIN_8,
  [PHB_ROGUE_ASSASSIN_9.label]: PHB_ROGUE_ASSASSIN_9,
  [PHB_ROGUE_ASSASSIN_10.label]: PHB_ROGUE_ASSASSIN_10,
  [PHB_ROGUE_ASSASSIN_11.label]: PHB_ROGUE_ASSASSIN_11,
  [PHB_ROGUE_ASSASSIN_12.label]: PHB_ROGUE_ASSASSIN_12,
} as const satisfies {[levelID: ClassID]: Level};
