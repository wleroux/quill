import {all} from "@/model/source/condition/generic/AllCondition";
import {cantripSpell} from "@/model/source/condition/spell/CantripSpellCondition";
import {wizardSpell} from "@/model/source/phb/level/wizard/wizardSpell";
import {SpellLevel} from "@/model/source/model/Spell";
import {maxSpellLevel} from "@/model/source/condition/spell/LeveledSpellCondition";

export const wizardCantripSpell = all(wizardSpell, cantripSpell);
export const maxWizardLeveledSpell = (level: Exclude<SpellLevel, "cantrip">) => all(wizardSpell, maxSpellLevel(level));
