import {Condition} from "@/model/source/condition/Condition";
import {SpellID} from "@/model/source/model/Spell";
import {spellLevel} from "@/model/source/condition/spell/SpellLevelCondition";

export function cantripSpell(): Condition<SpellID> {
  return spellLevel("cantrip")
}
