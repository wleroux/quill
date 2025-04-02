import { Dropdown, DropdownProps, DropdownPassThroughOptions } from 'primereact/dropdown';
import {twMerge} from "tailwind-merge";
import {FieldLabel} from "@/lib/components/FieldLabel";
import {Field} from "@/lib/components/Field";
import {ulid} from "ulid";

const dropdownPt: DropdownPassThroughOptions = {
  root: {
    className: "rounded-md bg-black/20 border border-[color:var(--foreground)]/50 py-2 flex gap-2 focus-within:outline hover:outline w-full"
  },
  input: {
    className: "bg-transparent border-0 flex-1 rounded-md px-4"
  },
  list: {
    className: "flex flex-col gap-0.5 "
  },
  trigger: {
    className: "pointer-events-none pr-4"
  },
  item: (options) => ({
    className: twMerge(
      "bg-transparent px-4 py-1 hover:bg-black/20 rounded-md text-nowrap",
      options?.context.selected && "bg-black/20 hover:bg-black/40"
    )
  }),
  wrapper: {
    className: 'max-h-[200px] overflow-auto bg-[color:var(--background)] border border-[color:var(--foreground)]/50 shadow-lg rounded-md mt-2'
  }
} as const;

export function DropdownField({label, ...props}: {label?: string} & DropdownProps) {
  const inputId = props.inputId ?? ulid();

  return <Field>
    {label && <FieldLabel htmlFor={inputId}>{label}</FieldLabel>}
    <Dropdown pt={dropdownPt} {...props} inputId={inputId} />
  </Field>
}