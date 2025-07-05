import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_ROGUE_3, PHB_ROGUE_4} from "./RougeBase";

const PHB_ROGUE_THIEF_3: Level = {
  replace: "Rogue 2",
  label: "Rogue (Thief) 3",
  choices: [
    ...PHB_ROGUE_3.choices
  ]
} as const;
const PHB_ROGUE_THIEF_4: Level = {
  replace: "Rogue (Thief) 3",
  label: "Rogue (Thief) 4",
  choices: [
    ...PHB_ROGUE_4.choices
  ]
} as const;

export default {
  [PHB_ROGUE_THIEF_3.label]: PHB_ROGUE_THIEF_3,
  [PHB_ROGUE_THIEF_4.label]: PHB_ROGUE_THIEF_4
} as const satisfies {[levelID: ClassID]: Level};
