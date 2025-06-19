import {all} from "@/model/source/condition/generic/AllCondition";
import {cantripSpell} from "@/model/source/condition/spell/CantripSpellCondition";
import {druidSpell} from "@/model/source/phb/level/druid/DruidSpellCondition";

export function druidCantripSpell() {
  return all(druidSpell(), cantripSpell());
}