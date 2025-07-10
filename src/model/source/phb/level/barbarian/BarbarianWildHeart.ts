import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_BARBARIAN_3, PHB_BARBARIAN_4} from "@/model/source/phb/level/barbarian/BarbarianBase";
import {is} from "@/model/source/condition/generic/IsCondition";

const PHB_BARBARIAN_WILD_HEART_3: Level = {
  replace: "Barbarian 2",
  label: "Barbarian (Wild Heart) 3",
  choices: [
    ...PHB_BARBARIAN_3.choices,
    {type: "spell", data: {
      label: "Animal Speaker",
      choiceID: "barbarian (wild heart)::spell-1",
      condition: is("Beast Sense"),
    }},
    {type: "spell", data: {
      label: "Animal Speaker",
      choiceID: "barbarian (wild heart)::spell-1",
      condition: is("Speak with Animals"),
    }}
  ],
  longRest: [
    ...PHB_BARBARIAN_3.longRest
  ]
};
const PHB_BARBARIAN_WILD_HEART_4: Level = {
  replace: "Barbarian (Wild Heart) 3",
  label: "Barbarian (Wild Heart) 4",
  choices: [
    ...PHB_BARBARIAN_4.choices
  ],
  longRest: [
    ...PHB_BARBARIAN_4.longRest
  ]
};

export default {
  [PHB_BARBARIAN_WILD_HEART_3.label]: PHB_BARBARIAN_WILD_HEART_3,
  [PHB_BARBARIAN_WILD_HEART_4.label]: PHB_BARBARIAN_WILD_HEART_4,
} as const satisfies {[levelID: ClassID]: Level};
