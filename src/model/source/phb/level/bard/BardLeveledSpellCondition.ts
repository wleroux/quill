import {bardSpell} from "@/model/source/phb/level/bard/BardSpellCondition";
import {SpellLevel} from "@/model/source/model/Spell";
import {all} from "@/model/source/condition/generic/AllCondition";
import {maxSpellLevel} from "@/model/source/condition/spell/LeveledSpellCondition";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {wizardSpell} from "@/model/source/phb/level/wizard/wizardSpell";
import {clericSpell} from "@/model/source/phb/level/cleric/clericSpell";
import {druidSpell} from "@/model/source/phb/level/druid/druidSpell";

export const bardLeveledSpell = (level: Exclude<SpellLevel, "cantrip">, magicalSecrets: boolean) => {
  if (!magicalSecrets) {
    return all(bardSpell, maxSpellLevel(level));
  } else {
    return all(
      any(bardSpell, clericSpell, druidSpell, wizardSpell),
      maxSpellLevel(level)
    );
  }
}
