import {ClassID, Level} from "@/model/source/model/Level";
import {
  PHB_FIGHTER_10,
  PHB_FIGHTER_11,
  PHB_FIGHTER_12,
  PHB_FIGHTER_3,
  PHB_FIGHTER_4,
  PHB_FIGHTER_5,
  PHB_FIGHTER_6,
  PHB_FIGHTER_7,
  PHB_FIGHTER_8,
  PHB_FIGHTER_9
} from "./FighterBase";
import {maxWizardLeveledSpell, wizardCantripSpell} from "@/model/source/phb/level/wizard/wizardCantripSpell";
import {is} from "@/model/source/condition/generic/IsCondition";

const eldritchSpellSourceID = is(
  "fighter (eldritch knight)::spell-1",
  "fighter (eldritch knight)::spell-2",
  "fighter (eldritch knight)::spell-3",
  "fighter (eldritch knight)::spell-4",
  "fighter (eldritch knight)::spell-5",
  "fighter (eldritch knight)::spell-6",
  "fighter (eldritch knight)::spell-7",
  "fighter (eldritch knight)::spell-8",
);

const PHB_FIGHTER_ELDRITCH_KNIGHT_3: Level = {
  replace: "Fighter 2",
  label: "Fighter (Eldritch Knight) 3",
  choices: [
    ...PHB_FIGHTER_3.choices,
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "fighter (eldritch knight)::cantrip-1",
      condition: wizardCantripSpell
    }},
    {type: "spell", data: {
      label: "Cantrip",
      choiceID: "fighter (eldritch knight)::cantrip-2",
      condition: wizardCantripSpell
    }},
    {type: "spell", data: {
      choiceID: "fighter (eldritch knight)::spell-1",
      condition: maxWizardLeveledSpell(1)
    }},
    {type: "spell", data: {
      choiceID: "fighter (eldritch knight)::spell-2",
      condition: maxWizardLeveledSpell(1)
    }},
    {type: "spell", data: {
      choiceID: "fighter (eldritch knight)::spell-3",
      condition: maxWizardLeveledSpell(1)
    }}
  ],
  longRest: [
    ...PHB_FIGHTER_3.longRest
  ]
} as const;

const PHB_FIGHTER_ELDRITCH_KNIGHT_4: Level = {
  replace: "Fighter (Eldritch Knight) 3",
  label: "Fighter (Eldritch Knight) 4",
  choices: [
    ...PHB_FIGHTER_4.choices,
    {type: "spell-replacement", data: {
      sourceID: eldritchSpellSourceID,
      choiceID: "spell replacement",
      condition: maxWizardLeveledSpell(1)
    }},
    {type: "spell", data: {
      choiceID: "fighter (eldritch knight)::spell-4",
      condition: maxWizardLeveledSpell(1)
    }}
  ],
  longRest: [
    ...PHB_FIGHTER_4.longRest
  ]
} as const;
const PHB_FIGHTER_ELDRITCH_KNIGHT_5: Level = {
  replace: "Fighter (Eldritch Knight) 4",
  label: "Fighter (Eldritch Knight) 5",
  choices: [
    ...PHB_FIGHTER_5.choices,
    {type: "spell-replacement", data: {
      sourceID: eldritchSpellSourceID,
      choiceID: "spell replacement",
      condition: maxWizardLeveledSpell(1)
    }},
  ],
  longRest: [
    ...PHB_FIGHTER_5.longRest
  ]
} as const;
const PHB_FIGHTER_ELDRITCH_KNIGHT_6: Level = {
  replace: "Fighter (Eldritch Knight) 5",
  label: "Fighter (Eldritch Knight) 6",
  choices: [
    ...PHB_FIGHTER_6.choices,
    {type: "spell-replacement", data: {
      sourceID: eldritchSpellSourceID,
      choiceID: "spell replacement",
      condition: maxWizardLeveledSpell(1)
    }},
  ],
  longRest: [
    ...PHB_FIGHTER_6.longRest
  ]
} as const;
const PHB_FIGHTER_ELDRITCH_KNIGHT_7: Level = {
  replace: "Fighter (Eldritch Knight) 6",
  label: "Fighter (Eldritch Knight) 7",
  choices: [
    ...PHB_FIGHTER_7.choices,
    {type: "spell-replacement", data: {
      sourceID: eldritchSpellSourceID,
      choiceID: "spell replacement",
      condition: maxWizardLeveledSpell(2)
    }},
    {type: "spell", data: {
      choiceID: "fighter (eldritch knight)::spell-5",
      condition: maxWizardLeveledSpell(2)
    }}
  ],
  longRest: [
    ...PHB_FIGHTER_7.longRest
  ]
} as const;
const PHB_FIGHTER_ELDRITCH_KNIGHT_8: Level = {
  replace: "Fighter (Eldritch Knight) 7",
  label: "Fighter (Eldritch Knight) 8",
  choices: [
    ...PHB_FIGHTER_8.choices,
    {type: "spell-replacement", data: {
      sourceID: eldritchSpellSourceID,
      choiceID: "spell replacement",
      condition: maxWizardLeveledSpell(2)
    }},
    {type: "spell", data: {
      choiceID: "fighter (eldritch knight)::spell-6",
      condition: maxWizardLeveledSpell(2)
    }}
  ],
  longRest: [
    ...PHB_FIGHTER_8.longRest
  ]
} as const;
const PHB_FIGHTER_ELDRITCH_KNIGHT_9: Level = {
  replace: "Fighter (Eldritch Knight) 8",
  label: "Fighter (Eldritch Knight) 9",
  choices: [
    ...PHB_FIGHTER_9.choices,
    {type: "spell-replacement", data: {
      sourceID: eldritchSpellSourceID,
      choiceID: "spell replacement",
      condition: maxWizardLeveledSpell(2)
    }}
  ],
  longRest: [
    ...PHB_FIGHTER_9.longRest
  ]
} as const;
const PHB_FIGHTER_ELDRITCH_KNIGHT_10: Level = {
  replace: "Fighter (Eldritch Knight) 9",
  label: "Fighter (Eldritch Knight) 10",
  choices: [
    ...PHB_FIGHTER_10.choices,
    {type: "spell-replacement", data: {
      sourceID: eldritchSpellSourceID,
      choiceID: "spell replacement",
      condition: maxWizardLeveledSpell(2)
    }},
    {type: "spell", data: {
      choiceID: "fighter (eldritch knight)::spell-7",
      condition: maxWizardLeveledSpell(2)
    }}
  ],
  longRest: [
    ...PHB_FIGHTER_10.longRest
  ]
} as const;
const PHB_FIGHTER_ELDRITCH_KNIGHT_11: Level = {
  replace: "Fighter (Eldritch Knight) 10",
  label: "Fighter (Eldritch Knight) 11",
  choices: [
    ...PHB_FIGHTER_11.choices,
    {type: "spell-replacement", data: {
      sourceID: eldritchSpellSourceID,
      choiceID: "spell replacement",
      condition: maxWizardLeveledSpell(2)
    }},
    {type: "spell", data: {
      choiceID: "fighter (eldritch knight)::spell-8",
      condition: maxWizardLeveledSpell(2)
    }}
  ],
  longRest: [
    ...PHB_FIGHTER_11.longRest
  ]
} as const;
const PHB_FIGHTER_ELDRITCH_KNIGHT_12: Level = {
  replace: "Fighter (Eldritch Knight) 11",
  label: "Fighter (Eldritch Knight) 12",
  choices: [
    ...PHB_FIGHTER_12.choices,
    {type: "spell-replacement", data: {
      sourceID: eldritchSpellSourceID,
      choiceID: "spell replacement",
      condition: maxWizardLeveledSpell(2)
    }}
  ],
  longRest: [
    ...PHB_FIGHTER_12.longRest
  ]
} as const;

export default {
  [PHB_FIGHTER_ELDRITCH_KNIGHT_3.label]: PHB_FIGHTER_ELDRITCH_KNIGHT_3,
  [PHB_FIGHTER_ELDRITCH_KNIGHT_4.label]: PHB_FIGHTER_ELDRITCH_KNIGHT_4,
  [PHB_FIGHTER_ELDRITCH_KNIGHT_5.label]: PHB_FIGHTER_ELDRITCH_KNIGHT_5,
  [PHB_FIGHTER_ELDRITCH_KNIGHT_6.label]: PHB_FIGHTER_ELDRITCH_KNIGHT_6,
  [PHB_FIGHTER_ELDRITCH_KNIGHT_7.label]: PHB_FIGHTER_ELDRITCH_KNIGHT_7,
  [PHB_FIGHTER_ELDRITCH_KNIGHT_8.label]: PHB_FIGHTER_ELDRITCH_KNIGHT_8,
  [PHB_FIGHTER_ELDRITCH_KNIGHT_9.label]: PHB_FIGHTER_ELDRITCH_KNIGHT_9,
  [PHB_FIGHTER_ELDRITCH_KNIGHT_10.label]: PHB_FIGHTER_ELDRITCH_KNIGHT_10,
  [PHB_FIGHTER_ELDRITCH_KNIGHT_11.label]: PHB_FIGHTER_ELDRITCH_KNIGHT_11,
  [PHB_FIGHTER_ELDRITCH_KNIGHT_12.label]: PHB_FIGHTER_ELDRITCH_KNIGHT_12,
} as const satisfies {[levelID: ClassID]: Level};
