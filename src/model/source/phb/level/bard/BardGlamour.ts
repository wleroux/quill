import { is } from "@/model/source/condition/generic/IsCondition";
import {ClassID, Level} from "@/model/source/model/Level";
import {BASE_BARD_3, BASE_BARD_4} from "@/model/source/phb/level/bard/BardBase";

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
  ]
};
const PHB_BARD_GLAMOUR_4: Level = {
  label: "Bard (Glamour) 4",
  replace: "Bard (Glamour) 3",
  choices: [
    ...BASE_BARD_4.choices
  ]
};

export default {
  [PHB_BARD_GLAMOUR_3.label]: PHB_BARD_GLAMOUR_3,
  [PHB_BARD_GLAMOUR_4.label]: PHB_BARD_GLAMOUR_4
} as const satisfies {[levelID: ClassID]: Level};