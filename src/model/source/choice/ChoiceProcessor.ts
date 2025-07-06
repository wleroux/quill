import {Choice} from "@/model/source/choice/Choice";
import {Decision} from "@/model/source/choice/Decision";
import {featProcessor} from "@/model/source/choice/feat/FeatProcessor";
import {simpleProcessor} from "@/model/source/choice/simple/SimpleProcessor";
import {spellProcessor} from "@/model/source/choice/spell/SpellProcessor";
import {toolProcessor} from "@/model/source/choice/tool/ToolProcessor";
import {skillProcessor} from "@/model/source/choice/skill/SkillProcessor";
import {expertiseProcessor} from "@/model/source/choice/expertise/ExpertiseProcessor";
import {attributeProcessor} from "@/model/source/choice/attribute/AttributeProcessor";
import {metamagicProcessor} from "@/model/source/choice/metamagic/MetamagicProcessor";
import {metamagicReplacementProcessor} from "@/model/source/choice/metamagic-replacement/MetamagicReplacementProcessor";
import {backgroundAttributeProcessor} from "@/model/character/create/background/background-attribute/BackgroundAttributeProcessor";
import {skillOrToolProcessor} from "@/model/source/choice/skill-or-tool/SkillOrToolProcessor";
import {spellReplacementProcessor} from "@/model/source/choice/spell-replacement/SpellReplacementProcessor";
import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult} from "@/model/processor/Result";
import {eldritchInvocationProcessor} from "@/model/source/choice/eldritch-invocation/eldritchInvocationProcessor";
import {eldritchInvocationReplacementProcessor} from "@/model/source/choice/eldritch-invocation-replacement/eldritchInvocationReplacementProcessor";
import {featReplacementProcessor} from "./feat-replacement/featReplacementProcessor";
import {maneuverProcessor} from "@/model/source/choice/maneuver/maneuverProcessor";
import {savingThrowProcessor} from "./saving-throw/savingThrowProcessor";

export const choiceProcessor: Processor<Choice, Decision | undefined> = (value, choice, decision) => {
  if (choice.type === "attribute" && (decision === undefined || decision.type === "attribute")) return attributeProcessor(value, choice, decision)
  else if (choice.type === "background-attribute" && (decision === undefined || decision.type === "background-attribute")) return backgroundAttributeProcessor(value, choice, decision);
  else if (choice.type === "expertise" && (decision === undefined || decision.type === "expertise")) return expertiseProcessor(value, choice, decision);
  else if (choice.type === "feat" && (decision === undefined || decision.type === "feat")) return featProcessor(value, choice, decision);
  else if (choice.type === "feat-replacement" && (decision === undefined || decision.type === "feat-replacement")) return featReplacementProcessor(value, choice, decision);
  else if (choice.type === "eldritch-invocation" && (decision === undefined || decision.type === "eldritch-invocation")) return eldritchInvocationProcessor(value, choice, decision);
  else if (choice.type === "eldritch-invocation-replacement" && (decision === undefined || decision.type === "eldritch-invocation-replacement")) return eldritchInvocationReplacementProcessor(value, choice, decision);
  else if (choice.type === "maneuver" && (decision === undefined || decision.type === "maneuver")) return maneuverProcessor(value, choice, decision);
  else if (choice.type === "metamagic" && (decision === undefined || decision.type === "metamagic")) return metamagicProcessor(value, choice, decision);
  else if (choice.type === "metamagic-replacement" && (decision === undefined || decision.type === "metamagic-replacement")) return metamagicReplacementProcessor(value, choice, decision);
  else if (choice.type === "saving-throw" && (decision === undefined || decision.type === "saving-throw")) return savingThrowProcessor(value, choice, decision);
  else if (choice.type === "simple" && (decision === undefined || decision.type === "simple")) return simpleProcessor(value, choice, decision);
  else if (choice.type === "skill" && (decision === undefined || decision.type === "skill")) return skillProcessor(value, choice, decision);
  else if (choice.type === "skill-or-tool" && (decision === undefined || decision.type === "skill-or-tool")) return skillOrToolProcessor(value, choice, decision);
  else if (choice.type === "spell" && (decision === undefined || decision.type === "spell")) return spellProcessor(value, choice, decision);
  else if (choice.type === "spell-replacement" && (decision === undefined || decision.type === "spell-replacement")) return spellReplacementProcessor(value, choice, decision);
  else if (choice.type === "tool" && (decision === undefined || decision.type === "tool")) return toolProcessor(value, choice, decision);

  return ErrorResult.of([new ProcessorError("UNEXPECTED CHOICE", [choice.data.choiceID], choice, decision)]);
}
