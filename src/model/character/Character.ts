import {FeatID} from "@/model/source/model/Feat";
import {SkillID} from "@/model/source/model/Skill";
import {MetamagicID} from "@/model/source/model/Metamagic";
import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {SpellID} from "@/model/source/model/Spell";
import {ToolID} from "@/model/source/model/Tool";
import {AttributeID} from "@/model/source/model/Attribute";
import {CharacterID} from "@/model/character/CharacterID";
import {Snowflake} from "discord-api-types/v10";
import {ItemID} from "@/model/source/model/Item";
import {Decision} from "@/model/source/choice/Decision";
import {EldritchInvocationID} from "@/model/source/model/EldritchInvocation";
import {StartingStatDecision} from "@/model/character/create/starting-stat/StartingStatDecision";
import {BackgroundDecision} from "@/model/character/create/background/BackgroundDecision";
import {SpeciesDecision} from "@/model/character/create/species/SpeciesDecision";
import {ClassID} from "@/model/source/model/Level";
import {ProgressDecision} from "@/model/character/progress/ProgressDecision";
import {ManeuverID} from "@/model/source/model/Maneuver";

type Proficiency = "untrained" | "proficient" | "expertise";

export type Character = {
  id: CharacterID;
  version: undefined,
  ownerID: Snowflake;
  revision: number,
  retired: boolean;

  // Decisions
  startingStat: StartingStatDecision["data"];
  species: SpeciesDecision["data"];
  background: BackgroundDecision["data"];
  progress: ProgressDecision[];

  // Results
  name: string;
  classIDs: ClassID[];
  feats: {[sourceID: string]: {
    featID: FeatID,
    decisions: {[choiceID: ChoiceID]: Decision}
  }};
  stats: {[attributeID in AttributeID]: number};
  items: {
    itemID: ItemID;
    decisions: {[choiceID: ChoiceID]: Decision}
  }[];
  skills: {[skillID in SkillID]: Proficiency};
  maneuvers: {
    [choiceID: ChoiceID]: ManeuverID;
  };
  metamagics: {[sourceID: string]: MetamagicID};
  eldritchInvocations?: {[sourceID: string]: {
    eldritchInvocationID: EldritchInvocationID;
    decisions: {[choiceID: ChoiceID]: Decision}
  }};
  spells: {[sourceID: string]: SpellID};
  tools: ToolID[];
  choices: {[choiceID: ChoiceID]: string};
};

export const INITIAL_CHARACTER = (id: CharacterID, ownerID: Snowflake): Character => ({
  id,
  version: undefined,
  revision: 0,
  ownerID: ownerID,
  retired: false,

  // decisions
  name: "Unknown",
  startingStat: {str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10},
  species: {speciesID: "", decisions: {}},
  background: {backgroundID: "", decisions: {}},
  stats: {str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10},
  progress: [],

  // result
  classIDs: [],
  choices: {},
  items: [],
  feats: {},
  eldritchInvocations: {},
  maneuvers: {},
  metamagics: {},
  skills: {
    "acrobatics": "untrained",
    "animal handling": "untrained",
    "arcana": "untrained",
    "athletics": "untrained",
    "deception": "untrained",
    "history": "untrained",
    "insight": "untrained",
    "intimidation": "untrained",
    "investigation": "untrained",
    "medicine": "untrained",
    "nature": "untrained",
    "perception": "untrained",
    "performance": "untrained",
    "persuasion": "untrained",
    "religion": "untrained",
    "sleight of hand": "untrained",
    "stealth": "untrained",
    "survival": "untrained"
  },
  spells: {},
  tools: [],
});
