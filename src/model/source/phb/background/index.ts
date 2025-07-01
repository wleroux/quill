import {AttributeID} from "@/model/source/model/Attribute";
import {Background, BackgroundID} from "@/model/source/model/Background";
import {toolType} from "@/model/source/condition/tool/ToolTypeCondition";
import {is} from "@/model/source/condition/generic/IsCondition";
import {SkillID} from "@/model/source/model/Skill";
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";
import {FeatID} from "@/model/source/model/Feat";

const PHB_BACKGROUND_ACOLYTE: Background = {
  label: "Acolyte",
  choices: [
    {type: "background-attribute", data: {
      choiceID: "acolyte::attributes",
      condition: is<AttributeID>("int", "wis", "cha")
    }},
    {type: "feat", data: {
      choiceID: "acolyte::feat::feat-1",
      condition: is<FeatID>("Magic Initiate (Cleric)")
    }},
    {type: "skill", data: {
      choiceID: "charlatan::skill::skill-1",
      condition: is<SkillID>("insight")
    }},
    {type: "skill", data: {
      choiceID: "charlatan::skill::skill-2",
      condition: is<SkillID>("religion")
    }},
    {type: "tool", data: {
      choiceID: "charlatan::tool::tool-1",
      condition: is("Calligrapher's Supplies")
    }}
  ]
};
const PHB_BACKGROUND_ARTISAN: Background = {
  label: "Artisan",
  choices: [
    {type: "background-attribute", data: {
        choiceID: "artisan::attributes",
        condition: is<AttributeID>("str", "dex", "int")
      }},
    {type: "feat", data: {
      choiceID: "artisan::feat::feat-1",
      condition: is("Crafter")
    }},
    {type: "skill", data: {
      choiceID: "charlatan::skill::skill-1",
      condition: is<SkillID>("investigation")
    }},
    {type: "skill", data: {
      choiceID: "charlatan::skill::skill-2",
      condition: is<SkillID>("persuasion")
    }},
    {type: "tool", data: {
      label: "Artisan Tool",
      choiceID: "artisan::tool:tool-1",
      condition: toolType("artisan tool")
    }},
  ]
};
const PHB_BACKGROUND_CUSTOM: Background = {
  label: "Custom",
  choices: [
    {type: "background-attribute", data: {
      choiceID: "custom::attribute"
    }},
    {type: "feat", data: {
      choiceID: "custom::feat::feat-1",
      condition: featType("origin")
    }},
    {type: "skill", data: {
      choiceID: "custom::skill::skill-1"
    }},
    {type: "skill", data: {
      choiceID: "custom::skill::skill-2"
    }},
    {type: "tool", data: {
      choiceID: "custom::tool::tool-1"
    }}
  ]
} as const;
const PHB_BACKGROUND_CHARLATAN: Background = {
  label: "Charlatan",
  choices: [
    {type: "background-attribute", data: {
      choiceID: "charlatan::attributes",
      condition: is<AttributeID>("dex", "con", "cha")
    }},
    {type: "feat", data: {
      choiceID: "charlatan::feat::feat-1",
      condition: is("Skilled")
    }},
    {type: "skill", data: {
      choiceID: "charlatan::skill::skill-1",
      condition: is<SkillID>("deception")
    }},
    {type: "skill", data: {
      choiceID: "charlatan::skill::skill-2",
      condition: is<SkillID>("sleight of hand")
    }},
    {type: "tool", data: {
      choiceID: "charlatan::tool::tool-1",
      condition: is("Forgery Kit")
    }},
  ]
};
const PHB_BACKGROUND_CRIMINAL: Background = {
  label: "Criminal",
  choices: [
    {type: "background-attribute", data: {
      choiceID: "criminal::attributes",
      condition: is<AttributeID>("dex", "con", "int")
    }},
    {type: "feat", data: {
      choiceID: "criminal::feat::feat-1",
      condition: is("Alert")
    }},
    {type: "skill", data: {
      choiceID: "criminal::skill::skill-1",
      condition: is<SkillID>("sleight of hand")
    }},
    {type: "skill", data: {
      choiceID: "criminal::skill::skill-2",
      condition: is<SkillID>("stealth")
    }},
    {type: "tool", data: {
      choiceID: "criminal::tool::tool-2",
      condition: is("Thieves' Tools")
    }}
  ]
};
const PHB_BACKGROUND_ENTERTAINER: Background = {
  label: "Entertainer",
  choices: [
    {type: "background-attribute", data: {
      choiceID: "entertainer::attributes",
      condition: is<AttributeID>("str", "dex", "cha")
    }},
    {type: "feat", data: {
      choiceID: "entertainer::feat",
      condition: is("Musician")
    }},
    {type: "skill", data: {
      choiceID: "entertainer::skill::skill-1",
      condition: is<SkillID>("acrobatics")
    }},
    {type: "skill", data: {
      choiceID: "entertainer::skill::skill-2",
      condition: is<SkillID>("performance")
    }},
    {type: "tool", data: {
      choiceID: "entertainer::tool::tool-2",
      condition: toolType("musical instrument")
    }}
  ]
};
const PHB_BACKGROUND_FARMER: Background = {
  label: "Farmer",
  choices: [
    {type: "background-attribute", data: {
      choiceID: "farmer::attributes",
      condition: is<AttributeID>("str", "con", "wis")
    }},
    {type: "feat", data: {
      choiceID: "farmer::feat",
      condition: is("Tough")
    }},
    {type: "skill", data: {
      choiceID: "farmer::skill::skill-1",
      condition: is<SkillID>("animal handling")
    }},
    {type: "skill", data: {
      choiceID: "farmer::skill::skill-2",
      condition: is<SkillID>("nature")
    }},
    {type: "tool", data: {
      choiceID: "farmer::tool::tool-1",
      condition: is("Carpenter's Tools")
    }}
  ]
};
const PHB_BACKGROUND_GUARD: Background = {
  label: "Guard",
  choices: [
    {type: "background-attribute", data: {
      choiceID: "guard::attributes",
      condition: is<AttributeID>("str", "int", "wis")
    }},
    {type: "feat", data: {
      choiceID: "guard::feat",
      condition: is("Alert")
    }},
    {type: "skill", data: {
      choiceID: "guard::skill::skill-1",
      condition: is<SkillID>("athletics")
    }},
    {type: "skill", data: {
      choiceID: "guard::skill::skill-2",
      condition: is<SkillID>("perception")
    }},
    {type: "tool", data: {
      label: "Gaming Set",
      choiceID: "guard::tool::tool-1",
      condition: toolType("gaming set")
    }}
  ]
};
const PHB_BACKGROUND_GUIDE: Background = {
  label: "Guide",
  choices: [
    {type: "background-attribute", data: {
      choiceID: "guide::attributes",
      condition: is<AttributeID>("dex", "con", "wis")
    }},
    {type: "feat", data: {
      choiceID: "guide::feat",
      condition: is("Magic Initiate (Druid)")
    }},
    {type: "skill", data: {
      choiceID: "guide::skill::skill-1",
      condition: is<SkillID>("stealth")
    }},
    {type: "skill", data: {
      choiceID: "guide::skill::skill-2",
      condition: is<SkillID>("survival")
    }},
    {type: "tool", data: {
      choiceID: "guide::tool::tool-1",
      condition: is("Cartographer's Tools")
    }}
  ]
};
const PHB_BACKGROUND_HERMIT: Background = {
  label: "Hermit",
  choices: [
    {type: "background-attribute", data: {
      choiceID: "hermit::attributes",
      condition: is<AttributeID>("con", "wis", "cha")
    }},
    {type: "feat", data: {
      choiceID: "hermit::feat",
      condition: is("Healer")
    }},
    {type: "skill", data: {
      choiceID: "hermit::skill::skill-1",
      condition: is<SkillID>("medicine")
    }},
    {type: "skill", data: {
      choiceID: "hermit::skill::skill-2",
      condition: is<SkillID>("religion")
    }},
    {type: "tool", data: {
      choiceID: "hermit::tool::tool-1",
      condition: is("Herbalism Kit")
    }}
  ]
};
const PHB_BACKGROUND_MERCHANT: Background = {
  label: "Merchant",
  choices: [
    {type: "background-attribute", data: {
      choiceID: "merchant::attributes",
      condition: is<AttributeID>("con", "int", "cha")
    }},
    {type: "feat", data: {
      choiceID: "merchant::feat",
      condition: is("Lucky")
    }},
    {type: "skill", data: {
      choiceID: "merchant::skill::skill-1",
      condition: is<SkillID>("animal handling")
    }},
    {type: "skill", data: {
      choiceID: "merchant::skill::skill-2",
      condition: is<SkillID>("persuasion")
    }},
    {type: "tool", data: {
      choiceID: "merchant::tool::tool-1",
      condition: is("Navigator's Tools")
    }}
  ]
};
const PHB_BACKGROUND_NOBLE: Background = {
  label: "Noble",
  choices: [
    {type: "background-attribute", data: {
      choiceID: "noble::attributes",
      condition: is<AttributeID>("str", "int", "cha")
    }},
    {type: "feat", data: {
      choiceID: "noble::feat",
      condition: is("Skilled")
    }},
    {type: "skill", data: {
      choiceID: "noble::skill::skill-1",
      condition: is<SkillID>("history")
    }},
    {type: "skill", data: {
      choiceID: "noble::skill::skill-2",
      condition: is<SkillID>("persuasion")
    }},
    {type: "tool", data: {
      label: "Gaming Set",
      choiceID: "noble::tool::tool-1",
      condition: toolType("gaming set")
    }}
  ]
};

const PHB_BACKGROUND_SAGE: Background = {
  label: "Sage",
  choices: [
    {type: "background-attribute", data: {
      choiceID: "noble::attributes",
      condition: is<AttributeID>("con", "int", "wis")
    }},
    {type: "feat", data: {
      choiceID: "sage::feat",
      condition: is("Magic Initiate (Wizard)")
    }},
    {type: "skill", data: {
      choiceID: "sage::skill::skill-1",
      condition: is<SkillID>("arcana")
    }},
    {type: "skill", data: {
      choiceID: "sage::skill::skill-2",
      condition: is<SkillID>("history")
    }},
    {type: "tool", data: {
      choiceID: "sage::tool::tool-1",
      condition: is("Calligrapher's Supplies")
    }}
  ]
};

const PHB_BACKGROUND_SAILOR: Background = {
  label: "Sailor",
  choices: [
    {type: "background-attribute", data: {
      choiceID: "sailor::attributes",
      condition: is<AttributeID>("str", "dex", "wis")
    }},
    {type: "feat", data: {
      choiceID: "sailor::feat",
      condition: is("Tavern Brawler")
    }},
    {type: "skill", data: {
      choiceID: "sailor::skill::skill-1",
      condition: is<SkillID>("acrobatics")
    }},
    {type: "skill", data: {
      choiceID: "sailor::skill::skill-2",
      condition: is<SkillID>("perception")
    }},
    {type: "tool", data: {
      choiceID: "sailor::tool::tool-1",
      condition: is("Navigator's Tools")
    }}
  ]
};

const PHB_BACKGROUND_SCRIBE: Background = {
  label: "Scribe",
  choices: [
    {type: "background-attribute", data: {
      choiceID: "scribe::attributes",
      condition: is<AttributeID>("dex", "int", "wis")
    }},
    {type: "feat", data: {
      choiceID: "scribe::feat",
      condition: is("Skilled")
    }},
    {type: "skill", data: {
      choiceID: "scribe::skill::skill-1",
      condition: is<SkillID>("investigation")
    }},
    {type: "skill", data: {
      choiceID: "scribe::skill::skill-2",
      condition: is<SkillID>("perception")
    }},
    {type: "tool", data: {
      choiceID: "scribe::tool::tool-1",
      condition: is("Calligrapher's Supplies")
    }}
  ]
};
const PHB_BACKGROUND_SOLDIER: Background = {
  label: "Soldier",
  choices: [
    {type: "background-attribute", data: {
      choiceID: "soldier::attributes",
      condition: is<AttributeID>("str", "dex", "con")
    }},
    {type: "feat", data: {
      choiceID: "soldier::feat",
      condition: is("Savage Attacker")
    }},
    {type: "skill", data: {
      choiceID: "soldier::skill::skill-1",
      condition: is<SkillID>("athletics")
    }},
    {type: "skill", data: {
      choiceID: "soldier::skill::skill-2",
      condition: is<SkillID>("intimidation")
    }},
    {type: "tool", data: {
      label: "Gaming Set",
      choiceID: "soldier::tool::tool-1",
      condition: toolType("gaming set")
    }}
  ]
};

const PHB_BACKGROUND_WAYFARER: Background = {
  label: "Wayfarer",
  choices: [
    {type: "background-attribute", data: {
      choiceID: "wayfarer::attributes",
      condition: is<AttributeID>("dex", "wis", "cha")
    }},
    {type: "feat", data: {
      choiceID: "wayfarer::feat",
      condition: is("Lucky")
    }},
    {type: "skill", data: {
      choiceID: "wayfarer::skill::skill-1",
      condition: is<SkillID>("insight")
    }},
    {type: "skill", data: {
      choiceID: "wayfarer::skill::skill-2",
      condition: is<SkillID>("stealth")
    }},
    {type: "tool", data: {
      choiceID: "wayfarer::tool::tool-1",
      condition: is("Thieves' Tools")
    }}
  ]
};

export default {
  "Custom": PHB_BACKGROUND_CUSTOM,
  "Acolyte": PHB_BACKGROUND_ACOLYTE,
  "Artisan": PHB_BACKGROUND_ARTISAN,
  "Charlatan": PHB_BACKGROUND_CHARLATAN,
  "Criminal": PHB_BACKGROUND_CRIMINAL,
  "Entertainer": PHB_BACKGROUND_ENTERTAINER,
  "Farmer": PHB_BACKGROUND_FARMER,
  "Guard": PHB_BACKGROUND_GUARD,
  "Guide": PHB_BACKGROUND_GUIDE,
  "Hermit": PHB_BACKGROUND_HERMIT,
  "Merchant": PHB_BACKGROUND_MERCHANT,
  "Noble": PHB_BACKGROUND_NOBLE,
  "Sage": PHB_BACKGROUND_SAGE,
  "Sailor": PHB_BACKGROUND_SAILOR,
  "Scribe": PHB_BACKGROUND_SCRIBE,
  "Soldier": PHB_BACKGROUND_SOLDIER,
  "Wayfarer": PHB_BACKGROUND_WAYFARER
} as const satisfies {[backgroundID: BackgroundID]: Background};
