import {ClassID, Level} from "@/model/source/model/Level";
import {SkillID} from "@/model/source/model/Skill";
import {is} from "@/model/source/condition/generic/IsCondition";
import {PHB_MONK_10, PHB_MONK_11, PHB_MONK_12, PHB_MONK_3, PHB_MONK_4, PHB_MONK_5, PHB_MONK_6, PHB_MONK_7, PHB_MONK_8, PHB_MONK_9} from "@/model/source/phb/level/monk/MonkBase";
import {ToolID} from "@/model/source/model/Tool";

const PHB_MONK_MERCY_3: Level = {
  replace: "Monk 2",
  label: "Monk (Mercy) 3",
  choices: [
    ...PHB_MONK_3.choices,
    {type: "skill", data: {
      choiceID: "monk (mercy)::skill-1",
      condition: is<SkillID>("insight")
    }},
    {type: "skill", data: {
      choiceID: "monk (mercy)::skill-2",
      condition: is<SkillID>("medicine")
    }},
    {type: "tool", data: {
      choiceID: "monk (mercy)::tool-1",
      condition: is<ToolID>("Herbalism Kit")
    }}
  ],
  longRest: [
    ...PHB_MONK_3.longRest
  ]
} as const;

const PHB_MONK_MERCY_4: Level = {
  replace: "Monk (Mercy) 3",
  label: "Monk (Mercy) 4",
  choices: [
    ...PHB_MONK_4.choices
  ],
  longRest: [
    ...PHB_MONK_4.longRest
  ]
} as const;
const PHB_MONK_MERCY_5: Level = {
  replace: "Monk (Mercy) 4",
  label: "Monk (Mercy) 5",
  choices: [
    ...PHB_MONK_5.choices
  ],
  longRest: [
    ...PHB_MONK_5.longRest
  ]
} as const;
const PHB_MONK_MERCY_6: Level = {
  replace: "Monk (Mercy) 5",
  label: "Monk (Mercy) 6",
  choices: [
    ...PHB_MONK_6.choices
  ],
  longRest: [
    ...PHB_MONK_6.longRest
  ]
} as const;
const PHB_MONK_MERCY_7: Level = {
  replace: "Monk (Mercy) 6",
  label: "Monk (Mercy) 7",
  choices: [
    ...PHB_MONK_7.choices
  ],
  longRest: [
    ...PHB_MONK_7.longRest
  ]
} as const;
const PHB_MONK_MERCY_8: Level = {
  replace: "Monk (Mercy) 7",
  label: "Monk (Mercy) 8",
  choices: [
    ...PHB_MONK_8.choices
  ],
  longRest: [
    ...PHB_MONK_8.longRest
  ]
} as const;
const PHB_MONK_MERCY_9: Level = {
  replace: "Monk (Mercy) 8",
  label: "Monk (Mercy) 9",
  choices: [
    ...PHB_MONK_9.choices
  ],
  longRest: [
    ...PHB_MONK_9.longRest
  ]
} as const;
const PHB_MONK_MERCY_10: Level = {
  replace: "Monk (Mercy) 9",
  label: "Monk (Mercy) 10",
  choices: [
    ...PHB_MONK_10.choices
  ],
  longRest: [
    ...PHB_MONK_10.longRest
  ]
} as const;
const PHB_MONK_MERCY_11: Level = {
  replace: "Monk (Mercy) 10",
  label: "Monk (Mercy) 11",
  choices: [
    ...PHB_MONK_11.choices
  ],
  longRest: [
    ...PHB_MONK_11.longRest
  ]
} as const;
const PHB_MONK_MERCY_12: Level = {
  replace: "Monk (Mercy) 11",
  label: "Monk (Mercy) 12",
  choices: [
    ...PHB_MONK_12.choices
  ],
  longRest: [
    ...PHB_MONK_12.longRest
  ]
} as const;

export default {
  [PHB_MONK_MERCY_3.label]: PHB_MONK_MERCY_3,
  [PHB_MONK_MERCY_4.label]: PHB_MONK_MERCY_4,
  [PHB_MONK_MERCY_5.label]: PHB_MONK_MERCY_5,
  [PHB_MONK_MERCY_6.label]: PHB_MONK_MERCY_6,
  [PHB_MONK_MERCY_7.label]: PHB_MONK_MERCY_7,
  [PHB_MONK_MERCY_8.label]: PHB_MONK_MERCY_8,
  [PHB_MONK_MERCY_9.label]: PHB_MONK_MERCY_9,
  [PHB_MONK_MERCY_10.label]: PHB_MONK_MERCY_10,
  [PHB_MONK_MERCY_11.label]: PHB_MONK_MERCY_11,
  [PHB_MONK_MERCY_12.label]: PHB_MONK_MERCY_12,
} as const satisfies {[levelID: ClassID]: Level};
