import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_WIZARD_3, PHB_WIZARD_4} from "@/model/source/phb/level/wizard/WizardBase";

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

export default {
  [PHB_WIZARD_DIVINER_3.label]: PHB_WIZARD_DIVINER_3,
  [PHB_WIZARD_DIVINER_4.label]: PHB_WIZARD_DIVINER_4
} as const satisfies {[levelID: ClassID]: Level};
