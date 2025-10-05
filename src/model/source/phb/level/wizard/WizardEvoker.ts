import {ClassID, Level} from "@/model/source/model/Level";
import {
  PHB_WIZARD_10,
  PHB_WIZARD_11, PHB_WIZARD_12,
  PHB_WIZARD_3,
  PHB_WIZARD_4,
  PHB_WIZARD_5,
  PHB_WIZARD_6,
  PHB_WIZARD_7,
  PHB_WIZARD_8,
  PHB_WIZARD_9
} from "@/model/source/phb/level/wizard/WizardBase";

const PHB_WIZARD_EVOKER_3: Level = {
  replace: "Wizard 2",
  label: "Wizard (Evoker) 3",
  choices: [
    ...PHB_WIZARD_3.choices
  ],
  longRest: [
    ...PHB_WIZARD_3.longRest
  ]
} as const;
const PHB_WIZARD_EVOKER_4: Level = {
  replace: "Wizard (Evoker) 3",
  label: "Wizard (Evoker) 4",
  choices: [
    ...PHB_WIZARD_4.choices
  ],
  longRest: [
    ...PHB_WIZARD_4.longRest
  ]
} as const;
const PHB_WIZARD_EVOKER_5: Level = {
  replace: "Wizard (Evoker) 4",
  label: "Wizard (Evoker) 5",
  choices: [
    ...PHB_WIZARD_5.choices
  ],
  longRest: [
    ...PHB_WIZARD_5.longRest
  ]
} as const;
const PHB_WIZARD_EVOKER_6: Level = {
  replace: "Wizard (Evoker) 5",
  label: "Wizard (Evoker) 6",
  choices: [
    ...PHB_WIZARD_6.choices
  ],
  longRest: [
    ...PHB_WIZARD_6.longRest
  ]
} as const;
const PHB_WIZARD_EVOKER_7: Level = {
  replace: "Wizard (Evoker) 6",
  label: "Wizard (Evoker) 7",
  choices: [
    ...PHB_WIZARD_7.choices
  ],
  longRest: [
    ...PHB_WIZARD_7.longRest
  ]
} as const;
const PHB_WIZARD_EVOKER_8: Level = {
  replace: "Wizard (Evoker) 7",
  label: "Wizard (Evoker) 8",
  choices: [
    ...PHB_WIZARD_8.choices
  ],
  longRest: [
    ...PHB_WIZARD_8.longRest
  ]
} as const;
const PHB_WIZARD_EVOKER_9: Level = {
  replace: "Wizard (Evoker) 8",
  label: "Wizard (Evoker) 9",
  choices: [
    ...PHB_WIZARD_9.choices
  ],
  longRest: [
    ...PHB_WIZARD_9.longRest
  ]
} as const;
const PHB_WIZARD_EVOKER_10: Level = {
  replace: "Wizard (Evoker) 9",
  label: "Wizard (Evoker) 10",
  choices: [
    ...PHB_WIZARD_10.choices
  ],
  longRest: [
    ...PHB_WIZARD_10.longRest
  ]
} as const;
const PHB_WIZARD_EVOKER_11: Level = {
  replace: "Wizard (Evoker) 10",
  label: "Wizard (Evoker) 11",
  choices: [
    ...PHB_WIZARD_11.choices
  ],
  longRest: [
    ...PHB_WIZARD_11.longRest
  ]
} as const;
const PHB_WIZARD_EVOKER_12: Level = {
  replace: "Wizard (Evoker) 11",
  label: "Wizard (Evoker) 12",
  choices: [
    ...PHB_WIZARD_12.choices
  ],
  longRest: [
    ...PHB_WIZARD_12.longRest
  ]
} as const;

export default {
  [PHB_WIZARD_EVOKER_3.label]: PHB_WIZARD_EVOKER_3,
  [PHB_WIZARD_EVOKER_4.label]: PHB_WIZARD_EVOKER_4,
  [PHB_WIZARD_EVOKER_5.label]: PHB_WIZARD_EVOKER_5,
  [PHB_WIZARD_EVOKER_6.label]: PHB_WIZARD_EVOKER_6,
  [PHB_WIZARD_EVOKER_7.label]: PHB_WIZARD_EVOKER_7,
  [PHB_WIZARD_EVOKER_8.label]: PHB_WIZARD_EVOKER_8,
  [PHB_WIZARD_EVOKER_9.label]: PHB_WIZARD_EVOKER_9,
  [PHB_WIZARD_EVOKER_10.label]: PHB_WIZARD_EVOKER_10,
  [PHB_WIZARD_EVOKER_11.label]: PHB_WIZARD_EVOKER_11,
  [PHB_WIZARD_EVOKER_12.label]: PHB_WIZARD_EVOKER_12,
} as const satisfies {[levelID: ClassID]: Level};
