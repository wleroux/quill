import {SpellID, SpellLevel} from "@/model/source/model/Spell";
import {REPOSITORY} from "@/model/source/index";

export function maxSpellLevel(level: Exclude<SpellLevel, "cantrip">) {
  return (value: SpellID) => {
    const spell = REPOSITORY.SPELLS[value];
    if (spell === undefined) return false;
    if (spell.level === "cantrip") return false;
    return spell.level <= level;
  }
}
