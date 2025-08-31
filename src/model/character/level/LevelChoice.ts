import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";
import {ItemChoice} from "@/model/character/level/item/ItemChoice";
import {ClassChoice} from "./class/ClassChoice";
import {initiateMundaneItem, initiatePet, majorCommonItem, minorCommonItem} from "@/model/source/condition/item/itemTypeCondition";
import {Character} from "@/model/character/Character";
import {alwaysFalse} from "@/model/source/condition/generic/FalseCondition";
import {Game} from "@/model/game/Game";
import {GAME_TIERS, GameTier} from "@/model/game/GameTier";


export function getCanLevelUp(character: Character, games: Game[]): boolean {
  const finishedGames = games.filter(game => game.status === "SUCCESS" || game.status === "FAILURE");
  const gameTiers: {[tier in GameTier]: number} = Object.fromEntries(GAME_TIERS.map(tier => [tier, finishedGames.filter(game => game.tier === tier).length])) as {[tier in GameTier]: number};

  const currentLevel = getCurrentLevel(character);
  if (currentLevel === 2) return true;
  else if (currentLevel === 3) return gameTiers["Initiate"] >= 5;
  // else if (currentLevel === 4) return gameTiers["Initiate"] >= 10;
  // else if (currentLevel === 5) return gameTiers["Adept"] >= 5;
  // else if (currentLevel === 6) return gameTiers["Adept"] >= 10;
  // else if (currentLevel === 7) return gameTiers["Adept"] >= 15;
  // else if (currentLevel === 8) return gameTiers["Adept"] >= 20;
  // else if (currentLevel === 9) return gameTiers["Vanguard"] >= 5;
  // else if (currentLevel === 10) return gameTiers["Vanguard"] >= 10;
  // else if (currentLevel === 11) return gameTiers["Vanguard"] >= 15;
  // else if (currentLevel === 12) return gameTiers["Vanguard"] >= 20;
  // else if (currentLevel === 13) return gameTiers["Exemplar"] >= 5;
  // else if (currentLevel === 14) return gameTiers["Exemplar"] >= 10;
  // else if (currentLevel === 15) return gameTiers["Exemplar"] >= 15;
  // else if (currentLevel === 16) return gameTiers["Exemplar"] >= 20;
  // else if (currentLevel === 17) return gameTiers["Harbinger"] >= 5;
  // else if (currentLevel === 18) return gameTiers["Harbinger"] >= 10;
  // else if (currentLevel === 19) return gameTiers["Harbinger"] >= 15;
  return false;
}

export function getCurrentLevel(value: Character) {
  return value.progress.filter(progress => progress.type === "level" &&
    Object.values(progress.data.decisions).some(data => data.type === "class")
  ).length;
}
export function currentLevel(level: number): Condition<any> {
  return (_, context: Character): boolean => getCurrentLevel(context) === level;
}

export type LevelChoice = {
  type: "level";
  data: {
    choiceID: ChoiceID;
    enabled?: Condition<any>;
    choices: (ItemChoice | ClassChoice)[]
  }
}

const LEVEL_1: LevelChoice = {
  type: "level",
  data: {
    choiceID: "level::1",
    enabled: currentLevel(0),
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
        label: "Major Common Item",
        choiceID: "level::item::major-common-1",
        condition: majorCommonItem
      }},
      {type: "item", data: {
        label: "Minor Common Item",
        choiceID: "level::item::minor-common-1",
        condition: minorCommonItem
      }},
      {type: "item", data: {
        choiceID: "pet-1",
        label: "Pet",
        required: alwaysFalse(),
        condition: initiatePet
      }}
    ]
  }
};
const LEVEL_2: LevelChoice = {
  type: "level",
  data: {
    choiceID: "level::2",
    enabled: currentLevel(1),
    choices: [
      {type: "class", data: {
        choiceID: "class::2",
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
        label: "Minor Common Item",
        choiceID: "level::item::minor-common-2",
        condition: minorCommonItem
      }}
    ]
  }
};
const LEVEL_3: LevelChoice = {
  type: "level",
  data: {
    choiceID: "level::3",
    enabled: currentLevel(2),
    choices: [
      {type: "class", data: {
        choiceID: "class::3",
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
        label: "Minor Common Item",
        choiceID: "level::item::minor-common-3",
        condition: minorCommonItem
      }}
    ]
  }
};
const LEVEL_4: LevelChoice = {
  type: "level",
  data: {
    choiceID: "level::4",
    enabled: alwaysFalse(),
    choices: [
      {type: "class", data: {
        choiceID: "class::4",
      }},
      {type: "item", data: {
        label: "Mundane Item (max 50gp)",
        choiceID: "level::item::mundane-7",
        condition: initiateMundaneItem
      }},
      {type: "item", data: {
        label: "Mundane Item (max 50gp)",
        choiceID: "level::item::mundane-8",
        condition: initiateMundaneItem
      }},
      {type: "item", data: {
        label: "Minor Common Item",
        choiceID: "level::item::minor-common-4",
        condition: minorCommonItem
      }},
      {type: "item", data: {
        label: "Major Common Item",
        choiceID: "level::item::major-common-2",
        condition: majorCommonItem
      }}
    ]
  }
};

export const DefaultLevelChoice = [
  LEVEL_1,
  LEVEL_2,
  LEVEL_3,
  LEVEL_4
] as LevelChoice[];
