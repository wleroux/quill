import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_WARLOCK_3, PHB_WARLOCK_4} from "./WarlockBase";
import {is} from "@/model/source/condition/generic/IsCondition";
import {SpellID} from "@/model/source/model/Spell";

const PHB_WARLOCK_CELESTIAL_3: Level = {
  replace: "Warlock 2",
  label: "Warlock (Celestial) 3",
  choices: [
    ...PHB_WARLOCK_3.choices,
    {type: "spell", data: {
      choiceID: "warlock (celestial)::spell-1",
      condition: is<SpellID>("Aid")
    }},
    {type: "spell", data: {
      choiceID: "warlock (celestial)::spell-2",
      condition: is<SpellID>("Cure Wounds")
    }},
    {type: "spell", data: {
      choiceID: "warlock (celestial)::spell-3",
      condition: is<SpellID>("Guiding Bolt")
    }},
    {type: "spell", data: {
      choiceID: "warlock (celestial)::spell-4",
      condition: is<SpellID>("Lesser Restoration")
    }},
    {type: "spell", data: {
      choiceID: "warlock (celestial)::spell-5",
      condition: is<SpellID>("Light")
    }},
    {type: "spell", data: {
      choiceID: "warlock (celestial)::spell-6",
      condition: is<SpellID>("Sacred Flame")
    }}
  ]
} as const;
const PHB_WARLOCK_CELESTIAL_4: Level = {
  replace: "Warlock (Celestial) 3",
  label: "Warlock (Celestial) 4",
  choices: [
    ...PHB_WARLOCK_4.choices
  ]
} as const;

export default {
  [PHB_WARLOCK_CELESTIAL_3.label]: PHB_WARLOCK_CELESTIAL_3,
  [PHB_WARLOCK_CELESTIAL_4.label]: PHB_WARLOCK_CELESTIAL_4
} as const satisfies {[levelID: ClassID]: Level};
