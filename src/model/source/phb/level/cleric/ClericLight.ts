import { is } from "@/model/source/condition/generic/IsCondition";
import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_CLERIC_3, PHB_CLERIC_4} from "@/model/source/phb/level/cleric/ClericBase";

const PHB_CLERIC_LIGHT_3: Level = {
  replace: "Cleric 2",
  label: "Cleric (Light) 3",
  choices: [
    ...PHB_CLERIC_3.choices,
    {type: "spell", data: {
      choiceID: "cleric (light)::spell-1",
      sourceID: "cleric (light)::spell-1",
      condition: is("Burning Hands")
    }},
    {type: "spell", data: {
      choiceID: "cleric (light)::spell-2",
      sourceID: "cleric (light)::spell-2",
      condition: is("Faerie Fire")
    }},
    {type: "spell", data: {
      choiceID: "cleric (light)::spell-3",
      sourceID: "cleric (light)::spell-3",
      condition: is("Scorching Ray")
    }},
    {type: "spell", data: {
      choiceID: "cleric (light)::spell-4",
      sourceID: "cleric (light)::spell-4",
      condition: is("See Invisibility")
    }}
  ]
} as const;
const PHB_CLERIC_LIGHT_4: Level = {
  label: "Cleric (Light) 4",
  replace: "Cleric (Light) 3",
  choices: [
    ...PHB_CLERIC_4.choices
  ]
} as const;

export default {
  [PHB_CLERIC_LIGHT_3.label]: PHB_CLERIC_LIGHT_3,
  [PHB_CLERIC_LIGHT_4.label]: PHB_CLERIC_LIGHT_4
} as const satisfies {[levelID: ClassID]: Level};
