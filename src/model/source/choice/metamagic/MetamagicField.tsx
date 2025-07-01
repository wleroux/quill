import {DropdownField} from "@/lib/components/DropdownField";
import React from "react";
import {REPOSITORY} from "@/model/source/index";
import {MetamagicChoice} from "@/model/source/choice/metamagic/MetamagicChoice";
import {MetamagicDecision} from "@/model/source/choice/metamagic/MetamagicDecision";
import {Character} from "@/model/character/Character";

export function MetamagicField({value, choice, decision, onChange}: {
  value: Character,
  choice: MetamagicChoice,
  decision: MetamagicDecision | undefined,
  onChange: (value: MetamagicDecision | undefined) => void
}) {
  const VALID_METAMAGIC = Object.keys(REPOSITORY.METAMAGICS)
    .filter(metamagicID => {
      if (Object.values(value.metamagics).includes(metamagicID)) return false;
      if (choice.data.condition && !choice.data.condition(metamagicID, value)) return false;
      return true;
    });

  if (choice.data.enabled && !choice.data.enabled(undefined, value)) return <></>;
  return <DropdownField
    label={choice.data.label ?? "Metamagic"}
    value={decision?.data.metamagicID}
    onChange={ev => onChange({
      type: "metamagic",
      data: {
        metamagicID: ev.target.value,
      }
    })}
    options={VALID_METAMAGIC.map(metamagicID => ({
      value: metamagicID,
      label: REPOSITORY.METAMAGICS[metamagicID].label,
    }))}
  />
}
