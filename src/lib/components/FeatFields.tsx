import {
  DEFAULT_FEATS,
  ELEMENTAL_ADEPT_ENERGIES,
  ELEMENTAL_ADEPT_ENERGY_LABELS,
  Feat,
  FEAT_LABELS,
  FeatAbilityScoreImprovement,
  FeatCrafter,
  FeatElementalAdept,
  FeatFeyTouched,
  FeatGrappler,
  FeatHeavilyArmored,
  FeatMagicInitiate,
  FeatMusician,
  Feats,
  FEATS,
  FeatSkilled,
  isCrafterTool
} from "@/model/feat";
import {DropdownField} from "@/lib/components/DropdownField";
import {SkillOrToolField} from "@/lib/components/SkillOrToolField";
import {FieldSet} from "@/lib/components/FieldSet";
import {FieldRow} from "@/lib/components/FieldRow";
import {AttributeField} from "@/lib/components/AttributeField";
import {SpellField} from "@/lib/components/SpellField";
import {Attribute, isConWisAttribute, isMentalAttribute, isStrConAttribute, isStrDexAttribute, isWisChaAttribute} from "@/model/attribute";
import {ToolField} from "@/lib/components/ToolField";
import {isMusicalInstrumentTool} from "@/model/tool";

export function FeatAbilityScoreImprovementField({value, onChange, inline}: {value: FeatAbilityScoreImprovement, onChange: (value: FeatAbilityScoreImprovement) => void, inline?: boolean}) {
  return <FieldSet inline={inline}>
    <FieldRow>
      <AttributeField label="Ability Score" value={value.attribute1} onChange={(attribute1) => onChange({...value, attribute1})} />
      <AttributeField label="Ability Score" value={value.attribute2} onChange={(attribute1) => onChange({...value, attribute1})} />
    </FieldRow>
  </FieldSet>
}

export function FeatAttributeField<T extends Attribute>({value, filter, onChange, inline}: {value: {attribute: T}, filter: (attribute: Attribute) => attribute is T, onChange: (value: {attribute: T}) => void, inline?: boolean}) {
  return <FieldSet inline={inline}>
    <FieldRow>
      <AttributeField label="Ability Score" value={value.attribute} filter={filter} onChange={(attribute) => onChange({...value, attribute})} />
    </FieldRow>
  </FieldSet>
}

export function FeatCrafterField({value, onChange, inline}: {value: FeatCrafter, onChange: (value: FeatCrafter) => void, inline?: boolean}) {
  return <FieldSet inline={inline}>
    <FieldRow>
      <ToolField label="Artisan Tool" filter={isCrafterTool} value={value.selection1} onChange={(selection) => onChange({...value, selection1: selection})} />
      <ToolField label="Artisan Tool" filter={isCrafterTool} value={value.selection2} onChange={(selection) => onChange({...value, selection2: selection})} />
      <ToolField label="Artisan Tool" filter={isCrafterTool} value={value.selection3} onChange={(selection) => onChange({...value, selection3: selection})} />
    </FieldRow>
  </FieldSet>
}

export function FeatElementalAdeptField({value, onChange, inline}: {value: FeatElementalAdept, onChange: (value: FeatElementalAdept) => void, inline?: boolean}) {
  return <FieldSet inline={inline}>
    <FieldRow>
      <AttributeField label="Ability Score" value={value.attribute} filter={isMentalAttribute} onChange={(attribute) => onChange({...value, attribute})} />
    </FieldRow>
    <FieldRow>
      <DropdownField label="Energy" value={value.energy} onChange={(ev) => onChange({...value, energy: ev.value})} options={ELEMENTAL_ADEPT_ENERGIES.map(type => ({
        value: type,
        label: ELEMENTAL_ADEPT_ENERGY_LABELS[type]
      }))} />
    </FieldRow>
  </FieldSet>
}

export function FeatFeyTouchedField({value, onChange, inline}: {value: FeatFeyTouched, onChange: (value: FeatFeyTouched) => void, inline?: boolean}) {
  return <FieldSet inline={inline}>
    <FieldRow>
      <AttributeField label="Ability Score" value={value.attribute} filter={isMentalAttribute} onChange={(attribute) => onChange({...value, attribute})} />
    </FieldRow>
    <FieldRow>
      <SpellField label="Spell" value={value.spell} onChange={(spell) => onChange({...value, spell})} />
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

export function FeatFields<T = Feat>({label, filter, value, onChange}: {label: string, filter?: (feat: Feat) => feat is T & Feat, value?: T & Feat, onChange: (value: T) => void}) {
  return <FieldSet inline>
    <FieldRow>
      <DropdownField
        label={label}
        value={value?.type}
        options={FEATS
          .map(feat => ({type: feat, data: DEFAULT_FEATS[feat as Feat["type"]]}) as Feat)
          .filter(feat => filter ? filter(feat) : true)
          .map(feat => ({value: feat.type, label: FEAT_LABELS[feat.type]}))
          .sort((a, b) => a.label.localeCompare(b.label))
      }
         onChange={ev => {
          onChange({type: ev.value, data: DEFAULT_FEATS[ev.value as keyof Feats]} as T);
         }} />
    </FieldRow>

    {value?.type === "ability score improvement" && <FeatAbilityScoreImprovementField value={value.data} onChange={(data) => onChange({type: "ability score improvement", data} as T)} />}
    {value?.type === "athlete" && <FeatAttributeField value={value.data} filter={isStrDexAttribute} onChange={(data) => onChange({type: "athlete", data} as T)} />}
    {value?.type === "charger" && <FeatAttributeField value={value.data} filter={isStrDexAttribute} onChange={(data) => onChange({type: "charger", data} as T)} />}
    {value?.type === "chef" && <FeatAttributeField value={value.data} filter={isConWisAttribute} onChange={(data) => onChange({type: "chef", data} as T)} />}
    {value?.type === "crafter" && <FeatCrafterField value={value.data} onChange={(data) => onChange({type: "crafter", data} as T)} />}
    {value?.type === "dual wielder" && <FeatAttributeField value={value.data} filter={isStrDexAttribute} onChange={(data) => onChange({type: "dual wielder", data} as T)} />}
    {value?.type === "elemental adept" && <FeatElementalAdeptField value={value.data} onChange={(data) => onChange({type: "elemental adept", data} as T)} />}
    {value?.type === "fey-touched" && <FeatFeyTouchedField value={value.data} onChange={(data) => onChange({type: "fey-touched", data} as T)} />}
    {value?.type === "grappler" && <FeatAttributeField value={value.data} filter={isStrDexAttribute} onChange={(data) => onChange({type: "grappler", data} as T)} />}
    {value?.type === "heavily armored" && <FeatAttributeField value={value.data} filter={isStrConAttribute} onChange={(data) => onChange({type: "heavily armored", data} as T)} />}
    {value?.type === "heavy armor master" && <FeatAttributeField value={value.data} filter={isStrConAttribute} onChange={(data) => onChange({type: "heavy armor master", data} as T)} />}
    {value?.type === "inspiring leader" && <FeatAttributeField value={value.data} filter={isWisChaAttribute} onChange={(data) => onChange({type: "inspiring leader", data} as T)} />}
    {value?.type === "skilled" && <FeatSkilledField value={value.data} onChange={(data) => onChange({type: "skilled", data} as T)} />}
    {value?.type === "musician" && <FeatMusicianField value={value.data} onChange={(data) => onChange({type: "musician", data} as T)} />}
    {value?.type === "magic initiate" && <FeatMagicInitiateField value={value.data} onChange={(data) => onChange({type: "magic initiate", data} as T)} />}
  </FieldSet>
}