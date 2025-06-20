import {NameDecision} from "@/model/character/name/NameDecision";
import {Field} from "@/lib/components/Field";
import {FieldLabel} from "@/lib/components/FieldLabel";
import {InputText, InputTextPassThroughOptions} from "primereact/inputtext";
import {ulid} from "ulid";
import {NameChoice} from "@/model/character/name/NameChoice";

const inputTextPt: InputTextPassThroughOptions = {
  root: {
    className: "bg-black/20 rounded-md flex-inline focus:outline hover:outline py-2 px-4 border-[color:var(--foreground)]/50 h-10",
  }
};

export function NameField({choice, value, onChange}: {choice: NameChoice, value: NameDecision | undefined, onChange: (value: NameDecision | undefined) => void}) {
  const inputId = ulid();
  return <Field>
    <FieldLabel htmlFor={inputId}>{choice.data.label ?? "Name"}</FieldLabel>
    <InputText pt={inputTextPt} id={inputId} value={value?.data.name ?? ""} onChange={value => onChange({type: "name", data: {name: value.target.value}})} />
  </Field>
}