import {ClassID, Level} from "@/model/source/model/Level";
import {SkillID} from "@/model/source/model/Skill";
import {is} from "@/model/source/condition/generic/IsCondition";
import {PHB_MONK_3, PHB_MONK_4} from "@/model/source/phb/level/monk/MonkBase";
import {ToolID} from "@/model/source/model/Tool";

const PHB_MONK_MERCY_3: Level = {
  replace: "Monk 2",
  label: "Monk (Mercy) 3",
  choices: [
    ...PHB_MONK_3.choices,
    {type: "skill", data: {
      choiceID: "monk (mercy)::skill-1",
      condition: is<SkillID>("insight")
    }},
    {type: "skill", data: {
      choiceID: "monk (mercy)::skill-2",
      condition: is<SkillID>("medicine")
    }},
    {type: "tool", data: {
      choiceID: "monk (mercy)::skill-1",
      condition: is<ToolID>("Herbalism Kit")
    }}
  ]
} as const;

const PHB_MONK_MERCY_4: Level = {
  replace: "Monk (Mercy) 3",
  label: "Monk (Mercy) 4",
  choices: [
    ...PHB_MONK_4.choices
  ]
} as const;

export default {
  [PHB_MONK_MERCY_3.label]: PHB_MONK_MERCY_3,
  [PHB_MONK_MERCY_4.label]: PHB_MONK_MERCY_4
} as const satisfies {[levelID: ClassID]: Level};
