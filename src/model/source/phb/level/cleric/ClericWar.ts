import { is } from "@/model/source/condition/generic/IsCondition";
import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_CLERIC_3, PHB_CLERIC_4} from "@/model/source/phb/level/cleric/ClericBase";

const PHB_CLERIC_WAR_3: Level = {
  replace: "Cleric 2",
  label: "Cleric (War) 3",
  choices: [
    ...PHB_CLERIC_3.choices,
    {type: "spell", data: {
      choiceID: "cleric (war)::spell-1",
      sourceID: "cleric (war)::spell-1",
      condition: is("Guiding Bolt")
    }},
    {type: "spell", data: {
      choiceID: "cleric (war)::spell-2",
      sourceID: "cleric (war)::spell-2",
      condition: is("Magic Weapon")
    }},
    {type: "spell", data: {
      choiceID: "cleric (war)::spell-3",
      sourceID: "cleric (war)::spell-3",
      condition: is("Shield of Faith")
    }},
    {type: "spell", data: {
      choiceID: "cleric (war)::spell-4",
      sourceID: "cleric (war)::spell-4",
      condition: is("Spiritual Weapon")
    }}
  ]
} as const;
const PHB_CLERIC_WAR_4: Level = {
  label: "Cleric (War) 4",
  replace: "Cleric (War) 3",
  choices: [
    ...PHB_CLERIC_4.choices
  ]
} as const;

export default {
  [PHB_CLERIC_WAR_3.label]: PHB_CLERIC_WAR_3,
  [PHB_CLERIC_WAR_4.label]: PHB_CLERIC_WAR_4
} as const satisfies {[levelID: ClassID]: Level};
