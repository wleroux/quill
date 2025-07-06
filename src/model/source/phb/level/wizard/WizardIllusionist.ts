import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_WIZARD_3, PHB_WIZARD_4} from "@/model/source/phb/level/wizard/WizardBase";

const PHB_WIZARD_ILLUSIONIST_3: Level = {
  replace: "Wizard 2",
  label: "Wizard (Illusionist) 3",
  choices: [
    ...PHB_WIZARD_3.choices
  ]
} as const;
const PHB_WIZARD_ILLUSIONIST_4: Level = {
  replace: "Wizard (Illusionist) 3",
  label: "Wizard (Illusionist) 4",
  choices: [
    ...PHB_WIZARD_4.choices
  ]
} as const;

export default {
  [PHB_WIZARD_ILLUSIONIST_3.label]: PHB_WIZARD_ILLUSIONIST_3,
  [PHB_WIZARD_ILLUSIONIST_4.label]: PHB_WIZARD_ILLUSIONIST_4
} as const satisfies {[levelID: ClassID]: Level};
