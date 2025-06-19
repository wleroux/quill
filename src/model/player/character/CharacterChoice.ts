import {StartingStatChoice} from "@/model/source/choice/starting-stat/StartingStatChoice";
import {SpecieChoice} from "@/model/source/choice/specie/SpecieChoice";
import {BackgroundChoice} from "@/model/source/choice/background/BackgroundChoice";
import {minTextLength} from "@/model/source/condition/text/MinLengthCondition";
import {NameChoice} from "@/model/source/choice/name/NameChoice";
import {LevelChoice} from "@/model/source/choice/level/LevelChoice";
import {alwaysFalse} from "@/model/source/condition/generic/FalseCondition";

export const CharacterChoice = {
  data: {
    choiceID: "character-creation",
    choices: [
      {type: "name", data: {
        choiceID: "name",
        condition: minTextLength(3)
      }} satisfies NameChoice,
      {type: "starting-stat", data: {
        choiceID: "starting-stat",
        points: 27
      }} satisfies StartingStatChoice,
      {type: "specie", data: {
        choiceID: "specie",
        condition: undefined
      }} satisfies SpecieChoice,
      {type: "background", data: {
        choiceID: "background",
        condition: undefined
      }} satisfies BackgroundChoice,
      {type: "level", data: {
        choiceID: "level::1",
      }} satisfies LevelChoice,
      {type: "level", data: {
        choiceID: "level::2",
      }} satisfies LevelChoice,
      {type: "level", data: {
        choiceID: "level::3",
        required: alwaysFalse()
      }} satisfies LevelChoice,
    ]
  }
} as const;

export type CharacterChoice = typeof CharacterChoice;
