import {ClassID, Level} from "@/model/source/model/Level";
import {
  PHB_RANGER_10,
  PHB_RANGER_11,
  PHB_RANGER_12,
  PHB_RANGER_3,
  PHB_RANGER_4,
  PHB_RANGER_5,
  PHB_RANGER_6,
  PHB_RANGER_7,
  PHB_RANGER_8,
  PHB_RANGER_9
} from "@/model/source/phb/level/ranger/RangerBase";

const PHB_RANGER_BEAST_MASTER_3: Level = {
  replace: "Ranger 2",
  label: "Ranger (Beast Master) 3",
  choices: [
    ...PHB_RANGER_3.choices
  ],
  longRest: [
    ...PHB_RANGER_3.longRest,
    {type: "simple", data: {
      choiceID: "ranger (beast)::primal companion",
      label: "Primal Companion",
      options: [
        {optionID: "Beast of the Land", label: "Beast of the Land"},
        {optionID: "Beast of the Sea", label: "Beast of the Sea"},
        {optionID: "Beast of the Sky", label: "Beast of the Sky"}
      ]
    }}
  ]
} as const;

const PHB_RANGER_BEAST_MASTER_4: Level = {
  replace: "Ranger (Beast Master) 3",
  label: "Ranger (Beast Master) 4",
  choices: [
    ...PHB_RANGER_4.choices
  ],
  longRest: [
    ...PHB_RANGER_4.longRest
  ]
} as const;

const PHB_RANGER_BEAST_MASTER_5: Level = {
  replace: "Ranger (Beast Master) 4",
  label: "Ranger (Beast Master) 5",
  choices: [
    ...PHB_RANGER_5.choices
  ],
  longRest: [
    ...PHB_RANGER_5.longRest
  ]
} as const;
const PHB_RANGER_BEAST_MASTER_6: Level = {
  replace: "Ranger (Beast Master) 5",
  label: "Ranger (Beast Master) 6",
  choices: [
    ...PHB_RANGER_6.choices
  ],
  longRest: [
    ...PHB_RANGER_6.longRest
  ]
} as const;
const PHB_RANGER_BEAST_MASTER_7: Level = {
  replace: "Ranger (Beast Master) 6",
  label: "Ranger (Beast Master) 7",
  choices: [
    ...PHB_RANGER_7.choices
  ],
  longRest: [
    ...PHB_RANGER_7.longRest
  ]
} as const;
const PHB_RANGER_BEAST_MASTER_8: Level = {
  replace: "Ranger (Beast Master) 7",
  label: "Ranger (Beast Master) 8",
  choices: [
    ...PHB_RANGER_8.choices
  ],
  longRest: [
    ...PHB_RANGER_8.longRest
  ]
} as const;
const PHB_RANGER_BEAST_MASTER_9: Level = {
  replace: "Ranger (Beast Master) 8",
  label: "Ranger (Beast Master) 9",
  choices: [
    ...PHB_RANGER_9.choices
  ],
  longRest: [
    ...PHB_RANGER_9.longRest
  ]
} as const;
const PHB_RANGER_BEAST_MASTER_10: Level = {
  replace: "Ranger (Beast Master) 9",
  label: "Ranger (Beast Master) 10",
  choices: [
    ...PHB_RANGER_10.choices
  ],
  longRest: [
    ...PHB_RANGER_10.longRest
  ]
} as const;
const PHB_RANGER_BEAST_MASTER_11: Level = {
  replace: "Ranger (Beast Master) 10",
  label: "Ranger (Beast Master) 11",
  choices: [
    ...PHB_RANGER_11.choices
  ],
  longRest: [
    ...PHB_RANGER_11.longRest
  ]
} as const;
const PHB_RANGER_BEAST_MASTER_12: Level = {
  replace: "Ranger (Beast Master) 11",
  label: "Ranger (Beast Master) 12",
  choices: [
    ...PHB_RANGER_12.choices
  ],
  longRest: [
    ...PHB_RANGER_12.longRest
  ]
} as const;


export default {
  [PHB_RANGER_BEAST_MASTER_3.label]: PHB_RANGER_BEAST_MASTER_3,
  [PHB_RANGER_BEAST_MASTER_4.label]: PHB_RANGER_BEAST_MASTER_4,
  [PHB_RANGER_BEAST_MASTER_5.label]: PHB_RANGER_BEAST_MASTER_5,
  [PHB_RANGER_BEAST_MASTER_6.label]: PHB_RANGER_BEAST_MASTER_6,
  [PHB_RANGER_BEAST_MASTER_7.label]: PHB_RANGER_BEAST_MASTER_7,
  [PHB_RANGER_BEAST_MASTER_8.label]: PHB_RANGER_BEAST_MASTER_8,
  [PHB_RANGER_BEAST_MASTER_9.label]: PHB_RANGER_BEAST_MASTER_9,
  [PHB_RANGER_BEAST_MASTER_10.label]: PHB_RANGER_BEAST_MASTER_10,
  [PHB_RANGER_BEAST_MASTER_11.label]: PHB_RANGER_BEAST_MASTER_11,
  [PHB_RANGER_BEAST_MASTER_12.label]: PHB_RANGER_BEAST_MASTER_12,
} as const satisfies {[levelID: ClassID]: Level};
