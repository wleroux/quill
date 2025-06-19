import {Feat, FeatID} from "../../model/Feat";
import {AttributeID} from "@/model/source/model/Attribute";
import {is} from "@/model/source/condition/generic/IsCondition";
import {minStat} from "@/model/source/condition/attribute/minStat";

const PHB_FEAT_ABILITY_SCORE_INCREASE: Feat = {
  label: "Ability Score Increase",
  category: "general",
  repeatable: true,
  choices: [
    {type: "attribute", data: {
      choiceID: "asi::attribute-1"
    }},
    {type: "attribute", data: {
      choiceID: "asi::attribute-2"
    }}
  ]
};

const PHB_FEAT_ACTOR: Feat = {
  label: "Actor",
  prerequisite: minStat("cha", 13),
  category: "origin",
  choices: [
    {type: "attribute", data: {
      choiceID: "actor::attribute::attribute-1",
      condition: is<AttributeID>("cha")
    }}
  ]
};

export default {
  "Ability Score Increase": PHB_FEAT_ABILITY_SCORE_INCREASE,
  "Actor": PHB_FEAT_ACTOR,
} as const satisfies {[featID: FeatID]: Feat};
