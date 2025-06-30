import {FeatID} from "@/model/source/model/Feat";
import {SkillID} from "@/model/source/model/Skill";
import {MetamagicID} from "@/model/source/model/Metamagic";
import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {SpellID} from "@/model/source/model/Spell";
import {ToolID} from "@/model/source/model/Tool";
import {AttributeID} from "@/model/source/model/Attribute";
import {ClassID} from "@/model/source/model/Level";
import {CharacterID} from "@/model/character/CharacterID";
import {Snowflake} from "discord-api-types/v10";
import {ItemID} from "@/model/source/model/Item";
import {Decision} from "@/model/source/choice/Decision";

export type Character = {
  id: CharacterID;
  ownerID: Snowflake;
  revision: number,
  name: string;
  level: number;
  specieID: string;
  backgroundID: string;
  retired: boolean;
  stats: {[attributeID in AttributeID]: number};
  choices: {[choiceID: ChoiceID]: string};
  expertise: SkillID[];
  feats: FeatID[];
  levels: ClassID[];
  skills: SkillID[];
  items: {
    itemID: ItemID;
    decisions: {[choiceID: ChoiceID]: Decision}
  }[];
  metamagics: {[sourceID: string]: MetamagicID};
  spells: {[sourceID: string]: SpellID; };
  tools: ToolID[];
};

export const INITIAL_CHARACTER = (id: CharacterID, ownerID: Snowflake): Character => ({
  id,
  revision: 0,
  ownerID: ownerID,
  name: "Unknown",
  level: 0,
  retired: false,
  specieID: "",
  backgroundID: "",
  stats: {str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10},
  choices: {},
  items: [],
  expertise: [],
  feats: [],
  levels: [],
  metamagics: {},
  skills: [],
  spells: {},
  tools: [],
});
