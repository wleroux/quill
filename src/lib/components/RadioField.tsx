import {Checkbox, CheckboxPassThroughOptions} from "primereact/checkbox";
import React from "react";
import {twMerge} from "tailwind-merge";

const radioPt: CheckboxPassThroughOptions = {
  box: (options) => ({
    className: twMerge(
      "border border-[color:var(--foreground)] p-1 rounded-full w-6 h-6 bg-transparent cursor-pointer",
      options?.context.disabled && "opacity-50"
    )
  }),
  root: {
    className: "focus-within:outline rounded-full hover:outline"
  },
  input: {
    className: "w-6 h-6 appearance-none"
  }
};

export function RadioField({inputId, label, disabled, checked, onChange}: {
  inputId: string,
  label: string,
  disabled?: boolean,
  checked: boolean,
  onChange: (checked: boolean) => void
}) {
  return <div className="flex align-items-stretch gap-2">
    <Checkbox
      pt={radioPt}
      inputId={inputId}
      checked={checked}
      disabled={disabled}
      onChange={ev => onChange(ev.checked ?? false)}
      icon={"pi pi-circle-fill"}
    />
    <label htmlFor={inputId} className={twMerge("cursor-pointer flex-1", disabled && "opacity-50")}>{label}</label>
  </div>;
}