import { is } from "@/model/source/condition/generic/IsCondition";
import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_CLERIC_3, PHB_CLERIC_4} from "@/model/source/phb/level/cleric/ClericBase";

const PHB_CLERIC_TRICKERY_3: Level = {
  replace: "Cleric 2",
  label: "Cleric (Trickery) 3",
  choices: [
    ...PHB_CLERIC_3.choices,
    {type: "spell", data: {
      choiceID: "cleric (trickery)::spell-1",
      sourceID: "cleric (trickery)::spell-1",
      condition: is("Charm Person")
    }},
    {type: "spell", data: {
      choiceID: "cleric (trickery)::spell-2",
      sourceID: "cleric (trickery)::spell-2",
      condition: is("Disguise Self")
    }},
    {type: "spell", data: {
      choiceID: "cleric (trickery)::spell-3",
      sourceID: "cleric (trickery)::spell-3",
      condition: is("Invisibility")
    }},
    {type: "spell", data: {
      choiceID: "cleric (trickery)::spell-4",
      sourceID: "cleric (trickery)::spell-4",
      condition: is("Pass without Trace")
    }}
  ]
} as const;
const PHB_CLERIC_TRICKERY_4: Level = {
  label: "Cleric (Trickery) 4",
  replace: "Cleric (Trickery) 3",
  choices: [
    ...PHB_CLERIC_4.choices
  ]
} as const;

export default {
  [PHB_CLERIC_TRICKERY_3.label]: PHB_CLERIC_TRICKERY_3,
  [PHB_CLERIC_TRICKERY_4.label]: PHB_CLERIC_TRICKERY_4
} as const satisfies {[levelID: ClassID]: Level};
