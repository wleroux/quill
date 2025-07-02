import {DefaultStartingStatChoice} from "@/model/character/create/starting-stat/StartingStatChoice";
import {DefaultBackgroundChoice} from "@/model/character/create/background/BackgroundChoice";
import {DefaultNameChoice} from "@/model/character/name/NameChoice";
import {DefaultSpeciesChoice} from "@/model/character/create/species/SpeciesChoice";
import {DefaultLevelChoice} from "@/model/character/level/LevelChoice";

export const CharacterCreationChoice = {
  data: {
    choiceID: "character-creation",
    choices: [
      DefaultNameChoice,
      DefaultStartingStatChoice,
      DefaultSpeciesChoice,
      DefaultBackgroundChoice,
      DefaultLevelChoice[0],
      DefaultLevelChoice[1]
    ]
  }
} as const;

export type CharacterCreationChoice = typeof CharacterCreationChoice;
