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

const PHB_BARD_VALOR_3: Level = {
  label: "Bard (Valor) 3",
  replace: "Bard 2",
  choices: [
    ...BASE_BARD_3.choices
  ],
  longRest: [
    ...BASE_BARD_3.longRest
  ]
};
const PHB_BARD_VALOR_4: Level = {
  label: "Bard (Valor) 4",
  replace: "Bard (Valor) 3",
  choices: [
    ...BASE_BARD_4.choices
  ],
  longRest: [
    ...BASE_BARD_4.longRest
  ]
};
const PHB_BARD_VALOR_5: Level = {
  label: "Bard (Valor) 5",
  replace: "Bard (Valor) 4",
  choices: [
    ...BASE_BARD_5.choices
  ],
  longRest: [
    ...BASE_BARD_5.longRest
  ]
};
const PHB_BARD_VALOR_6: Level = {
  label: "Bard (Valor) 6",
  replace: "Bard (Valor) 5",
  choices: [
    ...BASE_BARD_6.choices
  ],
  longRest: [
    ...BASE_BARD_6.longRest
  ]
};
const PHB_BARD_VALOR_7: Level = {
  label: "Bard (Valor) 7",
  replace: "Bard (Valor) 6",
  choices: [
    ...BASE_BARD_7.choices
  ],
  longRest: [
    ...BASE_BARD_7.longRest
  ]
};
const PHB_BARD_VALOR_8: Level = {
  label: "Bard (Valor) 8",
  replace: "Bard (Valor) 7",
  choices: [
    ...BASE_BARD_8.choices
  ],
  longRest: [
    ...BASE_BARD_8.longRest
  ]
};
const PHB_BARD_VALOR_9: Level = {
  label: "Bard (Valor) 9",
  replace: "Bard (Valor) 8",
  choices: [
    ...BASE_BARD_9.choices
  ],
  longRest: [
    ...BASE_BARD_9.longRest
  ]
};
const PHB_BARD_VALOR_10: Level = {
  label: "Bard (Valor) 10",
  replace: "Bard (Valor) 9",
  choices: [
    ...BASE_BARD_10.choices
  ],
  longRest: [
    ...BASE_BARD_10.longRest
  ]
};
const PHB_BARD_VALOR_11: Level = {
  label: "Bard (Valor) 11",
  replace: "Bard (Valor) 10",
  choices: [
    ...BASE_BARD_11.choices
  ],
  longRest: [
    ...BASE_BARD_11.longRest
  ]
};
const PHB_BARD_VALOR_12: Level = {
  label: "Bard (Valor) 12",
  replace: "Bard (Valor) 11",
  choices: [
    ...BASE_BARD_12.choices
  ],
  longRest: [
    ...BASE_BARD_12.longRest
  ]
};

export default {
  [PHB_BARD_VALOR_3.label]: PHB_BARD_VALOR_3,
  [PHB_BARD_VALOR_4.label]: PHB_BARD_VALOR_4,
  [PHB_BARD_VALOR_5.label]: PHB_BARD_VALOR_5,
  [PHB_BARD_VALOR_6.label]: PHB_BARD_VALOR_6,
  [PHB_BARD_VALOR_7.label]: PHB_BARD_VALOR_7,
  [PHB_BARD_VALOR_8.label]: PHB_BARD_VALOR_8,
  [PHB_BARD_VALOR_9.label]: PHB_BARD_VALOR_9,
  [PHB_BARD_VALOR_10.label]: PHB_BARD_VALOR_10,
  [PHB_BARD_VALOR_11.label]: PHB_BARD_VALOR_11,
  [PHB_BARD_VALOR_12.label]: PHB_BARD_VALOR_12
} as const satisfies {[levelID: ClassID]: Level};