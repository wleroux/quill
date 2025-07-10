import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_SORCERER_3, PHB_SORCERER_4} from "@/model/source/phb/level/sorcerer/SorcererBase";
import {is} from "@/model/source/condition/generic/IsCondition";
import {SpellID} from "@/model/source/model/Spell";

const PHB_SORCERER_ABERRANT_3: Level = {
  replace: "Sorcerer 2",
  label: "Sorcerer (Aberrant) 3",
  choices: [
    ...PHB_SORCERER_3.choices,
    {type: "spell", data: {
      choiceID: "sorcerer (aberrant)::spell-1",
      condition: is<SpellID>("Arms of Hadar")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (aberrant)::spell-2",
      condition: is<SpellID>("Calm Emotions")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (aberrant)::spell-3",
      condition: is<SpellID>("Detect Thoughts")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (aberrant)::spell-4",
      condition: is<SpellID>("Dissonant Whispers")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (aberrant)::spell-5",
      condition: is<SpellID>("Mind Sliver")
    }}
  ],
  longRest: [
    ...PHB_SORCERER_3.longRest
  ]
} as const;
const PHB_SORCERER_ABERRANT_4: Level = {
  replace: "Sorcerer (Aberrant) 3",
  label: "Sorcerer (Aberrant) 4",
  choices: [
    ...PHB_SORCERER_4.choices
  ],
  longRest: [
    ...PHB_SORCERER_4.longRest
  ]
} as const;

export default {
  [PHB_SORCERER_ABERRANT_3.label]: PHB_SORCERER_ABERRANT_3,
  [PHB_SORCERER_ABERRANT_4.label]: PHB_SORCERER_ABERRANT_4
} as const satisfies {[levelID: ClassID]: Level};
