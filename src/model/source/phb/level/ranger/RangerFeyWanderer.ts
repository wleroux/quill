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
  ],
  longRest: [
    ...PHB_RANGER_3.longRest
  ]
} as const;

const PHB_RANGER_FEY_WANDERER_4: Level = {
  replace: "Ranger (Fey Wanderer) 3",
  label: "Ranger (Fey Wanderer) 4",
  choices: [
    ...PHB_RANGER_4.choices
  ],
  longRest: [
    ...PHB_RANGER_4.longRest
  ]
} as const;
const PHB_RANGER_FEY_WANDERER_5: Level = {
  replace: "Ranger (Fey Wanderer) 4",
  label: "Ranger (Fey Wanderer) 5",
  choices: [
    ...PHB_RANGER_5.choices
  ],
  longRest: [
    ...PHB_RANGER_5.longRest
  ]
} as const;
const PHB_RANGER_FEY_WANDERER_6: Level = {
  replace: "Ranger (Fey Wanderer) 5",
  label: "Ranger (Fey Wanderer) 6",
  choices: [
    ...PHB_RANGER_6.choices
  ],
  longRest: [
    ...PHB_RANGER_6.longRest
  ]
} as const;
const PHB_RANGER_FEY_WANDERER_7: Level = {
  replace: "Ranger (Fey Wanderer) 6",
  label: "Ranger (Fey Wanderer) 7",
  choices: [
    ...PHB_RANGER_7.choices
  ],
  longRest: [
    ...PHB_RANGER_7.longRest
  ]
} as const;
const PHB_RANGER_FEY_WANDERER_8: Level = {
  replace: "Ranger (Fey Wanderer) 7",
  label: "Ranger (Fey Wanderer) 8",
  choices: [
    ...PHB_RANGER_8.choices
  ],
  longRest: [
    ...PHB_RANGER_8.longRest
  ]
} as const;
const PHB_RANGER_FEY_WANDERER_9: Level = {
  replace: "Ranger (Fey Wanderer) 8",
  label: "Ranger (Fey Wanderer) 9",
  choices: [
    ...PHB_RANGER_9.choices
  ],
  longRest: [
    ...PHB_RANGER_9.longRest
  ]
} as const;
const PHB_RANGER_FEY_WANDERER_10: Level = {
  replace: "Ranger (Fey Wanderer) 9",
  label: "Ranger (Fey Wanderer) 10",
  choices: [
    ...PHB_RANGER_10.choices
  ],
  longRest: [
    ...PHB_RANGER_10.longRest
  ]
} as const;
const PHB_RANGER_FEY_WANDERER_11: Level = {
  replace: "Ranger (Fey Wanderer) 10",
  label: "Ranger (Fey Wanderer) 11",
  choices: [
    ...PHB_RANGER_11.choices,
    {type: "spell", data: {
      label: "Fey Reinforcements",
      choiceID: "ranger (fey wanderer)::spell-1",
      condition: is("Summon Fey")
    }}
  ],
  longRest: [
    ...PHB_RANGER_11.longRest
  ]
} as const;
const PHB_RANGER_FEY_WANDERER_12: Level = {
  replace: "Ranger (Fey Wanderer) 11",
  label: "Ranger (Fey Wanderer) 12",
  choices: [
    ...PHB_RANGER_12.choices
  ],
  longRest: [
    ...PHB_RANGER_12.longRest
  ]
} as const;

export default {
  [PHB_RANGER_FEY_WANDERER_3.label]: PHB_RANGER_FEY_WANDERER_3,
  [PHB_RANGER_FEY_WANDERER_4.label]: PHB_RANGER_FEY_WANDERER_4,
  [PHB_RANGER_FEY_WANDERER_5.label]: PHB_RANGER_FEY_WANDERER_5,
  [PHB_RANGER_FEY_WANDERER_6.label]: PHB_RANGER_FEY_WANDERER_6,
  [PHB_RANGER_FEY_WANDERER_7.label]: PHB_RANGER_FEY_WANDERER_7,
  [PHB_RANGER_FEY_WANDERER_8.label]: PHB_RANGER_FEY_WANDERER_8,
  [PHB_RANGER_FEY_WANDERER_9.label]: PHB_RANGER_FEY_WANDERER_9,
  [PHB_RANGER_FEY_WANDERER_10.label]: PHB_RANGER_FEY_WANDERER_10,
  [PHB_RANGER_FEY_WANDERER_11.label]: PHB_RANGER_FEY_WANDERER_11,
  [PHB_RANGER_FEY_WANDERER_12.label]: PHB_RANGER_FEY_WANDERER_12,
} as const satisfies {[levelID: ClassID]: Level};

