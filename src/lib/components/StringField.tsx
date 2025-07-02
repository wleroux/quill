import {InputText, InputTextPassThroughOptions} from "primereact/inputtext";
import {Field} from "./Field";
import {FieldLabel} from "@/lib/components/FieldLabel";
import {ulid} from "ulid";

const inputTextPt: InputTextPassThroughOptions = {
  root: {
    className: "bg-black/20 rounded-md flex-inline focus:outline hover:outline py-2 px-4 border-[color:var(--foreground)]/50 h-10",
  }
};

export function StringField({label, value, autoFocus, onChange}: {label: string, value: string, onChange: (value: string) => void, autoFocus?: boolean}) {
  const inputId = ulid();
  return <Field>
    <FieldLabel>{label}</FieldLabel>
    <InputText autoFocus={autoFocus} pt={inputTextPt} id={inputId} value={value} onChange={value => onChange(value.target.value)} />
  </Field>

}