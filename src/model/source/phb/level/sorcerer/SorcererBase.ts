import {ClassID, Level} from "@/model/source/model/Level";
import {isMainClass, noClasses} from "@/model/source/choice/Choice";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {alwaysFalse} from "@/model/source/condition/generic/FalseCondition";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {is} from "@/model/source/condition/generic/IsCondition";
import {SkillID} from "@/model/source/model/Skill";
import {all} from "@/model/source/condition/generic/AllCondition";
import {cantripSpell} from "@/model/source/condition/spell/CantripSpellCondition";
import {sorcererSpell} from "@/model/source/phb/level/sorcerer/sorcererSpell";
import {SpellLevel} from "@/model/source/model/Spell";
import {maxSpellLevel} from "@/model/source/condition/spell/LeveledSpellCondition";

const sorcererCantripSources = is<string>(
  "sorcerer::cantrip-1",
  "sorcerer::cantrip-2",
  "sorcerer::cantrip-3",
  "sorcerer::cantrip-4",
  "sorcerer::cantrip-5",
  "sorcerer::cantrip-6"
);
const sorcererPreparedSpellSources = is<string>(
  "sorcerer::spell-1",
  "sorcerer::spell-2",
  "sorcerer::spell-3",
  "sorcerer::spell-4",
  "sorcerer::spell-5",
  "sorcerer::spell-6",
  "sorcerer::spell-7",
  "sorcerer::spell-8",
  "sorcerer::spell-9",
  "sorcerer::spell-10",
  "sorcerer::spell-11",
  "sorcerer::spell-12",
  "sorcerer::spell-13",
  "sorcerer::spell-14",
  "sorcerer::spell-15",
  "sorcerer::spell-16",
  "sorcerer::spell-17",
  "sorcerer::spell-18",
  "sorcerer::spell-19",
  "sorcerer::spell-20",
  "sorcerer::spell-21",
  "sorcerer::spell-22"
);

const sorcererSkill = is<SkillID>("arcana","deception","insight","intimidation","persuasion","religion");
const sorcererCantripSpell = all(cantripSpell, sorcererSpell)
function maxSorcererSpellLevel(level: Exclude<SpellLevel, "cantrip">) {
  return all(sorcererSpell, maxSpellLevel(level))
}

const PHB_SORCERER_1: Level = {
  label: "Sorcerer 1",
  prerequisite: any(noClasses(), minStat("cha", 13)),
  choices: [
    {type: "skill", data: {
      choiceID: "sorcerer::skill-1",
      enabled: isMainClass(),
      condition: sorcererSkill
    }},
    {type: "skill", data: {
      choiceID: "sorcerer::skill-2",
      enabled: isMainClass(),
      condition: sorcererSkill
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "sorcerer::cantrip-1",
      condition: sorcererCantripSpell
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "sorcerer::cantrip-2",
      condition: sorcererCantripSpell
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "sorcerer::cantrip-3",
      condition: sorcererCantripSpell
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "sorcerer::cantrip-4",
      condition: sorcererCantripSpell
    }},
    {type: "spell", data: {
      label: "Level 1 Spell",
      choiceID: "sorcerer::spell-1",
      condition: maxSorcererSpellLevel(1)
    }},
    {type: "spell", data: {
      label: "Level 1 Spell",
      choiceID: "sorcerer::spell-2",
      condition: maxSorcererSpellLevel(1)
    }}
  ]
} as const;
const PHB_SORCERER_2: Level = {
  label: "Sorcerer 2",
  replace: "Sorcerer 1",
  choices: [
    {type: "spell-replacement", data: {
      label: "Replace Cantrip",
      required: alwaysFalse(),
      choiceID: "sorcerer::cantrip-replacement::2",
      sourceID: sorcererCantripSources,
      condition: sorcererCantripSpell
    }},
    {type: "spell-replacement", data: {
      label: "Replace Prepared Spell",
      required: alwaysFalse(),
      choiceID: "sorcerer::spell-replacement::2",
      sourceID: sorcererPreparedSpellSources,
      condition: maxSorcererSpellLevel(1)
    }},
    {type: "spell", data: {
      choiceID: "sorcerer::spell-3",
      condition: maxSorcererSpellLevel(1)
    }},
    {type: "spell", data: {
      choiceID: "sorcerer::spell-4",
      condition: maxSorcererSpellLevel(1)
    }},
    {type: "metamagic", data: {
      choiceID: "sorcerer::metamagic-1",
      sourceID: "sorcerer::metamagic-1"
    }},
    {type: "metamagic", data: {
      choiceID: "sorcerer::metamagic-2",
      sourceID: "sorcerer::metamagic-2"
    }}
  ]
} as const;

export default {
  "Sorcerer 1": PHB_SORCERER_1,
  "Sorcerer 2": PHB_SORCERER_2
} as const satisfies {[levelID: ClassID]: Level};
