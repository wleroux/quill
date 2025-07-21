import {Tool, ToolID} from "@/model/source/model/Tool";
import {is} from "../../condition/generic/IsCondition";

const PHB_DICE: Tool = {
  label: "Dice",
  type: "gaming set",
  choices: [
    {type: "item", data: {choiceID: "tool::item-1", condition: is("Dice Set")}}
  ]
};
const PHB_DRAGONCHESS: Tool = {
  label: "Dragonchess",
  type: "gaming set",
  choices: [
    {type: "item", data: {choiceID: "tool::item-1", condition: is("Dragonchess Set")}}
  ]
};
const PHB_PLAYING_CARDS: Tool = {
  label: "Playing Cards",
  type: "gaming set",
  choices: [
    {type: "item", data: {choiceID: "tool::item-1", condition: is("Playing Cards")}}
  ]
};
const PHB_THREE_DRAGON_ANTE: Tool = {
  label: "Three-Dragon Ante",
  type: "gaming set",
  choices: [
    {type: "item", data: {choiceID: "tool::item-1", condition: is("Three-Dragon Ante Set")}}
  ]
};

export const PHB_GAMING_SET_TOOLS: {[toolID: ToolID]: Tool} = {
  "Dice": PHB_DICE,
  "Dragonchess": PHB_DRAGONCHESS,
  "Playing Cards": PHB_PLAYING_CARDS,
  "Three-Dragon Ante": PHB_THREE_DRAGON_ANTE
} as const;
