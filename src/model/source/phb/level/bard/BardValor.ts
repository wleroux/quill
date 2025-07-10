import {ClassID, Level} from "@/model/source/model/Level";
import {BASE_BARD_3, BASE_BARD_4} from "@/model/source/phb/level/bard/BardBase";

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

export default {
  [PHB_BARD_VALOR_3.label]: PHB_BARD_VALOR_3,
  [PHB_BARD_VALOR_4.label]: PHB_BARD_VALOR_4
} as const satisfies {[levelID: ClassID]: Level};