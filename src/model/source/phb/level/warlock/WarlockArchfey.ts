import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_WARLOCK_3, PHB_WARLOCK_4} from "./WarlockBase";
import {is} from "@/model/source/condition/generic/IsCondition";
import {SpellID} from "@/model/source/model/Spell";

const PHB_WARLOCK_ARCHFEY_3: Level = {
  replace: "Warlock 2",
  label: "Warlock (Archfey) 3",
  choices: [
    ...PHB_WARLOCK_3.choices,
    {type: "spell", data: {
      choiceID: "warlock (archfey)::spell-1",
      condition: is<SpellID>("Calm Emotions")
    }},
    {type: "spell", data: {
      choiceID: "warlock (archfey)::spell-2",
      condition: is<SpellID>("Faerie Fire")
    }},
    {type: "spell", data: {
      choiceID: "warlock (archfey)::spell-3",
      condition: is<SpellID>("Misty Step")
    }},
    {type: "spell", data: {
      choiceID: "warlock (archfey)::spell-4",
      condition: is<SpellID>("Phantasmal Force")
    }},
    {type: "spell", data: {
      choiceID: "warlock (archfey)::spell-5",
      condition: is<SpellID>("Sleep")
    }},
  ]
} as const;
const PHB_WARLOCK_ARCHFEY_4: Level = {
  replace: "Warlock (Archfey) 3",
  label: "Warlock (Archfey) 4",
  choices: [
    ...PHB_WARLOCK_4.choices
  ]
} as const;

export default {
  [PHB_WARLOCK_ARCHFEY_3.label]: PHB_WARLOCK_ARCHFEY_3,
  [PHB_WARLOCK_ARCHFEY_4.label]: PHB_WARLOCK_ARCHFEY_4
} as const satisfies {[levelID: ClassID]: Level};
