import {GamingSetTool, Tool, ToolArtisan} from "@/model/tool";
import {DEFAULT_FEATS, FeatCrafter, FeatMusician, FeatSkilled, OriginFeat} from "@/model/feat";
import {Attribute, MentalAttribute} from "@/model/attribute";
import {Skill} from "@/model/skill";
import {Spell} from "@/model/spell";

export const BACKGROUNDS = [
  "acolyte",
  "artisan",
  "charlatan",
  "criminal",
  "custom",
  "entertainer",
  "farmer",
  "guard",
  "guide",
  "hermit",
  "merchant",
  "noble",
  "sage",
  "sailor",
  "scribe",
  "soldier",
  "wayfarer"
] as const;

export type BackgroundAcolyte = {
  attribute1: MentalAttribute;
  attribute2: MentalAttribute;
  attribute3: MentalAttribute;
  feat: {
    spellcastingAbility: MentalAttribute;
    cantrip1: Spell;
    cantrip2: Spell;
  },
};

export type BackgroundArtisanAttribute = "str" | "dex" | "int";
export function isBackgroundArtisanAttribute(attribute: Attribute): attribute is BackgroundArtisanAttribute {
  return ["str", "dex", "int"].includes(attribute);
}
export type BackgroundArtisan = {
  attribute1: BackgroundArtisanAttribute;
  attribute2: BackgroundArtisanAttribute;
  attribute3: BackgroundArtisanAttribute;
  tool: ToolArtisan;
  feat: FeatCrafter;
};


export type BackgroundCharlatanAttribute = "dex" | "con" | "cha";
export function isBackgroundCharlatanAttribute(attribute: Attribute): attribute is BackgroundCharlatanAttribute {
  return ["dex", "con", "cha"].includes(attribute);
}
export type BackgroundCharlatan = {
  attribute1: BackgroundCharlatanAttribute;
  attribute2: BackgroundCharlatanAttribute;
  attribute3: BackgroundCharlatanAttribute;
  feat: FeatSkilled;
};

export type BackgroundCriminalAttribute = "dex" | "con" | "int";
export function isBackgroundCriminalAttribute(attribute: Attribute): attribute is BackgroundCriminalAttribute {
  return ["dex", "con", "int"].includes(attribute);
}

export type BackgroundCriminal = {
  attribute1: BackgroundCriminalAttribute;
  attribute2: BackgroundCriminalAttribute;
  attribute3: BackgroundCriminalAttribute;
};

export type BackgroundCustom = {
  attribute1: Attribute;
  attribute2: Attribute;
  attribute3: Attribute;
  feat: OriginFeat;
  skill1: Skill;
  skill2: Skill;
  tool: Tool;
};

export type BackgroundEntertainerAttribute = "str" | "dex" | "cha";
export function isBackgroundEntertainerAttribute(attribute: Attribute): attribute is BackgroundEntertainerAttribute {
  return ["str", "dex", "cha"].includes(attribute);
}
export type BackgroundEntertainer = {
  attribute1: BackgroundEntertainerAttribute;
  attribute2: BackgroundEntertainerAttribute;
  attribute3: BackgroundEntertainerAttribute;
  feat: FeatMusician;
};

export type BackgroundFarmerAttribute = "str" | "con" | "wis";
export function isBackgroundFarmerAttribute(attribute: Attribute): attribute is BackgroundFarmerAttribute {
  return ["str", "con", "wis"].includes(attribute);
}
export type BackgroundFarmer = {
  attribute1: BackgroundFarmerAttribute;
  attribute2: BackgroundFarmerAttribute;
  attribute3: BackgroundFarmerAttribute;
};

export type BackgroundGuardAttribute = "str" | "int" | "wis";
export function isBackgroundGuardAttribute(attribute: Attribute): attribute is BackgroundGuardAttribute {
  return ["str", "int", "wis"].includes(attribute);
}
export type BackgroundGuard = {
  attribute1: BackgroundGuardAttribute;
  attribute2: BackgroundGuardAttribute;
  attribute3: BackgroundGuardAttribute;
  tool: GamingSetTool;
};

export type BackgroundGuideAttribute = "dex" | "con" | "wis"
export function isBackgroundGuideAttribute(attribute: Attribute): attribute is BackgroundGuideAttribute {
  return ["dex", "con", "wis"].includes(attribute);
}
export type BackgroundGuide = {
  attribute1: BackgroundGuideAttribute;
  attribute2: BackgroundGuideAttribute;
  attribute3: BackgroundGuideAttribute;
  feat: {
    spellcastingAbility: MentalAttribute,
    cantrip1: Spell;
    cantrip2: Spell;
  };
};

export type BackgroundHermitAttribute = "con" | "wis" | "cha"
export function isBackgroundHermitAttribute(attribute: Attribute): attribute is BackgroundHermitAttribute {
  return ["con", "wis", "cha"].includes(attribute);
}
export type BackgroundHermit = {
  attribute1: BackgroundHermitAttribute;
  attribute2: BackgroundHermitAttribute;
  attribute3: BackgroundHermitAttribute;
};

export type BackgroundMerchantAttribute = "con" | "int" | "cha"
export function isBackgroundMerchantAttribute(attribute: Attribute): attribute is BackgroundMerchantAttribute {
  return ["con", "int", "cha"].includes(attribute);
}
export type BackgroundMerchant = {
  attribute1: BackgroundMerchantAttribute;
  attribute2: BackgroundMerchantAttribute;
  attribute3: BackgroundMerchantAttribute;
};

export type BackgroundNobleAttribute = "str" | "int" | "cha"
export function isBackgroundNobleAttribute(attribute: Attribute): attribute is BackgroundNobleAttribute {
  return ["str", "int", "cha"].includes(attribute);
}
export type BackgroundNoble = {
  attribute1: BackgroundNobleAttribute;
  attribute2: BackgroundNobleAttribute;
  attribute3: BackgroundNobleAttribute;
  feat: FeatSkilled;
  tool: GamingSetTool;
};

export type BackgroundSageAttribute = "con" | "int" | "wis"
export function isBackgroundSageAttribute(attribute: Attribute): attribute is BackgroundSageAttribute {
  return ["con", "int", "wis"].includes(attribute);
}
export type BackgroundSage = {
  attribute1: BackgroundSageAttribute;
  attribute2: BackgroundSageAttribute;
  attribute3: BackgroundSageAttribute;
  feat: {
    spellcastingAbility: MentalAttribute;
    cantrip1: Spell;
    cantrip2: Spell;
  };
};

export type BackgroundSailorAttribute = "str" | "dex" | "wis"
export function isBackgroundSailorAttribute(attribute: Attribute): attribute is BackgroundSailorAttribute {
  return ["str", "dex", "wis"].includes(attribute);
}
export type BackgroundSailor = {
  attribute1: BackgroundSailorAttribute;
  attribute2: BackgroundSailorAttribute;
  attribute3: BackgroundSailorAttribute;
};

export type BackgroundSoldierAttribute = "str" | "dex" | "con"
export function isBackgroundSoldierAttribute(attribute: Attribute): attribute is BackgroundSoldierAttribute {
  return ["str", "dex", "con"].includes(attribute);
}
export type BackgroundSoldier = {
  attribute1: BackgroundSoldierAttribute;
  attribute2: BackgroundSoldierAttribute;
  attribute3: BackgroundSoldierAttribute;
  tool: GamingSetTool;
};

export type BackgroundWayfarerAttribute = "dex" | "wis" | "cha"
export function isBackgroundWayfarerAttribute(attribute: Attribute): attribute is BackgroundWayfarerAttribute {
  return ["dex", "wis", "cha"].includes(attribute);
}
export type BackgroundWayfarer = {
  attribute1: BackgroundWayfarerAttribute;
  attribute2: BackgroundWayfarerAttribute;
  attribute3: BackgroundWayfarerAttribute;
};

export type BackgroundScribeAttribute = "dex" | "int" | "wis"
export function isBackgroundScribeAttribute(attribute: Attribute): attribute is BackgroundScribeAttribute {
  return ["dex", "int", "wis"].includes(attribute);
}
export type BackgroundScribe = {
  attribute1: BackgroundScribeAttribute;
  attribute2: BackgroundScribeAttribute;
  attribute3: BackgroundScribeAttribute;
  feat: FeatSkilled;
};

export type Backgrounds = {
  "acolyte": BackgroundAcolyte,
  "artisan": BackgroundArtisan,
  "charlatan": BackgroundCharlatan,
  "criminal": BackgroundCriminal,
  "custom": BackgroundCustom,
  "entertainer": BackgroundEntertainer,
  "farmer": BackgroundFarmer,
  "guard": BackgroundGuard,
  "guide": BackgroundGuide,
  "hermit": BackgroundHermit,
  "merchant": BackgroundMerchant,
  "noble": BackgroundNoble,
  "sage": BackgroundSage,
  "sailor": BackgroundSailor,
  "scribe": BackgroundScribe,
  "soldier": BackgroundSoldier,
  "wayfarer": BackgroundWayfarer
};
export type Background = {
  [key in keyof Backgrounds]: {
    type: key,
    data: Backgrounds[key]
  }
}[keyof Backgrounds];

export const BACKGROUND_LABELS: {[key in keyof Backgrounds]: string} = {
  "acolyte": "Acolyte",
  "artisan": "Artisan",
  "charlatan": "Charlatan",
  "criminal": "Criminal",
  "custom": "Custom",
  "entertainer": "Entertainer",
  "farmer": "Farmer",
  "guard": "Guard",
  "guide": "Guide",
  "hermit": "Hermit",
  "merchant": "Merchant",
  "noble": "Noble",
  "sage": "Sage",
  "sailor": "Sailor",
  "scribe": "Scribe",
  "soldier": "Soldier",
  "wayfarer": "Wayfarer"
};

export const DEFAULT_BACKGROUNDS: {[key in keyof Backgrounds]: Backgrounds[key]} = {
  "acolyte": {
    attribute1: "int",
    attribute2: "int",
    attribute3: "cha",
    feat: {
      spellcastingAbility: "wis",
      cantrip1: "",
      cantrip2: ""
    }
  },
  "artisan": {
    attribute1: "str",
    attribute2: "str",
    attribute3: "dex",
    feat: DEFAULT_FEATS["crafter"],
    tool: "carpenter’s tools"
  },
  "charlatan": {
    attribute1: "dex",
    attribute2: "dex",
    attribute3: "con",
    feat: DEFAULT_FEATS["skilled"]
  },
  "criminal": {
    attribute1: "dex",
    attribute2: "dex",
    attribute3: "con",
  },
  "custom": {
    attribute1: "str",
    attribute2: "str",
    attribute3: "dex",
    skill1: "athletics",
    skill2: "acrobatics",
    tool: "mason’s tools",
    feat: {type: "alert", data: DEFAULT_FEATS["alert"]}
  },
  "entertainer": {
    attribute1: "str",
    attribute2: "str",
    attribute3: "dex",
    feat: DEFAULT_FEATS["musician"]
  },
  "farmer": {
    attribute1: "str",
    attribute2: "str",
    attribute3: "con",
  },
  "guard": {
    attribute1: "str",
    attribute2: "str",
    attribute3: "int",
    tool: "dice"
  },
  "guide": {
    attribute1: "dex",
    attribute2: "dex",
    attribute3: "con",
    feat: {
      spellcastingAbility: "wis",
      cantrip1: "",
      cantrip2: ""
    }
  },
  "hermit": {
    attribute1: "con",
    attribute2: "con",
    attribute3: "wis"
  },
  "merchant": {
    attribute1: "con",
    attribute2: "con",
    attribute3: "int"
  },
  "noble": {
    attribute1: "str",
    attribute2: "str",
    attribute3: "int",
    feat: DEFAULT_FEATS["skilled"],
    tool: "dice"
  },
  "sage": {
    attribute1: "con",
    attribute2: "con",
    attribute3: "int",
    feat: {
      spellcastingAbility: "int",
      cantrip1: "",
      cantrip2: ""
    }
  },
  "sailor": {
    attribute1: "str",
    attribute2: "str",
    attribute3: "dex"
  },
  "scribe": {
    attribute1: "dex",
    attribute2: "dex",
    attribute3: "int",
    feat: DEFAULT_FEATS["skilled"]
  },
  "soldier": {
    attribute1: "str",
    attribute2: "str",
    attribute3: "con",
    tool: "dice"
  },
  "wayfarer": {
    attribute1: "dex",
    attribute2: "dex",
    attribute3: "wis",
  }
};