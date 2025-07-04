import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_DRUID_3, PHB_DRUID_4} from "./DruidBase";
import { is } from "@/model/source/condition/generic/IsCondition";

const PHB_DRUID_SEA_3: Level = {
  replace: "Druid 2",
  label: "Druid (Sea) 3",
  choices: [
    ...PHB_DRUID_3.choices,
    {type: "spell", data: {
      choiceID: "druid (land)::spell-1",
      sourceID: "druid (land)::spell-1",
      condition: is("Fog Cloud")
    }},
    {type: "spell", data: {
      choiceID: "druid (land)::spell-2",
      sourceID: "druid (land)::spell-2",
      condition: is("Gust of Wind")
    }},
    {type: "spell", data: {
      choiceID: "druid (land)::spell-3",
      sourceID: "druid (land)::spell-3",
      condition: is("Ray of Frost")
    }},
    {type: "spell", data: {
      choiceID: "druid (land)::spell-4",
      sourceID: "druid (land)::spell-4",
      condition: is("Shatter")
    }},
    {type: "spell", data: {
      choiceID: "druid (land)::spell-5",
      sourceID: "druid (land)::spell-5",
      condition: is("Thunderwave")
    }}
  ]
} as const;
const PHB_DRUID_SEA_4: Level = {
  replace: "Druid (Sea) 3",
  label: "Druid (Sea) 4",
  choices: [
    ...PHB_DRUID_4.choices
  ]
} as const;

export default {
  [PHB_DRUID_SEA_3.label]: PHB_DRUID_SEA_3,
  [PHB_DRUID_SEA_4.label]: PHB_DRUID_SEA_4
} as const satisfies {[levelID: ClassID]: Level};
