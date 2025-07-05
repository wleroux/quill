import {is} from "@/model/source/condition/generic/IsCondition";
import {ClassID, Level} from "@/model/source/model/Level";
import {SpellID} from "@/model/source/model/Spell";
import {PHB_RANGER_3, PHB_RANGER_4} from "@/model/source/phb/level/ranger/RangerBase";
import {SkillID} from "@/model/source/model/Skill";

const PHB_RANGER_HUNTER_3: Level = {
  replace: "Ranger 2",
  label: "Ranger (Hunter) 3",
  choices: [
    ...PHB_RANGER_3.choices,
    {type: "spell", data: {
      choiceID: "ranger (hunter)::spell-1",
      condition: is<SpellID>("Disguise Self")
    }},
    {type: "skill", data: {
      choiceID: "ranger (hunter)::skill-1",
      condition: is<SkillID>("deception", "performance", "persuasion")
    }}
  ]
} as const;

const PHB_RANGER_HUNTER_4: Level = {
  replace: "Ranger (Hunter) 3",
  label: "Ranger (Hunter) 4",
  choices: [
    ...PHB_RANGER_4.choices
  ]
} as const;

export default {
  [PHB_RANGER_HUNTER_3.label]: PHB_RANGER_HUNTER_3,
  [PHB_RANGER_HUNTER_4.label]: PHB_RANGER_HUNTER_4
} as const satisfies {[levelID: ClassID]: Level};

