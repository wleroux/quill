import {
  DEFAULT_SPECIE,
  DRACONIC_ANCESTRIES,
  DRACONIC_ANCESTRY_LABELS,
  ELVEN_LINEAGE_LABELS,
  ELVEN_LINEAGES,
  FIENDISH_LEGACIES,
  FIENDISH_LEGACY_LABELS,
  GIANT_ANCESTRIES,
  GIANT_ANCESTRY_LABELS,
  GNOMISH_LINEAGE_LABELS,
  GNOMISH_LINEAGES,
  Specie,
  SPECIE_LABELS,
  SpecieAasimar,
  SpecieDragonborn,
  SpecieDrawf,
  SpecieElf,
  SpecieGnome,
  SpecieGoliath,
  SpecieHuman,
  SpecieOrc,
  SPECIES,
  Species,
  SpecieTiefling
} from "@/model/specie";
import {DropdownField} from "@/lib/components/DropdownField";
import {SKILL_LABEL, SKILLS} from "@/model/skill";
import {FeatField} from "@/lib/components/FeatField";
import {FieldSet} from "@/lib/components/FieldSet";
import {FieldRow} from "@/lib/components/FieldRow";
import {isOriginFeat} from "@/model/feat";
import {AttributeField} from "@/lib/components/AttributeField";
import {isMentalAttribute} from "@/model/attribute";

export function SpecieAasimarField({value, onChange}: {value: SpecieAasimar, onChange: (value: SpecieAasimar) => void}) {
  return <FieldSet>
    <FieldRow>
      <DropdownField label="Size" value={value.size} onChange={(ev) => onChange({...value, size: ev.value})} options={[
        {value: "small", label: "Small"},
        {value: "medium", label: "Medium"}
      ]}/>
    </FieldRow>
  </FieldSet>
}

export function SpecieDragonbornField({value, onChange}: {value: SpecieDragonborn, onChange: (value: SpecieDragonborn) => void}) {
  return <FieldSet>
    <FieldRow>
      <DropdownField label="Draconic Ancestry" value={value.draconicAncestry} onChange={(ev) => onChange({...value, draconicAncestry: ev.value})} options={DRACONIC_ANCESTRIES.map(value => ({
        value: value, label: DRACONIC_ANCESTRY_LABELS[value]
      }))} />
    </FieldRow>
  </FieldSet>
}

export function SpecieDwarfField({value, onChange}: {value: SpecieDrawf, onChange: (value: SpecieDrawf) => void}) {
  return <></>
}

export function SpecieElfField({value, onChange}: {value: SpecieElf, onChange: (value: SpecieElf) => void}) {
  return <FieldSet>
    <FieldRow>
      <DropdownField label="Keen Senses" value={value.keenSenses} onChange={(ev) => onChange({...value, keenSenses: ev.value})} options={[
        {value: "insight", label: SKILL_LABEL["insight"]},
        {value: "perception", label: SKILL_LABEL["perception"]},
        {value: "survival", label: SKILL_LABEL["survival"]}
      ]}/>
    </FieldRow>
    <FieldRow>
      <DropdownField label="Elven Lineage" value={value.elvenLineage} onChange={(ev) => onChange({...value, elvenLineage: ev.value})} options={ELVEN_LINEAGES.map(value => ({
        value: value, label: ELVEN_LINEAGE_LABELS[value]
      }))} />
    </FieldRow>
  </FieldSet>
}


export function SpecieGnomeField({value, onChange}: {value: SpecieGnome, onChange: (value: SpecieGnome) => void}) {
  return <FieldSet>
    <FieldRow>
      <DropdownField label="Gnomish Lineage" value={value.gnomishLineage} onChange={(ev) => onChange({...value, gnomishLineage: ev.value})} options={GNOMISH_LINEAGES.map(value => ({
        value: value, label: GNOMISH_LINEAGE_LABELS[value]
      }))} />
    </FieldRow>
    <FieldRow>
      <AttributeField label="Spellcasting Ability" filter={isMentalAttribute} value={value.spellcastingAbility} onChange={spellcastingAbility => onChange({...value, spellcastingAbility})} />
    </FieldRow>
  </FieldSet>
}

export function SpecieGoliathField({value, onChange}: {value: SpecieGoliath, onChange: (value: SpecieGoliath) => void}) {
  return <FieldSet>
    <FieldRow>
      <DropdownField label="Giant Ancestry" value={value.giantAncestry} onChange={(ev) => onChange({...value, giantAncestry: ev.value})} options={GIANT_ANCESTRIES.map(value => ({
        value: value, label: GIANT_ANCESTRY_LABELS[value]
      }))} />
    </FieldRow>
  </FieldSet>
}

export function SpecieHumanField({value, onChange}: {value: SpecieHuman, onChange: (value: SpecieHuman) => void}) {
  return <FieldSet>
    <FieldRow>
      <DropdownField label="Size" value={value.size} onChange={(ev) => onChange({...value, size: ev.value})} options={[
        {value: "small", label: "Small"},
        {value: "medium", label: "Medium"}
      ]}/>
    </FieldRow>
    <FieldRow>
    <DropdownField label="Skillful" value={value.skillful} options={SKILLS.map(skill => ({value: skill, label: SKILL_LABEL[skill]}))} onChange={ev => onChange({...value, skillful: ev.value})}/>
    </FieldRow>
    <FeatField label="Versatile" filter={isOriginFeat} value={value.versatile} onChange={(versatile) => onChange({...value, versatile})} />
  </FieldSet>
}

export function SpecieOrcField({value, onChange}: {value: SpecieOrc, onChange: (value: SpecieOrc) => void}) {
  return <></>
}

export function SpecieTieflingField({value, onChange}: {value: SpecieTiefling, onChange: (value: SpecieTiefling) => void}) {
  return <FieldSet>
    <FieldRow>
      <DropdownField label="Size" value={value.size} onChange={(ev) => onChange({...value, size: ev.value})} options={[
        {value: "small", label: "Small"},
        {value: "medium", label: "Medium"}
      ]}/>
    </FieldRow>
    <FieldRow>
      <DropdownField label="Fiendish Legacy" value={value.fiendishLegacy} onChange={(ev) => onChange({...value, fiendishLegacy: ev.value})} options={FIENDISH_LEGACIES.map(value => ({
        value: value, label: FIENDISH_LEGACY_LABELS[value]
      }))} />
    </FieldRow>
  </FieldSet>
}

export function SpecieField({value, onChange}: {value: Specie, onChange: (value: Specie) => void}) {
  return <FieldSet inline>
    <FieldRow>
      <DropdownField label="Specie" value={value.type} onChange={ev => {
        onChange({
          type: ev.value,
          data: DEFAULT_SPECIE[ev.value as keyof Species]
        } as Specie);
      }} options={SPECIES.map(specie => ({value: specie, label: SPECIE_LABELS[specie]}))} />
    </FieldRow>

    {value.type === "aasimar" && <SpecieAasimarField value={value.data} onChange={(value) => onChange({type: "aasimar", data: value})} />}
    {value.type === "dragonborn" && <SpecieDragonbornField value={value.data} onChange={(value) => onChange({type: "dragonborn", data: value})} />}
    {value.type === "dwarf" && <SpecieDwarfField value={value.data} onChange={(value) => onChange({type: "dwarf", data: value})} />}
    {value.type === "elf" && <SpecieElfField value={value.data} onChange={(value) => onChange({type: "elf", data: value})} />}
    {value.type === "gnome" && <SpecieGnomeField value={value.data} onChange={(value) => onChange({type: "gnome", data: value})} />}
    {value.type === "goliath" && <SpecieGoliathField value={value.data} onChange={(value) => onChange({type: "goliath", data: value})} />}
    {value.type === "human" && <SpecieHumanField value={value.data} onChange={(value) => onChange({type: "human", data: value})} />}
    {value.type === "orc" && <SpecieOrcField value={value.data} onChange={(value) => onChange({type: "orc", data: value})} />}
    {value.type === "tiefling" && <SpecieTieflingField value={value.data} onChange={(value) => onChange({type: "tiefling", data: value})} />}
  </FieldSet>
}