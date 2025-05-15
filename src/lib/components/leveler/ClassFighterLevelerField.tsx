import {
  FIGHTER_SUBCLASS_LABELS,
  FIGHTER_SUBCLASSES,
  ClassFighter,
  ClassFighterSubClass,
  DEFAULT_FIGHTER_SUBCLASS_LEVELS,
  isFighterSkill,
} from "@/model/class/ClassFighter";
import {FieldSet} from "@/lib/components/FieldSet";
import {FieldRow} from "@/lib/components/FieldRow";
import {SkillField} from "@/lib/components/SkillField";
import {Class, Level} from "@/model/class/Class";
import React from "react";
import {DropdownField} from "@/lib/components/DropdownField";
import {DropdownChangeEvent} from "primereact/dropdown";
import {FeatFields} from "@/lib/components/FeatFields";
import {ManeuverField, ManeuverFieldReplacementFields} from "@/lib/components/ManeuverField";
import {SpellField, SpellReplacementFields} from "@/lib/components/SpellField";
import {isFightingStyleFeat} from "@/model/feat";

export function ClassFighterLevelerField({value, isStartingClass, onChange}: {
  value: Class<"barbarian">,
  isStartingClass: boolean,
  onChange: (value: Class<"barbarian">) => void
}) {
  const level = value.level;
  const current = value.data[level];
  const setCurrent = (data: ClassFighter<any>[any]) => onChange({
    ...value,
    data: {
      ...value.data,
      [level]: data
    }
  });

  return <FieldSet inline>
    {level === 3 && <FieldRow>
      <DropdownField label="Subclass" value={current.subclass} options={FIGHTER_SUBCLASSES.map(subclass => ({
        value: subclass,
        label: FIGHTER_SUBCLASS_LABELS[subclass]
      }))} onChange={<T extends ClassFighterSubClass>(ev: DropdownChangeEvent) => {
        const subclass = ev.value as T;
        let defaultValue: ClassFighter<T> = DEFAULT_FIGHTER_SUBCLASS_LEVELS[subclass];
        // @ts-ignore
        let nextValue: ClassFighter<T> = value.data;
        nextValue[3].subclass = subclass;
        for (let i: Level = 4; i < 20; i ++) {
          // @ts-ignore
          nextValue[i] = defaultValue[i];
        }
        onChange({...value, data: nextValue});
      }} />
    </FieldRow>}

    {level === 1 && isStartingClass && <FieldRow>
      <SkillField label="Skill" value={current.skill1} filter={isFighterSkill} onChange={skill => setCurrent({...current, skill1: skill})} />
      <SkillField label="Skill" value={current.skill2} filter={isFighterSkill} onChange={skill => setCurrent({...current, skill2: skill})} />
    </FieldRow>}

    {level === 1 && <FeatFields label="Fighting Style" value={current.fightingStyle1} filter={isFightingStyleFeat} onChange={fightingStyle1 => setCurrent({...current, fightingStyle1})} />}

    {(level === 4 || level === 6 || level === 8 || level === 12 || level === 14 || level === 16) && <FeatFields label="Feat" value={current.feat} onChange={feat => setCurrent({...current, feat})} />}
    {level === 3 && value.data[3].subclass === "battle master" && <FieldRow>
      <ManeuverField label="Maneuver" value={current.maneuvers1} onChange={maneuvers1 => setCurrent({...current, maneuvers1})} />
      <ManeuverField label="Maneuver" value={current.maneuvers2} onChange={maneuvers2 => setCurrent({...current, maneuvers2})} />
      <ManeuverField label="Maneuver" value={current.maneuvers3} onChange={maneuvers3 => setCurrent({...current, maneuvers3})} />
    </FieldRow>}

    {level === 7 && value.data[3].subclass === "battle master" && <ManeuverFieldReplacementFields value={current.maneuverReplacement} onChange={maneuverReplacement => setCurrent({...current, maneuverReplacement})} />}
    {level === 7 && value.data[3].subclass === "battle master" && <FieldRow>
      <ManeuverField label="Maneuver" value={current.maneuvers1} onChange={maneuvers1 => setCurrent({...current, maneuvers1})} />
      <ManeuverField label="Maneuver" value={current.maneuvers2} onChange={maneuvers2 => setCurrent({...current, maneuvers2})} />
    </FieldRow>}

    {level === 7 && value.data[3].subclass === "champion" && <FieldRow>
      <FeatFields label="Fighting Style" value={current.fightingStyle1} onChange={fightingStyle1 => setCurrent({...current, fightingStyle1})} />
    </FieldRow>}
    {level === 10 && value.data[3].subclass === "battle master" && <ManeuverFieldReplacementFields value={current.maneuverReplacement} onChange={maneuverReplacement => setCurrent({...current, maneuverReplacement})} />}
    {level === 10 && value.data[3].subclass === "battle master" && <FieldRow>
      <ManeuverField label="Maneuver" value={current.maneuvers1} onChange={maneuvers1 => setCurrent({...current, maneuvers1})} />
      <ManeuverField label="Maneuver" value={current.maneuvers2} onChange={maneuvers2 => setCurrent({...current, maneuvers2})} />
    </FieldRow>}
    {level === 15 && value.data[3].subclass === "battle master" && <ManeuverFieldReplacementFields value={current.maneuverReplacement} onChange={maneuverReplacement => setCurrent({...current, maneuverReplacement})} />}
    {level === 15 && value.data[3].subclass === "battle master" && <FieldRow>
      <ManeuverField label="Maneuver" value={current.maneuvers1} onChange={maneuvers1 => setCurrent({...current, maneuvers1})} />
      <ManeuverField label="Maneuver" value={current.maneuvers2} onChange={maneuvers2 => setCurrent({...current, maneuvers2})} />
    </FieldRow>}

    {level > 3 && value.data[3].subclass === "eldritch knight" && <SpellReplacementFields label="Cantrip Replacement" value={current.cantripReplacement} onChange={cantripReplacement => setCurrent({...current, cantripReplacement})} />}
    {[3].includes(level) && value.data[3].subclass === "eldritch knight" && <FieldRow>
      <SpellField label="Cantrip" value={current.cantrip1} onChange={spell1 => setCurrent({...current, spell1})} />
      <SpellField label="Cantrip" value={current.cantrip2} onChange={spell1 => setCurrent({...current, spell1})} />
    </FieldRow>}
    {[10].includes(level) && value.data[3].subclass === "eldritch knight" && <FieldRow>
      <SpellField label="Cantrip" value={current.cantrip1} onChange={spell1 => setCurrent({...current, spell1})} />
    </FieldRow>}

    {level > 3 && value.data[3].subclass === "eldritch knight" && <SpellReplacementFields value={current.spellReplacement} onChange={spellReplacement => setCurrent({...current, spellReplacement})} />}

    {[3].includes(level) && value.data[3].subclass === "eldritch knight" && <FieldRow>
      <SpellField label="Spell" value={current.spell1} onChange={spell1 => setCurrent({...current, spell1})} />
      <SpellField label="Spell" value={current.spell2} onChange={spell1 => setCurrent({...current, spell1})} />
      <SpellField label="Spell" value={current.spell3} onChange={spell1 => setCurrent({...current, spell1})} />
    </FieldRow>}
    {[4, 7, 8, 10, 11, 13, 14, 16, 19, 20].includes(level) && value.data[3].subclass === "eldritch knight" && <FieldRow>
      <SpellField label="Spell" value={current.spell1} onChange={spell1 => setCurrent({...current, spell1})} />
    </FieldRow>}

    {level === 19 && <FeatFields label="Epic Boon" value={current.feat} onChange={feat => setCurrent({...current, feat})} />}
  </FieldSet>;
}
