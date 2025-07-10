import {ClassID, Level} from "@/model/source/model/Level";
import {is} from "@/model/source/condition/generic/IsCondition";
import {PHB_PALADIN_3, PHB_PALADIN_4} from "@/model/source/phb/level/paladin/PaladinBase";
import {SpellID} from "@/model/source/model/Spell";

const PHB_PALADIN_GLORY_3: Level = {
  replace: "Paladin 2",
  label: "Paladin (Glory) 3",
  choices: [
    ...PHB_PALADIN_3.choices,
    {type: "spell", data: {
      choiceID: "paladin (glory)::spell-1",
      condition: is<SpellID>("Guiding Bolt")
    }},
    {type: "spell", data: {
      choiceID: "paladin (glory)::spell-2",
      condition: is<SpellID>("Heroism")
    }},
  ],
  longRest: [
    ...PHB_PALADIN_3.longRest
  ]
} as const;
const PHB_PALADIN_GLORY_4: Level = {
  replace: "Paladin (Glory) 3",
  label: "Paladin (Glory) 4",
  choices: [
    ...PHB_PALADIN_4.choices
  ],
  longRest: [
    ...PHB_PALADIN_4.longRest
  ]
} as const;

export default {
  [PHB_PALADIN_GLORY_3.label]: PHB_PALADIN_GLORY_3,
  [PHB_PALADIN_GLORY_4.label]: PHB_PALADIN_GLORY_4
} as const satisfies {[levelID: ClassID]: Level};
