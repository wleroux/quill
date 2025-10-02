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
const PHB_FIGHTER_PSI_WARRIOR_5: Level = {
  replace: "Fighter (Psi Warrior) 4",
  label: "Fighter (Psi Warrior) 5",
  choices: [
    ...PHB_FIGHTER_5.choices
  ],
  longRest: [
    ...PHB_FIGHTER_5.longRest
  ]
} as const;
const PHB_FIGHTER_PSI_WARRIOR_6: Level = {
  replace: "Fighter (Psi Warrior) 5",
  label: "Fighter (Psi Warrior) 6",
  choices: [
    ...PHB_FIGHTER_6.choices
  ],
  longRest: [
    ...PHB_FIGHTER_6.longRest
  ]
} as const;
const PHB_FIGHTER_PSI_WARRIOR_7: Level = {
  replace: "Fighter (Psi Warrior) 6",
  label: "Fighter (Psi Warrior) 7",
  choices: [
    ...PHB_FIGHTER_7.choices
  ],
  longRest: [
    ...PHB_FIGHTER_7.longRest
  ]
} as const;
const PHB_FIGHTER_PSI_WARRIOR_8: Level = {
  replace: "Fighter (Psi Warrior) 7",
  label: "Fighter (Psi Warrior) 8",
  choices: [
    ...PHB_FIGHTER_8.choices
  ],
  longRest: [
    ...PHB_FIGHTER_8.longRest
  ]
} as const;
const PHB_FIGHTER_PSI_WARRIOR_9: Level = {
  replace: "Fighter (Psi Warrior) 8",
  label: "Fighter (Psi Warrior) 9",
  choices: [
    ...PHB_FIGHTER_9.choices
  ],
  longRest: [
    ...PHB_FIGHTER_9.longRest
  ]
} as const;
const PHB_FIGHTER_PSI_WARRIOR_10: Level = {
  replace: "Fighter (Psi Warrior) 9",
  label: "Fighter (Psi Warrior) 10",
  choices: [
    ...PHB_FIGHTER_10.choices
  ],
  longRest: [
    ...PHB_FIGHTER_10.longRest
  ]
} as const;
const PHB_FIGHTER_PSI_WARRIOR_11: Level = {
  replace: "Fighter (Psi Warrior) 10",
  label: "Fighter (Psi Warrior) 11",
  choices: [
    ...PHB_FIGHTER_11.choices
  ],
  longRest: [
    ...PHB_FIGHTER_11.longRest
  ]
} as const;
const PHB_FIGHTER_PSI_WARRIOR_12: Level = {
  replace: "Fighter (Psi Warrior) 11",
  label: "Fighter (Psi Warrior) 12",
  choices: [
    ...PHB_FIGHTER_12.choices
  ],
  longRest: [
    ...PHB_FIGHTER_12.longRest
  ]
} as const;

export default {
  [PHB_FIGHTER_PSI_WARRIOR_3.label]: PHB_FIGHTER_PSI_WARRIOR_3,
  [PHB_FIGHTER_PSI_WARRIOR_4.label]: PHB_FIGHTER_PSI_WARRIOR_4,
  [PHB_FIGHTER_PSI_WARRIOR_5.label]: PHB_FIGHTER_PSI_WARRIOR_5,
  [PHB_FIGHTER_PSI_WARRIOR_6.label]: PHB_FIGHTER_PSI_WARRIOR_6,
  [PHB_FIGHTER_PSI_WARRIOR_7.label]: PHB_FIGHTER_PSI_WARRIOR_7,
  [PHB_FIGHTER_PSI_WARRIOR_8.label]: PHB_FIGHTER_PSI_WARRIOR_8,
  [PHB_FIGHTER_PSI_WARRIOR_9.label]: PHB_FIGHTER_PSI_WARRIOR_9,
  [PHB_FIGHTER_PSI_WARRIOR_10.label]: PHB_FIGHTER_PSI_WARRIOR_10,
  [PHB_FIGHTER_PSI_WARRIOR_11.label]: PHB_FIGHTER_PSI_WARRIOR_11,
  [PHB_FIGHTER_PSI_WARRIOR_12.label]: PHB_FIGHTER_PSI_WARRIOR_12,
} as const satisfies {[levelID: ClassID]: Level};
