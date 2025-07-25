import {DropdownField} from "@/lib/components/DropdownField";
import {ToolChoice} from "@/model/source/choice/tool/ToolChoice";
import {ToolDecision} from "@/model/source/choice/tool/ToolDecision";
import {REPOSITORY} from "@/model/source/index";
import {Character} from "@/model/character/Character";
import {useEffect} from "react";
import {FieldSet} from "@/lib/components/FieldSet";
import {ChoicesField} from "@/model/source/choice/ChoicesField";

export function ToolField({character, choice, value, onChange}: {character: Character, choice: ToolChoice, value: ToolDecision | undefined, onChange: (value: ToolDecision | undefined) => void}) {
  const VALID_TOOLS = Object.keys(REPOSITORY.TOOLS)
    .filter(toolID => !character.tools.includes(toolID))
    .filter(toolID => choice.data.condition === undefined || choice.data.condition(toolID, character));
  useEffect(() => {
    if (value === undefined && VALID_TOOLS.length === 1) {
      onChange({type: "tool", data: {toolID: VALID_TOOLS[0]}})
    }
  }, [value === undefined]);

  const tool = value?.data.toolID ? REPOSITORY.TOOLS[value?.data.toolID] : undefined;

  return <FieldSet inline>
    <DropdownField disabled={VALID_TOOLS.length === 1} label={choice.data.label ?? "Tool"} value={value?.data.toolID} onChange={ev => onChange({type: "tool", data: {toolID: ev.value}})} options={
      VALID_TOOLS
        .map((toolID) => ({
          value: toolID,
          label: REPOSITORY.TOOLS[toolID].label
        }))
    } />
    {tool && tool.choices.length > 0 && value?.type === "tool" && <ChoicesField value={character} choices={tool.choices} decisions={value.data.decisions ?? {}} onChange={fn => onChange({
      ...value,
      data: {
        ...value.data,
        decisions: fn(value.data.decisions ?? {})
      }
    })} />}
  </FieldSet>
}