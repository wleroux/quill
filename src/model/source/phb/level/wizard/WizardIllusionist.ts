import { is } from "@/model/source/condition/generic/IsCondition";
import {ClassID, Level} from "@/model/source/model/Level";
import {
  PHB_WIZARD_10,
  PHB_WIZARD_11, PHB_WIZARD_12,
  PHB_WIZARD_3,
  PHB_WIZARD_4,
  PHB_WIZARD_5,
  PHB_WIZARD_6,
  PHB_WIZARD_7,
  PHB_WIZARD_8,
  PHB_WIZARD_9
} from "@/model/source/phb/level/wizard/WizardBase";

const PHB_WIZARD_ILLUSIONIST_3: Level = {
  replace: "Wizard 2",
  label: "Wizard (Illusionist) 3",
  choices: [
    ...PHB_WIZARD_3.choices
  ],
  longRest: [
    ...PHB_WIZARD_3.longRest
  ]
} as const;
const PHB_WIZARD_ILLUSIONIST_4: Level = {
  replace: "Wizard (Illusionist) 3",
  label: "Wizard (Illusionist) 4",
  choices: [
    ...PHB_WIZARD_4.choices
  ],
  longRest: [
    ...PHB_WIZARD_4.longRest
  ]
} as const;
const PHB_WIZARD_ILLUSIONIST_5: Level = {
  replace: "Wizard (Illusionist) 4",
  label: "Wizard (Illusionist) 5",
  choices: [
    ...PHB_WIZARD_5.choices
  ],
  longRest: [
    ...PHB_WIZARD_5.longRest
  ]
} as const;
const PHB_WIZARD_ILLUSIONIST_6: Level = {
  replace: "Wizard (Illusionist) 5",
  label: "Wizard (Illusionist) 6",
  choices: [
    ...PHB_WIZARD_6.choices,
    {type: "spell", data: {
      choiceID: "wizard (illusionist)::1",
      condition: is("Summon Beast")
    }},
    {type: "spell", data: {
      choiceID: "wizard (illusionist)::2",
      condition: is("Summon Fey")
    }}
  ],
  longRest: [
    ...PHB_WIZARD_6.longRest
  ]
} as const;
const PHB_WIZARD_ILLUSIONIST_7: Level = {
  replace: "Wizard (Illusionist) 6",
  label: "Wizard (Illusionist) 7",
  choices: [
    ...PHB_WIZARD_7.choices
  ],
  longRest: [
    ...PHB_WIZARD_7.longRest
  ]
} as const;
const PHB_WIZARD_ILLUSIONIST_8: Level = {
  replace: "Wizard (Illusionist) 7",
  label: "Wizard (Illusionist) 8",
  choices: [
    ...PHB_WIZARD_8.choices
  ],
  longRest: [
    ...PHB_WIZARD_8.longRest
  ]
} as const;
const PHB_WIZARD_ILLUSIONIST_9: Level = {
  replace: "Wizard (Illusionist) 8",
  label: "Wizard (Illusionist) 9",
  choices: [
    ...PHB_WIZARD_9.choices
  ],
  longRest: [
    ...PHB_WIZARD_9.longRest
  ]
} as const;
const PHB_WIZARD_ILLUSIONIST_10: Level = {
  replace: "Wizard (Illusionist) 9",
  label: "Wizard (Illusionist) 10",
  choices: [
    ...PHB_WIZARD_10.choices
  ],
  longRest: [
    ...PHB_WIZARD_10.longRest
  ]
} as const;
const PHB_WIZARD_ILLUSIONIST_11: Level = {
  replace: "Wizard (Illusionist) 10",
  label: "Wizard (Illusionist) 11",
  choices: [
    ...PHB_WIZARD_11.choices
  ],
  longRest: [
    ...PHB_WIZARD_11.longRest
  ]
} as const;
const PHB_WIZARD_ILLUSIONIST_12: Level = {
  replace: "Wizard (Illusionist) 11",
  label: "Wizard (Illusionist) 12",
  choices: [
    ...PHB_WIZARD_12.choices
  ],
  longRest: [
    ...PHB_WIZARD_12.longRest
  ]
} as const;

export default {
  [PHB_WIZARD_ILLUSIONIST_3.label]: PHB_WIZARD_ILLUSIONIST_3,
  [PHB_WIZARD_ILLUSIONIST_4.label]: PHB_WIZARD_ILLUSIONIST_4,
  [PHB_WIZARD_ILLUSIONIST_5.label]: PHB_WIZARD_ILLUSIONIST_5,
  [PHB_WIZARD_ILLUSIONIST_6.label]: PHB_WIZARD_ILLUSIONIST_6,
  [PHB_WIZARD_ILLUSIONIST_7.label]: PHB_WIZARD_ILLUSIONIST_7,
  [PHB_WIZARD_ILLUSIONIST_8.label]: PHB_WIZARD_ILLUSIONIST_8,
  [PHB_WIZARD_ILLUSIONIST_9.label]: PHB_WIZARD_ILLUSIONIST_9,
  [PHB_WIZARD_ILLUSIONIST_10.label]: PHB_WIZARD_ILLUSIONIST_10,
  [PHB_WIZARD_ILLUSIONIST_11.label]: PHB_WIZARD_ILLUSIONIST_11,
  [PHB_WIZARD_ILLUSIONIST_12.label]: PHB_WIZARD_ILLUSIONIST_12,
} as const satisfies {[levelID: ClassID]: Level};
