import {bardSpell} from "@/model/source/phb/level/bard/BardSpellCondition";
import {SpellLevel} from "@/model/source/model/Spell";
import {all} from "@/model/source/condition/generic/AllCondition";
import {spellLevel} from "@/model/source/condition/spell/SpellLevelCondition";

export function bardLeveledSpell(level: Exclude<SpellLevel, "cantrip">) {
  return all(bardSpell(), spellLevel(level));
}
