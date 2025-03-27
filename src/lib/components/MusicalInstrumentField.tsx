import {MUSICAL_TOOLS, MusicalTool, TOOL_LABELS} from "@/model/tool";
import {DropdownField} from "@/lib/components/DropdownField";

export function MusicalInstrumentField({label, value, onChange}: {label?: string, value: MusicalTool, onChange: (value: MusicalTool) => void}) {
  return <DropdownField label={label} value={value} onChange={ev => onChange(ev.value)} options={
    MUSICAL_TOOLS.map((musicalTool) => ({
      value: musicalTool,
      label: TOOL_LABELS[musicalTool] ?? musicalTool
    }))
  } />
}