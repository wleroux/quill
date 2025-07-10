import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_RANGER_3, PHB_RANGER_4} from "@/model/source/phb/level/ranger/RangerBase";

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

export default {
  [PHB_RANGER_BEAST_MASTER_3.label]: PHB_RANGER_BEAST_MASTER_3,
  [PHB_RANGER_BEAST_MASTER_4.label]: PHB_RANGER_BEAST_MASTER_4
} as const satisfies {[levelID: ClassID]: Level};
