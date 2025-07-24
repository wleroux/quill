import {Item, ItemID} from "@/model/source/model/Item";

export default {
  "Bat": {
    label: "Bat",
    tier: "Minor",
    rarity: "Mundane",
    value: 0,
    type: "Mount",
    choices: []
  },
  "Cat": {
    label: "Cat",
    tier: "Minor",
    rarity: "Mundane",
    value: 1_00,
    type: "Mount",
    choices: []
  },
  "Frog": {
    label: "Frog",
    tier: "Minor",
    rarity: "Mundane",
    value: 0,
    type: "Mount",
    choices: []
  },
  "Hawk": {
    label: "Hawk",
    tier: "Minor",
    rarity: "Mundane",
    value: 0,
    type: "Mount",
    choices: []
  },
  "Lizard": {
    label: "Lizard",
    tier: "Minor",
    rarity: "Mundane",
    value: 0,
    type: "Mount",
    choices: []
  },
  "Octopus": {
    label: "Octopus",
    tier: "Minor",
    rarity: "Mundane",
    value: 0,
    type: "Mount",
    choices: []
  },
  "Owl": {
    label: "Owl",
    tier: "Minor",
    rarity: "Mundane",
    value: 0,
    type: "Mount",
    choices: []
  },
  "Rat": {
    label: "Rat",
    tier: "Minor",
    rarity: "Mundane",
    value: 0,
    type: "Mount",
    choices: []
  },
  "Raven": {
    label: "Raven",
    tier: "Minor",
    rarity: "Mundane",
    value: 0,
    type: "Mount",
    choices: []
  },
  "Spider": {
    label: "Spider",
    tier: "Minor",
    rarity: "Mundane",
    value: 0,
    type: "Mount",
    choices: []
  },
  "Weasel": {
    label: "Weasel",
    tier: "Minor",
    rarity: "Mundane",
    value: 0,
    type: "Mount",
    choices: []
  },
  "Chicken": {
    rarity: "Mundane",
    tier: "Minor",
    label: "Chicken",
    type: "Mount",
    value: 2,
    choices: []
  },
  "Cow": {
    rarity: "Mundane",
    tier: "Minor",
    label: "Cow",
    type: "Mount",
    value: 10,
    choices: []
  },
  "Dog": {
    rarity: "Mundane",
    tier: "Minor",
    label: "Dog",
    type: "Mount",
    value: 1_00,
    choices: []
  },
  "Goat": {
    rarity: "Mundane",
    tier: "Minor",
    label: "Goat",
    type: "Mount",
    value: 1_00,
    choices: []
  },
  "Ox": {
    rarity: "Mundane",
    tier: "Minor",
    label: "Ox",
    type: "Mount",
    value: 15_00,
    choices: []
  },
  "Pig": {
    rarity: "Mundane",
    tier: "Minor",
    label: "Pig",
    type: "Mount",
    value: 3_00,
    choices: []
  },
  "Sheep": {
    rarity: "Mundane",
    tier: "Minor",
    label: "Sheep",
    type: "Mount",
    value: 2_00,
    choices: []
  }
} as const satisfies {[itemID: ItemID]: Item};
