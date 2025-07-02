import {DropdownField} from "@/lib/components/DropdownField";
import {FieldSet} from "@/lib/components/FieldSet";
import {SpeciesChoice} from "@/model/character/create/species/SpeciesChoice";
import {SpeciesDecision} from "@/model/character/create/species/SpeciesDecision";
import {REPOSITORY} from "@/model/source/index";
import {Character} from "@/model/character/Character";
import {ChoicesField} from "@/model/source/choice/ChoicesField";

export function SpeciesField({value, choice, decision, onChange}: {
  value: Character,
  choice: SpeciesChoice,
  decision?: SpeciesDecision,
  onChange: (fn: (value: SpeciesDecision | undefined) => (SpeciesDecision | undefined)) => void
}) {
  const VALID_SPECIES =
    Object.keys(REPOSITORY.SPECIES)
      .filter(specieID => choice.data.condition === undefined || choice.data.condition(specieID, value));

  const species = decision?.data.speciesID ? REPOSITORY.SPECIES[decision.data.speciesID] : undefined;
  return <FieldSet inline>
    <DropdownField label="Species" value={decision?.data.speciesID} onChange={ev => {
      const speciesID = ev.target.value;
      onChange(_ => ({
        type: "species",
        data: {speciesID, decisions: {}}
      }));
    }} options={VALID_SPECIES.map(specieID => ({value: specieID, label: REPOSITORY.SPECIES[specieID].label}))} />
    {species && decision && <ChoicesField
      value={{...value, species: decision.data}}
      choices={species.choices}
      decisions={decision.data.decisions}
      onChange={fn => onChange(prev => {
        if (prev === undefined) return undefined;
        return ({
          ...prev,
          data: {
            ...prev.data,
            decisions: fn(prev.data.decisions)
          }
        })
      })}
    />}
  </FieldSet>
}