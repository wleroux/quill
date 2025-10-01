import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_DRUID_3, PHB_DRUID_4,
  PHB_DRUID_5,
  PHB_DRUID_6,
  PHB_DRUID_7,
  PHB_DRUID_8,
  PHB_DRUID_9,
  PHB_DRUID_10,
  PHB_DRUID_11,
  PHB_DRUID_12
} from "./DruidBase";
import {selectedChoice} from "@/model/source/choice/Choice";
import {is} from "@/model/source/condition/generic/IsCondition";

const PHB_DRUID_LAND_3: Level = {
  replace: "Druid 2",
  label: "Druid (Land) 3",
  choices: [
    ...PHB_DRUID_3.choices
  ],
  longRest: [
    ...PHB_DRUID_3.longRest,
    {type: "simple", data: {
      choiceID: "druid (land)::land-type",
      label: "Type of Land",
      options: [
        {optionID: "Arid", label: "Arid"},
        {optionID: "Polar", label: "Polar"},
        {optionID: "Temperate", label: "Temperate"},
        {optionID: "Tropical", label: "Tropical"},
      ]
    }},
    {type: "spell", data: {
      enabled: selectedChoice("druid (land)::land-type", "Arid"),
      choiceID: "druid (land)::arid::spell-1",
      condition: is("Blur")
    }},
    {type: "spell", data: {
      enabled: selectedChoice("druid (land)::land-type", "Arid"),
      choiceID: "druid (land)::arid::spell-2",
      condition: is("Burning Hands")
    }},
    {type: "spell", data: {
      enabled: selectedChoice("druid (land)::land-type", "Arid"),
      choiceID: "druid (land)::arid::spell-3",
      condition: is("Fire Bolt")
    }},
    {type: "spell", data: {
      enabled: selectedChoice("druid (land)::land-type", "Polar"),
      choiceID: "druid (land)::polar::spell-1",
      condition: is("Fog Cloud")
    }},
    {type: "spell", data: {
      enabled: selectedChoice("druid (land)::land-type", "Polar"),
      choiceID: "druid (land)::polar::spell-2",
      condition: is("Hold Person")
    }},
    {type: "spell", data: {
      enabled: selectedChoice("druid (land)::land-type", "Polar"),
      choiceID: "druid (land)::polar::spell-3",
      condition: is("Ray of Frost")
    }},
    {type: "spell", data: {
      enabled: selectedChoice("druid (land)::land-type", "Temperate"),
      choiceID: "druid (land)::temperate::spell-1",
      condition: is("Misty Step")
    }},
    {type: "spell", data: {
      enabled: selectedChoice("druid (land)::land-type", "Temperate"),
      choiceID: "druid (land)::temperate::spell-2",
      condition: is("Shocking Grasp")
    }},
    {type: "spell", data: {
      enabled: selectedChoice("druid (land)::land-type", "Temperate"),
      choiceID: "druid (land)::temperate::spell-3",
      condition: is("Sleep")
    }},
    {type: "spell", data: {
      enabled: selectedChoice("druid (land)::land-type", "Tropical"),
      choiceID: "druid (land)::tropical::spell-1",
      condition: is("Acid Splash")
    }},
    {type: "spell", data: {
      enabled: selectedChoice("druid (land)::land-type", "Tropical"),
      choiceID: "druid (land)::tropical::spell-2",
      condition: is("Ray of Sickness")
    }},
    {type: "spell", data: {
      enabled: selectedChoice("druid (land)::land-type", "Tropical"),
      choiceID: "druid (land)::tropical::spell-3",
      condition: is("Web")
    }}
  ]
} as const;
const PHB_DRUID_LAND_4: Level = {
  replace: "Druid (Land) 3",
  label: "Druid (Land) 4",
  choices: [
    ...PHB_DRUID_4.choices
  ],
  longRest: [
    ...PHB_DRUID_4.longRest
  ]
} as const;
const PHB_DRUID_LAND_5: Level = {
  replace: "Druid (Land) 4",
  label: "Druid (Land) 5",
  choices: [
    ...PHB_DRUID_5.choices
  ],
  longRest: [
    ...PHB_DRUID_5.longRest
  ]
} as const;
const PHB_DRUID_LAND_6: Level = {
  replace: "Druid (Land) 5",
  label: "Druid (Land) 6",
  choices: [
    ...PHB_DRUID_6.choices
  ],
  longRest: [
    ...PHB_DRUID_6.longRest
  ]
} as const;
const PHB_DRUID_LAND_7: Level = {
  replace: "Druid (Land) 6",
  label: "Druid (Land) 7",
  choices: [
    ...PHB_DRUID_7.choices
  ],
  longRest: [
    ...PHB_DRUID_7.longRest
  ]
} as const;
const PHB_DRUID_LAND_8: Level = {
  replace: "Druid (Land) 7",
  label: "Druid (Land) 8",
  choices: [
    ...PHB_DRUID_8.choices
  ],
  longRest: [
    ...PHB_DRUID_8.longRest
  ]
} as const;
const PHB_DRUID_LAND_9: Level = {
  replace: "Druid (Land) 8",
  label: "Druid (Land) 9",
  choices: [
    ...PHB_DRUID_9.choices
  ],
  longRest: [
    ...PHB_DRUID_9.longRest
  ]
} as const;
const PHB_DRUID_LAND_10: Level = {
  replace: "Druid (Land) 9",
  label: "Druid (Land) 10",
  choices: [
    ...PHB_DRUID_10.choices
  ],
  longRest: [
    ...PHB_DRUID_10.longRest
  ]
} as const;
const PHB_DRUID_LAND_11: Level = {
  replace: "Druid (Land) 10",
  label: "Druid (Land) 11",
  choices: [
    ...PHB_DRUID_11.choices
  ],
  longRest: [
    ...PHB_DRUID_11.longRest
  ]
} as const;
const PHB_DRUID_LAND_12: Level = {
  replace: "Druid (Land) 11",
  label: "Druid (Land) 12",
  choices: [
    ...PHB_DRUID_12.choices
  ],
  longRest: [
    ...PHB_DRUID_12.longRest
  ]
} as const;

export default {
  [PHB_DRUID_LAND_3.label]: PHB_DRUID_LAND_3,
  [PHB_DRUID_LAND_4.label]: PHB_DRUID_LAND_4,
  [PHB_DRUID_LAND_5.label]: PHB_DRUID_LAND_5,
  [PHB_DRUID_LAND_6.label]: PHB_DRUID_LAND_6,
  [PHB_DRUID_LAND_7.label]: PHB_DRUID_LAND_7,
  [PHB_DRUID_LAND_8.label]: PHB_DRUID_LAND_8,
  [PHB_DRUID_LAND_9.label]: PHB_DRUID_LAND_9,
  [PHB_DRUID_LAND_10.label]: PHB_DRUID_LAND_10,
  [PHB_DRUID_LAND_11.label]: PHB_DRUID_LAND_11,
  [PHB_DRUID_LAND_12.label]: PHB_DRUID_LAND_12
} as const satisfies {[levelID: ClassID]: Level};
