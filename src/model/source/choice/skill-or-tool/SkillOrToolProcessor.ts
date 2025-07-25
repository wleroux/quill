import {SkillID} from "@/model/source/model/Skill";
import {SkillOrToolChoice} from "@/model/source/choice/skill-or-tool/SkillOrToolChoice";
import {SkillOrToolDecision} from "@/model/source/choice/skill-or-tool/SkillOrToolDecision";
import {SKILLS} from "@/model/source/Skill";
import {skillProcessor} from "@/model/source/choice/skill/SkillProcessor";
import {REPOSITORY} from "@/model/source/index";
import {toolProcessor} from "@/model/source/choice/tool/ToolProcessor";
import {Processor, ProcessorError} from "@/model/processor/Processor";
import {ErrorResult, ValidResult} from "@/model/processor/Result";

export const skillOrToolProcessor: Processor<SkillOrToolChoice, SkillOrToolDecision | undefined> = (value, choice, decision) => {
  if (choice.data.enabled && !choice.data.enabled(undefined, value)) return ValidResult.of(value);
  if (decision === undefined) {
    return ErrorResult.of([new ProcessorError("REQUIRED", [choice.data.choiceID], choice, decision)]);
  } else {
    const skillOrToolID = decision.data.skillOrToolID;
    if (SKILLS[skillOrToolID as SkillID] !== undefined) {
      return skillProcessor(value,
        {type: "skill", data: {choiceID: choice.data.choiceID, condition: choice.data.condition}},
        {type: "skill", data: {skillID: decision.data.skillOrToolID as SkillID}}
      );
    } else if (REPOSITORY.TOOLS[skillOrToolID] !== undefined) {
      return toolProcessor(value,
        {type: "tool", data: {choiceID: choice.data.choiceID, condition: choice.data.condition}},
        {type: "tool", data: {toolID: skillOrToolID, decisions: decision.data.decisions}}
      );
    } else {
      return ErrorResult.of([new ProcessorError("INVALID SKILL OR TOOL", [choice.data.choiceID], choice, decision)]);
    }
  }
}
