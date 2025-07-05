import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_MONK_3, PHB_MONK_4} from "@/model/source/phb/level/monk/MonkBase";

const PHB_MONK_OPEN_HAND_3: Level = {
  replace: "Monk 2",
  label: "Monk (Open Hand) 3",
  choices: [
    ...PHB_MONK_3.choices
  ]
} as const;

const PHB_MONK_OPEN_HAND_4: Level = {
  replace: "Monk (Open Hand) 3",
  label: "Monk (Open Hand) 4",
  choices: [
    ...PHB_MONK_4.choices
  ]
} as const;

export default {
  [PHB_MONK_OPEN_HAND_3.label]: PHB_MONK_OPEN_HAND_3,
  [PHB_MONK_OPEN_HAND_4.label]: PHB_MONK_OPEN_HAND_4
} as const satisfies {[levelID: ClassID]: Level};
