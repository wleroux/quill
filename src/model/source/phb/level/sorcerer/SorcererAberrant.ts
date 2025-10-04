import {ClassID, Level} from "@/model/source/model/Level";
import {
  PHB_SORCERER_10, PHB_SORCERER_11, PHB_SORCERER_12,
  PHB_SORCERER_3,
  PHB_SORCERER_4,
  PHB_SORCERER_5,
  PHB_SORCERER_6,
  PHB_SORCERER_7,
  PHB_SORCERER_8,
  PHB_SORCERER_9
} from "@/model/source/phb/level/sorcerer/SorcererBase";
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
const PHB_SORCERER_ABERRANT_5: Level = {
  replace: "Sorcerer (Aberrant) 4",
  label: "Sorcerer (Aberrant) 5",
  choices: [
    ...PHB_SORCERER_5.choices,
    {type: "spell", data: {
      choiceID: "sorcerer (aberrant)::spell-6",
      condition: is<SpellID>("Hunger of Hadar")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (aberrant)::spell-7",
      condition: is<SpellID>("Sending")
    }},
  ],
  longRest: [
    ...PHB_SORCERER_5.longRest
  ]
} as const;;
const PHB_SORCERER_ABERRANT_6: Level = {
  replace: "Sorcerer (Aberrant) 5",
  label: "Sorcerer (Aberrant) 6",
  choices: [
    ...PHB_SORCERER_6.choices
  ],
  longRest: [
    ...PHB_SORCERER_6.longRest
  ]
} as const;;
const PHB_SORCERER_ABERRANT_7: Level = {
  replace: "Sorcerer (Aberrant) 6",
  label: "Sorcerer (Aberrant) 7",
  choices: [
    ...PHB_SORCERER_7.choices,
    {type: "spell", data: {
      choiceID: "sorcerer (aberrant)::spell-8",
      condition: is<SpellID>("Evard's Black Tentacles")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (aberrant)::spell-9",
      condition: is<SpellID>("Summon Aberration")
    }},
  ],
  longRest: [
    ...PHB_SORCERER_7.longRest
  ]
} as const;;
const PHB_SORCERER_ABERRANT_8: Level = {
  replace: "Sorcerer (Aberrant) 7",
  label: "Sorcerer (Aberrant) 8",
  choices: [
    ...PHB_SORCERER_8.choices
  ],
  longRest: [
    ...PHB_SORCERER_8.longRest
  ]
} as const;;
const PHB_SORCERER_ABERRANT_9: Level = {
  replace: "Sorcerer (Aberrant) 8",
  label: "Sorcerer (Aberrant) 9",
  choices: [
    ...PHB_SORCERER_9.choices,
    {type: "spell", data: {
      choiceID: "sorcerer (aberrant)::spell-10",
      condition: is<SpellID>("Rary's Telepathic Bond")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (aberrant)::spell-11",
      condition: is<SpellID>("Telekinesis")
    }},
  ],
  longRest: [
    ...PHB_SORCERER_9.longRest
  ]
} as const;;
const PHB_SORCERER_ABERRANT_10: Level = {
  replace: "Sorcerer (Aberrant) 9",
  label: "Sorcerer (Aberrant) 10",
  choices: [
    ...PHB_SORCERER_10.choices
  ],
  longRest: [
    ...PHB_SORCERER_10.longRest
  ]
} as const;;
const PHB_SORCERER_ABERRANT_11: Level = {
  replace: "Sorcerer (Aberrant) 10",
  label: "Sorcerer (Aberrant) 11",
  choices: [
    ...PHB_SORCERER_11.choices
  ],
  longRest: [
    ...PHB_SORCERER_11.longRest
  ]
} as const;;
const PHB_SORCERER_ABERRANT_12: Level = {
  replace: "Sorcerer (Aberrant) 11",
  label: "Sorcerer (Aberrant) 12",
  choices: [
    ...PHB_SORCERER_12.choices
  ],
  longRest: [
    ...PHB_SORCERER_12.longRest
  ]
} as const;

export default {
  [PHB_SORCERER_ABERRANT_3.label]: PHB_SORCERER_ABERRANT_3,
  [PHB_SORCERER_ABERRANT_4.label]: PHB_SORCERER_ABERRANT_4,
  [PHB_SORCERER_ABERRANT_5.label]: PHB_SORCERER_ABERRANT_5,
  [PHB_SORCERER_ABERRANT_6.label]: PHB_SORCERER_ABERRANT_6,
  [PHB_SORCERER_ABERRANT_7.label]: PHB_SORCERER_ABERRANT_7,
  [PHB_SORCERER_ABERRANT_8.label]: PHB_SORCERER_ABERRANT_8,
  [PHB_SORCERER_ABERRANT_9.label]: PHB_SORCERER_ABERRANT_9,
  [PHB_SORCERER_ABERRANT_10.label]: PHB_SORCERER_ABERRANT_10,
  [PHB_SORCERER_ABERRANT_11.label]: PHB_SORCERER_ABERRANT_11,
  [PHB_SORCERER_ABERRANT_12.label]: PHB_SORCERER_ABERRANT_12,
} as const satisfies {[levelID: ClassID]: Level};
