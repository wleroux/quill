import {ClassID, Level} from "@/model/source/model/Level";
import {is} from "@/model/source/condition/generic/IsCondition";
import {PHB_ROGUE_10, PHB_ROGUE_11, PHB_ROGUE_12, PHB_ROGUE_3, PHB_ROGUE_4, PHB_ROGUE_5, PHB_ROGUE_6, PHB_ROGUE_7, PHB_ROGUE_8, PHB_ROGUE_9} from "./RougeBase";
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
  ],
  longRest: [
    ...PHB_ROGUE_3.longRest
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
      condition: maxWizardLeveledSpell(1)
    }},
    {type: "spell", data: {
      choiceID: "rogue (arcane trickster)::spell-4",
      condition: maxWizardLeveledSpell(1)
    }}
  ],
  longRest: [
    ...PHB_ROGUE_4.longRest
  ]
} as const;
const PHB_ROGUE_ARCANE_TRICKSTER_5: Level = {
  replace: "Rogue (Arcane Trickster) 4",
  label: "Rogue (Arcane Trickster) 5",
  choices: [
    ...PHB_ROGUE_5.choices,
    {type: "spell-replacement", data: {
      choiceID: "rogue (arcane trickster)::cantrip-replacement-5",
      label: "Replace Cantrip",
      sourceID: rogueArcaneTricksterCantripSourceIDs,
      required: alwaysFalse(),
      condition: wizardCantripSpell
    }},
    {type: "spell-replacement", data: {
      choiceID: "rogue (arcane trickster)::spell-replacement-5",
      label: "Replace Spell",
      sourceID: rogueArcaneTricksterSpellSourceIDs,
      required: alwaysFalse(),
      condition: maxWizardLeveledSpell(1)
    }},
  ],
  longRest: [
    ...PHB_ROGUE_5.longRest
  ]
} as const;
const PHB_ROGUE_ARCANE_TRICKSTER_6: Level = {
  replace: "Rogue (Arcane Trickster) 5",
  label: "Rogue (Arcane Trickster) 6",
  choices: [
    ...PHB_ROGUE_6.choices,
    {type: "spell-replacement", data: {
      choiceID: "rogue (arcane trickster)::cantrip-replacement-6",
      label: "Replace Cantrip",
      sourceID: rogueArcaneTricksterCantripSourceIDs,
      required: alwaysFalse(),
      condition: wizardCantripSpell
    }},
    {type: "spell-replacement", data: {
      choiceID: "rogue (arcane trickster)::spell-replacement-6",
      label: "Replace Spell",
      sourceID: rogueArcaneTricksterSpellSourceIDs,
      required: alwaysFalse(),
      condition: maxWizardLeveledSpell(2)
    }},
  ],
  longRest: [
    ...PHB_ROGUE_6.longRest
  ]
} as const;
const PHB_ROGUE_ARCANE_TRICKSTER_7: Level = {
  replace: "Rogue (Arcane Trickster) 6",
  label: "Rogue (Arcane Trickster) 7",
  choices: [
    ...PHB_ROGUE_7.choices,
    {type: "spell-replacement", data: {
      choiceID: "rogue (arcane trickster)::cantrip-replacement-7",
      label: "Replace Cantrip",
      sourceID: rogueArcaneTricksterCantripSourceIDs,
      required: alwaysFalse(),
      condition: wizardCantripSpell
    }},
    {type: "spell-replacement", data: {
      choiceID: "rogue (arcane trickster)::spell-replacement-7",
      label: "Replace Spell",
      sourceID: rogueArcaneTricksterSpellSourceIDs,
      required: alwaysFalse(),
      condition: maxWizardLeveledSpell(2)
    }},
    {type: "spell", data: {
      choiceID: "rogue (arcane trickster)::spell-4",
      condition: maxWizardLeveledSpell(2)
    }}
  ],
  longRest: [
    ...PHB_ROGUE_7.longRest
  ]
} as const;
const PHB_ROGUE_ARCANE_TRICKSTER_8: Level = {
  replace: "Rogue (Arcane Trickster) 7",
  label: "Rogue (Arcane Trickster) 8",
  choices: [
    ...PHB_ROGUE_8.choices,
    {type: "spell-replacement", data: {
      choiceID: "rogue (arcane trickster)::cantrip-replacement-8",
      label: "Replace Cantrip",
      sourceID: rogueArcaneTricksterCantripSourceIDs,
      required: alwaysFalse(),
      condition: wizardCantripSpell
    }},
    {type: "spell-replacement", data: {
      choiceID: "rogue (arcane trickster)::spell-replacement-8",
      label: "Replace Spell",
      sourceID: rogueArcaneTricksterSpellSourceIDs,
      required: alwaysFalse(),
      condition: maxWizardLeveledSpell(2)
    }},
    {type: "spell", data: {
      choiceID: "rogue (arcane trickster)::spell-6",
      condition: maxWizardLeveledSpell(2)
    }}
  ],
  longRest: [
    ...PHB_ROGUE_8.longRest
  ]
} as const;
const PHB_ROGUE_ARCANE_TRICKSTER_9: Level = {
  replace: "Rogue (Arcane Trickster) 8",
  label: "Rogue (Arcane Trickster) 9",
  choices: [
    ...PHB_ROGUE_9.choices,
    {type: "spell-replacement", data: {
      choiceID: "rogue (arcane trickster)::cantrip-replacement-9",
      label: "Replace Cantrip",
      sourceID: rogueArcaneTricksterCantripSourceIDs,
      required: alwaysFalse(),
      condition: wizardCantripSpell
    }},
    {type: "spell-replacement", data: {
      choiceID: "rogue (arcane trickster)::spell-replacement-9",
      label: "Replace Spell",
      sourceID: rogueArcaneTricksterSpellSourceIDs,
      required: alwaysFalse(),
      condition: maxWizardLeveledSpell(2)
    }},
  ],
  longRest: [
    ...PHB_ROGUE_9.longRest
  ]
} as const;
const PHB_ROGUE_ARCANE_TRICKSTER_10: Level = {
  replace: "Rogue (Arcane Trickster) 9",
  label: "Rogue (Arcane Trickster) 10",
  choices: [
    ...PHB_ROGUE_10.choices,
    {type: "spell-replacement", data: {
      choiceID: "rogue (arcane trickster)::cantrip-replacement-10",
      label: "Replace Cantrip",
      sourceID: rogueArcaneTricksterCantripSourceIDs,
      required: alwaysFalse(),
      condition: wizardCantripSpell
    }},
    {type: "spell-replacement", data: {
      choiceID: "rogue (arcane trickster)::spell-replacement-10",
      label: "Replace Spell",
      sourceID: rogueArcaneTricksterSpellSourceIDs,
      required: alwaysFalse(),
      condition: maxWizardLeveledSpell(2)
    }},
    {type: "spell", data: {
      choiceID: "rogue (arcane trickster)::spell-7",
      condition: maxWizardLeveledSpell(2)
    }}
  ],
  longRest: [
    ...PHB_ROGUE_10.longRest
  ]
} as const;
const PHB_ROGUE_ARCANE_TRICKSTER_11: Level = {
  replace: "Rogue (Arcane Trickster) 10",
  label: "Rogue (Arcane Trickster) 11",
  choices: [
    ...PHB_ROGUE_11.choices,
    {type: "spell-replacement", data: {
      choiceID: "rogue (arcane trickster)::cantrip-replacement-11",
      label: "Replace Cantrip",
      sourceID: rogueArcaneTricksterCantripSourceIDs,
      required: alwaysFalse(),
      condition: wizardCantripSpell
    }},
    {type: "spell-replacement", data: {
      choiceID: "rogue (arcane trickster)::spell-replacement-11",
      label: "Replace Spell",
      sourceID: rogueArcaneTricksterSpellSourceIDs,
      required: alwaysFalse(),
      condition: maxWizardLeveledSpell(2)
    }},
    {type: "spell", data: {
      choiceID: "rogue (arcane trickster)::spell-8",
      condition: maxWizardLeveledSpell(2)
    }}
  ],
  longRest: [
    ...PHB_ROGUE_11.longRest
  ]
} as const;
const PHB_ROGUE_ARCANE_TRICKSTER_12: Level = {
  replace: "Rogue (Arcane Trickster) 11",
  label: "Rogue (Arcane Trickster) 12",
  choices: [
    ...PHB_ROGUE_12.choices,
    {type: "spell-replacement", data: {
      choiceID: "rogue (arcane trickster)::cantrip-replacement-12",
      label: "Replace Cantrip",
      sourceID: rogueArcaneTricksterCantripSourceIDs,
      required: alwaysFalse(),
      condition: wizardCantripSpell
    }},
    {type: "spell-replacement", data: {
      choiceID: "rogue (arcane trickster)::spell-replacement-12",
      label: "Replace Spell",
      sourceID: rogueArcaneTricksterSpellSourceIDs,
      required: alwaysFalse(),
      condition: maxWizardLeveledSpell(2)
    }},
  ],
  longRest: [
    ...PHB_ROGUE_12.longRest
  ]
} as const;


export default {
  [PHB_ROGUE_ARCANE_TRICKSTER_3.label]: PHB_ROGUE_ARCANE_TRICKSTER_3,
  [PHB_ROGUE_ARCANE_TRICKSTER_4.label]: PHB_ROGUE_ARCANE_TRICKSTER_4,
  [PHB_ROGUE_ARCANE_TRICKSTER_5.label]: PHB_ROGUE_ARCANE_TRICKSTER_5,
  [PHB_ROGUE_ARCANE_TRICKSTER_6.label]: PHB_ROGUE_ARCANE_TRICKSTER_6,
  [PHB_ROGUE_ARCANE_TRICKSTER_7.label]: PHB_ROGUE_ARCANE_TRICKSTER_7,
  [PHB_ROGUE_ARCANE_TRICKSTER_8.label]: PHB_ROGUE_ARCANE_TRICKSTER_8,
  [PHB_ROGUE_ARCANE_TRICKSTER_9.label]: PHB_ROGUE_ARCANE_TRICKSTER_9,
  [PHB_ROGUE_ARCANE_TRICKSTER_10.label]: PHB_ROGUE_ARCANE_TRICKSTER_10,
  [PHB_ROGUE_ARCANE_TRICKSTER_11.label]: PHB_ROGUE_ARCANE_TRICKSTER_11,
  [PHB_ROGUE_ARCANE_TRICKSTER_12.label]: PHB_ROGUE_ARCANE_TRICKSTER_12,
} as const satisfies {[levelID: ClassID]: Level};
