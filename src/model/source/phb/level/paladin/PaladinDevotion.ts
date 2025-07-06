import {ClassID, Level} from "@/model/source/model/Level";
import {is} from "@/model/source/condition/generic/IsCondition";
import {PHB_PALADIN_3, PHB_PALADIN_4} from "@/model/source/phb/level/paladin/PaladinBase";
import {SpellID} from "@/model/source/model/Spell";

const PHB_PALADIN_DEVOTION_3: Level = {
  replace: "Paladin 2",
  label: "Paladin (Devotion) 3",
  choices: [
    ...PHB_PALADIN_3.choices,
    {type: "spell", data: {
      choiceID: "paladin (devotion)::spell-1",
      condition: is<SpellID>("Protection from Evil and Good")
    }},
    {type: "spell", data: {
      choiceID: "paladin (devotion)::spell-2",
      condition: is<SpellID>("Shield of Faith")
    }},
  ]
} as const;
const PHB_PALADIN_DEVOTION_4: Level = {
  replace: "Paladin (Devotion) 3",
  label: "Paladin (Devotion) 4",
  choices: [
    ...PHB_PALADIN_4.choices
  ]
} as const;

export default {
  [PHB_PALADIN_DEVOTION_3.label]: PHB_PALADIN_DEVOTION_3,
  [PHB_PALADIN_DEVOTION_4.label]: PHB_PALADIN_DEVOTION_4
} as const satisfies {[levelID: ClassID]: Level};
