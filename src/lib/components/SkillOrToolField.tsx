import {Tool, TOOL_LABELS, TOOLS} from "@/model/tool";
import {Skill, SKILL_LABEL, SKILLS} from "@/model/skill";
import {DropdownField} from "@/lib/components/DropdownField";

export function SkillOrToolField({label, value, onChange}: {label?: string, value: Skill | Tool, onChange: (value: Skill | Tool) => void}) {
  return <DropdownField label={label} value={value} onChange={ev => onChange(ev.value)} options={
    [...SKILLS, ...TOOLS].map((skillOrTool) => ({
      value: skillOrTool,
      label: SKILL_LABEL[skillOrTool] ?? TOOL_LABELS[skillOrTool] ?? skillOrTool
    }))
  } />
}