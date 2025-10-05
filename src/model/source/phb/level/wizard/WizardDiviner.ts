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

const PHB_WIZARD_DIVINER_3: Level = {
  replace: "Wizard 2",
  label: "Wizard (Diviner) 3",
  choices: [
    ...PHB_WIZARD_3.choices
  ],
  longRest: [
    ...PHB_WIZARD_3.longRest
  ]
} as const;
const PHB_WIZARD_DIVINER_4: Level = {
  replace: "Wizard (Diviner) 3",
  label: "Wizard (Diviner) 4",
  choices: [
    ...PHB_WIZARD_4.choices
  ],
  longRest: [
    ...PHB_WIZARD_4.longRest
  ]
} as const;
const PHB_WIZARD_DIVINER_5: Level = {
  replace: "Wizard (Diviner) 4",
  label: "Wizard (Diviner) 5",
  choices: [
    ...PHB_WIZARD_5.choices
  ],
  longRest: [
    ...PHB_WIZARD_5.longRest
  ]
} as const;
const PHB_WIZARD_DIVINER_6: Level = {
  replace: "Wizard (Diviner) 5",
  label: "Wizard (Diviner) 6",
  choices: [
    ...PHB_WIZARD_6.choices
  ],
  longRest: [
    ...PHB_WIZARD_6.longRest
  ]
} as const;
const PHB_WIZARD_DIVINER_7: Level = {
  replace: "Wizard (Diviner) 6",
  label: "Wizard (Diviner) 7",
  choices: [
    ...PHB_WIZARD_7.choices
  ],
  longRest: [
    ...PHB_WIZARD_7.longRest
  ]
} as const;
const PHB_WIZARD_DIVINER_8: Level = {
  replace: "Wizard (Diviner) 7",
  label: "Wizard (Diviner) 8",
  choices: [
    ...PHB_WIZARD_8.choices
  ],
  longRest: [
    ...PHB_WIZARD_8.longRest
  ]
} as const;
const PHB_WIZARD_DIVINER_9: Level = {
  replace: "Wizard (Diviner) 8",
  label: "Wizard (Diviner) 9",
  choices: [
    ...PHB_WIZARD_9.choices
  ],
  longRest: [
    ...PHB_WIZARD_9.longRest
  ]
} as const;
const PHB_WIZARD_DIVINER_10: Level = {
  replace: "Wizard (Diviner) 9",
  label: "Wizard (Diviner) 10",
  choices: [
    ...PHB_WIZARD_10.choices
  ],
  longRest: [
    ...PHB_WIZARD_10.longRest
  ]
} as const;
const PHB_WIZARD_DIVINER_11: Level = {
  replace: "Wizard (Diviner) 10",
  label: "Wizard (Diviner) 11",
  choices: [
    ...PHB_WIZARD_11.choices
  ],
  longRest: [
    ...PHB_WIZARD_11.longRest
  ]
} as const;
const PHB_WIZARD_DIVINER_12: Level = {
  replace: "Wizard (Diviner) 11",
  label: "Wizard (Diviner) 12",
  choices: [
    ...PHB_WIZARD_12.choices
  ],
  longRest: [
    ...PHB_WIZARD_12.longRest
  ]
} as const;

export default {
  [PHB_WIZARD_DIVINER_3.label]: PHB_WIZARD_DIVINER_3,
  [PHB_WIZARD_DIVINER_4.label]: PHB_WIZARD_DIVINER_4,
  [PHB_WIZARD_DIVINER_5.label]: PHB_WIZARD_DIVINER_5,
  [PHB_WIZARD_DIVINER_6.label]: PHB_WIZARD_DIVINER_6,
  [PHB_WIZARD_DIVINER_7.label]: PHB_WIZARD_DIVINER_7,
  [PHB_WIZARD_DIVINER_8.label]: PHB_WIZARD_DIVINER_8,
  [PHB_WIZARD_DIVINER_9.label]: PHB_WIZARD_DIVINER_9,
  [PHB_WIZARD_DIVINER_10.label]: PHB_WIZARD_DIVINER_10,
  [PHB_WIZARD_DIVINER_11.label]: PHB_WIZARD_DIVINER_11,
  [PHB_WIZARD_DIVINER_12.label]: PHB_WIZARD_DIVINER_12,
} as const satisfies {[levelID: ClassID]: Level};
