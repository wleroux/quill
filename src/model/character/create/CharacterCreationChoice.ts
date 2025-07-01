import {StartingStatChoice} from "@/model/character/create/starting-stat/StartingStatChoice";
import {SpeciesChoice} from "@/model/character/create/species/SpeciesChoice";
import {BackgroundChoice} from "@/model/character/create/background/BackgroundChoice";
import {minTextLength} from "@/model/source/condition/text/MinLengthCondition";
import {NameChoice} from "@/model/character/name/NameChoice";
import {LevelChoice} from "@/model/character/level/LevelChoice";
import {initiateMundaneItem, majorCommonItem, minorCommonItem} from "@/model/source/condition/item/itemTypeCondition";

const LEVEL_1: LevelChoice = {
  type: "level",
  data: {
    choiceID: "level::1",
    enabled: (_, character) => character.levels.length === 0,
    choices: [
      {type: "class", data: {
        choiceID: "class::1",
      }},
      {type: "item", data: {
        label: "Mundane Item (max 50gp)",
        choiceID: "level::item::mundane-1",
        condition: initiateMundaneItem
      }},
      {type: "item", data: {
        label: "Mundane Item (max 50gp)",
        choiceID: "level::item::mundane-2",
        condition: initiateMundaneItem
      }},
      {type: "item", data: {
        label: "Mundane Item (max 50gp)",
        choiceID: "level::item::mundane-3",
        condition: initiateMundaneItem
      }},
      {type: "item", data: {
        label: "Mundane Item (max 50gp)",
        choiceID: "level::item::mundane-4",
        condition: initiateMundaneItem
      }},
      {type: "item", data: {
        label: "Mundane Item (max 50gp)",
        choiceID: "level::item::mundane-5",
        condition: initiateMundaneItem
      }},
      {type: "item", data: {
        label: "Mundane Item (max 50gp)",
        choiceID: "level::item::mundane-6",
        condition: initiateMundaneItem
      }},
      {type: "item", data: {
        label: "Major Common Item",
        choiceID: "level::item::major-common-1",
        condition: majorCommonItem
      }},
      {type: "item", data: {
        label: "Minor Common Item",
        choiceID: "level::item::minor-common-1",
        condition: minorCommonItem
      }}
    ]
  }
};
const LEVEL_2: LevelChoice = {
  type: "level",
  data: {
    choiceID: "level::2",
    enabled: (_, character) => character.levels.length === 1,
    choices: [
      {type: "class", data: {
        choiceID: "class::2",
      }},
      {type: "item", data: {
        label: "Minor Common Item",
        choiceID: "level::item::minor-common-2",
        condition: minorCommonItem
      }}
    ]
  }
};

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
      }} satisfies SpeciesChoice,
      {type: "background", data: {
        choiceID: "background",
        condition: undefined
      }} satisfies BackgroundChoice,
      LEVEL_1,
      LEVEL_2
    ]
  }
} as const;

export type CharacterCreationChoice = typeof CharacterCreationChoice;
