import {Checkbox, CheckboxPassThroughOptions} from "primereact/checkbox";
import React from "react";
import {ulid} from "ulid";

const checkboxPt: CheckboxPassThroughOptions = {
  box: {
    className: "border border-[color:var(--foreground)] p-1 rounded-md w-6 h-6 bg-transparent cursor-pointer",
  },
  root: {
    className: "focus-within:outline rounded-md hover:outline"
  },
  input: {
    className: "w-6 h-6 appearance-none"
  }
};

export function CheckboxField({inputId, label, checked, onChange}: {
  inputId?: string,
  label: string,
  checked: boolean,
  onChange: (checked: boolean) => void
}) {
  const id = inputId ?? ulid();
  return <div className="flex align-items-center gap-2">
    <Checkbox
      pt={checkboxPt}
      inputId={id}
      checked={checked}
      onChange={ev => onChange(ev.checked ?? false)}/>
    <label htmlFor={id} className="cursor-pointer">{label}</label>
  </div>;
}