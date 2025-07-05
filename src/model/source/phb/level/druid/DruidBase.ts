import {ClassID, Level} from "@/model/source/model/Level";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {isMainClass, noClasses, selectedChoice} from "@/model/source/choice/Choice";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {SkillID} from "@/model/source/model/Skill";
import {is} from "@/model/source/condition/generic/IsCondition";
import {druidCantripSpell} from "@/model/source/phb/level/druid/druidCantripSpell";
import {alwaysFalse} from "@/model/source/condition/generic/FalseCondition";
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";

const druidCantripSourceIDs = is(
  "druid::cantrip-1",
  "druid::cantrip-magician",
  "druid::cantrip-2",
  "druid::cantrip-3",
  "druid::cantrip-4",
);
const druidSkills = is<SkillID>("arcana","animal handling","insight","medicine","nature","perception","religion","survival");

const PHB_DRUID_1: Level = {
  label: "Druid 1",
  prerequisite: any(noClasses(), minStat("wis", 13)),
  choices: [
    {type: "skill", data: {
      choiceID: "druid::skill::skill-1",
      enabled: isMainClass(),
      condition: druidSkills
    }},
    {type: "skill", data: {
      choiceID: "druid::skill::skill-2",
      enabled: isMainClass(),
      condition: druidSkills
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "druid::spell::cantrip-1",
      condition: druidCantripSpell
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "druid::spell::cantrip-2",
      condition: druidCantripSpell
    }},
    {type: "simple", data: {
      label: "Primal Order",
      choiceID: "primal order",
      options: [
        {optionID: "magician", label: "Magician"},
        {optionID: "warden", label: "Warden"}
      ]
    }},
    {type: "spell", data: {
      enabled: selectedChoice("primal order", "magician"),
      label: "Cantrip",
      choiceID: "druid::spell::cantrip-magician",
      condition: druidCantripSpell
    }},
  ]
} as const;
const PHB_DRUID_2: Level = {
  label: "Druid 2",
  replace: "Druid 1",
  choices: [
    {type: "spell-replacement", data: {
      label: "Cantrip Replacement",
      choiceID: "druid::cantrip-replacement::2",
      condition: druidCantripSpell,
      required: alwaysFalse(),
      sourceID: druidCantripSourceIDs
    }}
  ]
} as const;
export const PHB_DRUID_3 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Cantrip Replacement",
      choiceID: "druid::cantrip-replacement::3",
      condition: druidCantripSpell,
      required: alwaysFalse(),
      sourceID: druidCantripSourceIDs
    }}
  ]
} as const satisfies Partial<Level>;
export const PHB_DRUID_4 = {
  choices: [
    {type: "spell-replacement", data: {
      label: "Cantrip Replacement",
      choiceID: "druid::cantrip-replacement::3",
      condition: druidCantripSpell,
      required: alwaysFalse(),
      sourceID: druidCantripSourceIDs
    }},
    {type: "feat", data: {
      choiceID: "druid::feat-1",
      condition: featType("general", "origin")
    }}
  ]
} as const satisfies Partial<Level>;

export default {
  [PHB_DRUID_1.label]: PHB_DRUID_1,
  [PHB_DRUID_2.label]: PHB_DRUID_2
} as const satisfies {[levelID: ClassID]: Level};
