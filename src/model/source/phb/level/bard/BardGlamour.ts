import { is } from "@/model/source/condition/generic/IsCondition";
import {ClassID, Level} from "@/model/source/model/Level";
import {
  BASE_BARD_10,
  BASE_BARD_11,
  BASE_BARD_12,
  BASE_BARD_3,
  BASE_BARD_4,
  BASE_BARD_5,
  BASE_BARD_6,
  BASE_BARD_7,
  BASE_BARD_8,
  BASE_BARD_9
} from "@/model/source/phb/level/bard/BardBase";
import {not} from "@/model/source/condition/generic/NotCondition";

const PHB_BARD_GLAMOUR_3: Level = {
  label: "Bard (Glamour) 3",
  replace: "Bard 2",
  choices: [
    ...BASE_BARD_3.choices,
    {type: "spell", data: {
      choiceID: "bard (glamour)::spell-1",
      condition: is("Charm Person")
    }},
    {type: "spell", data: {
      choiceID: "bard (glamour)::spell-2",
      condition: is("Mirror Image")
    }}
  ],
  longRest: [
    ...BASE_BARD_3.longRest
  ]
};
const PHB_BARD_GLAMOUR_4: Level = {
  label: "Bard (Glamour) 4",
  replace: "Bard (Glamour) 3",
  choices: [
    ...BASE_BARD_4.choices
  ],
  longRest: [
    ...BASE_BARD_4.longRest
  ]
};
const PHB_BARD_GLAMOUR_5: Level = {
  label: "Bard (Glamour) 5",
  replace: "Bard (Glamour) 4",
  choices: [
    ...BASE_BARD_5.choices,
    {type: "spell", data: {
      choiceID: "glamour-spell",
      condition: is("Command")
    }}
  ],
  longRest: [
    ...BASE_BARD_5.longRest
  ]
};
const PHB_BARD_GLAMOUR_6: Level = {
  label: "Bard (Glamour) 6",
  replace: "Bard (Glamour) 5",
  choices: [
    ...BASE_BARD_6.choices
  ],
  longRest: [
    ...BASE_BARD_6.longRest
  ]
};
const PHB_BARD_GLAMOUR_7: Level = {
  label: "Bard (Glamour) 7",
  replace: "Bard (Glamour) 6",
  choices: [
    ...BASE_BARD_7.choices
  ],
  longRest: [
    ...BASE_BARD_7.longRest
  ]
};
const PHB_BARD_GLAMOUR_8: Level = {
  label: "Bard (Glamour) 8",
  replace: "Bard (Glamour) 7",
  choices: [
    ...BASE_BARD_8.choices
  ],
  longRest: [
    ...BASE_BARD_8.longRest
  ]
};
const PHB_BARD_GLAMOUR_9: Level = {
  label: "Bard (Glamour) 9",
  replace: "Bard (Glamour) 8",
  choices: [
    ...BASE_BARD_9.choices
  ],
  longRest: [
    ...BASE_BARD_9.longRest
  ]
};
const PHB_BARD_GLAMOUR_10: Level = {
  label: "Bard (Glamour) 10",
  replace: "Bard (Glamour) 9",
  choices: [
    ...BASE_BARD_10.choices
  ],
  longRest: [
    ...BASE_BARD_10.longRest
  ]
};
const PHB_BARD_GLAMOUR_11: Level = {
  label: "Bard (Glamour) 11",
  replace: "Bard (Glamour) 10",
  choices: [
    ...BASE_BARD_11.choices
  ],
  longRest: [
    ...BASE_BARD_11.longRest
  ]
};
const PHB_BARD_GLAMOUR_12: Level = {
  label: "Bard (Glamour) 12",
  replace: "Bard (Glamour) 11",
  choices: [
    ...BASE_BARD_12.choices
  ],
  longRest: [
    ...BASE_BARD_12.longRest
  ]
};

export default {
  [PHB_BARD_GLAMOUR_3.label]: PHB_BARD_GLAMOUR_3,
  [PHB_BARD_GLAMOUR_4.label]: PHB_BARD_GLAMOUR_4,
  [PHB_BARD_GLAMOUR_5.label]: PHB_BARD_GLAMOUR_5,
  [PHB_BARD_GLAMOUR_6.label]: PHB_BARD_GLAMOUR_6,
  [PHB_BARD_GLAMOUR_7.label]: PHB_BARD_GLAMOUR_7,
  [PHB_BARD_GLAMOUR_8.label]: PHB_BARD_GLAMOUR_8,
  [PHB_BARD_GLAMOUR_9.label]: PHB_BARD_GLAMOUR_9,
  [PHB_BARD_GLAMOUR_10.label]: PHB_BARD_GLAMOUR_10,
  [PHB_BARD_GLAMOUR_11.label]: PHB_BARD_GLAMOUR_11,
  [PHB_BARD_GLAMOUR_12.label]: PHB_BARD_GLAMOUR_12
} as const satisfies {[levelID: ClassID]: Level};