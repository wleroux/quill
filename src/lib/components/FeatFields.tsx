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
  FeatKeenMind,
  FeatMagicInitiate,
  FeatMusician,
  FeatRitualCaster,
  Feats,
  FEATS,
  FeatSkilled,
  FeatSkillExpert,
  isCrafterTool,
  isFeatKeenMindSkill
} from "@/model/feat";
import {DropdownField} from "@/lib/components/DropdownField";
import {SkillOrToolField} from "@/lib/components/SkillOrToolField";
import {FieldSet} from "@/lib/components/FieldSet";
import {FieldRow} from "@/lib/components/FieldRow";
import {AttributeField} from "@/lib/components/AttributeField";
import {SpellField} from "@/lib/components/SpellField";
import {
  Attribute,
  isConWisAttribute,
  isDexConAttribute,
  isDexIntAttribute,
  isIntWisAttribute,
  isMentalAttribute,
  isStrConAttribute,
  isStrDexAttribute,
  isStrDexWisAttribute,
  isWisChaAttribute
} from "@/model/attribute";
import {ToolField} from "@/lib/components/ToolField";
import {isMusicalInstrumentTool} from "@/model/tool";
import {SkillField} from "@/lib/components/SkillField";

export function FeatAbilityScoreImprovementField({value, onChange, inline}: {value: FeatAbilityScoreImprovement, onChange: (value: FeatAbilityScoreImprovement) => void, inline?: boolean}) {
  return <FieldSet inline={inline}>
    <FieldRow>
      <AttributeField label="Ability Score" value={value.attribute1} onChange={(attribute1) => onChange({...value, attribute1})} />
      <AttributeField label="Ability Score" value={value.attribute2} onChange={(attribute1) => onChange({...value, attribute1})} />
    </FieldRow>
  </FieldSet>
}

export function FeatAttributeField<A extends Attribute, T extends {attribute: A}>({value, filter, onChange, inline}: {value: T, filter?: (attribute: Attribute) => attribute is A, onChange: (value: T) => void, inline?: boolean}) {
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

export function FeatKeenMindField({inline, value, onChange}: {inline?: boolean, value: FeatKeenMind, onChange: (value: FeatKeenMind) => void}) {
  return <FieldSet inline={inline}>
    <FieldRow>
      <SkillField label="Skill" value={value.skill} filter={isFeatKeenMindSkill} onChange={(skill) => onChange({...value, skill})} />
    </FieldRow>
  </FieldSet>
}

export function FeatRitualCasterField({inline, value, onChange}: {inline?: boolean, value: FeatRitualCaster, onChange: (value: FeatRitualCaster) => void}) {
  return <FieldSet inline={inline}>
    <FieldRow>
      <AttributeField value={value.attribute} filter={isMentalAttribute} onChange={attribute => onChange({...value, attribute})} />
    </FieldRow>
    <FieldRow>
      <SpellField label="Ritual Spell" value={value.spell1} onChange={(spell1) => onChange({...value, spell1})} />
      <SpellField label="Ritual Spell" value={value.spell2} onChange={(spell2) => onChange({...value, spell2})} />
      <SpellField label="Ritual Spell" value={value.spell3} onChange={(spell3) => onChange({...value, spell3})} />
      <SpellField label="Ritual Spell" value={value.spell4} onChange={(spell4) => onChange({...value, spell4})} />
      <SpellField label="Ritual Spell" value={value.spell5} onChange={(spell5) => onChange({...value, spell5})} />
      <SpellField label="Ritual Spell" value={value.spell6} onChange={(spell6) => onChange({...value, spell6})} />
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

export function FeatSkillExpertField({inline, value, onChange}: {inline?: boolean, value: FeatSkillExpert, onChange: (value: FeatSkillExpert) => void}) {
  return <FieldSet inline={inline}>
    <FieldRow>
      <AttributeField label="Attribute" value={value.attribute} onChange={(attribute) => onChange({...value, attribute})} />
    </FieldRow>
    <FieldRow>
      <SkillField label="Skill" value={value.skill} onChange={(skill) => onChange({...value, skill})} />
    </FieldRow>
    <FieldRow>
      <SkillField label="Expertise" value={value.expertise} onChange={(expertise) => onChange({...value, expertise})} />
    </FieldRow>
  </FieldSet>
}

export function FeatFields<T = Feat>({label, filter, value, onChange}: {label: string, filter?: (feat: Feat) => feat is T & Feat, value?: T & Feat, onChange: (value: T & Feat) => void}) {
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
          onChange({type: ev.value, data: DEFAULT_FEATS[ev.value as keyof Feats]} as T & Feat);
         }} />
    </FieldRow>

    {value?.type === "ability score improvement" && <FeatAbilityScoreImprovementField value={value.data} onChange={(data) => onChange({type: "ability score improvement", data})} />}
    {value?.type === "athlete" && <FeatAttributeField value={value.data} filter={isStrDexAttribute} onChange={(data) => onChange({type: "athlete", data})} />}
    {value?.type === "charger" && <FeatAttributeField value={value.data} filter={isStrDexAttribute} onChange={(data) => onChange({type: "charger", data})} />}
    {value?.type === "chef" && <FeatAttributeField value={value.data} filter={isConWisAttribute} onChange={(data) => onChange({type: "chef", data})} />}
    {value?.type === "crafter" && <FeatCrafterField value={value.data} onChange={(data) => onChange({type: "crafter", data})} />}
    {value?.type === "dual wielder" && <FeatAttributeField value={value.data} filter={isStrDexAttribute} onChange={(data) => onChange({type: "dual wielder", data})} />}
    {value?.type === "elemental adept" && <FeatElementalAdeptField value={value.data} onChange={(data) => onChange({type: "elemental adept", data})} />}
    {value?.type === "fey-touched" && <FeatFeyTouchedField value={value.data} onChange={(data) => onChange({type: "fey-touched", data})} />}
    {value?.type === "grappler" && <FeatAttributeField value={value.data} filter={isStrDexAttribute} onChange={(data) => onChange({type: "grappler", data})} />}
    {value?.type === "heavily armored" && <FeatAttributeField value={value.data} filter={isStrConAttribute} onChange={(data) => onChange({type: "heavily armored", data})} />}
    {value?.type === "heavy armor master" && <FeatAttributeField value={value.data} filter={isStrConAttribute} onChange={(data) => onChange({type: "heavy armor master", data})} />}
    {value?.type === "inspiring leader" && <FeatAttributeField value={value.data} filter={isWisChaAttribute} onChange={(data) => onChange({type: "inspiring leader", data})} />}
    {value?.type === "keen mind" && <FeatKeenMindField value={value.data} onChange={(data) => onChange({type: "keen mind", data})} />}
    {value?.type === "mage slayer" && <FeatAttributeField value={value.data} filter={isStrDexAttribute} onChange={(data) => onChange({type: "mage slayer", data})} />}
    {value?.type === "magic initiate" && <FeatMagicInitiateField value={value.data} onChange={(data) => onChange({type: "magic initiate", data})} />}
    {value?.type === "martial weapon training" && <FeatAttributeField value={value.data} filter={isStrDexAttribute} onChange={(data) => onChange({type: "martial weapon training", data})} />}
    {value?.type === "medium armor master" && <FeatAttributeField value={value.data} filter={isStrDexAttribute} onChange={(data) => onChange({type: "medium armor master", data})} />}
    {value?.type === "moderately armored" && <FeatAttributeField value={value.data} filter={isStrDexAttribute} onChange={(data) => onChange({type: "moderately armored", data})} />}
    {value?.type === "mounted combatant" && <FeatAttributeField value={value.data} filter={isStrDexWisAttribute} onChange={(data) => onChange({type: "mounted combatant", data})} />}
    {value?.type === "musician" && <FeatMusicianField value={value.data} onChange={(data) => onChange({type: "musician", data})} />}
    {value?.type === "observant" && <FeatAttributeField value={value.data} filter={isIntWisAttribute} onChange={(data) => onChange({type: "observant", data})} />}
    {value?.type === "piercer" && <FeatAttributeField value={value.data} filter={isStrDexAttribute} onChange={(data) => onChange({type: "piercer", data})} />}
    {value?.type === "poisoner" && <FeatAttributeField value={value.data} filter={isDexIntAttribute} onChange={(data) => onChange({type: "poisoner", data})} />}
    {value?.type === "polearm master" && <FeatAttributeField value={value.data} filter={isStrDexAttribute} onChange={(data) => onChange({type: "polearm master", data})} />}
    {value?.type === "resilient" && <FeatAttributeField value={value.data} onChange={(data) => onChange({type: "resilient", data})} />}
    {value?.type === "ritual caster" && <FeatRitualCasterField value={value.data} onChange={(data) => onChange({type: "ritual caster", data})} />}
    {value?.type === "sentinel" && <FeatAttributeField value={value.data} filter={isStrDexAttribute} onChange={(data) => onChange({type: "sentinel", data})} />}
    {value?.type === "shadow-touched" && <FeatAttributeField value={value.data} filter={isMentalAttribute} onChange={(data) => onChange({type: "shadow-touched", data})} />}
    {value?.type === "skilled" && <FeatSkilledField value={value.data} onChange={(data) => onChange({type: "skilled", data})} />}
    {value?.type === "skill expert" && <FeatSkillExpertField value={value.data} onChange={(data) => onChange({type: "skill expert", data})} />}
    {value?.type === "slasher" && <FeatAttributeField value={value.data} filter={isStrDexAttribute} onChange={(data) => onChange({type: "slasher", data})} />}
    {value?.type === "speedy" && <FeatAttributeField value={value.data} filter={isDexConAttribute} onChange={(data) => onChange({type: "speedy", data})} />}
    {value?.type === "spell sniper" && <FeatAttributeField value={value.data} filter={isMentalAttribute} onChange={(data) => onChange({type: "spell sniper", data})} />}
    {value?.type === "telekinetic" && <FeatAttributeField value={value.data} filter={isMentalAttribute} onChange={(data) => onChange({type: "telekinetic", data})} />}
    {value?.type === "telepathic" && <FeatAttributeField value={value.data} filter={isMentalAttribute} onChange={(data) => onChange({type: "telepathic", data})} />}
    {value?.type === "war caster" && <FeatAttributeField value={value.data} filter={isMentalAttribute} onChange={(data) => onChange({type: "war caster", data})} />}
    {value?.type === "weapon master" && <FeatAttributeField value={value.data} filter={isStrDexAttribute} onChange={(data) => onChange({type: "weapon master", data})} />}
  </FieldSet>
}