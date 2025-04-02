import {Class, CLASS_LABELS, CLASSES, Classes, DEFAULT_CLASSES, getClassLabel, Level} from "@/model/class/Class";
import {DropdownField} from "@/lib/components/DropdownField";
import {FieldSet} from "@/lib/components/FieldSet";
import {FieldRow} from "@/lib/components/FieldRow";
import React, {useEffect, useState} from "react";
import {Button} from "@/lib/components/Button";
import {ClassSorcererLevelerField} from "@/lib/components/leveler/ClassSorcererLevelerField";
import {SectionLabel} from "@/lib/components/SectionLabel";

export function ClassLevelerField({main, secondary, onChange}: {
  main?: Class<any>; secondary?: Class<any>;
  onChange: (main: Class<any> | undefined, secondary: Class<any> | undefined) => void
}) {
  const [selection, setSelection] = useState<keyof Classes | undefined>(main?.type);
  const [value, setValue] = useState<Class<any> | undefined>(undefined);
  useEffect(() => {
    setValue((): Class<any> | undefined => {
      if (selection === undefined) return undefined;
      if (main?.type === selection) return ({
        type: main.type,
        level: (main.level + 1) as Level,
        data: main.data
      }) as Class<any>;
      if (secondary?.type === selection) return ({
        type: secondary.type,
        level: (secondary.level + 1) as Level,
        data: secondary.data
      });
      return ({type: selection, level: 1, data: DEFAULT_CLASSES[selection]}) as Class<any>;
    });
  }, [selection, main, secondary])

  return <FieldSet inline>
    <FieldRow>
      <DropdownField label="Next Level" value={selection} onChange={(ev) => setSelection(ev.value)} options={CLASSES
        .map(cls => ({value: cls, label: CLASS_LABELS[cls]}))
        .filter((option) => {
          if (main === undefined) return true;
          if (secondary === undefined) return true;
          return main.type === option.value || secondary.type === option.value;
        })
      } />
    </FieldRow>
    {value && <FieldSet>
      <FieldSet inline>
        <SectionLabel>{getClassLabel(value)} {value.level}</SectionLabel>
        {value.type === "sorcerer" && <ClassSorcererLevelerField value={value} isStartingClass={main === undefined || main.type === value.type} onChange={(value) => setValue(value)} />}
      </FieldSet>

      <Button label="Level Up" onClick={() => onChange(
        (main?.type === value?.type || main?.type === undefined) ? value : main,
        (secondary?.type === value?.type || (main?.type !== undefined && main?.type !== value?.type && secondary?.type === undefined)) ? value : secondary
      )} />
    </FieldSet>}
  </FieldSet>
}