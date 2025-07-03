import {Character} from "@/model/character/Character";
import {SkillOrToolChoice} from "@/model/source/choice/skill-or-tool/SkillOrToolChoice";
import {SkillOrToolDecision} from "@/model/source/choice/skill-or-tool/SkillOrToolDecision";
import {DropdownField} from "@/lib/components/DropdownField";
import {SKILL_IDS, SKILLS} from "@/model/source/Skill";
import {REPOSITORY} from "@/model/source/index";
import {SkillID} from "@/model/source/model/Skill";

export function SkillOrToolField({character, choice, decision, onChange}: {character: Character, choice: SkillOrToolChoice, decision: SkillOrToolDecision | undefined, onChange: (value: SkillOrToolDecision | undefined) => void}) {
  const VALID_SKILLS =
    (Object.keys(SKILLS) as SkillID[])
      .filter(skillID => character.skills[skillID] === "untrained")
      .filter(skillID => choice.data.condition === undefined || choice.data.condition(skillID, character))
  const VALID_TOOLS =
    Object.keys(REPOSITORY.TOOLS)
      .filter(toolID => !character.tools.includes(toolID))
      .filter(toolID => choice.data.condition === undefined || choice.data.condition(toolID, character))

  return <DropdownField label={choice.data.label ?? "Skill or Tool"} value={decision?.data.skillOrToolID} onChange={ev => onChange({type: "skill-or-tool", data: {skillOrToolID: ev.target.value}})} options={
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
  } />
}