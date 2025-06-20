import {FeatID} from "@/model/source/model/Feat";
import {SkillID} from "@/model/source/model/Skill";
import {MetamagicID} from "@/model/source/model/Metamagic";
import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {SpellID} from "@/model/source/model/Spell";
import {ToolID} from "@/model/source/model/Tool";
import {AttributeID} from "@/model/source/model/Attribute";
import {LevelID} from "@/model/source/model/Level";

export type Character = {
  name: string;
  level: number;
  specieID: string;
  backgroundID: string;
  retired: boolean;
  stats: {[attributeID in AttributeID]: number};
  choices: {[choiceID: ChoiceID]: string};
  expertise: SkillID[];
  feats: FeatID[];
  levels: LevelID[];
  skills: SkillID[];
  metamagics: {[sourceID: string]: MetamagicID};
  spells: {[sourceID: string]: SpellID; };
  tools: ToolID[];
};

export const INITIAL_CHARACTER: Character = {
  name: "Unknown",
  level: 0,
  retired: false,
  specieID: "",
  backgroundID: "",
  stats: {str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10},
  choices: {},
  expertise: [],
  feats: [],
  levels: [],
  metamagics: {},
  skills: [],
  spells: {},
  tools: [],
};
