import {StartingStatChoice} from "@/model/character/create/starting-stat/StartingStatChoice";
import {SpecieChoice} from "@/model/character/create/specie/SpecieChoice";
import {BackgroundChoice} from "@/model/character/create/background/BackgroundChoice";
import {minTextLength} from "@/model/source/condition/text/MinLengthCondition";
import {NameChoice} from "@/model/character/name/NameChoice";
import {LevelChoice} from "@/model/character/level/LevelChoice";
import {alwaysFalse} from "@/model/source/condition/generic/FalseCondition";

export const CharacterCreationChoice = {
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

export type CharacterCreationChoice = typeof CharacterCreationChoice;
