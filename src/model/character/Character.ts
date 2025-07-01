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
import {SpecieID} from "@/model/source/model/Specie";
import {BackgroundID} from "@/model/source/model/Background";
import {EldritchInvocationID} from "@/model/source/model/EldritchInvocation";

export type Character = {
  id: CharacterID;
  ownerID: Snowflake;
  revision: number,
  name: string;
  retired: boolean;
  stats: {[attributeID in AttributeID]: number};
  specie: {specieID: SpecieID, decisions: {[choiceID: ChoiceID]: Decision}};
  background: {backgroundID: BackgroundID, decisions: {[choiceID: ChoiceID]: Decision}};
  feats: {featID: FeatID, decisions: {[choiceID: ChoiceID]: Decision}}[];
  items: {itemID: ItemID; decisions: {[choiceID: ChoiceID]: Decision}}[];
  levels: {classID: ClassID, decisions: {[choiceID: ChoiceID]: Decision}}[];
  skills: SkillID[];
  expertise: SkillID[];
  metamagics: {[sourceID: string]: MetamagicID};
  eldritchInvocations?: {[sourceID: string]: { eldritchInvocationID: EldritchInvocationID; decisions: {[choiceID: ChoiceID]: Decision} }};
  spells: {[sourceID: string]: SpellID};
  tools: ToolID[];
  choices: {[choiceID: ChoiceID]: string};
};

export const INITIAL_CHARACTER = (id: CharacterID, ownerID: Snowflake): Character => ({
  id,
  revision: 0,
  ownerID: ownerID,
  name: "Unknown",
  retired: false,
  specie: {specieID: "", decisions: {}},
  background: {backgroundID: "", decisions: {}},
  stats: {str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10},
  choices: {},
  items: [],
  expertise: [],
  feats: [],
  levels: [],
  eldritchInvocations: {},
  metamagics: {},
  skills: [],
  spells: {},
  tools: [],
});
