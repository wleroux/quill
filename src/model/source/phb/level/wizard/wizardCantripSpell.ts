import {all} from "@/model/source/condition/generic/AllCondition";
import {cantripSpell} from "@/model/source/condition/spell/CantripSpellCondition";
import {wizardSpell} from "@/model/source/phb/level/wizard/wizardSpell";

export const wizardCantripSpell = all(wizardSpell, cantripSpell);
