import {SimpleChoice} from "@/model/source/choice/simple/SimpleChoice";
import {SimpleDecision} from "@/model/source/choice/simple/SimpleDecision";
import {DropdownField} from "@/lib/components/DropdownField";

export function SimpleField({choice, value, onChange}: {choice: SimpleChoice, value: SimpleDecision | undefined, onChange: (value: SimpleDecision | undefined) => void}) {
  return <DropdownField label={choice.data.label} value={value?.data.optionID} options={choice.data.options.map(option => ({value: option.optionID, label: option.label}))} onChange={ev => {
    onChange({
      type: "simple",
      data: {
        optionID: ev.target.value
      }
    });
  }} />
}