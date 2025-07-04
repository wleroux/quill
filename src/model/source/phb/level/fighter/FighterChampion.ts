import {ClassID, Level} from "@/model/source/model/Level";
import {fighterSkills, PHB_FIGHTER_3, PHB_FIGHTER_4} from "./FighterBase";
import {alwaysTrue} from "@/model/source/condition/generic/TrueCondition";
import {toolType} from "@/model/source/condition/tool/ToolTypeCondition";

const PHB_FIGHTER_CHAMPION_3: Level = {
  replace: "Fighter 2",
  label: "Fighter (Champion) 3",
  choices: [
    ...PHB_FIGHTER_3.choices
  ]
} as const;

const PHB_FIGHTER_CHAMPION_4: Level = {
  replace: "Fighter (Champion) 3",
  label: "Fighter (Champion) 4",
  choices: [
    ...PHB_FIGHTER_4.choices
  ]
} as const;

export default {
  [PHB_FIGHTER_CHAMPION_3.label]: PHB_FIGHTER_CHAMPION_3,
  [PHB_FIGHTER_CHAMPION_4.label]: PHB_FIGHTER_CHAMPION_4
} as const satisfies {[levelID: ClassID]: Level};
