import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Condition} from "@/model/source/condition/Condition";
import {ItemChoice} from "@/model/character/level/item/ItemChoice";
import {ClassChoice} from "./class/ClassChoice";
import {initiateMundaneItem, majorCommonItem, minorCommonItem} from "@/model/source/condition/item/itemTypeCondition";
import {Character} from "@/model/character/Character";

export function getCurrentLevel(value: Character) {
  return value.progress.filter(progress => progress.type === "level" &&
    Object.values(progress.data.decisions).some(data => data.type === "class")
  ).length;
}
function currentLevel(level: number): Condition<undefined> {
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
    enabled: currentLevel(1),
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

export const DefaultLevelChoice = [
  LEVEL_1,
  LEVEL_2
] as LevelChoice[];
