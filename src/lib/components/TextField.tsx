import {InputText, InputTextPassThroughOptions, InputTextProps} from 'primereact/inputtext';
import {Field} from "@/lib/components/Field";
import {FieldLabel} from "@/lib/components/FieldLabel";
import {ulid} from "ulid";

const inputTextPt: InputTextPassThroughOptions = {
  root: {
    className: "bg-black/20 rounded-md flex-inline focus:outline hover:outline py-2 px-4 border-[color:var(--foreground)]/50 h-10",
  }
};

export function TextField({label, ...props}: {label?: string} & InputTextProps) {
  const inputId = props.id ?? ulid();
  return <Field>
    {label && <FieldLabel htmlFor={inputId}>{label}</FieldLabel>}
    <InputText pt={inputTextPt} {...props} id={inputId} />
  </Field>
}