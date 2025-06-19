import {BackgroundDecision} from "@/model/source/choice/background/BackgroundDecision";
import {SpecieDecision} from "@/model/source/choice/specie/SpecieDecision";
import {StartingStatDecision} from "@/model/source/choice/starting-stat/StartingStatDecision";
import {NameDecision} from "@/model/source/choice/name/NameDecision";
import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {LevelDecision} from "@/model/source/choice/level/LevelDecision";

export type CharacterID = string;
export type CharacterDecision = {
  type: "character";
  data: {
    decisions: {
      [choiceID: ChoiceID]: NameDecision | StartingStatDecision | BackgroundDecision | SpecieDecision | LevelDecision | undefined
    };
  }
};
