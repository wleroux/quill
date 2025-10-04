import {ClassID, Level} from "@/model/source/model/Level";
import {
  PHB_SORCERER_10,
  PHB_SORCERER_11,
  PHB_SORCERER_12,
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

const PHB_SORCERER_CLOCKWORK_3: Level = {
  replace: "Sorcerer 2",
  label: "Sorcerer (Clockwork) 3",
  choices: [
    ...PHB_SORCERER_3.choices,
    {type: "spell", data: {
      choiceID: "sorcerer (clockwork)::spell-1",
      condition: is<SpellID>("Aid")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (clockwork)::spell-2",
      condition: is<SpellID>("Alarm")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (clockwork)::spell-3",
      condition: is<SpellID>("Lesser Restoration")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (clockwork)::spell-4",
      condition: is<SpellID>("Protection from Evil and Good")
    }}
  ],
  longRest: [
    ...PHB_SORCERER_3.longRest
  ]
} as const;
const PHB_SORCERER_CLOCKWORK_4: Level = {
  replace: "Sorcerer (Clockwork) 3",
  label: "Sorcerer (Clockwork) 4",
  choices: [
    ...PHB_SORCERER_4.choices
  ],
  longRest: [
    ...PHB_SORCERER_4.longRest
  ]
} as const;
const PHB_SORCERER_CLOCKWORK_5: Level = {
  replace: "Sorcerer (Clockwork) 4",
  label: "Sorcerer (Clockwork) 5",
  choices: [
    ...PHB_SORCERER_5.choices,
    {type: "spell", data: {
      choiceID: "sorcerer (clockwork)::spell-5",
      condition: is<SpellID>("Dispel Magic")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (clockwork)::spell-6",
      condition: is<SpellID>("Protection From Energy")
    }}
  ],
  longRest: [
    ...PHB_SORCERER_5.longRest
  ]
} as const;;
const PHB_SORCERER_CLOCKWORK_6: Level = {
  replace: "Sorcerer (Clockwork) 5",
  label: "Sorcerer (Clockwork) 6",
  choices: [
    ...PHB_SORCERER_6.choices
  ],
  longRest: [
    ...PHB_SORCERER_6.longRest
  ]
} as const;;
const PHB_SORCERER_CLOCKWORK_7: Level = {
  replace: "Sorcerer (Clockwork) 6",
  label: "Sorcerer (Clockwork) 7",
  choices: [
    ...PHB_SORCERER_7.choices,
    {type: "spell", data: {
      choiceID: "sorcerer (clockwork)::spell-7",
      condition: is<SpellID>("Freedom of Movement")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (clockwork)::spell-8",
      condition: is<SpellID>("Summon Construct")
    }}
  ],
  longRest: [
    ...PHB_SORCERER_7.longRest
  ]
} as const;;
const PHB_SORCERER_CLOCKWORK_8: Level = {
  replace: "Sorcerer (Clockwork) 7",
  label: "Sorcerer (Clockwork) 8",
  choices: [
    ...PHB_SORCERER_8.choices
  ],
  longRest: [
    ...PHB_SORCERER_8.longRest
  ]
} as const;;
const PHB_SORCERER_CLOCKWORK_9: Level = {
  replace: "Sorcerer (Clockwork) 8",
  label: "Sorcerer (Clockwork) 9",
  choices: [
    ...PHB_SORCERER_9.choices,
    {type: "spell", data: {
      choiceID: "sorcerer (clockwork)::spell-9",
      condition: is<SpellID>("Greater Restoration")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (clockwork)::spell-10",
      condition: is<SpellID>("Wall of Force")
    }}
  ],
  longRest: [
    ...PHB_SORCERER_9.longRest
  ]
} as const;;
const PHB_SORCERER_CLOCKWORK_10: Level = {
  replace: "Sorcerer (Clockwork) 9",
  label: "Sorcerer (Clockwork) 10",
  choices: [
    ...PHB_SORCERER_10.choices
  ],
  longRest: [
    ...PHB_SORCERER_10.longRest
  ]
} as const;;
const PHB_SORCERER_CLOCKWORK_11: Level = {
  replace: "Sorcerer (Clockwork) 10",
  label: "Sorcerer (Clockwork) 11",
  choices: [
    ...PHB_SORCERER_11.choices
  ],
  longRest: [
    ...PHB_SORCERER_11.longRest
  ]
} as const;;
const PHB_SORCERER_CLOCKWORK_12: Level = {
  replace: "Sorcerer (Clockwork) 11",
  label: "Sorcerer (Clockwork) 12",
  choices: [
    ...PHB_SORCERER_12.choices
  ],
  longRest: [
    ...PHB_SORCERER_12.longRest
  ]
} as const;

export default {
  [PHB_SORCERER_CLOCKWORK_3.label]: PHB_SORCERER_CLOCKWORK_3,
  [PHB_SORCERER_CLOCKWORK_4.label]: PHB_SORCERER_CLOCKWORK_4,
  [PHB_SORCERER_CLOCKWORK_5.label]: PHB_SORCERER_CLOCKWORK_5,
  [PHB_SORCERER_CLOCKWORK_6.label]: PHB_SORCERER_CLOCKWORK_6,
  [PHB_SORCERER_CLOCKWORK_7.label]: PHB_SORCERER_CLOCKWORK_7,
  [PHB_SORCERER_CLOCKWORK_8.label]: PHB_SORCERER_CLOCKWORK_8,
  [PHB_SORCERER_CLOCKWORK_9.label]: PHB_SORCERER_CLOCKWORK_9,
  [PHB_SORCERER_CLOCKWORK_10.label]: PHB_SORCERER_CLOCKWORK_10,
  [PHB_SORCERER_CLOCKWORK_11.label]: PHB_SORCERER_CLOCKWORK_11,
  [PHB_SORCERER_CLOCKWORK_12.label]: PHB_SORCERER_CLOCKWORK_12,
} as const satisfies {[levelID: ClassID]: Level};
