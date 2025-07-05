import {ClassID, Level} from "@/model/source/model/Level";
import {is} from "@/model/source/condition/generic/IsCondition";
import {PHB_ROGUE_3, PHB_ROGUE_4} from "./RougeBase";
import {maxWizardLeveledSpell, wizardCantripSpell} from "@/model/source/phb/level/wizard/wizardCantripSpell";
import {alwaysFalse} from "@/model/source/condition/generic/FalseCondition";

const rogueArcaneTricksterCantripSourceIDs = is(
  "rogue (arcane trickster)::cantrip-2",
  "rogue (arcane trickster)::cantrip-3"
);
const rogueArcaneTricksterSpellSourceIDs = is(
  "rogue (arcane trickster)::spell-1",
  "rogue (arcane trickster)::spell-2",
  "rogue (arcane trickster)::spell-3",
  "rogue (arcane trickster)::spell-4",
  "rogue (arcane trickster)::spell-5",
  "rogue (arcane trickster)::spell-6",
  "rogue (arcane trickster)::spell-7",
  "rogue (arcane trickster)::spell-8",
  "rogue (arcane trickster)::spell-9",
  "rogue (arcane trickster)::spell-10",
  "rogue (arcane trickster)::spell-11",
  "rogue (arcane trickster)::spell-12",
  "rogue (arcane trickster)::spell-13"
);

const PHB_ROGUE_ARCANE_TRICKSTER_3: Level = {
  replace: "Rogue 2",
  label: "Rogue (Arcane Trickster) 3",
  choices: [
    ...PHB_ROGUE_3.choices,
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "rogue (arcane trickster)::cantrip-1",
      condition: is("Mage Hand")
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "rogue (arcane trickster)::cantrip-2",
      condition: wizardCantripSpell
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "rogue (arcane trickster)::cantrip-3",
        condition: wizardCantripSpell
    }},
    {type: "spell", data: {
      choiceID: "rogue (arcane trickster)::spell-1",
      condition: maxWizardLeveledSpell(1)
    }},
    {type: "spell", data: {
      choiceID: "rogue (arcane trickster)::spell-2",
      condition: maxWizardLeveledSpell(1)
    }},
    {type: "spell", data: {
      choiceID: "rogue (arcane trickster)::spell-3",
      condition: maxWizardLeveledSpell(1)
    }}
  ]
} as const;
const PHB_ROGUE_ARCANE_TRICKSTER_4: Level = {
  replace: "Rogue (Arcane Trickster) 3",
  label: "Rogue (Arcane Trickster) 4",
  choices: [
    ...PHB_ROGUE_4.choices,
    {type: "spell-replacement", data: {
      choiceID: "rogue (arcane trickster)::cantrip-replacement-4",
      label: "Replace Cantrip",
      sourceID: rogueArcaneTricksterCantripSourceIDs,
      required: alwaysFalse(),
      condition: wizardCantripSpell
    }},
    {type: "spell-replacement", data: {
      choiceID: "rogue (arcane trickster)::spell-replacement-4",
      label: "Replace Spell",
      sourceID: rogueArcaneTricksterSpellSourceIDs,
      required: alwaysFalse(),
      condition: wizardCantripSpell
    }},
    {type: "spell", data: {
      choiceID: "rogue (arcane trickster)::spell-2",
      condition: maxWizardLeveledSpell(1)
    }}
  ]
} as const;

export default {
  [PHB_ROGUE_ARCANE_TRICKSTER_3.label]: PHB_ROGUE_ARCANE_TRICKSTER_3,
  [PHB_ROGUE_ARCANE_TRICKSTER_4.label]: PHB_ROGUE_ARCANE_TRICKSTER_4
} as const satisfies {[levelID: ClassID]: Level};
