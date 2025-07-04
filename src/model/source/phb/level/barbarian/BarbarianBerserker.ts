import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_BARBARIAN_3, PHB_BARBARIAN_4} from "@/model/source/phb/level/barbarian/BarbarianBase";

const PHB_BARBARIAN_BERSERKER_3: Level = {
  replace: "Barbarian 2",
  label: "Barbarian (Berserker) 3",
  choices: [
    ...PHB_BARBARIAN_3.choices
  ]
};
const PHB_BARBARIAN_BERSERKER_4: Level = {
  replace: "Barbarian (Berserker) 3",
  label: "Barbarian (Berserker) 4",
  choices: [
    ...PHB_BARBARIAN_4.choices
  ]
};

export default {
  [PHB_BARBARIAN_BERSERKER_3.label]: PHB_BARBARIAN_BERSERKER_3,
  [PHB_BARBARIAN_BERSERKER_4.label]: PHB_BARBARIAN_BERSERKER_4,
} as const satisfies {[levelID: ClassID]: Level};
