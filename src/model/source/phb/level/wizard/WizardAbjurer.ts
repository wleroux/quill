import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_WIZARD_3, PHB_WIZARD_4} from "@/model/source/phb/level/wizard/WizardBase";

const PHB_WIZARD_ABJURER_3: Level = {
  replace: "Wizard 2",
  label: "Wizard (Abjurer) 3",
  choices: [
    ...PHB_WIZARD_3.choices
  ]
} as const;
const PHB_WIZARD_ABJURER_4: Level = {
  replace: "Wizard (Abjurer) 3",
  label: "Wizard (Abjurer) 4",
  choices: [
    ...PHB_WIZARD_4.choices
  ]
} as const;

export default {
  [PHB_WIZARD_ABJURER_3.label]: PHB_WIZARD_ABJURER_3,
  [PHB_WIZARD_ABJURER_4.label]: PHB_WIZARD_ABJURER_4
} as const satisfies {[levelID: ClassID]: Level};
