import {is} from "@/model/source/condition/generic/IsCondition";
import {ClassID, Level} from "@/model/source/model/Level";
import {SpellID} from "@/model/source/model/Spell";
import {
  PHB_RANGER_10,
  PHB_RANGER_11, PHB_RANGER_12,
  PHB_RANGER_3,
  PHB_RANGER_4,
  PHB_RANGER_5,
  PHB_RANGER_6,
  PHB_RANGER_7,
  PHB_RANGER_8,
  PHB_RANGER_9
} from "@/model/source/phb/level/ranger/RangerBase";
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
const PHB_RANGER_GLOOM_STALKER_5: Level = {
  replace: "Ranger (Gloom Stalker) 4",
  label: "Ranger (Gloom Stalker) 5",
  choices: [
    ...PHB_RANGER_5.choices
  ],
  longRest: [
    ...PHB_RANGER_5.longRest
  ]
} as const;
const PHB_RANGER_GLOOM_STALKER_6: Level = {
  replace: "Ranger (Gloom Stalker) 5",
  label: "Ranger (Gloom Stalker) 6",
  choices: [
    ...PHB_RANGER_6.choices
  ],
  longRest: [
    ...PHB_RANGER_6.longRest
  ]
} as const;
const PHB_RANGER_GLOOM_STALKER_7: Level = {
  replace: "Ranger (Gloom Stalker) 6",
  label: "Ranger (Gloom Stalker) 7",
  choices: [
    ...PHB_RANGER_7.choices
  ],
  longRest: [
    ...PHB_RANGER_7.longRest
  ]
} as const;
const PHB_RANGER_GLOOM_STALKER_8: Level = {
  replace: "Ranger (Gloom Stalker) 7",
  label: "Ranger (Gloom Stalker) 8",
  choices: [
    ...PHB_RANGER_8.choices
  ],
  longRest: [
    ...PHB_RANGER_8.longRest
  ]
} as const;
const PHB_RANGER_GLOOM_STALKER_9: Level = {
  replace: "Ranger (Gloom Stalker) 8",
  label: "Ranger (Gloom Stalker) 9",
  choices: [
    ...PHB_RANGER_9.choices
  ],
  longRest: [
    ...PHB_RANGER_9.longRest
  ]
} as const;
const PHB_RANGER_GLOOM_STALKER_10: Level = {
  replace: "Ranger (Gloom Stalker) 9",
  label: "Ranger (Gloom Stalker) 10",
  choices: [
    ...PHB_RANGER_10.choices
  ],
  longRest: [
    ...PHB_RANGER_10.longRest
  ]
} as const;
const PHB_RANGER_GLOOM_STALKER_11: Level = {
  replace: "Ranger (Gloom Stalker) 10",
  label: "Ranger (Gloom Stalker) 11",
  choices: [
    ...PHB_RANGER_11.choices
  ],
  longRest: [
    ...PHB_RANGER_11.longRest
  ]
} as const;
const PHB_RANGER_GLOOM_STALKER_12: Level = {
  replace: "Ranger (Gloom Stalker) 11",
  label: "Ranger (Gloom Stalker) 12",
  choices: [
    ...PHB_RANGER_12.choices
  ],
  longRest: [
    ...PHB_RANGER_12.longRest
  ]
} as const;

export default {
  [PHB_RANGER_GLOOM_STALKER_3.label]: PHB_RANGER_GLOOM_STALKER_3,
  [PHB_RANGER_GLOOM_STALKER_4.label]: PHB_RANGER_GLOOM_STALKER_4,
  [PHB_RANGER_GLOOM_STALKER_5.label]: PHB_RANGER_GLOOM_STALKER_5,
  [PHB_RANGER_GLOOM_STALKER_6.label]: PHB_RANGER_GLOOM_STALKER_6,
  [PHB_RANGER_GLOOM_STALKER_7.label]: PHB_RANGER_GLOOM_STALKER_7,
  [PHB_RANGER_GLOOM_STALKER_8.label]: PHB_RANGER_GLOOM_STALKER_8,
  [PHB_RANGER_GLOOM_STALKER_9.label]: PHB_RANGER_GLOOM_STALKER_9,
  [PHB_RANGER_GLOOM_STALKER_10.label]: PHB_RANGER_GLOOM_STALKER_10,
  [PHB_RANGER_GLOOM_STALKER_11.label]: PHB_RANGER_GLOOM_STALKER_11,
  [PHB_RANGER_GLOOM_STALKER_12.label]: PHB_RANGER_GLOOM_STALKER_12,
} as const satisfies {[levelID: ClassID]: Level};

