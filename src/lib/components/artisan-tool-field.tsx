import {ARTISAN_TOOLS, ArtisanTool, TOOL_LABELS} from "@/model/tool";
import {DropdownField} from "@/lib/components/DropdownField";

export function ArtisanToolField({label, value, onChange}: {label?: string, value: ArtisanTool, onChange: (value: ArtisanTool) => void}) {
  return <DropdownField label={label} value={value} onChange={ev => onChange(ev.value)} options={
    ARTISAN_TOOLS.map((musicalTool) => ({
      value: musicalTool,
      label: TOOL_LABELS[musicalTool] ?? musicalTool
    }))
  } />
}