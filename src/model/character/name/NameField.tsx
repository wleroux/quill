import {NameDecision} from "@/model/character/name/NameDecision";
import {NameChoice} from "@/model/character/name/NameChoice";
import {StringField} from "@/lib/components/StringField";

export function NameField({choice, value, onChange, autoFocus}: {choice: NameChoice, value: NameDecision | undefined, onChange: (value: NameDecision | undefined) => void, autoFocus?: boolean}) {
  return <StringField label={choice.data.label ?? "Name"} value={value?.data.name ?? ""} autoFocus={autoFocus} onChange={value => onChange({type: "name", data: {name: value}})} />
}