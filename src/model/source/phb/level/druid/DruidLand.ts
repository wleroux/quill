import {ClassID, Level} from "@/model/source/model/Level";
import {PHB_DRUID_3, PHB_DRUID_4} from "./DruidBase";

const PHB_DRUID_LAND_3: Level = {
  replace: "Druid 2",
  label: "Druid (Land) 3",
  choices: [
    ...PHB_DRUID_3.choices
  ]
} as const;
const PHB_DRUID_LAND_4: Level = {
  replace: "Druid (Land) 3",
  label: "Druid (Land) 4",
  choices: [
    ...PHB_DRUID_4.choices
  ]
} as const;

export default {
  [PHB_DRUID_LAND_3.label]: PHB_DRUID_LAND_3,
  [PHB_DRUID_LAND_4.label]: PHB_DRUID_LAND_4
} as const satisfies {[levelID: ClassID]: Level};
