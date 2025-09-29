import {ClassID, Level} from "@/model/source/model/Level";
import {
  BASE_BARD_10,
  BASE_BARD_11,
  BASE_BARD_12,
  BASE_BARD_3,
  BASE_BARD_4,
  BASE_BARD_5,
  BASE_BARD_6,
  BASE_BARD_7,
  BASE_BARD_8,
  BASE_BARD_9
} from "@/model/source/phb/level/bard/BardBase";
import {bardLeveledSpell} from "@/model/source/phb/level/bard/BardLeveledSpellCondition";
import {is} from "@/model/source/condition/generic/IsCondition";

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
  ],
  longRest: [
    ...BASE_BARD_3.longRest
  ]
};
const PHB_BARD_LORE_4: Level = {
  label: "Bard (Lore) 4",
  replace: "Bard (Lore) 3",
  choices: [
    ...BASE_BARD_4.choices
  ],
  longRest: [
    ...BASE_BARD_4.longRest
  ]
};
const PHB_BARD_LORE_5: Level = {
  label: "Bard (Lore) 5",
  replace: "Bard (Lore) 4",
  choices: [
    ...BASE_BARD_5.choices
  ],
  longRest: [
    ...BASE_BARD_5.longRest
  ]
};
const PHB_BARD_LORE_6: Level = {
  label: "Bard (Lore) 6",
  replace: "Bard (Lore) 5",
  choices: [
    ...BASE_BARD_6.choices,
    {type: "spell", data: {
      choiceID: "bard (lore)::magical discoveries::1",
      condition: bardLeveledSpell(3, true)
    }},
    {type: "spell", data: {
      choiceID: "bard (lore)::magical discoveries::2",
      condition: bardLeveledSpell(3, true)
    }},
  ],
  longRest: [
    ...BASE_BARD_6.longRest
  ]
};
const PHB_BARD_LORE_7: Level = {
  label: "Bard (Lore) 7",
  replace: "Bard (Lore) 6",
  choices: [
    ...BASE_BARD_7.choices,
    {type: "spell-replacement", data: {
      choiceID: "magical discovery spell replacement",
      label: "Magical Discovery Spell Replacement",
      sourceID: is("bard (lore)::magical discoveries::1", "bard (lore)::magical discoveries::2"),
      condition: bardLeveledSpell(4, true)
    }}
  ],
  longRest: [
    ...BASE_BARD_7.longRest
  ]
};
const PHB_BARD_LORE_8: Level = {
  label: "Bard (Lore) 8",
  replace: "Bard (Lore) 7",
  choices: [
    ...BASE_BARD_8.choices,
    {type: "spell-replacement", data: {
      choiceID: "magical discovery spell replacement",
      label: "Magical Discovery Spell Replacement",
      sourceID: is("bard (lore)::magical discoveries::1", "bard (lore)::magical discoveries::2"),
      condition: bardLeveledSpell(4, true)
    }}
  ],
  longRest: [
    ...BASE_BARD_8.longRest
  ]
};
const PHB_BARD_LORE_9: Level = {
  label: "Bard (Lore) 9",
  replace: "Bard (Lore) 8",
  choices: [
    ...BASE_BARD_9.choices,
    {type: "spell-replacement", data: {
      choiceID: "magical discovery spell replacement",
      label: "Magical Discovery Spell Replacement",
      sourceID: is("bard (lore)::magical discoveries::1", "bard (lore)::magical discoveries::2"),
      condition: bardLeveledSpell(5, true)
    }}
  ],
  longRest: [
    ...BASE_BARD_9.longRest
  ]
};
const PHB_BARD_LORE_10: Level = {
  label: "Bard (Lore) 10",
  replace: "Bard (Lore) 9",
  choices: [
    ...BASE_BARD_10.choices,
    {type: "spell-replacement", data: {
      choiceID: "magical discovery spell replacement",
      label: "Magical Discovery Spell Replacement",
      sourceID: is("bard (lore)::magical discoveries::1", "bard (lore)::magical discoveries::2"),
      condition: bardLeveledSpell(5, true)
    }}
  ],
  longRest: [
    ...BASE_BARD_10.longRest
  ]
};
const PHB_BARD_LORE_11: Level = {
  label: "Bard (Lore) 11",
  replace: "Bard (Lore) 10",
  choices: [
    ...BASE_BARD_11.choices,
    {type: "spell-replacement", data: {
      choiceID: "magical discovery spell replacement",
      label: "Magical Discovery Spell Replacement",
      sourceID: is("bard (lore)::magical discoveries::1", "bard (lore)::magical discoveries::2"),
      condition: bardLeveledSpell(6, true)
    }}
  ],
  longRest: [
    ...BASE_BARD_11.longRest
  ]
};
const PHB_BARD_LORE_12: Level = {
  label: "Bard (Lore) 12",
  replace: "Bard (Lore) 11",
  choices: [
    ...BASE_BARD_12.choices,
    {type: "spell-replacement", data: {
      choiceID: "magical discovery spell replacement",
      sourceID: is("bard (lore)::magical discoveries::1", "bard (lore)::magical discoveries::2"),
      condition: bardLeveledSpell(6, true)
    }}
  ],
  longRest: [
    ...BASE_BARD_12.longRest
  ]
};

export default {
  [PHB_BARD_LORE_3.label]: PHB_BARD_LORE_3,
  [PHB_BARD_LORE_4.label]: PHB_BARD_LORE_4,
  [PHB_BARD_LORE_5.label]: PHB_BARD_LORE_5,
  [PHB_BARD_LORE_6.label]: PHB_BARD_LORE_6,
  [PHB_BARD_LORE_7.label]: PHB_BARD_LORE_7,
  [PHB_BARD_LORE_8.label]: PHB_BARD_LORE_8,
  [PHB_BARD_LORE_9.label]: PHB_BARD_LORE_9,
  [PHB_BARD_LORE_10.label]: PHB_BARD_LORE_10,
  [PHB_BARD_LORE_11.label]: PHB_BARD_LORE_11,
  [PHB_BARD_LORE_12.label]: PHB_BARD_LORE_12
} as const satisfies {[levelID: ClassID]: Level};