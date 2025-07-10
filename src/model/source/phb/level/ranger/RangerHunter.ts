import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_RANGER_3, PHB_RANGER_4} from "@/model/source/phb/level/ranger/RangerBase";

const PHB_RANGER_HUNTER_3: Level = {
  replace: "Ranger 2",
  label: "Ranger (Hunter) 3",
  choices: [
    ...PHB_RANGER_3.choices
  ],
  longRest: [
    ...PHB_RANGER_3.longRest,
    {type: "simple", data: {
      choiceID: "ranger (hunter)::hunter's prey",
      label: "Hunter's Prey",
      options: [
        {optionID: "Colossus Slayer", label: "Colossus Slayer"},
        {optionID: "Horde Breaker", label: "Horde Breaker"}
      ]
    }}
  ]
} as const;

const PHB_RANGER_HUNTER_4: Level = {
  replace: "Ranger (Hunter) 3",
  label: "Ranger (Hunter) 4",
  choices: [
    ...PHB_RANGER_4.choices
  ],
  longRest: [
    ...PHB_RANGER_4.longRest
  ]
} as const;

export default {
  [PHB_RANGER_HUNTER_3.label]: PHB_RANGER_HUNTER_3,
  [PHB_RANGER_HUNTER_4.label]: PHB_RANGER_HUNTER_4
} as const satisfies {[levelID: ClassID]: Level};

