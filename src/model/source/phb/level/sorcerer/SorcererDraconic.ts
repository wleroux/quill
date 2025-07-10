import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_SORCERER_3, PHB_SORCERER_4} from "@/model/source/phb/level/sorcerer/SorcererBase";
import {is} from "@/model/source/condition/generic/IsCondition";
import {SpellID} from "@/model/source/model/Spell";

const PHB_SORCERER_DRACONIC_3: Level = {
  replace: "Sorcerer 2",
  label: "Sorcerer (Draconic) 3",
  choices: [
    ...PHB_SORCERER_3.choices,
    {type: "spell", data: {
      choiceID: "sorcerer (draconic)::spell-1",
      condition: is<SpellID>("Alter Self")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (draconic)::spell-2",
      condition: is<SpellID>("Chromatic Orb")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (draconic)::spell-3",
      condition: is<SpellID>("Command")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (draconic)::spell-4",
      condition: is<SpellID>("Dragon's Breath")
    }}
  ],
  longRest: [
    ...PHB_SORCERER_3.longRest
  ]
} as const;
const PHB_SORCERER_DRACONIC_4: Level = {
  replace: "Sorcerer (Draconic) 3",
  label: "Sorcerer (Draconic) 4",
  choices: [
    ...PHB_SORCERER_4.choices
  ],
  longRest: [
    ...PHB_SORCERER_4.longRest
  ]
} as const;

export default {
  [PHB_SORCERER_DRACONIC_3.label]: PHB_SORCERER_DRACONIC_3,
  [PHB_SORCERER_DRACONIC_4.label]: PHB_SORCERER_DRACONIC_4
} as const satisfies {[levelID: ClassID]: Level};
