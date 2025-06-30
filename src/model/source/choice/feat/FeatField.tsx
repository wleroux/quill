import {DropdownField} from "@/lib/components/DropdownField";
import {FieldSet} from "@/lib/components/FieldSet";
import {FeatDecision} from "@/model/source/choice/feat/FeatDecision";
import {FeatChoice} from "@/model/source/choice/feat/FeatChoice";
import {REPOSITORY} from "@/model/source/index";
import {Character} from "@/model/character/Character";
import {useEffect} from "react";
import {ChoicesField} from "@/model/source/choice/ChoicesField";

export function FeatField({character, choice, value, onChange}: {character: Character, choice: FeatChoice, value: FeatDecision | undefined, onChange: (value: FeatDecision | undefined) => void}) {
  const validFeats = Object.keys(REPOSITORY.FEATS)
    .filter(featID => !character.feats.some(feat => feat.featID === featID) || REPOSITORY.FEATS[featID].repeatable)
    .filter(featID => choice.data.condition === undefined || choice.data.condition(featID, character))
    .filter(featID => REPOSITORY.FEATS[featID].prerequisite?.(character, character) ?? true);

  useEffect(() => {
    if (value === undefined && validFeats.length === 1) {
      onChange({type: "feat", data: {featID: validFeats[0], decisions: {}}});
    }
  }, [value === undefined]);

  const feat = value?.data.featID ? REPOSITORY.FEATS[value.data.featID] : undefined;
  return <FieldSet inline>
    <DropdownField
      disabled={validFeats.length === 0 || validFeats.length === 1 && validFeats[0] === value?.data.featID}
      label={choice.data.label ?? "Feat"}
      value={value?.data.featID}
      options={validFeats
        .map(featID => ({value: featID, label: REPOSITORY.FEATS[featID].label}))
        .sort((a, b) => a.label.localeCompare(b.label))
      }
      onChange={ev => onChange({type: "feat", data: {
        featID: ev.target.value,
        decisions: {}
      }})} />
    {feat && feat.choices.length > 0 && value?.type === "feat" && <ChoicesField value={character} choices={feat.choices} decisions={value.data.decisions} onChange={fn => onChange({
      ...value,
      data: {
        ...value.data,
        decisions: fn(value.data.decisions)
      }
    })} />}
  </FieldSet>
}