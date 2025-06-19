import {Tool, ToolID} from "@/model/source/model/Tool";

const PHB_DICE: Tool = {
  label: "Dice",
  type: "gaming set"
};
const PHB_DRAGONCHESS: Tool = {
  label: "Dragonchess",
  type: "gaming set"
};
const PHB_PLAYING_CARDS: Tool = {
  label: "Playing Cards",
  type: "gaming set"
};
const PHB_THREE_DRAGON_ANTE: Tool = {
  label: "Three-Dragon Ante",
  type: "gaming set"
};

export const PHB_GAMING_SET_TOOLS: {[toolID: ToolID]: Tool} = {
  "Dice": PHB_DICE,
  "Dragonchess": PHB_DRAGONCHESS,
  "Playing Cards": PHB_PLAYING_CARDS,
  "Three-Dragon Ante": PHB_THREE_DRAGON_ANTE
} as const;
