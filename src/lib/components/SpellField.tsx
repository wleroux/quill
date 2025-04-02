import {DropdownField} from "@/lib/components/DropdownField";
import {Spell, SPELL_LABELS, SpellReplacement, SPELLS} from "@/model/spell";
import React, {useEffect, useState} from "react";
import {FieldRow} from "@/lib/components/FieldRow";
import {CheckboxField} from "@/lib/components/CheckboxField";

export function SpellField({label, value, onChange}: {label?: string, value?: Spell, onChange: (value: Spell) => void}) {
  return <DropdownField label={label} value={value} onChange={ev => onChange(ev.value as Spell)} options={
    SPELLS.map((spell) => ({
      value: spell,
      label: SPELL_LABELS[spell] ?? spell
    }))
  } />
}

export function SpellReplacementFields({value, onChange}: {value?: SpellReplacement, onChange: (value?: SpellReplacement) => void}) {
  const [temp, setTemp] = useState<Partial<SpellReplacement> | undefined>(value);
  useEffect(() => {
    if (value === temp) return;
    if (temp?.from && temp?.to) onChange(temp as SpellReplacement);
    if (temp === undefined) onChange(undefined);
  }, [value, temp]);

  return <>
    <FieldRow>
      <CheckboxField label="Replace Spell" checked={temp !== undefined} onChange={(ev) => {
        setTemp(ev ? {from: undefined, to: undefined} : undefined);
      }} />
    </FieldRow>
    {temp !== undefined && <FieldRow>
      <SpellField label="Replace Spell..." value={temp.from} onChange={from => setTemp({...temp, from})} />
      <SpellField label="... With" value={temp.from} onChange={from => setTemp({...temp, from})} />
    </FieldRow>}
  </>
}