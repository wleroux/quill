import {ClassID, Level} from "@/model/source/model/Level";
import {BASE_BARD_3, BASE_BARD_4} from "@/model/source/phb/level/bard/BardBase";

const PHB_BARD_DANCE_3: Level = {
  label: "Bard (Dance) 3",
  replace: "Bard 2",
  choices: [
    ...BASE_BARD_3.choices
  ]
};
const PHB_BARD_DANCE_4: Level = {
  label: "Bard (Dance) 4",
  replace: "Bard (Dance) 3",
  choices: [
    ...BASE_BARD_4.choices
  ]
};

export default {
  [PHB_BARD_DANCE_3.label]: PHB_BARD_DANCE_3,
  [PHB_BARD_DANCE_4.label]: PHB_BARD_DANCE_4
} as const satisfies {[levelID: ClassID]: Level};