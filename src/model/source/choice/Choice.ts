import {SkillChoice} from "@/model/source/choice/skill/SkillChoice";
import {FeatChoice} from "@/model/source/choice/feat/FeatChoice";
import {SpellChoice} from "@/model/source/choice/spell/SpellChoice";
import {ToolChoice} from "@/model/source/choice/tool/ToolChoice";
import {SpellReplacementChoice} from "@/model/source/choice/spell-replacement/SpellReplacementChoice";
import {AttributeChoice} from "@/model/source/choice/attribute/AttributeChoice";
import {MetamagicChoice} from "@/model/source/choice/metamagic/MetamagicChoice";
import {MetamagicReplacementChoice} from "@/model/source/choice/metamagic-replacement/MetamagicReplacementChoice";
import {SimpleChoice} from "@/model/source/choice/simple/SimpleChoice";
import {Character} from "@/model/character/Character";
import {ExpertiseChoice} from "@/model/source/choice/expertise/ExpertiseChoice";
import {BackgroundAttributeChoice} from "@/model/character/create/background/background-attribute/BackgroundAttributeChoice";
import {SkillOrToolChoice} from "@/model/source/choice/skill-or-tool/SkillOrToolChoice";
import {Condition} from "@/model/source/condition/Condition";
import {EldritchInvocationChoice} from "@/model/source/choice/eldritch-invocation/EldritchInvocationChoice";
import {EldritchInvocationReplacementChoice} from "@/model/source/choice/eldritch-invocation-replacement/EldritchInvocationReplacementChoice";
import {ManeuverChoice} from "@/model/source/choice/maneuver/ManeuverChoice";
import {FeatReplacementChoice} from "@/model/source/choice/feat-replacement/FeatReplacementChoice";
import {ItemChoice} from "@/model/character/level/item/ItemChoice";
import {SavingThrowChoice} from "@/model/source/choice/saving-throw/SavingThrowChoice";
import {LanguageChoice} from "@/model/source/choice/language/LanguageChoice";

export function selectedChoice(choiceID: string, optionID: string): Condition<any> {
  return (_: any, value: Character) => value.choices[choiceID] === optionID;
}
export function noClasses() {
  return (_: any, context: Character): boolean => {
    return context.classIDs.length === 0;
  }
}
export function isMainClass() {
  return (_: any, context: Character): boolean => {
    return context.classIDs.length === 1;
  }
}

export type Choice =
  | AttributeChoice
  | BackgroundAttributeChoice
  | EldritchInvocationChoice
  | EldritchInvocationReplacementChoice
  | ExpertiseChoice
  | FeatChoice
  | FeatReplacementChoice
  | ItemChoice
  | LanguageChoice
  | ManeuverChoice
  | MetamagicChoice
  | MetamagicReplacementChoice
  | SimpleChoice
  | SavingThrowChoice
  | SkillChoice
  | SkillOrToolChoice
  | SpellChoice
  | SpellReplacementChoice
  | ToolChoice
  ;
