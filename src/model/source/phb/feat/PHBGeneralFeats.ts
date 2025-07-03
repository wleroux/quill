import {Feat, FeatID} from "../../model/Feat";
import {AttributeID} from "@/model/source/model/Attribute";
import {is} from "@/model/source/condition/generic/IsCondition";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {all} from "@/model/source/condition/generic/AllCondition";
import {currentLevel} from "@/model/character/level/LevelChoice";
import { ToolID } from "../../model/Tool";
import {SpellID} from "@/model/source/model/Spell";

const PHB_FEAT_ABILITY_SCORE_INCREASE: Feat = {
  label: "Ability Score Increase",
  prerequisite: currentLevel(4),
  category: "general",
  repeatable: true,
  choices: [
    {type: "attribute", data: {
      choiceID: "asi::attribute-1"
    }},
    {type: "attribute", data: {
      choiceID: "asi::attribute-2"
    }}
  ]
};

const PHB_FEAT_ACTOR: Feat = {
  label: "Actor",
  prerequisite: all(currentLevel(4), minStat("cha", 13)),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "actor::attribute-1",
      condition: is<AttributeID>("cha")
    }}
  ]
};
const PHB_FEAT_ATHLETE: Feat = {
  label: "Athlete",
  prerequisite: all(currentLevel(4), any(minStat("str", 13), minStat("dex", 13))),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "athlete::attribute-1",
      condition: is<AttributeID>("str", "dex")
    }}
  ]
};
const PHB_FEAT_CHARGER: Feat = {
  label: "Charger",
  prerequisite: all(currentLevel(4), any(minStat("str", 13), minStat("dex", 13))),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "charger::attribute-1",
      condition: is<AttributeID>("str", "dex")
    }}
  ]
};
const PHB_FEAT_CHEF: Feat = {
  label: "Chef",
  prerequisite: currentLevel(4),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "chef::attribute-1",
      condition: is<AttributeID>("con", "wis")
    }},
    {type: "tool", data: {
      choiceID: "chef::tool-1",
      condition: is<ToolID>("Cook's Utensils")
    }}
  ]
};
const PHB_FEAT_CROSSBOW_EXPERT: Feat = {
  label: "Crossbow Expert",
  prerequisite: all(currentLevel(4), minStat("dex", 13)),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "crossbow expert::attribute-1",
      condition: is<AttributeID>("dex")
    }},
  ]
};
const PHB_FEAT_CRUSHER: Feat = {
  label: "Crusher",
  prerequisite: currentLevel(4),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "crusher::attribute-1",
      condition: is<AttributeID>("str", "con")
    }},
  ]
};
const PHB_FEAT_DEFENSIVE_DUELIST: Feat = {
  label: "Defensive Duelist",
  prerequisite: all(currentLevel(4), minStat("dex", 13)),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "defensive duelist::attribute-1",
      condition: is<AttributeID>("dex")
    }},
  ]
};
const PHB_FEAT_DUAL_WIELDER: Feat = {
  label: "Dual Wielder",
  prerequisite: all(currentLevel(4), any(minStat("str", 13), minStat("dex", 13))),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "dual wielder::attribute-1",
      condition: is<AttributeID>("str", "dex")
    }},
  ]
};
const PHB_FEAT_DURABLE: Feat = {
  label: "Durable",
  prerequisite: currentLevel(4),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "durable::attribute-1",
      condition: is<AttributeID>("con")
    }},
  ]
};
const PHB_FEAT_ELEMENTAL_ADEPT: Feat = {
  label: "Elemental Adept",
  prerequisite: currentLevel(4),
  category: "general",
  repeatable: true,
  choices: [
    {type: "attribute", data: {
      choiceID: "elemental adept::attribute-1",
      condition: is<AttributeID>("int", "wis", "cha")
    }},
    {type: "simple", data: {
      choiceID: "energy mastery",
      label: "Energy Mastery",
      options: [
        {optionID: "Acid", label: "Acid"},
        {optionID: "Cold", label: "Cold"},
        {optionID: "Fire", label: "Fire"},
        {optionID: "Lightning", label: "Lightning"},
        {optionID: "Thunder", label: "Thunder"}
      ]
    }}
  ]
};
const PHB_FEAT_FEY_TOUCHED: Feat = {
  label: "Fey-Touched",
  prerequisite: currentLevel(4),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "fey-touched::attribute-1",
      condition: is<AttributeID>("int", "wis", "cha")
    }},
    {type: "spell", data: {
      choiceID: "fey-touched::spell-1",
      sourceID: "fey-touched::spell-1",
      condition: is<SpellID>("Misty Step")
    }},
    {type: "spell", data: {
      choiceID: "fey-touched::spell-2",
      sourceID: "fey-touched::spell-2",
      condition: is<SpellID>(
        "Animal Friendship",
        "Bane",
        "Bless",
        "Charm Person",
        "Command",
        "Compelled Duel",
        "Comprehend Languages",
        "Detect Evil and Good",
        "Detect Magic",
        "Detect Poison and Disease",
        "Dissonant Whispers",
        "Heroism",
        "Hex",
        "Hunter's Mark",
        "Identify",
        "Sleep",
        "Speak with Animals",
        "Tasha's Hideous Laughter"
      )
    }},
  ]
};

export default {
  "Ability Score Increase": PHB_FEAT_ABILITY_SCORE_INCREASE,
  "Actor": PHB_FEAT_ACTOR,
  "Athlete": PHB_FEAT_ATHLETE,
  "Charger": PHB_FEAT_CHARGER,
  "Chef": PHB_FEAT_CHEF,
  "Crossbow Expert": PHB_FEAT_CROSSBOW_EXPERT,
  "Crusher": PHB_FEAT_CRUSHER,
  "Defensive Duelist": PHB_FEAT_DEFENSIVE_DUELIST,
  "Dual Wielder": PHB_FEAT_DUAL_WIELDER,
  "Durable": PHB_FEAT_DURABLE,
  "Elemental Adept": PHB_FEAT_ELEMENTAL_ADEPT,
  "Fey-Touched": PHB_FEAT_FEY_TOUCHED
} as const satisfies {[featID: FeatID]: Feat};
