import {SpellID, SpellLevel} from "@/model/source/model/Spell";
import {REPOSITORY} from "@/model/source/index";

export function spellLevel(level: SpellLevel){
  return (value: SpellID) => {
    const spell = REPOSITORY.SPELLS[value];
    if (spell === undefined) return false;
    return spell.level === level;
  }
}