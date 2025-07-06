import {CheckboxField} from "@/lib/components/CheckboxField";
import React from "react";
import {MetamagicReplacementChoice} from "@/model/source/choice/metamagic-replacement/MetamagicReplacementChoice";
import {MetamagicReplacementDecision} from "@/model/source/choice/metamagic-replacement/MetamagicReplacementDecision";
import {Character} from "@/model/character/Character";
import {REPOSITORY} from "@/model/source/index";
import {FieldSet} from "@/lib/components/FieldSet";
import {DropdownField} from "@/lib/components/DropdownField";
import {MetamagicID} from "@/model/source/model/Metamagic";

export function MetamagicReplacementField({value, choice, decision, onChange}: {value: Character, choice: MetamagicReplacementChoice, decision?: MetamagicReplacementDecision, onChange: (fn: (value: MetamagicReplacementDecision | undefined) => MetamagicReplacementDecision | undefined) => void}) {
  const required = choice.data.required === undefined || choice.data.required(undefined, value);
  const VALID_METAMAGICS = Object.keys(REPOSITORY.METAMAGICS)
    .filter(metamagicID => !Object.values(value.metamagics).includes(metamagicID))
    .filter(metamagicID => choice.data.condition === undefined || choice.data.condition(metamagicID, value));

  const VALID_SOURCES = Object.keys(value.metamagics)
    .filter(sourceID => {
      if (choice.data.sourceID && !choice.data.sourceID(sourceID, value)) return false;
      if (value.metamagics[sourceID] === undefined) return false;
      return true;
    });

  return <FieldSet inline>
    {!required && <FieldSet inline>
      <CheckboxField label={choice.data.label ?? "Replace Feat"} checked={decision !== undefined} onChange={(checked) => {
        onChange(_ => checked ? ({type: "metamagic-replacement", data: {sourceID: "", metamagicID: "" as MetamagicID}}) : undefined)
      }} />
    </FieldSet>}
    {(required || decision !== undefined) && <FieldSet inline>
      <DropdownField
        label="Metamagic"
        value={decision?.data.sourceID}
        options={
          VALID_SOURCES
            .map((sourceID) => ({
              value: sourceID,
              label: REPOSITORY.METAMAGICS[value.metamagics[sourceID]].label
            }))
        }
        onChange={(ev) => onChange(prev => {
          if (prev === undefined) return ({type: "metamagic-replacement", data: {sourceID: ev.target.value, metamagicID: ""}});
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
        label="Replacement Metamagic"
        value={decision?.data.metamagicID}
        options={
          VALID_METAMAGICS
            .map((metamagicID) => ({
              value: metamagicID,
              label: REPOSITORY.METAMAGICS[metamagicID].label
            }))
        }
        onChange={(ev) => onChange(prev => {
          if (prev === undefined) return ({type: "metamagic-replacement", data: {sourceID: "", metamagicID: ev.target.value as MetamagicID}});
          return ({
            ...prev,
            data: {
              ...prev.data,
              metamagicID: ev.target.value as MetamagicID
            }
          })
        })}
      />
    </FieldSet>}
  </FieldSet>
}