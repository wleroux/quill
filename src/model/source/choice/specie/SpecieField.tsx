import {DropdownField} from "@/lib/components/DropdownField";
import {FieldSet} from "@/lib/components/FieldSet";
import {SpecieChoice} from "@/model/source/choice/specie/SpecieChoice";
import {SpecieDecision} from "@/model/source/choice/specie/SpecieDecision";
import {REPOSITORY} from "@/model/source/index";
import {Character} from "@/model/player/character/Character";
import {ChoicesField} from "@/model/source/choice/ChoicesField";

export function SpecieField({value, choice, decision, onChange}: {
  value: Character,
  choice: SpecieChoice,
  decision?: SpecieDecision,
  onChange: (fn: (value: SpecieDecision | undefined) => (SpecieDecision | undefined)) => void
}) {
  const VALID_SPECIES =
    Object.keys(REPOSITORY.SPECIES)
      .filter(specieID => choice.data.condition === undefined || choice.data.condition(specieID, value));

  const specie = decision?.data.specieID ? REPOSITORY.SPECIES[decision.data.specieID] : undefined;
  return <FieldSet inline>
    <DropdownField label="Specie" value={decision?.data.specieID} onChange={ev => {
      const specieID = ev.target.value;
      onChange(_ => ({
        type: "specie",
        data: {specieID, decisions: {}}
      }));
    }} options={VALID_SPECIES.map(specieID => ({value: specieID, label: REPOSITORY.SPECIES[specieID].label}))} />
    {specie && decision && <ChoicesField value={
      {...value, choices: {...value.choices, [choice.data.choiceID]: decision.data.specieID}}
    } choices={specie.choices} decisions={decision.data.decisions} onChange={fn => onChange(prev => {
      if (prev === undefined) return undefined;
      return ({
        ...prev,
        data: {
          ...prev.data,
          decisions: fn(prev.data.decisions)
        }
      })
    })} />}
  </FieldSet>
}