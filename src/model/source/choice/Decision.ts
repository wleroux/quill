import {SkillDecision} from "@/model/source/choice/skill/SkillDecision";
import {FeatDecision} from "@/model/source/choice/feat/FeatDecision";
import {ToolDecision} from "@/model/source/choice/tool/ToolDecision";
import {MetamagicDecision} from "@/model/source/choice/metamagic/MetamagicDecision";
import {AttributeDecision} from "@/model/source/choice/attribute/AttributeDecision";
import {MetamagicReplacementDecision} from "@/model/source/choice/metamagic-replacement/MetamagicReplacementDecision";
import {SpellReplacementDecision} from "@/model/source/choice/spell-replacement/SpellReplacementDecision";
import {SpellDecision} from "@/model/source/choice/spell/SpellDecision";
import {ExpertiseDecision} from "@/model/source/choice/expertise/ExpertiseDecision";
import {SimpleDecision} from "@/model/source/choice/simple/SimpleDecision";
import {BackgroundAttributeDecision} from "@/model/character/create/background/background-attribute/BackgroundAttributeDecision";
import {SkillOrToolDecision} from "@/model/source/choice/skill-or-tool/SkillOrToolDecision";
import {EldritchInvocationDecision} from "@/model/source/choice/eldritch-invocation/EldritchInvocationDecision";
import {EldritchInvocationReplacementDecision} from "@/model/source/choice/eldritch-invocation-replacement/EldritchInvocationReplacementDecision";
import {ManeuverDecision} from "@/model/source/choice/maneuver/ManeuverDecision";
import {FeatReplacementDecision} from "@/model/source/choice/feat-replacement/FeatReplacementDecision";

export type Decision =
  | AttributeDecision
  | BackgroundAttributeDecision
  | ExpertiseDecision
  | EldritchInvocationDecision
  | EldritchInvocationReplacementDecision
  | FeatDecision
  | FeatReplacementDecision
  | ManeuverDecision
  | MetamagicDecision
  | MetamagicReplacementDecision
  | SkillDecision
  | SkillOrToolDecision
  | SpellDecision
  | SpellReplacementDecision
  | ToolDecision
  | SimpleDecision
  ;
