import {ClassID, Level} from "@/model/source/model/Level";
import {is} from "@/model/source/condition/generic/IsCondition";
import {PHB_MONK_3, PHB_MONK_4} from "@/model/source/phb/level/monk/MonkBase";
import {SpellID} from "@/model/source/model/Spell";

const PHB_MONK_ELEMENTS_3: Level = {
  replace: "Monk 2",
  label: "Monk (Elements) 3",
  choices: [
    ...PHB_MONK_3.choices,
    {type: "spell", data: {
      choiceID: "monk (elements)::spell-1",
      condition: is<SpellID>("Elementalism")
    }}
  ],
  longRest: [
    ...PHB_MONK_3.longRest
  ]
} as const;

const PHB_MONK_ELEMENTS_4: Level = {
  replace: "Monk (Elements) 3",
  label: "Monk (Elements) 4",
  choices: [
    ...PHB_MONK_4.choices
  ],
  longRest: [
    ...PHB_MONK_4.longRest
  ]
} as const;

export default {
  [PHB_MONK_ELEMENTS_3.label]: PHB_MONK_ELEMENTS_3,
  [PHB_MONK_ELEMENTS_4.label]: PHB_MONK_ELEMENTS_4
} as const satisfies {[levelID: ClassID]: Level};
