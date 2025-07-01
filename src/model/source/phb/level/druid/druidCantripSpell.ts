import {all} from "@/model/source/condition/generic/AllCondition";
import {cantripSpell} from "@/model/source/condition/spell/CantripSpellCondition";
import {druidSpell} from "@/model/source/phb/level/druid/druidSpell";

export const druidCantripSpell = all(druidSpell, cantripSpell);