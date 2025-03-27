import {DropdownField} from "@/lib/components/DropdownField";
import {Attribute, ATTRIBUTE_LABELS, ATTRIBUTES} from "@/model/attribute";

export function AttributeField<T = Attribute>({label, filter, value, onChange}: {label?: string, value: Attribute, filter?: (attribute: Attribute) => attribute is T & Attribute, onChange: (value: T) => void}) {
  return <DropdownField label={label} value={value} onChange={ev => onChange(ev.value)} options={
    ATTRIBUTES
      .filter(attribute => filter ? filter(attribute) : true)
      .map((attribute) => ({
        value: attribute,
        label: ATTRIBUTE_LABELS[attribute] ?? attribute
      }))
  } />
}