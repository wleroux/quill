import {all} from "@/model/source/condition/generic/AllCondition";
import {cantripSpell} from "@/model/source/condition/spell/CantripSpellCondition";
import {warlockSpell} from "./warlockSpell";

export const warlockCantripSpell = all(warlockSpell, cantripSpell);
