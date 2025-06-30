import {Level, ClassID} from "@/model/source/model/Level";
import {isMainClass, noClasses} from "@/model/source/choice/Choice";
import {barbarianSkills} from "@/model/source/phb/level/barbarian/BarbarianSkillCondition";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {any} from "@/model/source/condition/generic/AnyCondition";

const PHB_BARBARIAN_1: Level = {
  label: "Barbarian 1",
  prerequisite: any(noClasses(), minStat("str", 13)),
  choices: [
    {type: "skill", data: {
      choiceID: "skill::barbarian::1",
      enabled: isMainClass(),
      condition: barbarianSkills()
    }},
    {type: "skill", data: {
      choiceID: "skill::barbarian::2",
      enabled: isMainClass(),
      condition: barbarianSkills()
    }}
  ]
};
const PHB_BARBARIAN_2: Level = {
  label: "Barbarian 2",
  replace: "Barbarian 1",
  choices: []
};

export default {
  "Barbarian 1": PHB_BARBARIAN_1,
  "Barbarian 2": PHB_BARBARIAN_2,
} as const satisfies {[levelID: ClassID]: Level};
