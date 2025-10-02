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
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";

const PHB_FIGHTER_CHAMPION_3: Level = {
  replace: "Fighter 2",
  label: "Fighter (Champion) 3",
  choices: [
    ...PHB_FIGHTER_3.choices
  ],
  longRest: [
    ...PHB_FIGHTER_3.longRest
  ]
} as const;

const PHB_FIGHTER_CHAMPION_4: Level = {
  replace: "Fighter (Champion) 3",
  label: "Fighter (Champion) 4",
  choices: [
    ...PHB_FIGHTER_4.choices
  ],
  longRest: [
    ...PHB_FIGHTER_4.longRest
  ]
} as const;
const PHB_FIGHTER_CHAMPION_5: Level = {
  replace: "Fighter (Champion) 4",
  label: "Fighter (Champion) 5",
  choices: [
    ...PHB_FIGHTER_5.choices
  ],
  longRest: [
    ...PHB_FIGHTER_5.longRest
  ]
} as const;
const PHB_FIGHTER_CHAMPION_6: Level = {
  replace: "Fighter (Champion) 5",
  label: "Fighter (Champion) 6",
  choices: [
    ...PHB_FIGHTER_6.choices
  ],
  longRest: [
    ...PHB_FIGHTER_6.longRest
  ]
} as const;
const PHB_FIGHTER_CHAMPION_7: Level = {
  replace: "Fighter (Champion) 6",
  label: "Fighter (Champion) 7",
  choices: [
    ...PHB_FIGHTER_7.choices,
    {type: "feat", data: {
      choiceID: "fighter (champion)::fighting-style::feat-1",
      label: "Fighting Style",
      condition: featType("fighting style")
    }}
  ],
  longRest: [
    ...PHB_FIGHTER_7.longRest
  ]
} as const;
const PHB_FIGHTER_CHAMPION_8: Level = {
  replace: "Fighter (Champion) 7",
  label: "Fighter (Champion) 8",
  choices: [
    ...PHB_FIGHTER_8.choices
  ],
  longRest: [
    ...PHB_FIGHTER_8.longRest
  ]
} as const;
const PHB_FIGHTER_CHAMPION_9: Level = {
  replace: "Fighter (Champion) 8",
  label: "Fighter (Champion) 9",
  choices: [
    ...PHB_FIGHTER_9.choices
  ],
  longRest: [
    ...PHB_FIGHTER_9.longRest
  ]
} as const;
const PHB_FIGHTER_CHAMPION_10: Level = {
  replace: "Fighter (Champion) 9",
  label: "Fighter (Champion) 10",
  choices: [
    ...PHB_FIGHTER_10.choices
  ],
  longRest: [
    ...PHB_FIGHTER_10.longRest
  ]
} as const;
const PHB_FIGHTER_CHAMPION_11: Level = {
  replace: "Fighter (Champion) 10",
  label: "Fighter (Champion) 11",
  choices: [
    ...PHB_FIGHTER_11.choices
  ],
  longRest: [
    ...PHB_FIGHTER_11.longRest
  ]
} as const;
const PHB_FIGHTER_CHAMPION_12: Level = {
  replace: "Fighter (Champion) 11",
  label: "Fighter (Champion) 12",
  choices: [
    ...PHB_FIGHTER_12.choices
  ],
  longRest: [
    ...PHB_FIGHTER_12.longRest
  ]
} as const;

export default {
  [PHB_FIGHTER_CHAMPION_3.label]: PHB_FIGHTER_CHAMPION_3,
  [PHB_FIGHTER_CHAMPION_4.label]: PHB_FIGHTER_CHAMPION_4,
  [PHB_FIGHTER_CHAMPION_5.label]: PHB_FIGHTER_CHAMPION_5,
  [PHB_FIGHTER_CHAMPION_6.label]: PHB_FIGHTER_CHAMPION_6,
  [PHB_FIGHTER_CHAMPION_7.label]: PHB_FIGHTER_CHAMPION_7,
  [PHB_FIGHTER_CHAMPION_8.label]: PHB_FIGHTER_CHAMPION_8,
  [PHB_FIGHTER_CHAMPION_9.label]: PHB_FIGHTER_CHAMPION_9,
  [PHB_FIGHTER_CHAMPION_10.label]: PHB_FIGHTER_CHAMPION_10,
  [PHB_FIGHTER_CHAMPION_11.label]: PHB_FIGHTER_CHAMPION_11,
  [PHB_FIGHTER_CHAMPION_12.label]: PHB_FIGHTER_CHAMPION_12,
} as const satisfies {[levelID: ClassID]: Level};
