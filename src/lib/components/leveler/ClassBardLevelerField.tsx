import {FieldSet} from "@/lib/components/FieldSet";
import {FieldRow} from "@/lib/components/FieldRow";
import {SkillField} from "@/lib/components/SkillField";
import {Class, Level} from "@/model/class/Class";
import React from "react";
import {DropdownField} from "@/lib/components/DropdownField";
import {DropdownChangeEvent} from "primereact/dropdown";
import {FeatFields} from "@/lib/components/FeatFields";
import {BARD_SUBCLASS_LABELS, BARD_SUBCLASSES, ClassBard, ClassBardSubClass, DEFAULT_BARD_SUBCLASS_LEVELS, isBardSkill,} from "@/model/class/ClassBard";
import {SpellField, SpellReplacementFields} from "@/lib/components/SpellField";
import {ToolField} from "@/lib/components/ToolField";
import {isMusicalInstrumentTool} from "@/model/tool";

export function ClassBardLevelerField({value, isStartingClass, onChange}: {
  value: Class<"bard">,
  isStartingClass: boolean,
  onChange: (value: Class<"bard">) => void
}) {
  const level = value.level;
  const current = value.data[level];
  const setCurrent = (data: ClassBard<any>[any]) => onChange({
    ...value,
    data: {
      ...value.data,
      [level]: data
    }
  });

  return <FieldSet inline>
    {level === 3 && <FieldRow>
        <DropdownField label="Subclass" value={current.subclass} options={BARD_SUBCLASSES.map(subclass => ({
          value: subclass,
          label: BARD_SUBCLASS_LABELS[subclass]
        }))} onChange={<T extends ClassBardSubClass>(ev: DropdownChangeEvent) => {
          const subclass = ev.value as T;
          let defaultValue: ClassBard<T> = DEFAULT_BARD_SUBCLASS_LEVELS[subclass];
          // @ts-ignore
          let nextValue: ClassBard<T> = value.data;
          nextValue[3].subclass = subclass;
          for (let i: Level = 4; i < 20; i ++) {
            // @ts-ignore
            nextValue[i] = defaultValue[i];
          }
          onChange({...value, data: nextValue});
        }} />
    </FieldRow>}

    {level >= 2 && <SpellReplacementFields value={current.spellReplacement} onChange={spellReplacement => setCurrent({...current, spellReplacement})} />}

    {level === 3 && value.data[3].subclass === "lore" && <FieldRow>
      <SkillField label="Skill" value={current.skill1} onChange={skill1 => setCurrent({...current, skill1})} />
      <SkillField label="Skill" value={current.skill2} onChange={skill1 => setCurrent({...current, skill1})} />
      <SkillField label="Skill" value={current.skill3} onChange={skill1 => setCurrent({...current, skill1})} />
    </FieldRow>}

    {level === 1 && <FieldRow>
      <SkillField label="Skill" value={current.skill1} filter={isBardSkill} onChange={skill => setCurrent({...current, skill1: skill})} />
      {isStartingClass && <>
        <SkillField label="Skill" value={current.skill2} filter={isBardSkill} onChange={skill => setCurrent({...current, skill2: skill})} />
        <SkillField label="Skill" value={current.skill3} filter={isBardSkill} onChange={skill => setCurrent({...current, skill3: skill})} />
      </>}
    </FieldRow>}

    {(level === 2 || level === 9) && <FieldRow>
      <SkillField label="Expertise" value={current.expertise1} filter={isBardSkill} onChange={expertise1 => setCurrent({...current, expertise1})} />
      <SkillField label="Expertise" value={current.expertise2} filter={isBardSkill} onChange={expertise2 => setCurrent({...current, expertise2})} />
    </FieldRow>}


    {level === 1 && <FieldRow>
      <ToolField label="Musical Instrument" value={current.tool1} filter={isMusicalInstrumentTool} onChange={tool1 => setCurrent({...current, tool1})} />
      {isStartingClass && <>
        <ToolField label="Musical Instrument" value={current.tool2} filter={isMusicalInstrumentTool} onChange={tool2 => setCurrent({...current, tool2})} />
        <ToolField label="Musical Instrument" value={current.tool3} filter={isMusicalInstrumentTool} onChange={tool3 => setCurrent({...current, tool3})} />
      </>}
    </FieldRow>}

    {(level === 1 || level === 4 || level === 10) && <FieldRow>
      <SpellField label="Cantrip" value={current.cantrip1} onChange={spell => setCurrent({...current, cantrip1: spell})} />
      {level === 1 && <SpellField label="Cantrip" value={current.cantrip2} onChange={spell => setCurrent({...current, cantrip2: spell})} />}
      {level === 1 && <SpellField label="Cantrip" value={current.cantrip3} onChange={spell => setCurrent({...current, cantrip3: spell})} />}
      {level === 1 && <SpellField label="Cantrip" value={current.cantrip4} onChange={spell => setCurrent({...current, cantrip4: spell})} />}
    </FieldRow>}
    {((level >= 1 && level <= 11) || level === 13 || level == 15 || level >= 17) && <FieldRow>
      {((level >= 1 && level <= 11) || level === 13 || level === 15 || level >= 17) && <SpellField label="Spell" value={current.spell1} onChange={spell1 => setCurrent({...current, spell1})} />}
      {(level == 1 || level === 5 || level === 9) && <SpellField label="Spell" value={current.spell2} onChange={spell2 => setCurrent({...current, spell2})} />}
      {(level == 1) && <SpellField label="Spell" value={current.spell3} onChange={spell3 => setCurrent({...current, spell3})} />}
      {(level == 1) && <SpellField label="Spell" value={current.spell4} onChange={spell4 => setCurrent({...current, spell4})} />}
    </FieldRow>}

    {(level === 4 || level === 8 || level === 12 || level === 16) && <FeatFields label="Feat" value={current.feat} onChange={feat => setCurrent({...current, feat})} />}
    {level === 19 && <FeatFields label="Epic Boon" value={current.feat} onChange={feat => setCurrent({...current, feat})} />}
  </FieldSet>;
}
