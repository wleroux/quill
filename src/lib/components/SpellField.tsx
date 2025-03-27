import {DropdownField} from "@/lib/components/DropdownField";
import {Spell, SPELL_LABELS, SPELLS} from "@/model/spell";

export function SpellField({label, value, onChange}: {label?: string, value: Spell, onChange: (value: Spell) => void}) {
  return <DropdownField label={label} value={value} onChange={ev => onChange(ev.value as Spell)} options={
    SPELLS.map((spell) => ({
      value: spell,
      label: SPELL_LABELS[spell] ?? spell
    }))
  } />
}