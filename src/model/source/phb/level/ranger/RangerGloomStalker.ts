import {is} from "@/model/source/condition/generic/IsCondition";
import {ClassID, Level} from "@/model/source/model/Level";
import {SpellID} from "@/model/source/model/Spell";
import {PHB_RANGER_3, PHB_RANGER_4} from "@/model/source/phb/level/ranger/RangerBase";
import {SkillID} from "@/model/source/model/Skill";

const PHB_RANGER_GLOOM_STALKER_3: Level = {
  replace: "Ranger 2",
  label: "Ranger (Gloom Stalker) 3",
  choices: [
    ...PHB_RANGER_3.choices,
    {type: "spell", data: {
      choiceID: "ranger (gloom stalker)::spell-1",
      condition: is<SpellID>("Disguise Self")
    }},
    {type: "skill", data: {
      choiceID: "ranger (gloom stalker)::skill-1",
      condition: is<SkillID>("deception", "performance", "persuasion")
    }}
  ],
  longRest: [
    ...PHB_RANGER_3.longRest
  ]
} as const;

const PHB_RANGER_GLOOM_STALKER_4: Level = {
  replace: "Ranger (Gloom Stalker) 3",
  label: "Ranger (Gloom Stalker) 4",
  choices: [
    ...PHB_RANGER_4.choices
  ],
  longRest: [
    ...PHB_RANGER_4.longRest
  ]
} as const;

export default {
  [PHB_RANGER_GLOOM_STALKER_3.label]: PHB_RANGER_GLOOM_STALKER_3,
  [PHB_RANGER_GLOOM_STALKER_4.label]: PHB_RANGER_GLOOM_STALKER_4
} as const satisfies {[levelID: ClassID]: Level};

