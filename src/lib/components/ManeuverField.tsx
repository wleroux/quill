import {DropdownField} from "@/lib/components/DropdownField";
import React, {useEffect, useState} from "react";
import {CheckboxField} from "@/lib/components/CheckboxField";
import {FieldRow} from "@/lib/components/FieldRow";
import {Maneuver, MANEUVER_LABELS, ManeuverReplacement, MANEUVERS} from "@/model/Maneuver";

export function ManeuverField({label, value, onChange}: {label?: string, value?: Maneuver, onChange: (value: Maneuver) => void}) {
  return <DropdownField label={label} value={value} onChange={ev => onChange(ev.value)} options={MANEUVERS.map(metavalue => ({
    value: metavalue,
    label: MANEUVER_LABELS[metavalue],
  }))} />
}

export function ManeuverFieldReplacementFields({value, onChange}: {value?: ManeuverReplacement, onChange: (value?: ManeuverReplacement) => void}) {
  const [temp, setTemp] = useState<Partial<ManeuverReplacement> | undefined>(value);
  useEffect(() => {
    if (value === temp) return;
    if (temp?.from && temp?.to) onChange(temp as ManeuverReplacement);
    if (temp === undefined) onChange(undefined);
  }, [value, temp]);

  return <>
    <FieldRow>
      <CheckboxField label="Replace Maneuver" checked={temp !== undefined} onChange={(ev) => {
        setTemp(ev ? {from: undefined, to: undefined} : undefined);
      }} />
    </FieldRow>
    {temp !== undefined && <FieldRow>
      <ManeuverField label="Replace Maneuver..." value={temp.from} onChange={from => setTemp({...temp, from})} />
      <ManeuverField label="... With" value={temp.from} onChange={from => setTemp({...temp, from})} />
    </FieldRow>}
  </>
}