import {DropdownField} from "@/lib/components/DropdownField";
import {METAMAGIC, Metamagic, METAMAGIC_LABELS, MetamagicReplacement} from "@/model/Metamagic";
import React, {useEffect, useState} from "react";
import {CheckboxField} from "@/lib/components/CheckboxField";
import {FieldRow} from "@/lib/components/FieldRow";

export function MetamagicField({label, value, onChange}: {label?: string, value?: Metamagic, onChange: (value: Metamagic) => void}) {
  return <DropdownField label={label} value={value} onChange={ev => onChange(ev.value)} options={METAMAGIC.map(metavalue => ({
    value: metavalue,
    label: METAMAGIC_LABELS[metavalue],
  }))} />
}

export function MetamagicReplacementFields({value, onChange}: {value?: MetamagicReplacement, onChange: (value?: MetamagicReplacement) => void}) {
  const [temp, setTemp] = useState<Partial<MetamagicReplacement> | undefined>(value);
  useEffect(() => {
    if (value === temp) return;
    if (temp?.from && temp?.to) onChange(temp as MetamagicReplacement);
    if (temp === undefined) onChange(undefined);
  }, [value, temp]);

  return <>
    <FieldRow>
      <CheckboxField label="Replace Metamagic" checked={temp !== undefined} onChange={(ev) => {
        setTemp(ev ? {from: undefined, to: undefined} : undefined);
      }} />
    </FieldRow>
    {temp !== undefined && <FieldRow>
      <MetamagicField label="Replace Metamagic" value={temp.from} onChange={from => setTemp({...temp, from})} />
      <MetamagicField label="With" value={temp.from} onChange={from => setTemp({...temp, from})} />
    </FieldRow>}
  </>
}