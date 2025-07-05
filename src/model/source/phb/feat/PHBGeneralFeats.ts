import {Feat, FeatID} from "../../model/Feat";
import {AttributeID} from "@/model/source/model/Attribute";
import {is} from "@/model/source/condition/generic/IsCondition";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {all} from "@/model/source/condition/generic/AllCondition";
import {currentLevel} from "@/model/character/level/LevelChoice";
import {ToolID} from "../../model/Tool";
import {SpellID} from "@/model/source/model/Spell";
import {selectedChoice} from "@/model/source/choice/Choice";
import {SkillID} from "../../model/Skill";

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
      condition: is<SpellID>("Misty Step")
    }},
    {type: "spell", data: {
      choiceID: "fey-touched::spell-2",
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
const PHB_FEAT_GRAPPLER: Feat = {
  label: "Grappler",
  prerequisite: all(currentLevel(4), any(minStat("str", 13), minStat("dex", 13))),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "grappler::attribute-1",
      condition: is<AttributeID>("str", "dex")
    }},
  ]
};
const PHB_FEAT_GREAT_WEAPON_MASTER: Feat = {
  label: "Great Weapon Master",
  prerequisite: all(currentLevel(4), minStat("str", 13)),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "great weapon master::attribute-1",
      condition: is<AttributeID>("str")
    }}
  ]
};
const PHB_FEAT_HEAVILY_ARMORED: Feat = {
  label: "Heavily Armored",
  prerequisite: all(currentLevel(4)), // TODO: Medium Armor Proficiency
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "heavily armored::attribute-1",
      condition: is<AttributeID>("str", "con")
    }}
  ]
};
const PHB_FEAT_HEAVY_ARMOR_MASTER: Feat = {
  label: "Heavy Armor Master",
  prerequisite: all(currentLevel(4)), // TODO: Heavy Armor Proficiency
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "heavy armor master::attribute-1",
      condition: is<AttributeID>("str", "con")
    }}
  ]
};
const PHB_FEAT_INSPIRING_LEADER: Feat = {
  label: "Inspiring Leader",
  prerequisite: all(currentLevel(4), any(minStat("wis", 13), minStat("cha", 13))),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "inspiring leader::attribute-1",
      condition: is<AttributeID>("wis", "cha")
    }}
  ]
};
const PHB_FEAT_KEEN_MIND: Feat = {
  label: "Keen Mind",
  prerequisite: all(currentLevel(4), minStat("int", 13)),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "keen mind::attribute-1",
      condition: is<AttributeID>("int")
    }}
  ]
};
const PHB_FEAT_LIGHTLY_ARMORED: Feat = {
  label: "Lightly Armored",
  prerequisite: currentLevel(4),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "lightly armored::attribute-1",
      condition: is<AttributeID>("str", "dex")
    }}
  ]
};
const PHB_FEAT_MAGE_SLAYER: Feat = {
  label: "Mage Slayer",
  prerequisite: currentLevel(4),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "mage slayer::attribute-1",
      condition: is<AttributeID>("str", "dex")
    }}
  ]
};
const PHB_FEAT_MARTIAL_WEAPON_TRAINING: Feat = {
  label: "Martial Weapon Training",
  prerequisite: currentLevel(4),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "martial weapon training::attribute-1",
      condition: is<AttributeID>("str", "dex")
    }}
  ]
};
const PHB_FEAT_MEDIUM_ARMOR_MASTER: Feat = {
  label: "Medium Armor Master",
  prerequisite: currentLevel(4), // TODO: Medium Armor Proficiency
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "medium armor master::attribute-1",
      condition: is<AttributeID>("str", "dex")
    }}
  ]
};
const PHB_FEAT_MODERATELY_ARMORED: Feat = {
  label: "Moderately Armored",
  prerequisite: currentLevel(4), // TODO: Light Armor Proficiency
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "moderately armored::attribute-1",
      condition: is<AttributeID>("str", "dex")
    }}
  ]
};
const PHB_FEAT_MOUNTED_COMBATANT: Feat = {
  label: "Mounted Combatant",
  prerequisite: currentLevel(4),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "mounted combatant::attribute-1",
      condition: is<AttributeID>("str", "dex", "wis")
    }}
  ]
};
const PHB_FEAT_OBSERVANT: Feat = {
  label: "Observant",
  prerequisite: all(currentLevel(4), any(minStat("wis", 13), minStat("int", 13))),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "observant::attribute-1",
      condition: is<AttributeID>("wis", "int")
    }},
    {type: "simple", data: {
      label: "Proficiency or Expertise",
      choiceID: "observant::proficiency-or-expertise",
      options: [
        {optionID: "expertise", label: "expertise"},
        {optionID: "proficiency", label: "proficiency"}
      ]
    }},
    {type: "skill", data: {
      choiceID: "observant::proficiency",
      enabled: selectedChoice("observant::proficiency-or-expertise", "proficiency"),
      condition: is<SkillID>("insight", "investigation", "perception")
    }},
    {type: "expertise", data: {
      choiceID: "observant::expertise",
      enabled: selectedChoice("observant::proficiency-or-expertise", "expertise"),
      condition: is<SkillID>("insight", "investigation", "perception")
    }}
  ]
};
const PHB_FEAT_PIERCER: Feat = {
  label: "Piercer",
  prerequisite: currentLevel(4),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "piercer::attribute-1",
      condition: is<AttributeID>("str", "dex")
    }}
  ]
};
const PHB_FEAT_POISONER: Feat = {
  label: "Poisoner",
  prerequisite: currentLevel(4),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "poisoner::attribute-1",
      condition: is<AttributeID>("dex", "int")
    }},
    {type: "tool", data: {
      choiceID: "poisoner::tool-1",
      condition: is("Poisoner's Kit")
    }}
  ]
};
const PHB_FEAT_POLEARM_MASTER: Feat = {
  label: "Polearm Master",
  prerequisite: all(currentLevel(4), any(minStat("str", 13), minStat("dex", 13))),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "polearm master::attribute-1",
      condition: is<AttributeID>("dex", "int")
    }}
  ]
};
const PHB_FEAT_RESILIENT: Feat = {
  label: "Resilient",
  prerequisite: currentLevel(4),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "resilient::attribute-1"
    }}
  ]
};
const ritualSpell = is<SpellID>(
  "Alarm",
  "Comprehend Languages",
  "Detect Magic",
  "Detect Poison and Disease",
  "Find Familiar",
  "Identify",
  "Illusory Script",
  "Purity Food and Drink",
  "Speak with Animals",
  "Tenser's Floating Disk",
  "Unseen Servant"
);
const PHB_FEAT_RITUAL_CASTER: Feat = {
  label: "Ritual Caster",
  prerequisite: currentLevel(4),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "ritual caster::attribute-1",
      condition: is<AttributeID>("int", "wis", "cha")
    }},
    {type: "spell", data: {
      label: "Ritual Spell",
      choiceID: "ritual caster::spell-1",
      condition: ritualSpell
    }},
    {type: "spell", data: {
      label: "Ritual Spell",
      choiceID: "ritual caster::spell-2",
      condition: ritualSpell
    }},
    {type: "spell", data: {
      label: "Ritual Spell",
      choiceID: "ritual caster::spell-3",
      condition: ritualSpell
    }},
    {type: "spell", data: { // TODO: Progressive Spell Selection
      label: "Ritual Spell",
      choiceID: "ritual caster::spell-4",
      condition: ritualSpell
    }},
    {type: "spell", data: {
      label: "Ritual Spell",
      choiceID: "ritual caster::spell-5",
      condition: ritualSpell
    }},
    {type: "spell", data: {
      label: "Ritual Spell",
      choiceID: "ritual caster::spell-6",
      condition: ritualSpell
    }}
  ]
};
const PHB_FEAT_SENTINEL: Feat = {
  label: "Sentinel",
  prerequisite: all(currentLevel(4), any(minStat("str", 13), minStat("dex", 13))),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "sentinel::attribute-1",
      condition: is<AttributeID>("str", "dex")
    }}
  ]
};
const PHB_FEAT_SHADOW_TOUCHED: Feat = {
  label: "Shadow-Touched",
  prerequisite: currentLevel(4),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "shadow-touched::attribute-1",
      condition: is<AttributeID>("int", "wis", "cha")
    }}
  ]
};
const PHB_FEAT_SHARPSHOOTER: Feat = {
  label: "Sharpshooter",
  prerequisite: all(currentLevel(4), minStat("dex", 13)),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "sharpshooter::attribute-1",
      condition: is<AttributeID>("dex")
    }}
  ]
};
const PHB_FEAT_SHIELD_MASTER: Feat = {
  label: "Shield Master",
  prerequisite: currentLevel(4), // TODO: Shield Training
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "shield master::attribute-1",
      condition: is<AttributeID>("str")
    }}
  ]
};
const PHB_FEAT_SKILL_EXPERT: Feat = {
  label: "Skill Expert",
  prerequisite: currentLevel(4),
  category: "general",
  choices: [
    {type: "attribute", data: {
        choiceID: "skill expert::attribute-1"
      }},
    {type: "skill", data: {
        choiceID: "skill expert::skill-1",
      }},
    {type: "expertise", data: {
        choiceID: "skill expert::expertise-1",
      }}
  ]
};
const PHB_FEAT_SKULKER: Feat = {
  label: "Skulker",
  prerequisite: all(currentLevel(4), minStat("dex", 13)),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "skulker::attribute-1",
      condition: is<AttributeID>("dex")
    }},
  ]
};
const PHB_FEAT_SLASHER: Feat = {
  label: "Slasher",
  prerequisite: currentLevel(4),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "slasher::attribute-1",
      condition: is<AttributeID>("str", "dex")
    }},
  ]
};
const PHB_FEAT_SPEEDY: Feat = {
  label: "Speedy",
  prerequisite: all(currentLevel(4), any(minStat("dex", 13), minStat("con", 13))),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "speedy::attribute-1",
      condition: is<AttributeID>("dex", "con")
    }}
  ]
};
const PHB_FEAT_SPELL_SNIPER: Feat = {
  label: "Spell Sniper",
  prerequisite: currentLevel(4),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "spell sniper::attribute-1",
      condition: is<AttributeID>("int", "wis", "cha")
    }},
  ]
};
const PHB_FEAT_TELEKINETIC: Feat = {
  label: "Telekinetic",
  prerequisite: currentLevel(4),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "telekinetic::attribute-1",
      condition: is<AttributeID>("int", "wis", "cha")
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "telekinetic::cantrip-1",
      condition: is("Mage Hand")
    }}
  ]
};
const PHB_FEAT_TELEPATHIC: Feat = {
  label: "Telepathic",
  prerequisite: currentLevel(4),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "telepathic::attribute-1",
      condition: is<AttributeID>("int", "wis", "cha")
    }},
    {type: "spell", data: {
      label: "Spell",
      choiceID: "telepathic::spell-1",
      condition: is("Detect Thoughts")
    }}
  ]
};
const PHB_FEAT_WAR_CASTER: Feat = {
  label: "War Caster",
  prerequisite: currentLevel(4),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "war caster::attribute-1",
      condition: is<AttributeID>("int", "wis", "cha")
    }},
  ]
};
const PHB_FEAT_WEAPON_MASTER: Feat = {
  label: "Weapon Master",
  prerequisite: currentLevel(4),
  category: "general",
  choices: [
    {type: "attribute", data: {
      choiceID: "weapon master::attribute-1",
      condition: is<AttributeID>("str", "dex")
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
  "Fey-Touched": PHB_FEAT_FEY_TOUCHED,
  "Grappler": PHB_FEAT_GRAPPLER,
  "Great Weapon Master": PHB_FEAT_GREAT_WEAPON_MASTER,
  "Heavily Armored": PHB_FEAT_HEAVILY_ARMORED,
  "Heavy Armor Master": PHB_FEAT_HEAVY_ARMOR_MASTER,
  "Inspiring Leader": PHB_FEAT_INSPIRING_LEADER,
  "Keen Mind": PHB_FEAT_KEEN_MIND,
  "Lightly Armored": PHB_FEAT_LIGHTLY_ARMORED,
  "Mage Slayer": PHB_FEAT_MAGE_SLAYER,
  "Martial Weapon Training": PHB_FEAT_MARTIAL_WEAPON_TRAINING,
  "Medium Armor Master": PHB_FEAT_MEDIUM_ARMOR_MASTER,
  "Moderately Armored": PHB_FEAT_MODERATELY_ARMORED,
  "Mounted Combatant": PHB_FEAT_MOUNTED_COMBATANT,
  "Observant": PHB_FEAT_OBSERVANT,
  "Piercer": PHB_FEAT_PIERCER,
  "Poisoner": PHB_FEAT_POISONER,
  "Polearm Master": PHB_FEAT_POLEARM_MASTER,
  "Resilient": PHB_FEAT_RESILIENT,
  "Ritual Caster": PHB_FEAT_RITUAL_CASTER,
  "Sentinel": PHB_FEAT_SENTINEL,
  "Shadow-Touched": PHB_FEAT_SHADOW_TOUCHED,
  "Sharpshooter": PHB_FEAT_SHARPSHOOTER,
  "Shield Master": PHB_FEAT_SHIELD_MASTER,
  "Skill Expert": PHB_FEAT_SKILL_EXPERT,
  "Skulker": PHB_FEAT_SKULKER,
  "Slasher": PHB_FEAT_SLASHER,
  "Speedy": PHB_FEAT_SPEEDY,
  "Spell Sniper": PHB_FEAT_SPELL_SNIPER,
  "Telekinetic": PHB_FEAT_TELEKINETIC,
  "Telepathic": PHB_FEAT_TELEPATHIC,
  "War Caster": PHB_FEAT_WAR_CASTER,
  "Weapon Master": PHB_FEAT_WEAPON_MASTER
} as const satisfies {[featID: FeatID]: Feat};
