import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_SORCERER_3, PHB_SORCERER_4} from "@/model/source/phb/level/sorcerer/SorcererBase";
import {is} from "@/model/source/condition/generic/IsCondition";
import {SpellID} from "@/model/source/model/Spell";

const PHB_SORCERER_CLOCKWORK_3: Level = {
  replace: "Sorcerer 2",
  label: "Sorcerer (Clockwork) 3",
  choices: [
    ...PHB_SORCERER_3.choices,
    {type: "spell", data: {
      choiceID: "sorcerer (clockwork)::spell-1",
      condition: is<SpellID>("Aid")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (clockwork)::spell-2",
      condition: is<SpellID>("Alarm")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (clockwork)::spell-3",
      condition: is<SpellID>("Lesser Restoration")
    }},
    {type: "spell", data: {
      choiceID: "sorcerer (clockwork)::spell-4",
      condition: is<SpellID>("Protection from Evil and Good")
    }}
  ],
  longRest: [
    ...PHB_SORCERER_3.longRest
  ]
} as const;
const PHB_SORCERER_CLOCKWORK_4: Level = {
  replace: "Sorcerer (Clockwork) 3",
  label: "Sorcerer (Clockwork) 4",
  choices: [
    ...PHB_SORCERER_4.choices
  ],
  longRest: [
    ...PHB_SORCERER_4.longRest
  ]
} as const;

export default {
  [PHB_SORCERER_CLOCKWORK_3.label]: PHB_SORCERER_CLOCKWORK_3,
  [PHB_SORCERER_CLOCKWORK_4.label]: PHB_SORCERER_CLOCKWORK_4
} as const satisfies {[levelID: ClassID]: Level};
