import {DEFAULT_FEATS, Feat, FEAT_LABELS, FeatCrafter, FeatMagicInitiate, FeatMusician, Feats, FEATS, FeatSkilled, isCrafterTool, OriginFeat} from "@/model/feat";
import {DropdownField} from "@/lib/components/DropdownField";
import {SkillOrToolField} from "@/lib/components/SkillOrToolField";
import {FieldSet} from "@/lib/components/FieldSet";
import {FieldRow} from "@/lib/components/FieldRow";
import {AttributeField} from "@/lib/components/AttributeField";
import {SpellField} from "@/lib/components/SpellField";
import {isMentalAttribute} from "@/model/attribute";
import {ToolField} from "@/lib/components/ToolField";
import {isMusicalInstrumentTool} from "@/model/tool";

export function FeatCrafterField({value, onChange, inline}: {value: FeatCrafter, onChange: (value: FeatCrafter) => void, inline?: boolean}) {
  return <FieldSet inline={inline}>
    <FieldRow>
      <ToolField label="Artisan Tool" filter={isCrafterTool} value={value.selection1} onChange={(selection) => onChange({...value, selection1: selection})} />
      <ToolField label="Artisan Tool" filter={isCrafterTool} value={value.selection2} onChange={(selection) => onChange({...value, selection2: selection})} />
      <ToolField label="Artisan Tool" filter={isCrafterTool} value={value.selection3} onChange={(selection) => onChange({...value, selection3: selection})} />
    </FieldRow>
  </FieldSet>
}

function FeatMagicInitiateField({value, onChange}: {value: FeatMagicInitiate, onChange: (value: FeatMagicInitiate) => void}) {
  return <FieldSet>
    <FieldRow>
      <AttributeField
        label="Spellcasting Ability"
        value={value.spellcastingAbility}
        filter={isMentalAttribute}
        onChange={(attribute) => onChange({...value, spellcastingAbility: attribute})} />
    </FieldRow>
    <FieldRow>
      <DropdownField label="Class" value={value.cantripClass} options={[
        {value: "druid", label: "Druid"},
        {value: "cleric", label: "Cleric"},
        {value: "wizard", label: "Wizard"},
      ]} onChange={(ev) => onChange({...value, cantripClass: ev.value})} />
    </FieldRow>
    <FieldSet>
      <FieldRow>
        <SpellField label="Cantrip" value={value.cantrip1} onChange={(spell) => onChange({...value, cantrip1: spell})} />
        <SpellField label="Cantrip" value={value.cantrip2} onChange={(spell) => onChange({...value, cantrip2: spell})} />
      </FieldRow>
    </FieldSet>
  </FieldSet>
}

export function FeatMusicianField({inline, value, onChange}: {inline?: boolean, value: FeatMusician, onChange: (value: FeatMusician) => void}) {
  return <FieldSet inline={inline}>
    <FieldRow>
      <ToolField label="Musical Instrument" filter={isMusicalInstrumentTool} value={value.selection1} onChange={(selection) => onChange({...value, selection1: selection})} />
      <ToolField label="Musical Instrument" filter={isMusicalInstrumentTool} value={value.selection2} onChange={(selection) => onChange({...value, selection2: selection})} />
      <ToolField label="Musical Instrument" filter={isMusicalInstrumentTool} value={value.selection3} onChange={(selection) => onChange({...value, selection3: selection})} />
    </FieldRow>
  </FieldSet>
}

export function FeatSkilledField({inline, value, onChange}: {inline?: boolean, value: FeatSkilled, onChange: (value: FeatSkilled) => void}) {
  return <FieldSet inline={inline}>
    <FieldRow>
      <SkillOrToolField label="Skill or Tool" value={value.selection1} onChange={(selection) => onChange({...value, selection1: selection})} />
      <SkillOrToolField label="Skill or Tool" value={value.selection2} onChange={(selection) => onChange({...value, selection2: selection})} />
      <SkillOrToolField label="Skill or Tool" value={value.selection3} onChange={(selection) => onChange({...value, selection3: selection})} />
    </FieldRow>
  </FieldSet>
}

export function FeatField<T = Feat>({label, filter, value, onChange}: {label: string, filter?: (feat: Feat) => feat is T & Feat, value: OriginFeat, onChange: (value: T) => void}) {
  return <FieldSet inline>
    <FieldRow>
      <DropdownField
        label={label}
        value={value.type}
        options={FEATS
          .map(feat => ({type: feat, data: DEFAULT_FEATS[feat]}) as Feat)
          .filter(feat => filter ? filter(feat) : true)
          .map(feat => ({value: feat.type, label: FEAT_LABELS[feat.type]}))}
         onChange={ev => {
          onChange({type: ev.value, data: DEFAULT_FEATS[ev.value as keyof Feats]} as T);
         }} />
    </FieldRow>

    {value.type === "crafter" && <FeatCrafterField value={value.data} onChange={(data) => onChange({type: "crafter", data} as T)} />}
    {value.type === "skilled" && <FeatSkilledField value={value.data} onChange={(data) => onChange({type: "skilled", data} as T)} />}
    {value.type === "musician" && <FeatMusicianField value={value.data} onChange={(data) => onChange({type: "musician", data} as T)} />}
    {value.type === "magic initiate" && <FeatMagicInitiateField value={value.data} onChange={(data) => onChange({type: "magic initiate", data} as T)} />}
  </FieldSet>
}