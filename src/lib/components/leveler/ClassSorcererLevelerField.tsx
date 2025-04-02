import {
  ClassSorcerer,
  ClassSorcererSubClass,
  DEFAULT_SORCERER_SUBCLASS_LEVELS,
  DRACONIC_SORCERY_ELEMENTAL_AFFINITIES,
  DRACONIC_SORCERY_ELEMENTAL_AFFINITY_LABELS,
  isSorcererSkill,
  SORCERER_SUBCLASS_LABELS,
  SORCERER_SUBCLASSES
} from "@/model/class/ClassSorcerer";
import {FieldSet} from "@/lib/components/FieldSet";
import {FieldRow} from "@/lib/components/FieldRow";
import {SkillField} from "@/lib/components/SkillField";
import {SpellField, SpellReplacementFields} from "@/lib/components/SpellField";
import {MetamagicField, MetamagicReplacementFields} from "@/lib/components/MetamagicField";
import {Class, Level} from "@/model/class/Class";
import React from "react";
import {DropdownField} from "@/lib/components/DropdownField";
import {DropdownChangeEvent} from "primereact/dropdown";
import {FeatFields} from "@/lib/components/FeatFields";

export function ClassSorcererLevelerField({value, isStartingClass, onChange}: {
  value: Class<"sorcerer">,
  isStartingClass: boolean,
  onChange: (value: Class<"sorcerer">) => void
}) {
  const level = value.level;
  const current = value.data[level];
  const setCurrent = (data: ClassSorcerer<any>[any]) => onChange({
    ...value,
    data: {
      ...value.data,
      [level]: data
    }
  });

  return <FieldSet inline>
    {level === 3 && <FieldRow>
      <DropdownField label="Subclass" value={current.subclass} options={SORCERER_SUBCLASSES.map(subclass => ({
        value: subclass,
        label: SORCERER_SUBCLASS_LABELS[subclass]
      }))} onChange={<T extends ClassSorcererSubClass>(ev: DropdownChangeEvent) => {
        const subclass = ev.value as T;
        let defaultValue: ClassSorcerer<T> = DEFAULT_SORCERER_SUBCLASS_LEVELS[subclass];
        // @ts-ignore
        let nextValue: ClassSorcerer<T> = value.data;
        nextValue[3].subclass = subclass;
        for (let i: Level = 4; i < 20; i ++) {
          // @ts-ignore
          nextValue[i] = defaultValue[i];
        }
        onChange({...value, data: nextValue});
      }} />
    </FieldRow>}

    {level >= 2 && <SpellReplacementFields value={current.spellReplacement} onChange={spellReplacement => setCurrent({...current, spellReplacement})} />}
    {level >= 3 && <MetamagicReplacementFields value={current.metamagicReplacement} onChange={metamagicReplacement => setCurrent({...current, metamagicReplacement})} />}

    {level === 6 && value.data[3].subclass === "draconic sorcery" && <FieldRow>
      <DropdownField label="Elemental Affinity" value={current.elementalAffinity} onChange={(ev) => setCurrent({...current, elementalAffinity: ev.value})} options={DRACONIC_SORCERY_ELEMENTAL_AFFINITIES.map(value => ({
        value: value,
        label: DRACONIC_SORCERY_ELEMENTAL_AFFINITY_LABELS[value]
      }))} />
    </FieldRow>}

    {level === 1 && isStartingClass && <FieldRow>
      <SkillField label="Skill" value={current.skill1} filter={isSorcererSkill} onChange={skill => setCurrent({...current, skill1: skill})} />
      <SkillField label="Skill" value={current.skill2} filter={isSorcererSkill} onChange={skill => setCurrent({...current, skill2: skill})} />
    </FieldRow>}

    {(level === 1 || level === 3 || level === 10) && <FieldRow>
      <SpellField label="Cantrip" value={current.cantrip1} onChange={spell => setCurrent({...current, cantrip1: spell})} />
      {level === 1 && <SpellField label="Cantrip" value={current.cantrip2} onChange={spell => setCurrent({...current, cantrip2: spell})} />}
      {level === 1 && <SpellField label="Cantrip" value={current.cantrip3} onChange={spell => setCurrent({...current, cantrip3: spell})} />}
      {level === 1 && <SpellField label="Cantrip" value={current.cantrip4} onChange={spell => setCurrent({...current, cantrip4: spell})} />}
    </FieldRow>}
    {((level >= 1 && level <= 11) || level === 13 || level == 15 || level >= 17) && <FieldRow>
      {((level >= 1 && level <= 11) || level === 13 || level === 15 || level >= 17) && <SpellField label="Spell" value={current.spell1} onChange={spell1 => setCurrent({...current, spell1})} />}
      {((level >= 1 && level <= 3) || level === 5 || level === 9) && <SpellField label="Spell" value={current.spell2} onChange={spell2 => setCurrent({...current, spell2})} />}
    </FieldRow>}
    {(level === 2 || level === 10 || level === 17) && <FieldRow>
      <MetamagicField label="Metamagic" value={current.metamagic1} onChange={metamagic => setCurrent({...current, metamagic1: metamagic})} />
      <MetamagicField label="Metamagic" value={current.metamagic2} onChange={metamagic => setCurrent({...current, metamagic2: metamagic})} />
    </FieldRow>}

    {(level === 4 || level === 8 || level === 12 || level === 16) && <FeatFields label="Feat" value={current.feat} onChange={feat => setCurrent({...current, feat})} />}
    {level === 19 && <FeatFields label="Epic Boon" value={current.feat} onChange={feat => setCurrent({...current, feat})} />}
  </FieldSet>;
}
