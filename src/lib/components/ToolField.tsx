import {DropdownField} from "@/lib/components/DropdownField";
import {Tool, TOOL_LABELS, TOOLS} from "@/model/tool";

export function ToolField<T = Tool>({label, filter, value, onChange}: {label?: string, value: Tool, filter?: (tool: Tool) => tool is T & Tool, onChange: (value: T) => void}) {
  return <DropdownField label={label} value={value} onChange={ev => onChange(ev.value)} options={
    TOOLS
      .filter(tool => filter ? filter(tool) : true)
      .map((tool) => ({
        value: tool,
        label: TOOL_LABELS[tool] ?? tool
      }))
  } />
}