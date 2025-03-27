import {DEFAULT_ORIGIN_FEATS, FeatCrafter, FeatMagicInitiate, FeatMusician, FeatSkilled, ORIGIN_FEAT_LABELS, ORIGIN_FEATS, OriginFeat, OriginFeats} from "@/model/feat";
import {DropdownField} from "@/lib/components/DropdownField";
import {SkillOrToolField} from "@/lib/components/SkillOrToolField";
import {MusicalInstrumentField} from "@/lib/components/MusicalInstrumentField";
import {ArtisanToolField} from "@/lib/components/artisan-tool-field";
import {FieldSet} from "@/lib/components/FieldSet";
import {FieldLabel} from "@/lib/components/FieldLabel";
import {Field} from "@/lib/components/Field";

function FeatCrafterField({value, onChange}: {value: FeatCrafter, onChange: (value: FeatCrafter) => void}) {
  return <FieldSet>
    <ArtisanToolField label="Artisan Tool" value={value.selection1} onChange={(selection) => onChange({...value, selection1: selection})} />
    <ArtisanToolField label="Artisan Tool" value={value.selection2} onChange={(selection) => onChange({...value, selection2: selection})} />
    <ArtisanToolField label="Artisan Tool" value={value.selection3} onChange={(selection) => onChange({...value, selection3: selection})} />
  </FieldSet>
}

function FeatMagicInitiateField({value, onChange}: {value: FeatMagicInitiate, onChange: (value: FeatMagicInitiate) => void}) {
  return <FieldSet>
    <DropdownField label="Spellcasting Ability" value={value.spellcastingAbility} options={[
      {value: "int", label: "Intelligence"},
      {value: "wis", label: "Wisdom"},
      {value: "cha", label: "Charisma"},
    ]} onChange={(ev) => onChange({...value, spellcastingAbility: ev.value})} />
    <DropdownField label="Class" value={value.cantripClass} options={[
      {value: "druid", label: "Druid"},
      {value: "cleric", label: "Cleric"},
      {value: "wizard", label: "Wizard"},
    ]} onChange={(ev) => onChange({...value, cantripClass: ev.value})} />
    <FieldSet>
      <DropdownField label="Cantrip" value={value.cantrip1} options={[
      ]} onChange={(ev) => onChange({...value, cantrip1: ev.value})} />
      <DropdownField label="Cantrip" value={value.cantrip2} options={[
      ]} onChange={(ev) => onChange({...value, cantrip2: ev.value})} />
    </FieldSet>
  </FieldSet>
}

function FeatMusicianField({value, onChange}: {value: FeatMusician, onChange: (value: FeatMusician) => void}) {
  return <FieldSet>
    <MusicalInstrumentField label="Musical Instrument" value={value.selection1} onChange={(selection) => onChange({...value, selection1: selection})} />
    <MusicalInstrumentField label="Musical Instrument" value={value.selection2} onChange={(selection) => onChange({...value, selection2: selection})} />
    <MusicalInstrumentField label="Musical Instrument" value={value.selection3} onChange={(selection) => onChange({...value, selection3: selection})} />
  </FieldSet>
}

function FeatSkilledField({value, onChange}: {value: FeatSkilled, onChange: (value: FeatSkilled) => void}) {
  return <FieldSet>
    <SkillOrToolField label="Skill or Tool" value={value.selection1} onChange={(selection) => onChange({...value, selection1: selection})} />
    <SkillOrToolField label="Skill or Tool" value={value.selection2} onChange={(selection) => onChange({...value, selection2: selection})} />
    <SkillOrToolField label="Skill or Tool" value={value.selection3} onChange={(selection) => onChange({...value, selection3: selection})} />
  </FieldSet>
}

export function OriginFeatField({label, value, onChange}: {label: string, value: OriginFeat, onChange: (value: OriginFeat) => void}) {
  return <FieldSet inline>
    <DropdownField label={label} value={value.type} options={ORIGIN_FEATS.map(feat => ({value: feat, label: ORIGIN_FEAT_LABELS[feat]}))} onChange={ev => {
      onChange({type: ev.value, data: DEFAULT_ORIGIN_FEATS[ev.value as keyof OriginFeats]} as OriginFeat);
    }} />

    {value.type === "crafter" && <FeatCrafterField value={value.data} onChange={(data) => onChange({type: "crafter", data})} />}
    {value.type === "skilled" && <FeatSkilledField value={value.data} onChange={(data) => onChange({type: "skilled", data})} />}
    {value.type === "musician" && <FeatMusicianField value={value.data} onChange={(data) => onChange({type: "musician", data})} />}
    {value.type === "magic initiate" && <FeatMagicInitiateField value={value.data} onChange={(data) => onChange({type: "magic initiate", data})} />}
  </FieldSet>
}