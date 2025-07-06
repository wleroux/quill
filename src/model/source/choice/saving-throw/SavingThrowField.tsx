import {Character} from "@/model/character/Character";
import {DropdownField} from "@/lib/components/DropdownField";
import React, { useEffect } from "react";
import {SavingThrowChoice} from "@/model/source/choice/saving-throw/SavingThrowChoice";
import {SavingThrowDecision} from "@/model/source/choice/saving-throw/SavingThrowDecision";
import {ATTRIBUTE_IDS} from "@/model/source/model/Attribute";
import {ATTRIBUTES} from "@/model/source/Attribute";

export function SavingThrowField({value, choice, decision, onChange}: {
  value: Character,
  choice: SavingThrowChoice,
  decision: SavingThrowDecision | undefined,
  onChange: (fn: (value: SavingThrowDecision | undefined) => SavingThrowDecision | undefined) => void
}) {
  const VALID_ATTRIBUTE_IDS = ATTRIBUTE_IDS
    .filter(attributeID => {
      if (value.savingThrows[attributeID] !== "untrained") return false;
      if (choice.data.condition && !choice.data.condition(attributeID, value)) return false;
      return true;
    });
  useEffect(() => {
    if (decision === undefined && VALID_ATTRIBUTE_IDS.length === 1) {
      onChange(_ => ({type: "saving-throw", data: {attributeID: VALID_ATTRIBUTE_IDS[0]}}))
    }
  }, [decision === undefined]);
  if (choice.data.enabled && !choice.data.enabled(undefined, value)) return <></>;
  return <DropdownField
    disabled={VALID_ATTRIBUTE_IDS.length === 0 || VALID_ATTRIBUTE_IDS.length === 1 && VALID_ATTRIBUTE_IDS[0] === decision?.data.attributeID}
    label={choice.data.label ?? "Saving Throw"}
    value={decision?.data.attributeID}
    onChange={ev => onChange(_ => ({
      type: "saving-throw",
      data: {
        attributeID: ev.target.value,
      }
    }))}
    options={VALID_ATTRIBUTE_IDS.map(attributeID => ({
      value: attributeID,
      label: ATTRIBUTES[attributeID].label,
    }))}
  />
}
