import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_DRUID_3, PHB_DRUID_4} from "./DruidBase";
import { is } from "@/model/source/condition/generic/IsCondition";

const PHB_DRUID_MOON_3: Level = {
  replace: "Druid 2",
  label: "Druid (Moon) 3",
  choices: [
    ...PHB_DRUID_3.choices,
    {type: "spell", data: {
      choiceID: "druid (land)::spell-1",
      sourceID: "druid (land)::spell-1",
      condition: is("Cure Wounds")
    }},
    {type: "spell", data: {
      choiceID: "druid (land)::spell-2",
      sourceID: "druid (land)::spell-2",
      condition: is("Moonbeam")
    }},
    {type: "spell", data: {
      choiceID: "druid (land)::spell-3",
      sourceID: "druid (land)::spell-3",
      condition: is("Starry Wisp")
    }}
  ]
} as const;
const PHB_DRUID_MOON_4: Level = {
  replace: "Druid (Moon) 3",
  label: "Druid (Moon) 4",
  choices: [
    ...PHB_DRUID_4.choices
  ]
} as const;

export default  {
  [PHB_DRUID_MOON_3.label]: PHB_DRUID_MOON_3,
  [PHB_DRUID_MOON_4.label]: PHB_DRUID_MOON_4
} as const satisfies {[levelID: ClassID]: Level};
