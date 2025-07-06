import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_SORCERER_3, PHB_SORCERER_4} from "@/model/source/phb/level/sorcerer/SorcererBase";
import {is} from "@/model/source/condition/generic/IsCondition";
import {SpellID} from "@/model/source/model/Spell";

const PHB_SORCERER_WILD_MAGIC_3: Level = {
  replace: "Sorcerer 2",
  label: "Sorcerer (Wild Magic) 3",
  choices: [
    ...PHB_SORCERER_3.choices
  ]
} as const;
const PHB_SORCERER_WILD_MAGIC_4: Level = {
  replace: "Sorcerer (Wild Magic) 3",
  label: "Sorcerer (Wild Magic) 4",
  choices: [
    ...PHB_SORCERER_4.choices
  ]
} as const;

export default {
  [PHB_SORCERER_WILD_MAGIC_3.label]: PHB_SORCERER_WILD_MAGIC_3,
  [PHB_SORCERER_WILD_MAGIC_4.label]: PHB_SORCERER_WILD_MAGIC_4
} as const satisfies {[levelID: ClassID]: Level};
