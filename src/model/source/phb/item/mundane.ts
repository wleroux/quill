import {Item, ItemID} from "@/model/source/model/Item";
import { is } from "../../condition/generic/IsCondition";

export default {
  "Acid": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Acid",
    choices: [],
    value: 25_00
  },
  "Airship": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Airship",
    choices: [],
    value: 40000_00
  },
  "Alchemist's Fire": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Alchemist's Fire",
    choices: [],
    value: 50_00
  },
  "Alchemist's Supplies": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Alchemist's Supplies",
    choices: [],
    value: 50_00
  },
  "Ale (mug)": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Ale (mug)",
    choices: [],
    value: 4
  },
  "Amulet": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Amulet",
    choices: [],
    value: 5_00
  },
  "Antitoxin": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Antitoxin",
    choices: [],
    value: 50_00
  },
  "Assassin's Blood": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Assassin's Blood",
    choices: [],
    value: 150_00
  },
  "Backpack": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Backpack",
    choices: [],
    value: 2_00
  },
  "Ball Bearings": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Ball Bearings",
    choices: [],
    value: 1_00
  },
  "Barrel": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Barrel",
    choices: [],
    value: 2_00
  },
  "Basic Poison": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Basic Poison",
    choices: [],
    value: 100_00
  },
  "Basket": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Basket",
    choices: [],
    value: 40
  },
  "Bedroll": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Bedroll",
    choices: [],
    value: 1_00
  },
  "Bell": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Bell",
    choices: [],
    value: 1_00
  },
  "Blanket": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Blanket",
    choices: [],
    value: 50
  },
  "Block and Tackle": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Block and Tackle",
    choices: [],
    value: 1_00
  },
  "Bomb": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Bomb",
    choices: [],
    value: 100_00
  },
  "Book": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Book",
    choices: [],
    value: 25_00
  },
  "Bread (loaf)": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Bread (loaf)",
    choices: [],
    value: 2
  },
  "Brewer's Supplies": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Brewer's Supplies",
    choices: [],
    value: 20_00
  },
  "Bucket": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Bucket",
    choices: [],
    value: 5
  },
  "Bullseye Lantern": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Bullseye Lantern",
    choices: [],
    value: 10_00
  },
  "Burglar's Pack": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Burglar's Pack",
    choices: [
      {type: "item", data: {
        choiceID: "item::item-1",
        condition: is("Backpack")
      }},
      {type: "item", data: {
        choiceID: "item::item-2",
        condition: is("Ball Bearings")
      }},
      {type: "item", data: {
        choiceID: "item::item-3",
        condition: is("Bell")
      }},
      {type: "item", data: {
        choiceID: "item::item-4",
        condition: is("Candle")
      }},
      {type: "item", data: {
        choiceID: "item::item-5",
        condition: is("Crowbar")
      }},
      {type: "item", data: {
        choiceID: "item::item-6",
        condition: is("Hooded Lantern")
      }},
      {type: "item", data: {
        choiceID: "item::item-7",
        condition: is("Oil")
      }},
      {type: "item", data: {
        choiceID: "item::item-8",
        condition: is("Rations")
      }},
      {type: "item", data: {
        choiceID: "item::item-9",
        condition: is("Rope")
      }},
      {type: "item", data: {
        choiceID: "item::item-10",
        condition: is("Tinderbox")
      }},
      {type: "item", data: {
        choiceID: "item::item-11",
        condition: is("Waterskin")
      }},
    ],
    value: 16_00
  },
  "Burnt Othur Fumes": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Burnt Othur Fumes",
    choices: [],
    value: 500_00
  },
  "Calligrapher's Supplies": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Calligrapher's Supplies",
    choices: [],
    value: 10_00
  },
  "Caltrops": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Caltrops",
    choices: [],
    value: 1_00
  },
  "Camel": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Camel",
    choices: [],
    value: 50_00
  },
  "Candle": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Candle",
    choices: [],
    value: 1
  },
  "Carpenter's Tools": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Carpenter's Tools",
    choices: [],
    value: 8_00
  },
  "Carriage": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Carriage",
    choices: [],
    value: 100_00
  },
  "Carrion Crawler Mucus": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Carrion Crawler Mucus",
    choices: [],
    value: 200_00
  },
  "Cart": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Cart",
    choices: [],
    value: 15_00
  },
  "Cartographer's Tools": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Cartographer's Tools",
    choices: [],
    value: 15_00
  },
  "Chain": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Chain",
    choices: [],
    value: 5_00
  },
  "Chariot": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Chariot",
    choices: [],
    value: 250_00
  },
  "Cheese (wedge)": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Cheese (wedge)",
    choices: [],
    value: 10
  },
  "Chest": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Chest",
    choices: [],
    value: 5_00
  },
  "Climber's Kit": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Climber's Kit",
    choices: [],
    value: 25_00
  },
  "Cobbler's Tools": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Cobbler's Tools",
    choices: [],
    value: 5_00
  },
  "Common Wine (bottle)": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Common Wine (bottle)",
    choices: [],
    value: 20
  },
  "Component Pouch": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Component Pouch",
    choices: [],
    value: 25_00
  },
  "Cook's Utensils": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Cook's Utensils",
    choices: [],
    value: 1_00
  },
  "Costume": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Costume",
    choices: [],
    value: 5_00
  },
  "Crossbow Bolt Case": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Crossbow Bolt Case",
    choices: [],
    value: 1_00
  },
  "Crowbar": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Crowbar",
    choices: [],
    value: 2_00
  },
  "Dice Set": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Dice Set",
    choices: [],
    value: 10
  },
  "Diplomat's Pack": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Diplomat's Pack",
    choices: [
      {type: "item", data: {
        choiceID: "item::item-1",
        condition: is("Chest")
      }},
      {type: "item", data: {
        choiceID: "item::item-2",
        condition: is("Fine Clothes")
      }},
      {type: "item", data: {
        choiceID: "item::item-3",
        condition: is("Ink")
      }},
      {type: "item", data: {
        choiceID: "item::item-4",
        condition: is("Ink Pen")
      }},
      {type: "item", data: {
        choiceID: "item::item-5",
        condition: is("Lamp")
      }},
      {type: "item", data: {
        choiceID: "item::item-6",
        condition: is("Map or Scroll Case")
      }},
      {type: "item", data: {
        choiceID: "item::item-7",
        condition: is("Oil")
      }},
      {type: "item", data: {
        choiceID: "item::item-8",
        condition: is("Paper")
      }},
      {type: "item", data: {
        choiceID: "item::item-9",
        condition: is("Parchment")
      }},
      {type: "item", data: {
        choiceID: "item::item-10",
        condition: is("Perfume")
      }},
      {type: "item", data: {
        choiceID: "item::item-11",
        condition: is("Tinderbox")
      }},
    ],
    value: 39_00
  },
  "Disguise Kit": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Disguise Kit",
    choices: [],
    value: 25_00
  },
  "Draft Horse": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Draft Horse",
    choices: [],
    value: 50_00
  },
  "Dragonchess Set": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Dragonchess Set",
    choices: [],
    value: 1_00
  },
  "Dungeoneer's Pack": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Dungeoneer's Pack",
    choices: [
      {type: "item", data: {
        choiceID: "item::item-1",
        condition: is("Backpack")
      }},
      {type: "item", data: {
        choiceID: "item::item-2",
        condition: is("Caltrops")
      }},
      {type: "item", data: {
        choiceID: "item::item-3",
        condition: is("Crowbar")
      }},
      {type: "item", data: {
        choiceID: "item::item-4",
        condition: is("Oil")
      }},
      {type: "item", data: {
        choiceID: "item::item-5",
        condition: is("Rations")
      }},
      {type: "item", data: {
        choiceID: "item::item-6",
        condition: is("Rope")
      }},
      {type: "item", data: {
        choiceID: "item::item-7",
        condition: is("Tinderbox")
      }},
      {type: "item", data: {
        choiceID: "item::item-8",
        condition: is("Torch")
      }},
      {type: "item", data: {
        choiceID: "item::item-9",
        condition: is("Waterskin")
      }}
    ],
    value: 12_00
  },
  "Dynamite Stick": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Dynamite Stick",
    choices: [],
  },
  "Elephant": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Elephant",
    choices: [],
    value: 200_00
  },
  "Emblem": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Emblem",
    choices: [],
    value: 5_00
  },
  "Entertainer's Pack": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Entertainer's Pack",
    choices: [
      {type: "item", data: {
        choiceID: "item::item-1",
        condition: is("Backpack")
      }},
      {type: "item", data: {
        choiceID: "item::item-2",
        condition: is("Bedroll")
      }},
      {type: "item", data: {
        choiceID: "item::item-3",
        condition: is("Bell")
      }},
      {type: "item", data: {
        choiceID: "item::item-4",
        condition: is("Bullseye Lantern")
      }},
      {type: "item", data: {
        choiceID: "item::item-5",
        condition: is("Costume")
      }},
      {type: "item", data: {
        choiceID: "item::item-6",
        condition: is("Mirror")
      }},
      {type: "item", data: {
        choiceID: "item::item-7",
        condition: is("Oil")
      }},
      {type: "item", data: {
        choiceID: "item::item-8",
        condition: is("Rations")
      }},
      {type: "item", data: {
        choiceID: "item::item-9",
        condition: is("Tinderbox")
      }},
      {type: "item", data: {
        choiceID: "item::item-10",
        condition: is("Waterskin")
      }}
    ],
    value: 40_00
  },
  "Essence of Ether": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Essence of Ether",
    choices: [],
    value: 300_00
  },
  "Exotic Saddle": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Exotic Saddle",
    choices: [],
    value: 60_00
  },
  "Explorer's Pack": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Explorer's Pack",
    choices: [
      {type: "item", data: {
        choiceID: "explorer-pack::item-1",
        condition: is("Backpack")
      }},
      {type: "item", data: {
        choiceID: "explorer-pack::item-2",
        condition: is("Bedroll")
      }},
      {type: "item", data: {
        choiceID: "explorer-pack::item-3",
        condition: is("Oil")
      }},
      {type: "item", data: {
        choiceID: "explorer-pack::item-4",
        condition: is("Rations")
      }},
      {type: "item", data: {
        choiceID: "explorer-pack::item-5",
        condition: is("Rope")
      }},
      {type: "item", data: {
        choiceID: "explorer-pack::item-6",
        condition: is("Tinderbox")
      }},
      {type: "item", data: {
        choiceID: "explorer-pack::item-7",
        condition: is("Torch")
      }},
      {type: "item", data: {
        choiceID: "explorer-pack::item-8",
        condition: is("Waterskin")
      }}
    ],
    value: 10_00,
  },
  "Feed (per day)": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Feed (per day)",
    choices: [],
    value: 5
  },
  "Fine Clothes": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Fine Clothes",
    choices: [],
    value: 15_00
  },
  "Fine Wine (bottle)": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Fine Wine (bottle)",
    choices: [],
    value: 10_00
  },
  "Flask": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Flask",
    choices: [],
    value: 2
  },
  "Forgery Kit": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Forgery Kit",
    choices: [],
    value: 15_00
  },
  "Galley": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Galley",
    choices: [],
    value: 30000_00
  },
  "Glass Bottle": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Glass Bottle",
    choices: [],
    value: 2_00
  },
  "Glassblower's Tools": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Glassblower's Tools",
    choices: [],
    value: 30_00
  },
  "Gold Bar (5-pound)": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Gold Bar (5-pound)",
    choices: [],
    value: 250_00
  },
  "Grappling Hook": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Grappling Hook",
    choices: [],
    value: 2_00
  },
  "Gunpowder (keg)": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Gunpowder (keg)",
    choices: [],
    value: 250_00
  },
  "Gunpowder (powder horn)": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Gunpowder (powder horn)",
    choices: [],
    value: 35_00
  },
  "Healer's Kit": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Healer's Kit",
    choices: [],
    value: 5_00
  },
  "Herbalism Kit": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Herbalism Kit",
    choices: [],
    value: 5_00
  },
  "Holy Water": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Holy Water",
    choices: [],
    value: 25_00
  },
  "Hooded Lantern": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Hooded Lantern",
    choices: [],
    value: 5_00
  },
  "Hunting Trap": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Hunting Trap",
    choices: [],
    value: 5_00
  },
  "Ink": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Ink",
    choices: [],
    value: 10_00
  },
  "Ink Pen": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Ink Pen",
    choices: [],
    value: 2
  },
  "Iron Pot": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Iron Pot",
    choices: [],
    value: 2_00
  },
  "Iron Spike": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Iron Spike",
    choices: [],
    value: 10
  },
  "Iron Spikes": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Iron Spikes",
    choices: [],
    value: 1_00
  },
  "Jeweler's Tools": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Jeweler's Tools",
    choices: [],
    value: 25_00
  },
  "Jug": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Jug",
    choices: [],
    value: 2
  },
  "Keelboat": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Keelboat",
    choices: [],
    value: 3000_00
  },
  "Ladder": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Ladder",
    choices: [],
    value: 10
  },
  "Lamp": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Lamp",
    choices: [],
    value: 50
  },
  "Leatherworker's Tools": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Leatherworker's Tools",
    choices: [],
    value: 5_00
  },
  "Lock": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Lock",
    choices: [],
    value: 10_00
  },
  "Lolth's Sting": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Lolth's Sting",
    choices: [],
    value: 200_00
  },
  "Longship": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Longship",
    choices: [],
    value: 10000_00
  },
  "Magnifying Glass": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Magnifying Glass",
    choices: [],
    value: 100_00
  },
  "Malice": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Malice",
    choices: [],
    value: 250_00
  },
  "Manacles": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Manacles",
    choices: [],
    value: 2_00
  },
  "Map": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Map",
    choices: [],
    value: 1_00
  },
  "Map or Scroll Case": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Map or Scroll Case",
    choices: [],
    value: 1_00
  },
  "Mason's Tools": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Mason's Tools",
    choices: [],
    value: 10_00
  },
  "Mastiff": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Mastiff",
    choices: [],
    value: 25_00
  },
  "Midnight Tears": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Midnight Tears",
    choices: [],
    value: 1500_00
  },
  "Military Saddle": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Military Saddle",
    choices: [],
    value: 20_00
  },
  "Mirror": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Mirror",
    choices: [],
    value: 5_00
  },
  "Mule": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Mule",
    choices: [],
    value: 8_00
  },
  "Navigator's Tools": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Navigator's Tools",
    choices: [],
    value: 25_00
  },
  "Net": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Net",
    choices: [],
    value: 1_00
  },
  "Oil": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Oil",
    choices: [],
    value: 10
  },
  "Oil of Taggit": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Oil of Taggit",
    choices: [],
    value: 400_00
  },
  "Painter's Supplies": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Painter's Supplies",
    choices: [],
    value: 10_00
  },
  "Pale Tincture": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Pale Tincture",
    choices: [],
    value: 250_00
  },
  "Paper": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Paper",
    choices: [],
    value: 20
  },
  "Parchment": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Parchment",
    choices: [],
    value: 10
  },
  "Perfume": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Perfume",
    choices: [],
    value: 5_00
  },
  "Playing Cards": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Playing Cards",
    choices: [],
    value: 50
  },
  "Poisoner's Kit": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Poisoner's Kit",
    choices: [],
    value: 50_00
  },
  "Pole": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Pole",
    choices: [],
    value: 5
  },
  "Pony": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Pony",
    choices: [],
    value: 30_00
  },
  "Portable Ram": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Portable Ram",
    choices: [],
    value: 4_00
  },
  "Potter's Tools": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Potter's Tools",
    choices: [],
    value: 10_00
  },
  "Pouch": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Pouch",
    choices: [],
    value: 50
  },
  "Priest's Pack": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Priest's Pack",
    choices: [
      {type: "item", data: {
        choiceID: "item::item-1",
        condition: is("Backpack")
      }},
      {type: "item", data: {
        choiceID: "item::item-2",
        condition: is("Blanket")
      }},
      {type: "item", data: {
        choiceID: "item::item-3",
        condition: is("Holy Water")
      }},
      {type: "item", data: {
        choiceID: "item::item-4",
        condition: is("Lamp")
      }},
      {type: "item", data: {
        choiceID: "item::item-5",
        condition: is("Rations")
      }},
      {type: "item", data: {
        choiceID: "item::item-6",
        condition: is("Robe")
      }},
      {type: "item", data: {
        choiceID: "item::item-7",
        condition: is("Tinderbox")
      }},
    ],
    value: 33_00
  },
  "Psychic Blade": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Psychic Blade",
    choices: [],
  },
  "Purple Worm Poison": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Purple Worm Poison",
    choices: [],
    value: 2000_00
  },
  "Quiver": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Quiver",
    choices: [],
    value: 1_00
  },
  "Rations": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Rations",
    choices: [],
    value: 50
  },
  "Reliquary": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Reliquary",
    choices: [],
    value: 5_00
  },
  "Riding Horse": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Riding Horse",
    choices: [],
    value: 75_00
  },
  "Riding Saddle": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Riding Saddle",
    choices: [],
    value: 10_00
  },
  "Robe": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Robe",
    choices: [],
    value: 1_00
  },
  "Rope": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Rope",
    choices: [],
    value: 1_00
  },
  "Rowboat": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Rowboat",
    choices: [],
    value: 50_00
  },
  "Sack": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Sack",
    choices: [],
    value: 1
  },
  "Sailing Ship": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Sailing Ship",
    choices: [],
    value: 10000_00
  },
  "Scholar's Pack": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Scholar's Pack",
    choices: [
      {type: "item", data: {
        choiceID: "item::item-1",
        condition: is("Backpack")
      }},
      {type: "item", data: {
        choiceID: "item::item-2",
        condition: is("Book")
      }},
      {type: "item", data: {
        choiceID: "item::item-3",
        condition: is("Ink")
      }},
      {type: "item", data: {
        choiceID: "item::item-4",
        condition: is("Ink Pen")
      }},
      {type: "item", data: {
        choiceID: "item::item-5",
        condition: is("Lamp")
      }},
      {type: "item", data: {
        choiceID: "item::item-6",
        condition: is("Oil")
      }},
      {type: "item", data: {
        choiceID: "item::item-7",
        condition: is("Parchment")
      }},
      {type: "item", data: {
        choiceID: "item::item-8",
        condition: is("Tinderbox")
      }},
    ],
    value: 40_00
  },
  "Serpent Venom": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Serpent Venom",
    choices: [],
    value: 200_00
  },
  "Shovel": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Shovel",
    choices: [],
    value: 2_00
  },
  "Signal Whistle": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Signal Whistle",
    choices: [],
    value: 5
  },
  "Silver Bar (2-pound)": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Silver Bar (2-pound)",
    choices: [],
    value: 10_00
  },
  "Silver Bar (5-pound)": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Silver Bar (5-pound)",
    choices: [],
    value: 25_00
  },
  "Sled": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Sled",
    choices: [],
    value: 20_00
  },
  "Smith's Tools": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Smith's Tools",
    choices: [],
    value: 20_00
  },
  "Sprig of Mistletoe": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Sprig of Mistletoe",
    choices: [],
    value: 1_00
  },
  "Spyglass": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Spyglass",
    choices: [],
    value: 1000_00
  },
  "Stabling (per day)": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Stabling (per day)",
    choices: [],
    value: 5
  },
  "String": {
    tier: "Minor",
    rarity: "Mundane",
    label: "String",
    choices: [],
    value: 10
  },
  "Tent": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Tent",
    choices: [],
    value: 2_00
  },
  "Thieves' Tools": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Thieves' Tools",
    choices: [],
    value: 25_00
  },
  "Three-Dragon Ante Set": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Three-Dragon Ante Set",
    choices: [],
    value: 1_00
  },
  "Tinderbox": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Tinderbox",
    choices: [],
    value: 50
  },
  "Tinker's Tools": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Tinker's Tools",
    choices: [],
    value: 50_00
  },
  "Torch": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Torch",
    choices: [],
    value: 1
  },
  "Torpor": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Torpor",
    choices: [],
    value: 600_00
  },
  "Traveler's Clothes": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Traveler's Clothes",
    choices: [],
    value: 2_00
  },
  "Trinket": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Trinket",
    choices: [],
  },
  "Truth Serum": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Truth Serum",
    choices: [],
    value: 150_00
  },
  "Vial": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Vial",
    choices: [],
    value: 1_00
  },
  "Wagon": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Wagon",
    choices: [],
    value: 35_00
  },
  "Warhorse": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Warhorse",
    choices: [],
    value: 400_00
  },
  "Warship": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Warship",
    choices: [],
    value: 25000_00
  },
  "Waterskin": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Waterskin",
    choices: [],
    value: 20
  },
  "Weaver's Tools": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Weaver's Tools",
    choices: [],
    value: 1_00
  },
  "Woodcarver's Tools": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Woodcarver's Tools",
    choices: [],
    value: 1_00
  },
  "Wyvern Poison": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Wyvern Poison",
    choices: [],
    value: 1200_00
  },
  "Yew Wand": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Yew Wand",
    choices: [],
    value: 10_00
  },
  "Arcane Focus": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Arcane Focus",
    choices: [],
  },
  "Artisan's Tools": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Artisan's Tools",
    choices: [],
  },
  "Druidic Focus": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Druidic Focus",
    choices: [],
  },
  "Gaming Set": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Gaming Set",
    choices: [],
  },
  "Holy Symbol": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Holy Symbol",
    choices: [
      {type: "item", data: {
        choiceID: "item::item-1",
        condition: is("Amulet", "Emblem", "Reliquary")
      }}
    ],
  },
  "Musical Instrument": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Musical Instrument",
    choices: [],
  },
  "Antimatter Rifle": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Antimatter Rifle",
    choices: [],
  },
  "Arrows (20)": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Arrows (20)",
    choices: [],
    value: 1_00
  },
  "Automatic Rifle": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Automatic Rifle",
    choices: [],
  },
  "Bagpipes": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Bagpipes",
    choices: [],
    value: 30_00
  },
  "Battleaxe": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Battleaxe",
    choices: [],
    value: 10_00
  },
  "Blowgun": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Blowgun",
    choices: [],
    value: 10_00
  },
  "Bolts (20)": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Bolts (20)",
    choices: [],
    value: 1_00
  },
  "Breastplate": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Breastplate",
    choices: [],
    value: 400_00
  },
  "Chain Mail": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Chain Mail",
    choices: [],
    value: 75_00
  },
  "Chain Shirt": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Chain Shirt",
    choices: [],
    value: 50_00
  },
  "Club": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Club",
    choices: [],
    value: 10
  },
  "Crystal": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Crystal",
    choices: [],
    value: 10_00
  },
  "Dagger": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Dagger",
    choices: [],
    value: 2_00
  },
  "Dart": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Dart",
    choices: [],
    value: 5
  },
  "Drum": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Drum",
    choices: [],
    value: 6_00
  },
  "Dulcimer": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Dulcimer",
    choices: [],
    value: 25_00
  },
  "Firearm Bullets (10)": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Firearm Bullets (10)",
    choices: [],
    value: 3_00
  },
  "Flail": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Flail",
    choices: [],
    value: 10_00
  },
  "Flute": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Flute",
    choices: [],
    value: 2_00
  },
  "Glaive": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Glaive",
    choices: [],
    value: 20_00
  },
  "Greataxe": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Greataxe",
    choices: [],
    value: 30_00
  },
  "Greatclub": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Greatclub",
    choices: [],
    value: 20
  },
  "Greatsword": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Greatsword",
    choices: [],
    value: 50_00
  },
  "Halberd": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Halberd",
    choices: [],
    value: 20_00
  },
  "Half Plate Armor": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Half Plate Armor",
    choices: [],
    value: 750_00
  },
  "Hand Crossbow": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Hand Crossbow",
    choices: [],
    value: 75_00
  },
  "Handaxe": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Handaxe",
    choices: [],
    value: 5_00
  },
  "Heavy Crossbow": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Heavy Crossbow",
    choices: [],
    value: 50_00
  },
  "Hide Armor": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Hide Armor",
    choices: [],
    value: 10_00
  },
  "Horn": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Horn",
    choices: [],
    value: 3_00
  },
  "Hunting Rifle": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Hunting Rifle",
    choices: [],
  },
  "Javelin": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Javelin",
    choices: [],
    value: 50
  },
  "Lance": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Lance",
    choices: [],
    value: 10_00
  },
  "Laser Pistol": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Laser Pistol",
    choices: [],
  },
  "Laser Rifle": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Laser Rifle",
    choices: [],
  },
  "Leather Armor": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Leather Armor",
    choices: [],
    value: 10_00
  },
  "Light Crossbow": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Light Crossbow",
    choices: [],
    value: 25_00
  },
  "Light Hammer": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Light Hammer",
    choices: [],
    value: 2_00
  },
  "Longbow": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Longbow",
    choices: [],
    value: 50_00
  },
  "Longsword": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Longsword",
    choices: [],
    value: 15_00
  },
  "Lute": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Lute",
    choices: [],
    value: 35_00
  },
  "Lyre": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Lyre",
    choices: [],
    value: 30_00
  },
  "Mace": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Mace",
    choices: [],
    value: 5_00
  },
  "Maul": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Maul",
    choices: [],
    value: 10_00
  },
  "Morningstar": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Morningstar",
    choices: [],
    value: 15_00
  },
  "Musket": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Musket",
    choices: [],
    value: 500_00
  },
  "Needles (50)": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Needles (50)",
    choices: [],
    value: 1_00
  },
  "Orb": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Orb",
    choices: [],
    value: 20_00
  },
  "Padded Armor": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Padded Armor",
    choices: [],
    value: 5_00
  },
  "Pan Flute": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Pan Flute",
    choices: [],
    value: 12_00
  },
  "Pike": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Pike",
    choices: [],
    value: 5_00
  },
  "Pistol": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Pistol",
    choices: [],
    value: 250_00
  },
  "Plate Armor": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Plate Armor",
    choices: [],
    value: 1500_00
  },
  "Quarterstaff": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Quarterstaff",
    choices: [],
    value: 20
  },
  "Rapier": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Rapier",
    choices: [],
    value: 25_00
  },
  "Revolver": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Revolver",
    choices: [],
  },
  "Ring Mail": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Ring Mail",
    choices: [],
    value: 30_00
  },
  "Rod": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Rod",
    choices: [],
    value: 10_00
  },
  "Scale Mail": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Scale Mail",
    choices: [],
    value: 50_00
  },
  "Scimitar": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Scimitar",
    choices: [],
    value: 25_00
  },
  "Semiautomatic Pistol": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Semiautomatic Pistol",
    choices: [],
  },
  "Shawm": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Shawm",
    choices: [],
    value: 2_00
  },
  "Shield": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Shield",
    choices: [],
    value: 10_00
  },
  "Shortbow": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Shortbow",
    choices: [],
    value: 25_00
  },
  "Shortsword": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Shortsword",
    choices: [],
    value: 10_00
  },
  "Shotgun": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Shotgun",
    choices: [],
  },
  "Sickle": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Sickle",
    choices: [],
    value: 1_00
  },
  "Sling": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Sling",
    choices: [],
    value: 10
  },
  "Sling Bullets (20)": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Sling Bullets (20)",
    choices: [],
    value: 4
  },
  "Spear": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Spear",
    choices: [],
    value: 1_00
  },
  "Splint Armor": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Splint Armor",
    choices: [],
    value: 200_00
  },
  "Staff": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Staff",
    choices: [],
    value: 5_00
  },
  "Studded Leather Armor": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Studded Leather Armor",
    choices: [],
    value: 45_00
  },
  "Trident": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Trident",
    choices: [],
    value: 5_00
  },
  "Viol": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Viol",
    choices: [],
    value: 30_00
  },
  "Wand": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Wand",
    choices: [],
    value: 10_00
  },
  "War Pick": {
    tier: "Minor",
    rarity: "Mundane",
    label: "War Pick",
    choices: [],
    value: 5_00
  },
  "Warhammer": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Warhammer",
    choices: [],
    value: 15_00
  },
  "Whip": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Whip",
    choices: [],
    value: 2_00
  },
  "Wooden Staff": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Wooden Staff",
    choices: [],
    value: 5_00
  },
  "Fragmentation Grenade": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Fragmentation Grenade",
    choices: [],
  },
  "Grenade Launcher": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Grenade Launcher",
    choices: [],
  },
  "Smoke Grenade": {
    tier: "Minor",
    rarity: "Mundane",
    label: "Smoke Grenade",
    choices: [],
    value: 50_00
  }
} as const as {[itemID: ItemID]: Item};
