import {DropdownField} from "@/lib/components/DropdownField";
import React from "react";
import {Metamagic} from "@/model/source/model/Metamagic";
import {REPOSITORY} from "@/model/source/index";

export function MetamagicField({label, value, onChange}: {label?: string, value?: Metamagic, onChange: (value: Metamagic) => void}) {
  return <DropdownField label={label} value={value} onChange={ev => onChange(ev.value)} options={Object.keys(REPOSITORY.METAMAGICS).map(metamagicID => ({
    value: metamagicID,
    label: REPOSITORY.METAMAGICS[metamagicID].label,
  }))} />
}
