import { InputNumber, InputNumberProps, InputNumberPassThroughOptions } from 'primereact/inputnumber';
import {twMerge} from "tailwind-merge";
import {Field} from "@/lib/components/Field";
import {FieldLabel} from "@/lib/components/FieldLabel";
import {ulid} from "ulid";

const inputNumberPt: InputNumberPassThroughOptions = {
  root: {
    className: "bg-black/20 rounded-md flex-inline h-10 focus-within:outline hover:outline overflow-hidden border border-[color:var(--foreground)]/50",
  },
  incrementButton: {
    className: "rounded-tr-md border-t border-r border-b w-8 flex justify-center items-center border-[color:var(--foreground)]/50 hover:outline"
  },
  decrementButton: {
    className: "rounded-br-md border-b border-r w-8 flex justify-center items-center border-[color:var(--foreground)]/50 hover:outline"
  },
  input: {
    root: ({
      className: twMerge(
        "bg-transparent flex-inline py-2 px-4 border-0 h-10 border-r border-[color:var(--foreground)]/50 flex-1",
      )
    })
  }
};

export function NumberField({label, ...props}: {label?: string} & InputNumberProps) {
  const inputId = props.inputId ?? ulid();
  return <Field>
    {label && <FieldLabel htmlFor={inputId}>{label}</FieldLabel>}
    <InputNumber pt={inputNumberPt} {...props} inputId={inputId} showButtons />
  </Field>
}