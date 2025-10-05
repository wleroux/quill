import {ClassID, Level} from "@/model/source/model/Level";
import {
  PHB_WIZARD_10,
  PHB_WIZARD_11,
  PHB_WIZARD_12,
  PHB_WIZARD_3,
  PHB_WIZARD_4,
  PHB_WIZARD_5,
  PHB_WIZARD_6,
  PHB_WIZARD_7,
  PHB_WIZARD_8,
  PHB_WIZARD_9
} from "@/model/source/phb/level/wizard/WizardBase";
import {is} from "@/model/source/condition/generic/IsCondition";

const PHB_WIZARD_ABJURER_3: Level = {
  replace: "Wizard 2",
  label: "Wizard (Abjurer) 3",
  choices: [
    ...PHB_WIZARD_3.choices
  ],
  longRest: [
    ...PHB_WIZARD_3.longRest
  ]
} as const;
const PHB_WIZARD_ABJURER_4: Level = {
  replace: "Wizard (Abjurer) 3",
  label: "Wizard (Abjurer) 4",
  choices: [
    ...PHB_WIZARD_4.choices
  ],
  longRest: [
    ...PHB_WIZARD_4.longRest
  ]
} as const;
const PHB_WIZARD_ABJURER_5: Level = {
  replace: "Wizard (Abjurer) 4",
  label: "Wizard (Abjurer) 5",
  choices: [
    ...PHB_WIZARD_5.choices
  ],
  longRest: [
    ...PHB_WIZARD_5.longRest
  ]
} as const;
const PHB_WIZARD_ABJURER_6: Level = {
  replace: "Wizard (Abjurer) 5",
  label: "Wizard (Abjurer) 6",
  choices: [
    ...PHB_WIZARD_6.choices
  ],
  longRest: [
    ...PHB_WIZARD_6.longRest
  ]
} as const;
const PHB_WIZARD_ABJURER_7: Level = {
  replace: "Wizard (Abjurer) 6",
  label: "Wizard (Abjurer) 7",
  choices: [
    ...PHB_WIZARD_7.choices
  ],
  longRest: [
    ...PHB_WIZARD_7.longRest
  ]
} as const;
const PHB_WIZARD_ABJURER_8: Level = {
  replace: "Wizard (Abjurer) 7",
  label: "Wizard (Abjurer) 8",
  choices: [
    ...PHB_WIZARD_8.choices
  ],
  longRest: [
    ...PHB_WIZARD_8.longRest
  ]
} as const;
const PHB_WIZARD_ABJURER_9: Level = {
  replace: "Wizard (Abjurer) 8",
  label: "Wizard (Abjurer) 9",
  choices: [
    ...PHB_WIZARD_9.choices
  ],
  longRest: [
    ...PHB_WIZARD_9.longRest
  ]
} as const;
const PHB_WIZARD_ABJURER_10: Level = {
  replace: "Wizard (Abjurer) 9",
  label: "Wizard (Abjurer) 10",
  choices: [
    ...PHB_WIZARD_10.choices,
    {type: "spell", data: {
      choiceID: "wizard (abjurer)::spell-1",
      condition: is("Counterspell")
    }},
    {type: "spell", data: {
      choiceID: "wizard (abjurer)::spell-1",
      condition: is("Dispel Magic")
    }},
  ],
  longRest: [
    ...PHB_WIZARD_10.longRest
  ]
} as const;
const PHB_WIZARD_ABJURER_11: Level = {
  replace: "Wizard (Abjurer) 10",
  label: "Wizard (Abjurer) 11",
  choices: [
    ...PHB_WIZARD_11.choices
  ],
  longRest: [
    ...PHB_WIZARD_11.longRest
  ]
} as const;
const PHB_WIZARD_ABJURER_12: Level = {
  replace: "Wizard (Abjurer) 11",
  label: "Wizard (Abjurer) 12",
  choices: [
    ...PHB_WIZARD_12.choices
  ],
  longRest: [
    ...PHB_WIZARD_12.longRest
  ]
} as const;

export default {
  [PHB_WIZARD_ABJURER_3.label]: PHB_WIZARD_ABJURER_3,
  [PHB_WIZARD_ABJURER_4.label]: PHB_WIZARD_ABJURER_4,
  [PHB_WIZARD_ABJURER_5.label]: PHB_WIZARD_ABJURER_5,
  [PHB_WIZARD_ABJURER_6.label]: PHB_WIZARD_ABJURER_6,
  [PHB_WIZARD_ABJURER_7.label]: PHB_WIZARD_ABJURER_7,
  [PHB_WIZARD_ABJURER_8.label]: PHB_WIZARD_ABJURER_8,
  [PHB_WIZARD_ABJURER_9.label]: PHB_WIZARD_ABJURER_9,
  [PHB_WIZARD_ABJURER_10.label]: PHB_WIZARD_ABJURER_10,
  [PHB_WIZARD_ABJURER_11.label]: PHB_WIZARD_ABJURER_11,
  [PHB_WIZARD_ABJURER_12.label]: PHB_WIZARD_ABJURER_12,
} as const satisfies {[levelID: ClassID]: Level};
