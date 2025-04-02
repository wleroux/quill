import {
  BARBARIAN_SUBCLASS_LABELS,
  BARBARIAN_SUBCLASSES,
  ClassBarbarian,
  ClassBarbarianSubClass,
  DEFAULT_BARBARIAN_SUBCLASS_LEVELS,
  isBarbarianSkill,
} from "@/model/class/ClassBarbarian";
import {FieldSet} from "@/lib/components/FieldSet";
import {FieldRow} from "@/lib/components/FieldRow";
import {SkillField} from "@/lib/components/SkillField";
import {Class, Level} from "@/model/class/Class";
import React from "react";
import {DropdownField} from "@/lib/components/DropdownField";
import {DropdownChangeEvent} from "primereact/dropdown";
import {FeatFields} from "@/lib/components/FeatFields";

export function ClassBarbarianLevelerField({value, isStartingClass, onChange}: {
  value: Class<"barbarian">,
  isStartingClass: boolean,
  onChange: (value: Class<"barbarian">) => void
}) {
  const level = value.level;
  const current = value.data[level];
  const setCurrent = (data: ClassBarbarian<any>[any]) => onChange({
    ...value,
    data: {
      ...value.data,
      [level]: data
    }
  });

  return <FieldSet inline>
    {level === 3 && <FieldRow>
      <DropdownField label="Subclass" value={current.subclass} options={BARBARIAN_SUBCLASSES.map(subclass => ({
        value: subclass,
        label: BARBARIAN_SUBCLASS_LABELS[subclass]
      }))} onChange={<T extends ClassBarbarianSubClass>(ev: DropdownChangeEvent) => {
        const subclass = ev.value as T;
        let defaultValue: ClassBarbarian<T> = DEFAULT_BARBARIAN_SUBCLASS_LEVELS[subclass];
        // @ts-ignore
        let nextValue: ClassBarbarian<T> = value.data;
        nextValue[3].subclass = subclass;
        for (let i: Level = 4; i < 20; i ++) {
          // @ts-ignore
          nextValue[i] = defaultValue[i];
        }
        onChange({...value, data: nextValue});
      }} />
    </FieldRow>}

    {level === 1 && isStartingClass && <FieldRow>
      <SkillField label="Skill" value={current.skill1} filter={isBarbarianSkill} onChange={skill => setCurrent({...current, skill1: skill})} />
      <SkillField label="Skill" value={current.skill2} filter={isBarbarianSkill} onChange={skill => setCurrent({...current, skill2: skill})} />
    </FieldRow>}

    {(level === 4 || level === 8 || level === 12 || level === 16) && <FeatFields label="Feat" value={current.feat} onChange={feat => setCurrent({...current, feat})} />}
    {level === 19 && <FeatFields label="Epic Boon" value={current.feat} onChange={feat => setCurrent({...current, feat})} />}
  </FieldSet>;
}
