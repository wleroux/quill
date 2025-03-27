import {Background, BACKGROUND_LABELS, BACKGROUNDS} from "@/model/background";
import {DropdownField} from "@/lib/components/DropdownField";
import React from "react";

export function BackgroundField({value, onChange}: {value: Background, onChange: (value: Background) => void}) {
  return <DropdownField label="Background" value={value.type} onChange={ev => onChange({type: ev.value, data: undefined})} options={BACKGROUNDS.map(background => ({
    value: background, label: BACKGROUND_LABELS[background]
  }))} />
}