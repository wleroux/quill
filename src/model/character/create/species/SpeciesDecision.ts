import {SpecieID} from "@/model/source/model/Specie";
import {Decision} from "@/model/source/choice/Decision";
import {ChoiceID} from "@/model/source/choice/ChoiceID";

export type SpeciesDecision = {
  type: "species";
  data: {
    speciesID: SpecieID;
    decisions: {
      [choiceID: ChoiceID]: Decision
    };
  }
};
