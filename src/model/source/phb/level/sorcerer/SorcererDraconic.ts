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
const PHB_SORCERER_DRACONIC_5: Level = {
  replace: "Sorcerer (Draconic) 4",
  label: "Sorcerer (Draconic) 5",
  choices: [
    ...PHB_SORCERER_5.choices,
    {type: "spell", data: {
      choiceID: "sorcerer (dragonic)::spell-5",
      condition: is("Fear")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (dragonic)::spell-6",
      condition: is("Fly")
    }}
  ],
  longRest: [
    ...PHB_SORCERER_5.longRest
  ]
} as const;;
const PHB_SORCERER_DRACONIC_6: Level = {
  replace: "Sorcerer (Draconic) 5",
  label: "Sorcerer (Draconic) 6",
  choices: [
    ...PHB_SORCERER_6.choices,
    {type: "simple", data: {
      choiceID: "sorcerer (dragonic)::elemental affinity",
      label: "Elemental Affinity",
      options: [
        {optionID: "acid", label: "Acid"},
        {optionID: "cold", label: "Cold"},
        {optionID: "fire", label: "Fire"},
        {optionID: "lightning", label: "Lightning"},
        {optionID: "poison", label: "Poison"},
      ]
    }}
  ],
  longRest: [
    ...PHB_SORCERER_6.longRest
  ]
} as const;;
const PHB_SORCERER_DRACONIC_7: Level = {
  replace: "Sorcerer (Draconic) 6",
  label: "Sorcerer (Draconic) 7",
  choices: [
    ...PHB_SORCERER_7.choices,
    {type: "spell", data: {
      choiceID: "sorcerer (dragonic)::spell-7",
      condition: is("Arcane Eye")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (dragonic)::spell-8",
      condition: is("Charm Monster")
    }}
  ],
  longRest: [
    ...PHB_SORCERER_7.longRest
  ]
} as const;;
const PHB_SORCERER_DRACONIC_8: Level = {
  replace: "Sorcerer (Draconic) 7",
  label: "Sorcerer (Draconic) 8",
  choices: [
    ...PHB_SORCERER_8.choices
  ],
  longRest: [
    ...PHB_SORCERER_8.longRest
  ]
} as const;;
const PHB_SORCERER_DRACONIC_9: Level = {
  replace: "Sorcerer (Draconic) 8",
  label: "Sorcerer (Draconic) 9",
  choices: [
    ...PHB_SORCERER_9.choices,
    {type: "spell", data: {
      choiceID: "sorcerer (dragonic)::spell-7",
      condition: is("Legend Lore")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (dragonic)::spell-8",
      condition: is("Summon Dragon")
    }}
  ],
  longRest: [
    ...PHB_SORCERER_9.longRest
  ]
} as const;;
const PHB_SORCERER_DRACONIC_10: Level = {
  replace: "Sorcerer (Draconic) 9",
  label: "Sorcerer (Draconic) 10",
  choices: [
    ...PHB_SORCERER_10.choices
  ],
  longRest: [
    ...PHB_SORCERER_10.longRest
  ]
} as const;;
const PHB_SORCERER_DRACONIC_11: Level = {
  replace: "Sorcerer (Draconic) 10",
  label: "Sorcerer (Draconic) 11",
  choices: [
    ...PHB_SORCERER_11.choices
  ],
  longRest: [
    ...PHB_SORCERER_11.longRest
  ]
} as const;;
const PHB_SORCERER_DRACONIC_12: Level = {
  replace: "Sorcerer (Draconic) 11",
  label: "Sorcerer (Draconic) 12",
  choices: [
    ...PHB_SORCERER_12.choices
  ],
  longRest: [
    ...PHB_SORCERER_12.longRest
  ]
} as const;

export default {
  [PHB_SORCERER_DRACONIC_3.label]: PHB_SORCERER_DRACONIC_3,
  [PHB_SORCERER_DRACONIC_4.label]: PHB_SORCERER_DRACONIC_4,
  [PHB_SORCERER_DRACONIC_5.label]: PHB_SORCERER_DRACONIC_5,
  [PHB_SORCERER_DRACONIC_6.label]: PHB_SORCERER_DRACONIC_6,
  [PHB_SORCERER_DRACONIC_7.label]: PHB_SORCERER_DRACONIC_7,
  [PHB_SORCERER_DRACONIC_8.label]: PHB_SORCERER_DRACONIC_8,
  [PHB_SORCERER_DRACONIC_9.label]: PHB_SORCERER_DRACONIC_9,
  [PHB_SORCERER_DRACONIC_10.label]: PHB_SORCERER_DRACONIC_10,
  [PHB_SORCERER_DRACONIC_11.label]: PHB_SORCERER_DRACONIC_11,
  [PHB_SORCERER_DRACONIC_12.label]: PHB_SORCERER_DRACONIC_12,
} as const satisfies {[levelID: ClassID]: Level};
