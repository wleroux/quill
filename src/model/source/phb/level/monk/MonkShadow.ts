import {ClassID, Level} from "@/model/source/model/Level";
import {is} from "@/model/source/condition/generic/IsCondition";
import {PHB_MONK_3, PHB_MONK_4} from "@/model/source/phb/level/monk/MonkBase";
import {SpellID} from "@/model/source/model/Spell";

const PHB_MONK_SHADOW_3: Level = {
  replace: "Monk 2",
  label: "Monk (Shadow) 3",
  choices: [
    ...PHB_MONK_3.choices,
    {type: "spell", data: {
      choiceID: "monk (shadow)::spell-1",
      condition: is<SpellID>("Darkness")
    }}
  ]
} as const;

const PHB_MONK_SHADOW_4: Level = {
  replace: "Monk (Shadow) 3",
  label: "Monk (Shadow) 4",
  choices: [
    ...PHB_MONK_4.choices
  ]
} as const;

export default {
  [PHB_MONK_SHADOW_3.label]: PHB_MONK_SHADOW_3,
  [PHB_MONK_SHADOW_4.label]: PHB_MONK_SHADOW_4
} as const satisfies {[levelID: ClassID]: Level};
