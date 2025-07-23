import {Language, LanguageID} from "@/model/source/model/Language";
const STANDARD_LANGUAGES = {
  "Common": {
    label: "Common",
    category: "standard"
  },
  "Common Sign Language": {
    label: "Common Sign Language",
    category: "standard"
  },
  "Draconic": {
    label: "Draconic",
    category: "standard"
  },
  "Dwarvish": {
    label: "Dwarvish",
    category: "standard"
  },
  "Elvish": {
    label: "Elvish",
    category: "standard"
  },
  "Giant": {
    label: "Giant",
    category: "standard"
  },
  "Gnomish": {
    label: "Gnomish",
    category: "standard"
  },
  "Goblin": {
    label: "Goblin",
    category: "standard"
  },
  "Halfling": {
    label: "Halfling",
    category: "standard"
  },
  "Orc": {
    label: "Orc",
    category: "standard"
  }
} as const satisfies {[languageID: LanguageID]: Language};

const RARE_LANGUAGES = {
  "Abyssal": {
    label: "Abyssal",
    category: "rare"
  },
  "Celestial": {
    label: "Celestial",
    category: "rare"
  },
  "Deep Speech": {
    label: "Deep Speech",
    category: "rare"
  },
  "Druidic": {
    label: "Druidic",
    category: "rare"
  },
  "Infernal": {
    label: "Infernal",
    category: "rare"
  },
  "Primordial": {
    label: "Primordial",
    category: "rare"
  },
  "Sylvan": {
    label: "Sylvan",
    category: "rare"
  },
  "Thieves' Cant": {
    label: "Thieves' Cant",
    category: "rare"
  },
  "Undercommon": {
    label: "Undercommon",
    category: "rare"
  }
} as const satisfies {[languageID: LanguageID]: Language};

export default {
  ...STANDARD_LANGUAGES,
  ...RARE_LANGUAGES
} as const satisfies {[languageID: LanguageID]: Language};