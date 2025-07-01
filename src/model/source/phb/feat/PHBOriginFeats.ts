import {Feat, FeatID} from "@/model/source/model/Feat";
import {is} from "@/model/source/condition/generic/IsCondition";
import {ToolID} from "@/model/source/model/Tool";
import {clericCantripSpell} from "@/model/source/phb/level/cleric/clericCantripSpell";
import {druidCantripSpell} from "@/model/source/phb/level/druid/DruidCantripSpellCondition";
import {wizardCantripSpell} from "@/model/source/phb/level/wizard/WizardCantripSpellCondition";
import {toolType} from "@/model/source/condition/tool/ToolTypeCondition";

const PHB_FEAT_ALERT: Feat = {
  label: "Alert",
  category: "origin",
  choices: []
};
const PHB_FEAT_HEALER: Feat = {
  label: "Healer",
  category: "origin",
  choices: []
};
function crafterTool() {
  return is<ToolID>("Carpenter's Tools", "Leatherworker's Tools", "Mason's Tools", "Potter's Tools", "Smith's Tools", "Tinker's Tools", "Weaver's Tools", "Woodcarver's Tools");
}
const PHB_FEAT_CRAFTER: Feat = {
  label: "Crafter",
  category: "origin",
  choices: [
    {type: "tool", data: {
      label: "Crafter Tool",
      choiceID: "crafter::tool::tool-1",
      condition: crafterTool()
    }},
    {type: "tool", data: {
      label: "Crafter Tool",
      choiceID: "crafter::tool::tool-2",
      condition: crafterTool()
    }},
    {type: "tool", data: {
      label: "Crafter Tool",
      choiceID: "crafter::tool::tool-3",
      condition: crafterTool()
    }}
  ]
};
const PHB_FEAT_LUCKY: Feat = {
  label: "Lucky",
  category: "origin",
  choices: []
};
const PHB_FEAT_MAGIC_INITIATE_CLERIC: Feat = {
  label: "Magic Initiate (Cleric)",
  category: "origin",
  choices: [
    {type: "simple", data: {
      label: "Spellcasting Ability",
      choiceID: "magic initiate (cleric)::spellcasting-ability",
      options: [
        {optionID: "int", label: "Intelligence"},
        {optionID: "wis", label: "Wisdom"},
        {optionID: "cha", label: "Charisma"},
      ]
    }},
    {type: "spell", data: {
      choiceID: "magic initiate (cleric)::spell::cantrip-1",
      sourceID: "magic initiate (cleric)::spell::cantrip-1",
      condition: clericCantripSpell
    }},
    {type: "spell", data: {
      choiceID: "magic initiate (cleric)::spell::cantrip-2",
      sourceID: "magic initiate (cleric)::spell::cantrip-2",
      condition: clericCantripSpell
    }}
  ]
};
const PHB_FEAT_MAGIC_INITIATE_DRUID: Feat = {
  label: "Magic Initiate (Druid)",
  category: "origin",
  choices: [
    {type: "simple", data: {
      label: "Spellcasting Ability",
      choiceID: "magic initiate (druid)::spellcasting-ability",
      options: [
        {optionID: "int", label: "Intelligence"},
        {optionID: "wis", label: "Wisdom"},
        {optionID: "cha", label: "Charisma"},
      ]
    }},
    {type: "spell", data: {
      choiceID: "magic initiate (druid)::spell::cantrip-1",
      sourceID: "magic initiate (druid)::spell::cantrip-1",
      condition: druidCantripSpell
    }},
    {type: "spell", data: {
      choiceID: "magic initiate (druid)::spell::cantrip-2",
      sourceID: "magic initiate (druid)::spell::cantrip-2",
      condition: druidCantripSpell
    }}
  ]
};
const PHB_FEAT_MAGIC_INITIATE_WIZARD: Feat = {
  label: "Magic Initiate (Wizard)",
  category: "origin",
  choices: [
    {type: "simple", data: {
      label: "Spellcasting Ability",
      choiceID: "magic initiate (wizard)::spellcasting-ability",
      options: [
        {optionID: "int", label: "Intelligence"},
        {optionID: "wis", label: "Wisdom"},
        {optionID: "cha", label: "Charisma"},
      ]
    }},
    {type: "spell", data: {
      choiceID: "magic initiate (wizard)::spell::cantrip-1",
      sourceID: "magic initiate (wizard)::spell::cantrip-1",
      condition: wizardCantripSpell()
    }},
    {type: "spell", data: {
      choiceID: "magic initiate (wizard)::spell::cantrip-2",
      sourceID: "magic initiate (wizard)::spell::cantrip-2",
      condition: wizardCantripSpell()
    }}
  ]
};
const PHB_FEAT_SKILLED: Feat = {
  label: "Skilled",
  category: "origin",
  repeatable: true,
  choices: [
    {type: "skill-or-tool", data: {
      choiceID: "skilled::skill-or-tool::option-1",
    }},
    {type: "skill-or-tool", data: {
      choiceID: "skilled::skill-or-tool::option-2",
    }},
    {type: "skill-or-tool", data: {
      choiceID: "skilled::skill-or-tool::option-3",
    }},
  ]
};
const PHB_FEAT_MUSICIAN: Feat = {
  label: "Musician",
  category: "origin",
  choices: [
    {type: "tool", data: {
        choiceID: "skilled::tool::tool-1",
        condition: toolType("musical instrument")
      }},
    {type: "tool", data: {
        choiceID: "skilled::tool::tool-2",
        condition: toolType("musical instrument")
      }},
    {type: "tool", data: {
        choiceID: "skilled::tool::tool-3",
        condition: toolType("musical instrument")
      }},
  ]
};
const PHB_FEAT_SAVAGE_ATTACKER: Feat = {
  label: "Savage Attacker",
  category: "origin",
  choices: []
};
const PHB_FEAT_TAVERN_BRAWLER: Feat = {
  label: "Tavern Brawler",
  category: "origin",
  choices: []
};
const PHB_FEAT_TOUGH: Feat = {
  label: "Tough",
  category: "origin",
  choices: []
};

export default {
  "Alert": PHB_FEAT_ALERT,
  "Crafter": PHB_FEAT_CRAFTER,
  "Healer": PHB_FEAT_HEALER,
  "Lucky": PHB_FEAT_LUCKY,
  "Magic Initiate (Cleric)": PHB_FEAT_MAGIC_INITIATE_CLERIC,
  "Magic Initiate (Druid)": PHB_FEAT_MAGIC_INITIATE_DRUID,
  "Magic Initiate (Wizard)": PHB_FEAT_MAGIC_INITIATE_WIZARD,
  "Musician": PHB_FEAT_MUSICIAN,
  "Savage Attacker": PHB_FEAT_SAVAGE_ATTACKER,
  "Skilled": PHB_FEAT_SKILLED,
  "Tavern Brawler": PHB_FEAT_TAVERN_BRAWLER,
  "Tough": PHB_FEAT_TOUGH
} as const satisfies {[featID: FeatID]: Feat};
