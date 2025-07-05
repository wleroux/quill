import {is} from "@/model/source/condition/generic/IsCondition";
import {ClassID, Level} from "@/model/source/model/Level";
import {SpellID} from "@/model/source/model/Spell";
import {PHB_RANGER_3, PHB_RANGER_4} from "@/model/source/phb/level/ranger/RangerBase";
import {SkillID} from "@/model/source/model/Skill";

const PHB_RANGER_FEY_WANDERER_3: Level = {
  replace: "Ranger 2",
  label: "Ranger (Fey Wanderer) 3",
  choices: [
    ...PHB_RANGER_3.choices,
    {type: "spell", data: {
      choiceID: "ranger (fey wanderer)::spell-1",
      condition: is<SpellID>("Charm Person")
    }},
    {type: "skill", data: {
      choiceID: "ranger (fey wanderer)::skill-1",
      condition: is<SkillID>("deception", "performance", "persuasion")
    }}
  ]
} as const;

const PHB_RANGER_FEY_WANDERER_4: Level = {
  replace: "Ranger (Fey Wanderer) 3",
  label: "Ranger (Fey Wanderer) 4",
  choices: [
    ...PHB_RANGER_4.choices
  ]
} as const;

export default {
  [PHB_RANGER_FEY_WANDERER_3.label]: PHB_RANGER_FEY_WANDERER_3,
  [PHB_RANGER_FEY_WANDERER_4.label]: PHB_RANGER_FEY_WANDERER_4
} as const satisfies {[levelID: ClassID]: Level};

