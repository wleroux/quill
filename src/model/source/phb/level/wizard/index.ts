import WIZARD_BASE_LEVELS from "./WizardBase";
import WIZARD_ABJURER_LEVELS from "./WizardAbjurer";
import WIZARD_DIVINER_LEVELS from "./WizardDiviner";
import WIZARD_EVOKER_LEVELS from "./WizardEvoker";
import WIZARD_ILLUSIONIST_LEVELS from "./WizardIllusionist";
import {ClassID, Level} from "@/model/source/model/Level";

export default {
  ...WIZARD_BASE_LEVELS,
  ...WIZARD_ABJURER_LEVELS,
  ...WIZARD_DIVINER_LEVELS,
  ...WIZARD_EVOKER_LEVELS,
  ...WIZARD_ILLUSIONIST_LEVELS
} as const satisfies {[levelID: ClassID]: Level};