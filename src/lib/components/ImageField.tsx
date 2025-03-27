import {InputText, InputTextPassThroughOptions, InputTextProps} from 'primereact/inputtext';
import {Field} from "@/lib/components/Field";
import {FieldLabel} from "@/lib/components/FieldLabel";
import {Button} from "@/lib/components/Button";
import {ulid} from "ulid";

const inputTextPt: InputTextPassThroughOptions = {
  root: {
    className: "bg-black/20 rounded-l-md flex-inline focus:outline hover:outline py-2 px-4 h-10 border-[color:var(--foreground)]/50",
  }
};

export function ImageField({label, ...props}: {label?: string} & InputTextProps) {
  const inputId = props.id ?? ulid();
  return <Field>
    {label && <FieldLabel htmlFor={inputId}>{label}</FieldLabel>}
    <div className="flex flex-row">
      <InputText pt={inputTextPt} className="flex-1" {...props} id={inputId} />
      <Button icon="pi pi-upload" className="w-10 h-10 rounded-l-none border-l-0 border-[color:var(--foreground)]/50" />
    </div>
  </Field>
}