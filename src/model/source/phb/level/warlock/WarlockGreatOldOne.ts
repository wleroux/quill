import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_WARLOCK_3, PHB_WARLOCK_4} from "./WarlockBase";
import {is} from "@/model/source/condition/generic/IsCondition";
import {SpellID} from "@/model/source/model/Spell";

const PHB_WARLOCK_GREAT_OLD_ONE_3: Level = {
  replace: "Warlock 2",
  label: "Warlock (Great Old One) 3",
  choices: [
    ...PHB_WARLOCK_3.choices,
    {type: "spell", data: {
      choiceID: "warlock (great old one)::spell-1",
      condition: is<SpellID>("Detect Thoughts")
    }},
    {type: "spell", data: {
      choiceID: "warlock (great old one)::spell-2",
      condition: is<SpellID>("Dissonant Whispers")
    }},
    {type: "spell", data: {
      choiceID: "warlock (great old one)::spell-3",
      condition: is<SpellID>("Phantasmal Force")
    }},
    {type: "spell", data: {
      choiceID: "warlock (great old one)::spell-4",
      condition: is<SpellID>("Tasha's Hideous Laughter")
    }}
  ]
} as const;
const PHB_WARLOCK_GREAT_OLD_ONE_4: Level = {
  replace: "Warlock (Great Old One) 3",
  label: "Warlock (Great Old One) 4",
  choices: [
    ...PHB_WARLOCK_4.choices
  ]
} as const;

export default {
  [PHB_WARLOCK_GREAT_OLD_ONE_3.label]: PHB_WARLOCK_GREAT_OLD_ONE_3,
  [PHB_WARLOCK_GREAT_OLD_ONE_4.label]: PHB_WARLOCK_GREAT_OLD_ONE_4
} as const satisfies {[levelID: ClassID]: Level};
