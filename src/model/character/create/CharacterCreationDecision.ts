import {BackgroundDecision} from "@/model/character/create/background/BackgroundDecision";
import {SpeciesDecision} from "@/model/character/create/species/SpeciesDecision";
import {StartingStatDecision} from "@/model/character/create/starting-stat/StartingStatDecision";
import {NameDecision} from "@/model/character/name/NameDecision";
import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {LevelDecision} from "@/model/character/level/LevelDecision";


export type CharacterCreationDecision = {
  type: "character";
  data: {
    decisions: {
      [choiceID: ChoiceID]: NameDecision | StartingStatDecision | BackgroundDecision | SpeciesDecision | LevelDecision | undefined
    };
  }
};
