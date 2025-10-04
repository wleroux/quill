import {ClassID, Level} from "@/model/source/model/Level";
import {
  PHB_SORCERER_10, PHB_SORCERER_11, PHB_SORCERER_12,
  PHB_SORCERER_3,
  PHB_SORCERER_4,
  PHB_SORCERER_5,
  PHB_SORCERER_6,
  PHB_SORCERER_7,
  PHB_SORCERER_8,
  PHB_SORCERER_9
} from "@/model/source/phb/level/sorcerer/SorcererBase";

const PHB_SORCERER_WILD_MAGIC_3: Level = {
  replace: "Sorcerer 2",
  label: "Sorcerer (Wild Magic) 3",
  choices: [
    ...PHB_SORCERER_3.choices
  ],
  longRest: [
    ...PHB_SORCERER_3.longRest
  ]
} as const;
const PHB_SORCERER_WILD_MAGIC_4: Level = {
  replace: "Sorcerer (Wild Magic) 3",
  label: "Sorcerer (Wild Magic) 4",
  choices: [
    ...PHB_SORCERER_4.choices
  ],
  longRest: [
    ...PHB_SORCERER_4.longRest
  ]
} as const;
const PHB_SORCERER_WILD_MAGIC_5: Level = {
  replace: "Sorcerer (Wild Magic) 4",
  label: "Sorcerer (Wild Magic) 5",
  choices: [
    ...PHB_SORCERER_5.choices
  ],
  longRest: [
    ...PHB_SORCERER_5.longRest
  ]
} as const;;
const PHB_SORCERER_WILD_MAGIC_6: Level = {
  replace: "Sorcerer (Wild Magic) 5",
  label: "Sorcerer (Wild Magic) 6",
  choices: [
    ...PHB_SORCERER_6.choices
  ],
  longRest: [
    ...PHB_SORCERER_6.longRest
  ]
} as const;;
const PHB_SORCERER_WILD_MAGIC_7: Level = {
  replace: "Sorcerer (Wild Magic) 6",
  label: "Sorcerer (Wild Magic) 7",
  choices: [
    ...PHB_SORCERER_7.choices
  ],
  longRest: [
    ...PHB_SORCERER_7.longRest
  ]
} as const;;
const PHB_SORCERER_WILD_MAGIC_8: Level = {
  replace: "Sorcerer (Wild Magic) 7",
  label: "Sorcerer (Wild Magic) 8",
  choices: [
    ...PHB_SORCERER_8.choices
  ],
  longRest: [
    ...PHB_SORCERER_8.longRest
  ]
} as const;;
const PHB_SORCERER_WILD_MAGIC_9: Level = {
  replace: "Sorcerer (Wild Magic) 8",
  label: "Sorcerer (Wild Magic) 9",
  choices: [
    ...PHB_SORCERER_9.choices
  ],
  longRest: [
    ...PHB_SORCERER_9.longRest
  ]
} as const;;
const PHB_SORCERER_WILD_MAGIC_10: Level = {
  replace: "Sorcerer (Wild Magic) 9",
  label: "Sorcerer (Wild Magic) 10",
  choices: [
    ...PHB_SORCERER_10.choices
  ],
  longRest: [
    ...PHB_SORCERER_10.longRest
  ]
} as const;;
const PHB_SORCERER_WILD_MAGIC_11: Level = {
  replace: "Sorcerer (Wild Magic) 10",
  label: "Sorcerer (Wild Magic) 11",
  choices: [
    ...PHB_SORCERER_11.choices
  ],
  longRest: [
    ...PHB_SORCERER_11.longRest
  ]
} as const;;
const PHB_SORCERER_WILD_MAGIC_12: Level = {
  replace: "Sorcerer (Wild Magic) 11",
  label: "Sorcerer (Wild Magic) 12",
  choices: [
    ...PHB_SORCERER_12.choices
  ],
  longRest: [
    ...PHB_SORCERER_12.longRest
  ]
} as const;

export default {
  [PHB_SORCERER_WILD_MAGIC_3.label]: PHB_SORCERER_WILD_MAGIC_3,
  [PHB_SORCERER_WILD_MAGIC_4.label]: PHB_SORCERER_WILD_MAGIC_4,
  [PHB_SORCERER_WILD_MAGIC_5.label]: PHB_SORCERER_WILD_MAGIC_5,
  [PHB_SORCERER_WILD_MAGIC_6.label]: PHB_SORCERER_WILD_MAGIC_6,
  [PHB_SORCERER_WILD_MAGIC_7.label]: PHB_SORCERER_WILD_MAGIC_7,
  [PHB_SORCERER_WILD_MAGIC_8.label]: PHB_SORCERER_WILD_MAGIC_8,
  [PHB_SORCERER_WILD_MAGIC_9.label]: PHB_SORCERER_WILD_MAGIC_9,
  [PHB_SORCERER_WILD_MAGIC_10.label]: PHB_SORCERER_WILD_MAGIC_10,
  [PHB_SORCERER_WILD_MAGIC_11.label]: PHB_SORCERER_WILD_MAGIC_11,
  [PHB_SORCERER_WILD_MAGIC_12.label]: PHB_SORCERER_WILD_MAGIC_12,
} as const satisfies {[levelID: ClassID]: Level};
