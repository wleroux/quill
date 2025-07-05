import {ClassID, Level} from "@/model/source/model/Level";
import {isMainClass, noClasses} from "@/model/source/choice/Choice";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {is} from "@/model/source/condition/generic/IsCondition";
import {SkillID} from "@/model/source/model/Skill";
import {warlockCantripSpell} from "@/model/source/phb/level/warlock/warlockCantripSpell";
import {all} from "@/model/source/condition/generic/AllCondition";
import {warlockSpell} from "@/model/source/phb/level/warlock/warlockSpell";
import {maxSpellLevel} from "@/model/source/condition/spell/LeveledSpellCondition";
import {SpellLevel} from "@/model/source/model/Spell";
import {alwaysFalse} from "@/model/source/condition/generic/FalseCondition";

const warlockCantripSourceIDs = is<string>(
  "warlock::cantrip-1",
  "warlock::cantrip-2",
  "warlock::cantrip-3",
  "warlock::cantrip-4",
);
const warlockSpellSourceIDs = is<string>(
  "warlock::spell-1",
  "warlock::spell-2",
  "warlock::spell-3",
  "warlock::spell-4",
  "warlock::spell-5",
  "warlock::spell-6",
  "warlock::spell-7",
  "warlock::spell-8",
  "warlock::spell-9",
  "warlock::spell-10",
  "warlock::spell-11",
  "warlock::spell-12",
  "warlock::spell-13",
  "warlock::spell-14",
  "warlock::spell-15"
);
const warlockSkill = is<SkillID>("arcana","deception","history","intimidation","investigation","nature","religion");
const maxWarlockSpellLevel = (level: Exclude<SpellLevel, "cantrip">) => all(warlockSpell, maxSpellLevel(level));

const PHB_WARLOCK_1: Level = {
  label: "Warlock 1",
  prerequisite: any(noClasses(), minStat("cha", 13)),
  choices: [
    {type: "skill", data: {
      choiceID: "warlock::skill-1",
      enabled: isMainClass(),
      condition: warlockSkill
    }},
    {type: "skill", data: {
      choiceID: "warlock::skill-2",
      enabled: isMainClass(),
      condition: warlockSkill
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "warlock::cantrip-1",
      condition: warlockCantripSpell
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "warlock::cantrip-2",
      condition: warlockCantripSpell
    }},
    {type: "spell", data: {
      label: "Spell",
      choiceID: "warlock::spell-1",
      condition: maxWarlockSpellLevel(1)
    }},
    {type: "spell", data: {
      label: "Spell",
      choiceID: "warlock::spell-2",
      condition: maxWarlockSpellLevel(1)
    }},
    {type: "eldritch-invocation", data: {
      choiceID: "warlock::eldritch-invocation::1",
      sourceID: "warlock::eldritch-invocation-1"
    }}
  ]
} as const;
const PHB_WARLOCK_2: Level = {
  label: "Warlock 2",
  replace: "Warlock 1",
  choices: [
    {type: "spell-replacement", data: {
      label: "Cantrip Replacement",
      sourceID: warlockCantripSourceIDs,
      required: alwaysFalse(),
      choiceID: "warlock::cantrip-replacement::cantrip-2",
      condition: warlockCantripSpell
    }},
    {type: "spell-replacement", data: {
      label: "Spell Replacement",
      sourceID: warlockSpellSourceIDs,
      required: alwaysFalse(),
      choiceID: "warlock::spell-replacement::spell-2",
      condition: maxWarlockSpellLevel(1)
    }},
    {type: "eldritch-invocation-replacement", data: {
      label: "Eldritch Invocation Replacement",
      choiceID: "warlock::eldritch-invocation-replacement::2",
      required: alwaysFalse()
    }},
    {type: "spell", data: {
      label: "Spell",
      choiceID: "warlock::spell-3",
      condition: maxWarlockSpellLevel(1)
    }},
    {type: "eldritch-invocation", data: {
      choiceID: "warlock::eldritch-invocation::2",
      sourceID: "warlock::eldritch-invocation-2"
    }},
    {type: "eldritch-invocation", data: {
      choiceID: "warlock::eldritch-invocation::3",
      sourceID: "warlock::eldritch-invocation-3"
    }}
  ]
} as const;

export default {
  "Warlock 1": PHB_WARLOCK_1,
  "Warlock 2": PHB_WARLOCK_2
} as const satisfies {[levelID: ClassID]: Level};
