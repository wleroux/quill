import {FieldSet} from "@/lib/components/FieldSet";
import {FieldRow} from "@/lib/components/FieldRow";
import {SkillField} from "@/lib/components/SkillField";
import {Class, Level} from "@/model/class/Class";
import React from "react";
import {DropdownField} from "@/lib/components/DropdownField";
import {DropdownChangeEvent} from "primereact/dropdown";
import {FeatFields} from "@/lib/components/FeatFields";
import {
  ClassDruid,
  ClassDruidSubClass,
  DRUID_SUBCLASS_LABELS,
  DRUID_SUBCLASSES,
  DEFAULT_DRUID_PRIMAL_ORDER_ROLE,
  DEFAULT_DRUID_SUBCLASS_LEVELS, PrimalOrderRole,
  isDruidSkill, DRUID_ELEMENTAL_FURY_LABELS, DRUID_ELEMENTAL_FURY_TYPES, DRUID_PRIMAL_ORDER_ROLES, DRUID_PRIMAL_ORDER_ROLE_LABELS,
} from "@/model/class/ClassDruid";
import {SpellField} from "@/lib/components/SpellField";

export function ClassDruidLevelerField({value, isStartingClass, onChange}: {
  value: Class<"druid">,
  isStartingClass: boolean,
  onChange: (value: Class<"druid">) => void
}) {
  const level = value.level;
  const current = value.data[level];
  const setCurrent = (data: ClassDruid<any>[any]) => onChange({
    ...value,
    data: {
      ...value.data,
      [level]: data
    }
  });

  return <FieldSet inline>
    {level === 3 && <FieldRow>
        <DropdownField label="Subclass" value={current.subclass} options={DRUID_SUBCLASSES.map(subclass => ({
          value: subclass,
          label: DRUID_SUBCLASS_LABELS[subclass]
        }))} onChange={<T extends ClassDruidSubClass>(ev: DropdownChangeEvent) => {
          const subclass = ev.value as T;
          let defaultValue: ClassDruid<T> = DEFAULT_DRUID_SUBCLASS_LEVELS[subclass];
          // @ts-ignore
          let nextValue: ClassDruid<T> = value.data;
          nextValue[3].subclass = subclass;
          for (let i: Level = 4; i < 20; i ++) {
            // @ts-ignore
            nextValue[i] = defaultValue[i];
          }
          onChange({...value, data: nextValue});
        }} />
    </FieldRow>}

    {level === 1 && isStartingClass && <FieldRow>
      <SkillField label="Skill" value={current.skill1} filter={isDruidSkill} onChange={skill1 => setCurrent({...current, skill1})} />
      <SkillField label="Skill" value={current.skill2} filter={isDruidSkill} onChange={skill2 => setCurrent({...current, skill2})} />
    </FieldRow>}

    {(level === 1 || level === 4 || level === 10) && <FieldRow>
      <SpellField label="Cantrip" value={current.cantrip1} onChange={cantrip1 => setCurrent({...current, cantrip1})} />
      {level === 1 && <>
        <SpellField label="Cantrip" value={current.cantrip2} onChange={cantrip2 => setCurrent({...current, cantrip2})} />
      </>}
    </FieldRow>}

    {level === 1 && <FieldRow>
        <DropdownField label="Primal Order" value={current.role.type} onChange={(ev) => setCurrent({...current, role: DEFAULT_DRUID_PRIMAL_ORDER_ROLE[ev.value as PrimalOrderRole]})} options={DRUID_PRIMAL_ORDER_ROLES.map(role => ({label: DRUID_PRIMAL_ORDER_ROLE_LABELS[role], value: role}))} />
    </FieldRow>}
    {level === 1 && current.role.type === "magician" && <FieldRow>
      <SpellField label="Magician Cantrip" value={current.role.data.cantrip1} onChange={(cantrip1) => setCurrent({...current, role: {...current.role, data: {...current.role.data, cantrip1}} })} />
    </FieldRow>}

    {level === 7 && <FieldRow>
      <DropdownField label="Elemental Fury" value={current.elementalFury} onChange={ev => setCurrent({...current, elementalFury: ev.value})} options={DRUID_ELEMENTAL_FURY_TYPES.map(type => ({label: DRUID_ELEMENTAL_FURY_LABELS[type], value: type}))} />
    </FieldRow>}

    {(level === 4 || level === 8 || level === 12 || level === 16) && <FeatFields label="Feat" value={current.feat} onChange={feat => setCurrent({...current, feat})} />}
    {level === 19 && <FeatFields label="Epic Boon" value={current.feat} onChange={feat => setCurrent({...current, feat})} />}
  </FieldSet>;
}
