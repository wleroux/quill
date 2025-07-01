import {DropdownField} from "@/lib/components/DropdownField";
import {FieldSet} from "@/lib/components/FieldSet";
import {REPOSITORY} from "@/model/source/index";
import {Character} from "@/model/character/Character";
import {useEffect} from "react";
import {ChoicesField} from "@/model/source/choice/ChoicesField";
import {EldritchInvocationChoice} from "./EldritchInvocationChoice";
import {EldritchInvocationDecision} from "@/model/source/choice/eldritch-invocation/EldritchInvocationDecision";

export function EldritchInvocationField({character, choice, value, onChange}: {character: Character, choice: EldritchInvocationChoice, value: EldritchInvocationDecision | undefined, onChange: (value: EldritchInvocationDecision | undefined) => void}) {
  const validEldritchInvocations = Object.keys(REPOSITORY.ELDRITCH_INVOCATIONS)
    .filter(eldritchInvocationID => {
      const eldritchInvocation = REPOSITORY.ELDRITCH_INVOCATIONS[eldritchInvocationID];
      if (eldritchInvocation.repeatable) return true;
      return !Object.values(character.eldritchInvocations ?? {}).some(i => i.eldritchInvocationID === eldritchInvocationID);
    })
    .filter(eldritchInvocationID => choice.data.condition === undefined || choice.data.condition(eldritchInvocationID, character))
    .filter(eldritchInvocationID => REPOSITORY.ELDRITCH_INVOCATIONS[eldritchInvocationID].prerequisite?.(character, character) ?? true);

  useEffect(() => {
    if (value === undefined && validEldritchInvocations.length === 1) {
      onChange({type: "eldritch-invocation", data: {eldritchInvocationID: validEldritchInvocations[0], decisions: {}}});
    }
  }, [value === undefined]);

  const eldritchInvocation = value?.data.eldritchInvocationID ? REPOSITORY.ELDRITCH_INVOCATIONS[value.data.eldritchInvocationID] : undefined;
  return <FieldSet inline>
    <DropdownField
      disabled={validEldritchInvocations.length === 0 || validEldritchInvocations.length === 1 && validEldritchInvocations[0] === value?.data.eldritchInvocationID}
      label={choice.data.label ?? "Eldritch Invocation"}
      value={value?.data.eldritchInvocationID}
      options={validEldritchInvocations
        .map(eldritchInvocationID => ({value: eldritchInvocationID, label: REPOSITORY.ELDRITCH_INVOCATIONS[eldritchInvocationID].label}))
        .sort((a, b) => a.label.localeCompare(b.label))
      }
      onChange={ev => onChange({type: "eldritch-invocation", data: {
        eldritchInvocationID: ev.target.value,
        decisions: {}
      }})} />
    {eldritchInvocation && eldritchInvocation.choices.length > 0 && value?.type === "eldritch-invocation" && <ChoicesField value={character} choices={eldritchInvocation.choices} decisions={value.data.decisions} onChange={fn => onChange({
      ...value,
      data: {
        ...value.data,
        decisions: fn(value.data.decisions)
      }
    })} />}
  </FieldSet>
}