import {bardSpell} from "@/model/source/phb/level/bard/BardSpellCondition";
import {SpellLevel} from "@/model/source/model/Spell";
import {all} from "@/model/source/condition/generic/AllCondition";
import {maxSpellLevel} from "@/model/source/condition/spell/LeveledSpellCondition";

export const bardLeveledSpell = (level: Exclude<SpellLevel, "cantrip">) => all(bardSpell(), maxSpellLevel(level));
