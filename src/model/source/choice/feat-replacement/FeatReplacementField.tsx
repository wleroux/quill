import {CheckboxField} from "@/lib/components/CheckboxField";
import React from "react";
import {Character} from "@/model/character/Character";
import {REPOSITORY} from "@/model/source/index";
import {FieldSet} from "@/lib/components/FieldSet";
import {DropdownField} from "@/lib/components/DropdownField";
import {FeatReplacementChoice} from "./FeatReplacementChoice";
import {FeatReplacementDecision} from "@/model/source/choice/feat-replacement/FeatReplacementDecision";
import {FeatID} from "../../model/Feat";
import {ChoicesField} from "@/model/source/choice/ChoicesField";

export function FeatReplacementField({value, choice, decision, onChange}: {
  value: Character,
  choice: FeatReplacementChoice,
  decision?: FeatReplacementDecision,
  onChange: (fn: (value?: FeatReplacementDecision) => FeatReplacementDecision | undefined) => void;
}) {
  const required = choice.data.required === undefined || choice.data.required(undefined, value);
  const VALID_FEATS = Object.keys(REPOSITORY.FEATS)
    .filter(featID => !Object.values(value.feats).some(feat => feat.featID === featID) || REPOSITORY.FEATS[featID].repeatable)
    .filter(featID => choice.data.condition === undefined || choice.data.condition(featID, value))
    .filter(featID => REPOSITORY.FEATS[featID].prerequisite?.(value, value) ?? true);

  const VALID_SOURCES = Object.keys(value.feats)
    .filter(sourceID => {
      if (choice.data.sourceID && !choice.data.sourceID(sourceID, value)) return false;
      if (value.feats[sourceID] === undefined) return false;
      return true;
    });

  const feat = decision?.data.featID ? REPOSITORY.FEATS[decision.data.featID] : undefined;
  return <FieldSet inline>
    {!required && <FieldSet inline>
      <CheckboxField label={choice.data.label ?? "Replace Feat"} checked={decision !== undefined} onChange={(checked) => {
        onChange(_ => checked ? ({type: "feat-replacement", data: {sourceID: "", featID: "" as FeatID, decisions: {}}}) : undefined)
      }} />
    </FieldSet>}
    {(required || decision !== undefined) && <FieldSet inline>
      <DropdownField
        label="Feat"
        value={decision?.data.sourceID}
        options={
          VALID_SOURCES
            .map((sourceID) => ({
              value: sourceID,
              label: REPOSITORY.FEATS[value.feats[sourceID].featID].label
            }))
        }
        onChange={(ev) => onChange(prev => {
          if (prev === undefined) return ({type: "feat-replacement", data: {sourceID: ev.target.value, featID: "", decisions: {}}});
          return ({
            ...prev,
            data: {
              ...prev.data,
              sourceID: ev.target.value
            }
          })
        })}
      />
      <DropdownField
        label="Replacement Feat"
        value={decision?.data.featID}
        options={
          VALID_FEATS
            .map((featID) => ({
              value: featID,
              label: REPOSITORY.FEATS[featID].label
            }))
        }
        onChange={(ev) => onChange(prev => {
          if (prev === undefined) return ({type: "feat-replacement", data: {sourceID: "", featID: ev.target.value as FeatID, decisions: {}}});
          return ({
            ...prev,
            data: {
              ...prev.data,
              featID: ev.target.value as FeatID,
              decisions: {}
            }
          })
        })}
      />
    </FieldSet>}

    {feat && feat.choices.length > 0 && decision?.type === "feat-replacement" && <ChoicesField
      value={value}
      choices={feat.choices}
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
