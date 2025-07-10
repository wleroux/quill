import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_ROGUE_3, PHB_ROGUE_4} from "./RougeBase";

const PHB_ROGUE_SOULKNIFE_3: Level = {
  replace: "Rogue 2",
  label: "Rogue (Soulknife) 3",
  choices: [
    ...PHB_ROGUE_3.choices
  ],
  longRest: [
    ...PHB_ROGUE_3.longRest
  ]
} as const;
const PHB_ROGUE_SOULKNIFE_4: Level = {
  replace: "Rogue (Soulknife) 3",
  label: "Rogue (Soulknife) 4",
  choices: [
    ...PHB_ROGUE_4.choices
  ],
  longRest: [
    ...PHB_ROGUE_4.longRest
  ]
} as const;

export default {
  [PHB_ROGUE_SOULKNIFE_3.label]: PHB_ROGUE_SOULKNIFE_3,
  [PHB_ROGUE_SOULKNIFE_4.label]: PHB_ROGUE_SOULKNIFE_4
} as const satisfies {[levelID: ClassID]: Level};
