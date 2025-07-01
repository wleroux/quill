import WIZARD_BASE_LEVELS from "./WizardBase";
import {Level, ClassID} from "@/model/source/model/Level";

export default {
  ...WIZARD_BASE_LEVELS,
} as const satisfies {[levelID: ClassID]: Level};