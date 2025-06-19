import {FieldRow} from "@/lib/components/FieldRow";
import {CheckboxField} from "@/lib/components/CheckboxField";
import React from "react";
import {Character} from "@/model/player/character/Character";
import {SpellReplacementChoice} from "@/model/source/choice/spell-replacement/SpellReplacementChoice";
import {SpellReplacementDecision} from "@/model/source/choice/spell-replacement/SpellReplacementDecision";
import {REPOSITORY} from "@/model/source/index";
import {FieldSet} from "@/lib/components/FieldSet";
import {DropdownField} from "@/lib/components/DropdownField";
import {SpellID} from "@/model/source/model/Spell";

export function SpellReplacementFields({value, choice, decision, onChange}: {
  value: Character,
  choice: SpellReplacementChoice,
  decision?: SpellReplacementDecision,
  onChange: (fn: (value?: SpellReplacementDecision) => SpellReplacementDecision | undefined) => void;
}) {
  const required = choice.data.required === undefined || choice.data.required(undefined, value);
  const VALID_SPELLS = Object.keys(REPOSITORY.SPELLS)
    .filter(spellID => {
      if (Object.values(value.spells).includes(spellID)) return false;
      if (choice.data.condition && !choice.data.condition(spellID, value)) return false;

      const spell = REPOSITORY.SPELLS[spellID];
      if (spell === undefined) return false;
      if (spell.prerequisite !== undefined && spell.prerequisite(undefined, value)) return false;
      return true;
    });
  const VALID_SOURCES = Object.keys(value.spells)
    .filter(sourceID => {
      if (choice.data.sourceID && !choice.data.sourceID(sourceID, value)) return false;
      if (value.spells[sourceID] === undefined) return false;
      return true;
    });

  return <FieldSet inline>
    {!required && <FieldSet inline>
      <CheckboxField label={choice.data.label ?? "Replace Spell"} checked={decision !== undefined} onChange={(checked) => {
        onChange(_ => checked ? ({type: "spell-replacement", data: {sourceID: "", spellID: "" as SpellID}}) : undefined)
      }} />
    </FieldSet>}
    {(required || decision !== undefined) && <FieldSet inline>
      <DropdownField label="Spell" value={decision?.data.sourceID} options={VALID_SOURCES.map(sourceID => ({
        value: sourceID,
        label: REPOSITORY.SPELLS[value.spells[sourceID]].label
      }))} onChange={(ev) => onChange(prev => {
        if (prev === undefined) return ({type: "spell-replacement", data: {sourceID: ev.target.value, spellID: ""}});
        return ({
          ...prev,
          data: {
            ...prev.data,
            sourceID: ev.target.value
          }
        })
      })} />
      <DropdownField label="Replacement Spell" value={decision?.data.spellID} options={VALID_SPELLS.map(spellID => ({
        value: spellID,
        label: REPOSITORY.SPELLS[spellID].label
      }))} onChange={(ev) => onChange(prev => {
        if (prev === undefined) return ({type: "spell-replacement", data: {sourceID: "", spellID: ev.target.value as SpellID}});
        return ({
          ...prev,
          data: {
            ...prev.data,
            spellID: ev.target.value as SpellID
          }
        })
      })} />
    </FieldSet>}
  </FieldSet>
}
