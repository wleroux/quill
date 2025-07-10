import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_FIGHTER_3, PHB_FIGHTER_4} from "./FighterBase";

const PHB_FIGHTER_PSI_WARRIOR_3: Level = {
  replace: "Fighter 2",
  label: "Fighter (Psi Warrior) 3",
  choices: [
    ...PHB_FIGHTER_3.choices
  ],
  longRest: [
    ...PHB_FIGHTER_3.longRest
  ]
} as const;

const PHB_FIGHTER_PSI_WARRIOR_4: Level = {
  replace: "Fighter (Psi Warrior) 3",
  label: "Fighter (Psi Warrior) 4",
  choices: [
    ...PHB_FIGHTER_4.choices
  ],
  longRest: [
    ...PHB_FIGHTER_4.longRest
  ]
} as const;

export default {
  [PHB_FIGHTER_PSI_WARRIOR_3.label]: PHB_FIGHTER_PSI_WARRIOR_3,
  [PHB_FIGHTER_PSI_WARRIOR_4.label]: PHB_FIGHTER_PSI_WARRIOR_4
} as const satisfies {[levelID: ClassID]: Level};
