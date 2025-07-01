import {all} from "@/model/source/condition/generic/AllCondition";
import {cantripSpell} from "@/model/source/condition/spell/CantripSpellCondition";
import {clericSpell} from "@/model/source/phb/level/cleric/ClericSpellCondition";

export const clericCantripSpell = all(clericSpell, cantripSpell);