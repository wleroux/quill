import {Skill, SKILL_LABEL, SKILLS} from "@/model/skill";
import {DropdownField} from "@/lib/components/DropdownField";

export function SkillField({label, value, onChange}: {label?: string, value: Skill, onChange: (value: Skill) => void}) {
  return <DropdownField label={label} value={value} onChange={ev => onChange(ev.value)} options={
    SKILLS.map((skill) => ({
      value: skill,
      label: SKILL_LABEL[skill] ?? skill
    }))
  } />
}