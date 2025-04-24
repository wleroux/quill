import {FieldSet} from "@/lib/components/FieldSet";
import {FieldRow} from "@/lib/components/FieldRow";
import {SkillField} from "@/lib/components/SkillField";
import {Class, Level} from "@/model/class/Class";
import React from "react";
import {DropdownField} from "@/lib/components/DropdownField";
import {DropdownChangeEvent} from "primereact/dropdown";
import {FeatFields} from "@/lib/components/FeatFields";
import {
  ClassCleric,
  ClassClericSubClass,
  CLERIC_SUBCLASS_LABELS,
  CLERIC_SUBCLASSES,
  DEFAULT_CLERIC_DIVINE_ORDER_ROLE,
  DEFAULT_CLERIC_SUBCLASS_LEVELS, DivineOrderRole,
  isClericSkill,
} from "@/model/class/ClassCleric";
import {SpellField} from "@/lib/components/SpellField";

export function ClassClericLevelerField({value, isStartingClass, onChange}: {
  value: Class<"cleric">,
  isStartingClass: boolean,
  onChange: (value: Class<"cleric">) => void
}) {
  const level = value.level;
  const current = value.data[level];
  const setCurrent = (data: ClassCleric<any>[any]) => onChange({
    ...value,
    data: {
      ...value.data,
      [level]: data
    }
  });

  return <FieldSet inline>
    {level === 3 && <FieldRow>
        <DropdownField label="Subclass" value={current.subclass} options={CLERIC_SUBCLASSES.map(subclass => ({
          value: subclass,
          label: CLERIC_SUBCLASS_LABELS[subclass]
        }))} onChange={<T extends ClassClericSubClass>(ev: DropdownChangeEvent) => {
          const subclass = ev.value as T;
          let defaultValue: ClassCleric<T> = DEFAULT_CLERIC_SUBCLASS_LEVELS[subclass];
          // @ts-ignore
          let nextValue: ClassCleric<T> = value.data;
          nextValue[3].subclass = subclass;
          for (let i: Level = 4; i < 20; i ++) {
            // @ts-ignore
            nextValue[i] = defaultValue[i];
          }
          onChange({...value, data: nextValue});
        }} />
    </FieldRow>}

    {level === 1 && isStartingClass && <FieldRow>
      <SkillField label="Skill" value={current.skill1} filter={isClericSkill} onChange={skill1 => setCurrent({...current, skill1})} />
      <SkillField label="Skill" value={current.skill2} filter={isClericSkill} onChange={skill2 => setCurrent({...current, skill2})} />
    </FieldRow>}

    {(level === 1 || level === 4 || level === 10) && <FieldRow>
      <SpellField label="Cantrip" value={current.cantrip1} onChange={cantrip1 => setCurrent({...current, cantrip1})} />
      {level === 1 && <>
        <SpellField label="Cantrip" value={current.cantrip2} onChange={cantrip2 => setCurrent({...current, cantrip2})} />
        <SpellField label="Cantrip" value={current.cantrip3} onChange={cantrip3 => setCurrent({...current, cantrip3})} />
        <SpellField label="Cantrip" value={current.cantrip4} onChange={cantrip4 => setCurrent({...current, cantrip4})} />
      </>}
    </FieldRow>}

    {level === 1 && <FieldRow>
      <DropdownField label="Divine Order" value={current.role.type} onChange={(ev) => setCurrent({...current, role: DEFAULT_CLERIC_DIVINE_ORDER_ROLE[ev.value as DivineOrderRole]})}  options={[
        {label: "Protector", value: "protector"},
        {label: "Thaumaturge", value: "thaumaturge"}
      ]}/>
    </FieldRow>}
    {level === 1 && current.role.type === "thaumaturge" && <FieldRow>
      <SpellField label="Thaumaturge Cantrip" value={current.role.data.cantrip1} onChange={cantrip1 => setCurrent({
        ...current,
        1: {
          ...current[1],
          role: {
            ...current[1].role,
            data: {
              ...current[1].role.data,
              cantrip1
            }
          }
        }
      })} />
    </FieldRow>}

    {level === 14 && <FieldRow>
      <DropdownField label="Improved Blessed Strike" value={current.improvedBlessedStrikes} onChange={ev => setCurrent({...current, improvedBlessedStrikes: ev.value})} options={[
        {label: "Divine Strike", value: "divine strike"},
        {label: "Potent Spellcasting", value: "potent spellcasting"}
      ]} />
    </FieldRow>}

    {(level === 4 || level === 8 || level === 12 || level === 16) && <FeatFields label="Feat" value={current.feat} onChange={feat => setCurrent({...current, feat})} />}
    {level === 19 && <FeatFields label="Epic Boon" value={current.feat} onChange={feat => setCurrent({...current, feat})} />}
  </FieldSet>;
}
