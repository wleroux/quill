import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_FIGHTER_3, PHB_FIGHTER_4} from "./FighterBase";
import {maxWizardLeveledSpell, wizardCantripSpell} from "@/model/source/phb/level/wizard/wizardCantripSpell";

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
  ]
} as const;

const PHB_FIGHTER_ELDRITCH_KNIGHT_4: Level = {
  replace: "Fighter (Eldritch Knight) 3",
  label: "Fighter (Eldritch Knight) 4",
  choices: [
    ...PHB_FIGHTER_4.choices
  ]
} as const;

export default {
  [PHB_FIGHTER_ELDRITCH_KNIGHT_3.label]: PHB_FIGHTER_ELDRITCH_KNIGHT_3,
  [PHB_FIGHTER_ELDRITCH_KNIGHT_4.label]: PHB_FIGHTER_ELDRITCH_KNIGHT_4
} as const satisfies {[levelID: ClassID]: Level};
