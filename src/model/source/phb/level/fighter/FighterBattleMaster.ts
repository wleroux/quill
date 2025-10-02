import {ClassID, Level} from "@/model/source/model/Level";
import {
  fighterSkills,
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
import {toolType} from "@/model/source/condition/tool/ToolTypeCondition";
import {featType} from "@/model/source/condition/feat/FeatTypeCondition";

const PHB_FIGHTER_BATTLE_MASTER_3: Level = {
  replace: "Fighter 2",
  label: "Fighter (Battle Master) 3",
  choices: [
    ...PHB_FIGHTER_3.choices,
    {type: "maneuver", data: {
      choiceID: "fighter (battle master)::maneuver-1"
    }},
    {type: "maneuver", data: {
      choiceID: "fighter (battle master)::maneuver-2"
    }},
    {type: "maneuver", data: {
      choiceID: "fighter (battle master)::maneuver-3"
    }},
    {type: "skill", data: {
      choiceID: "fighter (battle master)::skill-1",
      condition: fighterSkills
    }},
    {type: "tool", data: {
      choiceID: "fighter (battle master)::tool-1",
      condition: toolType("artisan tool")
    }}
  ],
  longRest: [
    ...PHB_FIGHTER_3.longRest
  ]
} as const;

const PHB_FIGHTER_BATTLE_MASTER_4: Level = {
  replace: "Fighter (Battle Master) 3",
  label: "Fighter (Battle Master) 4",
  choices: [
    ...PHB_FIGHTER_4.choices
  ],
  longRest: [
    ...PHB_FIGHTER_4.longRest
  ]
} as const;
const PHB_FIGHTER_BATTLE_MASTER_5: Level = {
  replace: "Fighter (Battle Master) 4",
  label: "Fighter (Battle Master) 5",
  choices: [
    ...PHB_FIGHTER_5.choices
  ],
  longRest: [
    ...PHB_FIGHTER_5.longRest
  ]
} as const;
const PHB_FIGHTER_BATTLE_MASTER_6: Level = {
  replace: "Fighter (Battle Master) 5",
  label: "Fighter (Battle Master) 6",
  choices: [
    ...PHB_FIGHTER_6.choices
  ],
  longRest: [
    ...PHB_FIGHTER_6.longRest
  ]
} as const;
const PHB_FIGHTER_BATTLE_MASTER_7: Level = {
  replace: "Fighter (Battle Master) 6",
  label: "Fighter (Battle Master) 7",
  choices: [
    ...PHB_FIGHTER_7.choices
  ],
  longRest: [
    ...PHB_FIGHTER_7.longRest
  ]
} as const;
const PHB_FIGHTER_BATTLE_MASTER_8: Level = {
  replace: "Fighter (Battle Master) 7",
  label: "Fighter (Battle Master) 8",
  choices: [
    ...PHB_FIGHTER_8.choices
  ],
  longRest: [
    ...PHB_FIGHTER_8.longRest
  ]
} as const;
const PHB_FIGHTER_BATTLE_MASTER_9: Level = {
  replace: "Fighter (Battle Master) 8",
  label: "Fighter (Battle Master) 9",
  choices: [
    ...PHB_FIGHTER_9.choices
  ],
  longRest: [
    ...PHB_FIGHTER_9.longRest
  ]
} as const;
const PHB_FIGHTER_BATTLE_MASTER_10: Level = {
  replace: "Fighter (Battle Master) 9",
  label: "Fighter (Battle Master) 10",
  choices: [
    ...PHB_FIGHTER_10.choices
  ],
  longRest: [
    ...PHB_FIGHTER_10.longRest
  ]
} as const;
const PHB_FIGHTER_BATTLE_MASTER_11: Level = {
  replace: "Fighter (Battle Master) 10",
  label: "Fighter (Battle Master) 11",
  choices: [
    ...PHB_FIGHTER_11.choices
  ],
  longRest: [
    ...PHB_FIGHTER_11.longRest
  ]
} as const;
const PHB_FIGHTER_BATTLE_MASTER_12: Level = {
  replace: "Fighter (Battle Master) 11",
  label: "Fighter (Battle Master) 12",
  choices: [
    ...PHB_FIGHTER_12.choices
  ],
  longRest: [
    ...PHB_FIGHTER_12.longRest
  ]
} as const;

export default {
  [PHB_FIGHTER_BATTLE_MASTER_3.label]: PHB_FIGHTER_BATTLE_MASTER_3,
  [PHB_FIGHTER_BATTLE_MASTER_4.label]: PHB_FIGHTER_BATTLE_MASTER_4,
  [PHB_FIGHTER_BATTLE_MASTER_5.label]: PHB_FIGHTER_BATTLE_MASTER_5,
  [PHB_FIGHTER_BATTLE_MASTER_6.label]: PHB_FIGHTER_BATTLE_MASTER_6,
  [PHB_FIGHTER_BATTLE_MASTER_7.label]: PHB_FIGHTER_BATTLE_MASTER_7,
  [PHB_FIGHTER_BATTLE_MASTER_8.label]: PHB_FIGHTER_BATTLE_MASTER_8,
  [PHB_FIGHTER_BATTLE_MASTER_9.label]: PHB_FIGHTER_BATTLE_MASTER_9,
  [PHB_FIGHTER_BATTLE_MASTER_10.label]: PHB_FIGHTER_BATTLE_MASTER_10,
  [PHB_FIGHTER_BATTLE_MASTER_11.label]: PHB_FIGHTER_BATTLE_MASTER_11,
  [PHB_FIGHTER_BATTLE_MASTER_12.label]: PHB_FIGHTER_BATTLE_MASTER_12,
} as const satisfies {[levelID: ClassID]: Level};
