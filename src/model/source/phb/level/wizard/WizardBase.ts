import {ClassID, Level} from "@/model/source/model/Level";
import {isMainClass, noClasses} from "@/model/source/choice/Choice";
import {minStat} from "@/model/source/condition/attribute/minStat";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {is} from "@/model/source/condition/generic/IsCondition";
import {SkillID} from "@/model/source/model/Skill";

const wizardSkill = is<SkillID>("arcana","history","insight","investigation","medicine","religion");

const PHB_WIZARD_1: Level = {
  label: "Wizard 1",
  prerequisite: any(noClasses(), minStat("int", 13)),
  choices: [
    {type: "skill", data: {
      choiceID: "wizard::skill-1",
      enabled: isMainClass(),
      condition: wizardSkill
    }},
    {type: "skill", data: {
      choiceID: "wizard::skill-2",
      enabled: isMainClass(),
      condition: wizardSkill
    }}
  ]
} as const;
const PHB_WIZARD_2: Level = {
  label: "Wizard 2",
  replace: "Wizard 1",
  choices: [
    {type: "expertise", data: {
      label: "Scholar",
      choiceID: "wizard::expertise::1",
      condition: is<SkillID>("arcana","history","investigation","medicine","nature","religion")
    }}
  ]
} as const;

export default {
  "Wizard 1": PHB_WIZARD_1,
  "Wizard 2": PHB_WIZARD_2
} as const satisfies {[levelID: ClassID]: Level};
