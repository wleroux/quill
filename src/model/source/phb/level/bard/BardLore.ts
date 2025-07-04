import {ClassID, Level} from "@/model/source/model/Level";
import {BASE_BARD_3, BASE_BARD_4} from "@/model/source/phb/level/bard/BardBase";

const PHB_BARD_LORE_3: Level = {
  label: "Bard (Lore) 3",
  replace: "Bard 2",
  choices: [
    ...BASE_BARD_3.choices,
    {type: "skill", data: {
      choiceID: "bard (lore)::skill-1",
    }},
    {type: "skill", data: {
      choiceID: "bard (lore)::skill-2",
    }},
    {type: "skill", data: {
      choiceID: "bard (lore)::skill-3",
    }}
  ]
};
const PHB_BARD_LORE_4: Level = {
  label: "Bard (Lore) 4",
  replace: "Bard (Lore) 3",
  choices: [
    ...BASE_BARD_4.choices
  ]
};

export default {
  [PHB_BARD_LORE_3.label]: PHB_BARD_LORE_3,
  [PHB_BARD_LORE_4.label]: PHB_BARD_LORE_4
} as const satisfies {[levelID: ClassID]: Level};