import {CheckboxField} from "@/lib/components/CheckboxField";
import React from "react";
import {Character} from "@/model/character/Character";
import {REPOSITORY} from "@/model/source/index";
import {FieldSet} from "@/lib/components/FieldSet";
import {DropdownField} from "@/lib/components/DropdownField";
import {EldritchInvocationReplacementChoice} from "@/model/source/choice/eldritch-invocation-replacement/EldritchInvocationReplacementChoice";
import {EldritchInvocationReplacementDecision} from "@/model/source/choice/eldritch-invocation-replacement/EldritchInvocationReplacementDecision";
import {EldritchInvocationID} from "@/model/source/model/EldritchInvocation";
import {ChoicesField} from "@/model/source/choice/ChoicesField";

export function EldritchInvocationReplacementField({value, choice, decision, onChange}: {
  value: Character,
  choice: EldritchInvocationReplacementChoice,
  decision?: EldritchInvocationReplacementDecision,
  onChange: (fn: (value?: EldritchInvocationReplacementDecision) => EldritchInvocationReplacementDecision | undefined) => void;
}) {
  const required = choice.data.required === undefined || choice.data.required(undefined, value);
  const VALID_ELDRITCH_INVOCATIONS = Object.keys(REPOSITORY.ELDRITCH_INVOCATIONS)
    .filter(eldritchInvocationID => {
      const eldritchInvocation = REPOSITORY.ELDRITCH_INVOCATIONS[eldritchInvocationID];
      if (eldritchInvocation.repeatable) return true;
      return !Object.values(value.eldritchInvocations ?? {}).some(i => i.eldritchInvocationID === eldritchInvocationID);
    })
    .filter(eldritchInvocationID => choice.data.condition === undefined || choice.data.condition(eldritchInvocationID, value))
    .filter(eldritchInvocationID => REPOSITORY.ELDRITCH_INVOCATIONS[eldritchInvocationID].prerequisite?.(value, value) ?? true);
  const VALID_SOURCES = Object.keys(value.eldritchInvocations ?? {})
    .filter(sourceID => {
      if (!value.eldritchInvocations) return false;
      // if (choice.data.sourceID && !choice.data.sourceID(sourceID, value)) return false;
      if (value.eldritchInvocations[sourceID] === undefined) return false;
      return true;
    });

  const eldritchInvocation = decision?.data.eldritchInvocationID ? REPOSITORY.ELDRITCH_INVOCATIONS[decision.data.eldritchInvocationID] : undefined;
  return <FieldSet inline>
    {!required && <FieldSet inline>
      <CheckboxField label={choice.data.label ?? "Replace Eldritch Invocation"} checked={decision !== undefined} onChange={(checked) => {
        onChange(_ => checked ? ({type: "eldritch-invocation-replacement", data: {sourceID: "", eldritchInvocationID: "" as EldritchInvocationID, decisions: {}}}) : undefined)
      }} />
    </FieldSet>}
    {(required || decision !== undefined) && <FieldSet inline>
      <DropdownField label="Eldritch Invocation" value={decision?.data.sourceID} options={VALID_SOURCES.map(sourceID => ({
        value: sourceID,
        label: REPOSITORY.ELDRITCH_INVOCATIONS[value.eldritchInvocations![sourceID].eldritchInvocationID].label
      }))} onChange={(ev) => onChange(prev => {
        if (prev === undefined) return ({type: "eldritch-invocation-replacement", data: {sourceID: ev.target.value, eldritchInvocationID: "", decisions: {}}});
        return ({
          ...prev,
          data: {
            ...prev.data,
            sourceID: ev.target.value
          }
        })
      })} />
      <DropdownField label="Replacement Eldritch Invocation" value={decision?.data.eldritchInvocationID} options={VALID_ELDRITCH_INVOCATIONS.map(eldritchInvocationID => ({
        value: eldritchInvocationID,
        label: REPOSITORY.ELDRITCH_INVOCATIONS[eldritchInvocationID].label
      }))} onChange={(ev) => onChange(prev => {
        if (prev === undefined) return ({type: "eldritch-invocation-replacement", data: {sourceID: "", eldritchInvocationID: ev.target.value as EldritchInvocationID, decisions: {}}});
        return ({
          ...prev,
          data: {
            ...prev.data,
            eldritchInvocationID: ev.target.value as EldritchInvocationID,
            decisions: {}
          }
        })
      })} />
    </FieldSet>}

    {eldritchInvocation && eldritchInvocation.choices.length > 0 && decision?.type === "eldritch-invocation-replacement" && <ChoicesField value={value} choices={eldritchInvocation.choices} decisions={decision.data.decisions} onChange={fn => onChange(prev => {
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
