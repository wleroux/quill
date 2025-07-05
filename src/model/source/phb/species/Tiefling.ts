import {Species} from "@/model/source/model/Species";
import {is} from "../../condition/generic/IsCondition";
import {SpellID} from "@/model/source/model/Spell";
import {selectedChoice} from "@/model/source/choice/Choice";

export const PHB_SPECIES_TIEFLING: Species = {
  label: "Tiefling",
  choices: [
    {type: "simple", data: {
      label: "Size",
      choiceID: "size",
      options: [
        {optionID: "small", label: "Small"},
        {optionID: "medium", label: "Medium"},
      ]
    }},
    {type: "simple", data: {
      label: "Fiendish Legacy",
      choiceID: "fiendish legacy",
      options: [
        {optionID: "abyssal", label: "Abyssal"},
        {optionID: "chthonic", label: "Chthonic"},
        {optionID: "infernal", label: "Infernal"},
      ]
    }},
    {type: "spell", data: {
      enabled: selectedChoice("fiendish legacy", "abyssal"),
      label: "Cantrip",
      choiceID: "tiefling::fiendish legacy::cantrip-1",
      condition: is<SpellID>("Poison Spray")
    }},
    {type: "spell", data: {
      enabled: selectedChoice("fiendish legacy", "abyssal"),
      label: "Spell",
      choiceID: "tiefling::fiendish legacy::spell-1",
      condition: is<SpellID>("Ray of Sickness")
    }},
    {type: "spell", data: {
      enabled: selectedChoice("fiendish legacy", "abyssal"),
      label: "Spell",
      choiceID: "tiefling::fiendish legacy::spell-2",
      condition: is<SpellID>("Hold Person")
    }},
    {type: "spell", data: {
      enabled: selectedChoice("fiendish legacy", "chthonic"),
      label: "Cantrip",
      choiceID: "tiefling::fiendish legacy::cantrip-1",
      condition: is<SpellID>("Chill Touch")
    }},
    {type: "spell", data: {
      enabled: selectedChoice("fiendish legacy", "chthonic"),
      label: "Spell",
      choiceID: "tiefling::fiendish legacy::spell-1",
      condition: is<SpellID>("False Life")
    }},
    {type: "spell", data: {
      enabled: selectedChoice("fiendish legacy", "chthonic"),
      label: "Spell",
      choiceID: "tiefling::fiendish legacy::spell-2",
      condition: is<SpellID>("Ray of Enfeeblement")
    }},

    {type: "spell", data: {
      enabled: selectedChoice("fiendish legacy", "infernal"),
      label: "Cantrip",
      choiceID: "tiefling::fiendish legacy::cantrip-1",
      condition: is<SpellID>("Fire Bolt")
    }},
    {type: "spell", data: {
      enabled: selectedChoice("fiendish legacy", "infernal"),
      label: "Spell",
      choiceID: "tiefling::fiendish legacy::spell-1",
      condition: is<SpellID>("Hellish Rebuke")
    }},
    {type: "spell", data: {
      enabled: selectedChoice("fiendish legacy", "infernal"),
      label: "Spell",
      choiceID: "tiefling::fiendish legacy::spell-2",
      condition: is<SpellID>("Darkness")
    }},
    {type: "spell", data: {
      label: "Otherworldly Presence",
      choiceID: "tiefling::cantrip-1",
      condition: is<SpellID>("Thaumaturgy")
    }}
  ]
} as const;
