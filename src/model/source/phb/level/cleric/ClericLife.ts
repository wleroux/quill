import { is } from "@/model/source/condition/generic/IsCondition";
import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_CLERIC_3, PHB_CLERIC_4} from "@/model/source/phb/level/cleric/ClericBase";

const PHB_CLERIC_LIFE_3: Level = {
  replace: "Cleric 2",
  label: "Cleric (Life) 3",
  choices: [
    ...PHB_CLERIC_3.choices,
    {type: "spell", data: {
      choiceID: "cleric (life)::spell-1",
      condition: is("Aid")
    }},
    {type: "spell", data: {
      choiceID: "cleric (life)::spell-2",
      condition: is("Bless")
    }},
    {type: "spell", data: {
      choiceID: "cleric (life)::spell-3",
      condition: is("Cure Wounds")
    }},
    {type: "spell", data: {
      choiceID: "cleric (life)::spell-4",
      condition: is("Lesser Restoration")
    }}
  ]
} as const;
const PHB_CLERIC_LIFE_4: Level = {
  label: "Cleric (Life) 4",
  replace: "Cleric (Life) 3",
  choices: [
    ...PHB_CLERIC_4.choices
  ]
} as const;

export default {
  [PHB_CLERIC_LIFE_3.label]: PHB_CLERIC_LIFE_3,
  [PHB_CLERIC_LIFE_4.label]: PHB_CLERIC_LIFE_4
} as const satisfies {[levelID: ClassID]: Level};
