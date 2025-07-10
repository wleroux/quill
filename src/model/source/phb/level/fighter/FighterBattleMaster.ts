import {ClassID, Level} from "@/model/source/model/Level";
import {fighterSkills, PHB_FIGHTER_3, PHB_FIGHTER_4} from "./FighterBase";
import {toolType} from "@/model/source/condition/tool/ToolTypeCondition";

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

export default {
  [PHB_FIGHTER_BATTLE_MASTER_3.label]: PHB_FIGHTER_BATTLE_MASTER_3,
  [PHB_FIGHTER_BATTLE_MASTER_4.label]: PHB_FIGHTER_BATTLE_MASTER_4
} as const satisfies {[levelID: ClassID]: Level};
