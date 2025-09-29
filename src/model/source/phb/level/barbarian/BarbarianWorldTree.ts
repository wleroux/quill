import {ClassID, Level} from "@/model/source/model/Level";
import {
  PHB_BARBARIAN_10,
  PHB_BARBARIAN_11,
  PHB_BARBARIAN_12,
  PHB_BARBARIAN_3,
  PHB_BARBARIAN_4,
  PHB_BARBARIAN_5,
  PHB_BARBARIAN_6,
  PHB_BARBARIAN_7,
  PHB_BARBARIAN_8,
  PHB_BARBARIAN_9
} from "@/model/source/phb/level/barbarian/BarbarianBase";

const PHB_BARBARIAN_WORLD_TREE_3: Level = {
  replace: "Barbarian 2",
  label: "Barbarian (World Tree) 3",
  choices: [
    ...PHB_BARBARIAN_3.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_3.longRest
  ]
};
const PHB_BARBARIAN_WORLD_TREE_4: Level = {
  replace: "Barbarian (World Tree) 3",
  label: "Barbarian (World Tree) 4",
  choices: [
    ...PHB_BARBARIAN_4.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_4.longRest
  ]
};
const PHB_BARBARIAN_WORLD_TREE_5: Level = {
  replace: "Barbarian (World Tree) 4",
  label: "Barbarian (World Tree) 5",
  choices: [
    ...PHB_BARBARIAN_5.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_5.longRest
  ]
};
const PHB_BARBARIAN_WORLD_TREE_6: Level = {
  replace: "Barbarian (World Tree) 5",
  label: "Barbarian (World Tree) 6",
  choices: [
    ...PHB_BARBARIAN_6.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_6.longRest,
  ]
};
const PHB_BARBARIAN_WORLD_TREE_7: Level = {
  replace: "Barbarian (World Tree) 6",
  label: "Barbarian (World Tree) 7",
  choices: [
    ...PHB_BARBARIAN_7.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_7.longRest
  ]
};
const PHB_BARBARIAN_WORLD_TREE_8: Level = {
  replace: "Barbarian (World Tree) 7",
  label: "Barbarian (World Tree) 8",
  choices: [
    ...PHB_BARBARIAN_8.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_8.longRest
  ]
};
const PHB_BARBARIAN_WORLD_TREE_9: Level = {
  replace: "Barbarian (World Tree) 8",
  label: "Barbarian (World Tree) 9",
  choices: [
    ...PHB_BARBARIAN_9.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_9.longRest
  ]
};
const PHB_BARBARIAN_WORLD_TREE_10: Level = {
  replace: "Barbarian (World Tree) 9",
  label: "Barbarian (World Tree) 10",
  choices: [
    ...PHB_BARBARIAN_10.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_10.longRest
  ]
};
const PHB_BARBARIAN_WORLD_TREE_11: Level = {
  replace: "Barbarian (World Tree) 10",
  label: "Barbarian (World Tree) 11",
  choices: [
    ...PHB_BARBARIAN_11.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_11.longRest
  ]
};
const PHB_BARBARIAN_WORLD_TREE_12: Level = {
  replace: "Barbarian (World Tree) 11",
  label: "Barbarian (World Tree) 12",
  choices: [
    ...PHB_BARBARIAN_12.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_12.longRest
  ]
};

export default {
  [PHB_BARBARIAN_WORLD_TREE_3.label]: PHB_BARBARIAN_WORLD_TREE_3,
  [PHB_BARBARIAN_WORLD_TREE_4.label]: PHB_BARBARIAN_WORLD_TREE_4,
  [PHB_BARBARIAN_WORLD_TREE_5.label]: PHB_BARBARIAN_WORLD_TREE_5,
  [PHB_BARBARIAN_WORLD_TREE_6.label]: PHB_BARBARIAN_WORLD_TREE_6,
  [PHB_BARBARIAN_WORLD_TREE_7.label]: PHB_BARBARIAN_WORLD_TREE_7,
  [PHB_BARBARIAN_WORLD_TREE_8.label]: PHB_BARBARIAN_WORLD_TREE_8,
  [PHB_BARBARIAN_WORLD_TREE_9.label]: PHB_BARBARIAN_WORLD_TREE_9,
  [PHB_BARBARIAN_WORLD_TREE_10.label]: PHB_BARBARIAN_WORLD_TREE_10,
  [PHB_BARBARIAN_WORLD_TREE_11.label]: PHB_BARBARIAN_WORLD_TREE_11,
  [PHB_BARBARIAN_WORLD_TREE_12.label]: PHB_BARBARIAN_WORLD_TREE_12,
} as const satisfies {[levelID: ClassID]: Level};
