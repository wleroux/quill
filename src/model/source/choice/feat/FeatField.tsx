import {DropdownField} from "@/lib/components/DropdownField";
import {FieldSet} from "@/lib/components/FieldSet";
import {FeatDecision} from "@/model/source/choice/feat/FeatDecision";
import {FeatChoice} from "@/model/source/choice/feat/FeatChoice";
import {REPOSITORY} from "@/model/source/index";
import {Character} from "@/model/character/Character";
import {useEffect} from "react";
import {ChoicesField} from "@/model/source/choice/ChoicesField";

export function FeatField({character, choice, value, onChange}: {
  character: Character,
  choice: FeatChoice,
  value: FeatDecision | undefined,
  onChange: (fn: (value: FeatDecision | undefined) => FeatDecision | undefined) => void}) {
  const VALID_FEATS = Object.keys(REPOSITORY.FEATS)
    .filter(featID => !Object.values(character.feats).some(feat => feat.featID === featID) || REPOSITORY.FEATS[featID].repeatable)
    .filter(featID => choice.data.condition === undefined || choice.data.condition(featID, character))
    .filter(featID => REPOSITORY.FEATS[featID].prerequisite?.(character, character) ?? true);
  useEffect(() => {
    if (value === undefined && VALID_FEATS.length === 1) {
      onChange(_ => ({type: "feat", data: {featID: VALID_FEATS[0], decisions: {}}}));
    }
  }, [value === undefined]);

  const feat = value?.data.featID ? REPOSITORY.FEATS[value.data.featID] : undefined;
  return <FieldSet inline>
    <DropdownField
      disabled={VALID_FEATS.length === 0 || VALID_FEATS.length === 1 && VALID_FEATS[0] === value?.data.featID}
      label={choice.data.label ?? "Feat"}
      value={value?.data.featID}
      options={VALID_FEATS
        .map(featID => ({value: featID, label: REPOSITORY.FEATS[featID].label}))
        .sort((a, b) => a.label.localeCompare(b.label))
      }
      onChange={ev => onChange(_ => ({type: "feat", data: {
        featID: ev.target.value,
        decisions: {}
      }}))} />
    {feat && feat.choices.length > 0 && value?.type === "feat" && <ChoicesField value={character} choices={feat.choices} decisions={value.data.decisions} onChange={fn => onChange(prev => {
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