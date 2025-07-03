import {SpeciesID} from "@/model/source/model/Species";
import {Decision} from "@/model/source/choice/Decision";
import {ChoiceID} from "@/model/source/choice/ChoiceID";

export type SpeciesDecision = {
  type: "species";
  data: {
    speciesID: SpeciesID;
    decisions: {
      [choiceID: ChoiceID]: Decision
    };
  }
};
