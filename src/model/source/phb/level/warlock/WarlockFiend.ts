import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_WARLOCK_3, PHB_WARLOCK_4} from "./WarlockBase";
import {is} from "@/model/source/condition/generic/IsCondition";
import {SpellID} from "@/model/source/model/Spell";

const PHB_WARLOCK_FIEND_3: Level = {
  replace: "Warlock 2",
  label: "Warlock (Fiend) 3",
  choices: [
    ...PHB_WARLOCK_3.choices,
    {type: "spell", data: {
      choiceID: "warlock (fiend)::spell-1",
      condition: is<SpellID>("Burning Hands")
    }},
    {type: "spell", data: {
      choiceID: "warlock (fiend)::spell-2",
      condition: is<SpellID>("Command")
    }},
    {type: "spell", data: {
      choiceID: "warlock (fiend)::spell-3",
      condition: is<SpellID>("Scorching Ray")
    }},
    {type: "spell", data: {
      choiceID: "warlock (fiend)::spell-4",
      condition: is<SpellID>("Suggestion")
    }}
  ],
  longRest: [
    ...PHB_WARLOCK_3.longRest
  ]
} as const;
const PHB_WARLOCK_FIEND_4: Level = {
  replace: "Warlock (Fiend) 3",
  label: "Warlock (Fiend) 4",
  choices: [
    ...PHB_WARLOCK_4.choices
  ],
  longRest: [
    ...PHB_WARLOCK_4.longRest
  ]
} as const;

export default {
  [PHB_WARLOCK_FIEND_3.label]: PHB_WARLOCK_FIEND_3,
  [PHB_WARLOCK_FIEND_4.label]: PHB_WARLOCK_FIEND_4
} as const satisfies {[levelID: ClassID]: Level};
