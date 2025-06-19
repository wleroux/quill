import {SKILL_IDS} from "@/model/source/Skill";
import {AttributeID} from "@/model/source/model/Attribute";

export type SkillID = typeof SKILL_IDS[number];

export type Skill = {
  label: string;
  attribute: AttributeID
};
