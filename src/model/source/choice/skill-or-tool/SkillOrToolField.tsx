import {Character} from "@/model/character/Character";
import {SkillOrToolChoice} from "@/model/source/choice/skill-or-tool/SkillOrToolChoice";
import {SkillOrToolDecision} from "@/model/source/choice/skill-or-tool/SkillOrToolDecision";
import {DropdownField} from "@/lib/components/DropdownField";
import {SKILL_IDS, SKILLS} from "@/model/source/Skill";
import {REPOSITORY} from "@/model/source/index";
import {SkillID} from "@/model/source/model/Skill";
import {ChoicesField} from "@/model/source/choice/ChoicesField";
import {FieldSet} from "@/lib/components/FieldSet";

export function SkillOrToolField({character, choice, decision, onChange}: {
  character: Character,
  choice: SkillOrToolChoice,
  decision: SkillOrToolDecision | undefined,
  onChange: (fn: (value: SkillOrToolDecision | undefined) => SkillOrToolDecision | undefined) => void
}) {
  const VALID_SKILLS =
    (Object.keys(SKILLS) as SkillID[])
      .filter(skillID => character.skills[skillID] === "untrained")
      .filter(skillID => choice.data.condition === undefined || choice.data.condition(skillID, character))
  const VALID_TOOLS =
    Object.keys(REPOSITORY.TOOLS)
      .filter(toolID => !character.tools.includes(toolID))
      .filter(toolID => choice.data.condition === undefined || choice.data.condition(toolID, character))

  const skillOrToolField = <DropdownField label={choice.data.label ?? "Skill or Tool"} value={decision?.data.skillOrToolID} onChange={ev => onChange(_ => ({type: "skill-or-tool", data: {skillOrToolID: ev.target.value, decisions: {}}}))} options={
    [
      ...VALID_SKILLS,
      ...VALID_TOOLS
    ]
      .map(skillOrToolID => {
        if (SKILL_IDS.includes(skillOrToolID as SkillID)) {
          const skill = SKILLS[skillOrToolID as SkillID];
          return ({value: skillOrToolID, label: `${skill.label} (${skill.attribute.toUpperCase()})`});
        } else {
          return ({value: skillOrToolID, label: REPOSITORY.TOOLS[skillOrToolID]?.label});
        }
      })
  } />;

  const tool = REPOSITORY.TOOLS[decision?.data.skillOrToolID ?? ""];
  if (tool === undefined) {
    return skillOrToolField;
  } else {
    return <FieldSet inline>
      {skillOrToolField}
      {tool && tool.choices.length > 0 && decision?.type === "skill-or-tool" && <ChoicesField value={character} choices={tool.choices} decisions={decision.data.decisions ?? {}} onChange={fn => onChange(prev => {
        if (prev === undefined) return undefined;
        return ({
          ...prev,
            data: {
              ...prev.data,
              decisions: fn(prev.data.decisions ?? {})
          }
        });
      })} />}
    </FieldSet>
  }

}