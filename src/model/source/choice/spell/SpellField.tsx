import {DropdownField} from "@/lib/components/DropdownField";
import React, {useEffect} from "react";
import {REPOSITORY} from "@/model/source/index";
import {SpellChoice} from "@/model/source/choice/spell/SpellChoice";
import {SpellDecision} from "@/model/source/choice/spell/SpellDecision";
import {Character} from "@/model/character/Character";
import {SPELL_LEVELS} from "@/model/source/model/Spell";

export function SpellField({character, choice, value, onChange}: {character: Character, choice: SpellChoice, value: SpellDecision | undefined, onChange: (value: SpellDecision | undefined) => void}) {
  const VALID_SPELLS = Object.keys(REPOSITORY.SPELLS)
    .filter(spellID => !Object.values(character.spells).includes(spellID))
    .filter(spellID => choice.data.condition === undefined || choice.data.condition(spellID, character));

  useEffect(() => {
    if ((value === undefined || !VALID_SPELLS.includes(value.data.spellID)) && VALID_SPELLS.length === 1) {
      onChange({type: "spell", data: {spellID: VALID_SPELLS[0]}})
    }
  }, [value === undefined || !VALID_SPELLS.includes(value?.data.spellID)]);

  return <DropdownField
    label={choice.data.label ?? "Spell"} value={value?.data.spellID} onChange={ev => onChange({type: "spell", data: {spellID: ev.value}})}
    optionGroupLabel={"label"}
    optionGroupChildren={"items"}
    options={
      SPELL_LEVELS
        .filter(level => VALID_SPELLS.some(spellID => REPOSITORY.SPELLS[spellID].level === level))
      .map(level => ({
        label: level === "cantrip" ? "Cantrip Spells" : `Level ${level} Spells`,
        items: VALID_SPELLS.filter(spellID => REPOSITORY.SPELLS[spellID].level === level)
          .map((spellID) => ({
            value: spellID,
            label: REPOSITORY.SPELLS[spellID].label
          }))
      }))
    }
  />
}

