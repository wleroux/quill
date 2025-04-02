import {Skill, SKILL_LABEL, SKILLS} from "@/model/skill";
import {DropdownField} from "@/lib/components/DropdownField";

export function SkillField<T = Skill>({label, value, filter, onChange}: {label?: string, value: Skill, filter?: (value: Skill) => value is T & Skill, onChange: (value: T & Skill) => void}) {
  return <DropdownField label={label} value={value} onChange={ev => onChange(ev.value)} options={
    SKILLS.filter(filter ? filter : () => true).map((skill) => ({
      value: skill,
      label: SKILL_LABEL[skill] ?? skill
    }))
  } />
}