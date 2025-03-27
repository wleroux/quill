import { Dropdown, DropdownProps, DropdownPassThroughOptions } from 'primereact/dropdown';
import {twMerge} from "tailwind-merge";

const dropdownPt: DropdownPassThroughOptions = {
  root: {
    className: "rounded-md bg-transparent border border-[color:var(--foreground)] py-2 w-full flex gap-2 focus-within:outline"
  },
  input: {
    className: "bg-[color:var(--background)] border-0 flex-1 rounded-md px-4"
  },
  list: {
    className: "flex flex-col gap-0.5 bg-[color:var(--background)] border border-[color:var(--foreground)] shadow-lg rounded-md mt-2"
  },
  trigger: {
    className: "pr-4 pointer-events-none"
  },
  item: (options) => ({
    className: twMerge(
      "bg-transparent px-4 py-1 hover:bg-black/20 rounded-md text-nowrap",
      options?.context.selected && "bg-black/20 hover:bg-black/40"
    )
  })
} as const;

export function DropdownField({label, ...props}: {label?: string} & DropdownProps) {
  return <div className="flex flex-col gap-2">
    {label && <label className="font-bold" htmlFor={props.inputId}>{label}</label>}
    <Dropdown pt={dropdownPt} {...props} />
  </div>
}