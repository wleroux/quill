import {Item, ItemID} from "@/model/source/model/Item";
import SPELLS from "../spell/index";

const ARMOR_OF_GLEAMING = {
  label: "Armor of Gleaming",
  rarity: "Common",
  tier: "Major",
  choices: [
    {type: "simple", data: {
      label: "Variant",
      choiceID: "variant",
      options: [
        {optionID: "Breastplate", label: "Breastplate of Gleaming"},
        {optionID: "Chain Mail", label: "Chain Mail of Gleaming"},
        {optionID: "Chain Shirt", label: "Chain Shirt of Gleaming"},
        {optionID: "Half Plate Armor", label: "Half Plate Armor of Gleaming"},
        {optionID: "Hide Armor", label: "Hide Armor of Gleaming"},
        {optionID: "Leather Armor", label: "Leather Armor of Gleaming"},
        {optionID: "Padded Armor", label: "Padded Armor of Gleaming"},
        {optionID: "Plate Armor", label: "Plate Armor of Gleaming"},
        {optionID: "Ring Mail", label: "Ring Mail of Gleaming"},
        {optionID: "Scale Mail", label: "Scale Mail of Gleaming"},
        {optionID: "Splint Armor", label: "Splint Armor of Gleaming"},
        {optionID: "Studded Leather", label: "Studded Leather Armor of Gleaming"},
      ]
    }}
  ]
} as const satisfies Item;
const BEAD_OF_NOURISHMENT = {
  label: "Bead of Nourishment",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const BEAD_OF_REFRESHMENT = {
  label: "Bead of Refreshment",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const BOOTS_OF_FALSE_TRACKS = {
  label: "Boots of False Tracks",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const CANDLE_OF_THE_DEEP = {
  label: "Candle of the Deep",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const CAST_OFF_ARMOR = {
  label: "Cast-Off Armor",
  rarity: "Common",
  tier: "Major",
  choices: [
    {type: "simple", data: {
      label: "Variant",
      choiceID: "variant",
      options: [
        {optionID: "Breastplate", label: "Cast-Off Breastplate"},
        {optionID: "Chain Mail", label: "Cast-Off Chain Mail"},
        {optionID: "Chain Shirt", label: "Cast-Off Chain Shirt"},
        {optionID: "Half Plate Armor", label: "Cast-Off Half Plate Armor"},
        {optionID: "Hide Armor", label: "Cast-Off Hide Armor"},
        {optionID: "Leather Armor", label: "Cast-Off Leather Armor"},
        {optionID: "Padded Armor", label: "Cast-Off Padded Armor"},
        {optionID: "Plate Armor", label: "Cast-Off Plate Armor"},
        {optionID: "Ring Mail", label: "Cast-Off Ring Mail"},
        {optionID: "Scale Mail", label: "Cast-Off Scale Mail"},
        {optionID: "Splint Armor", label: "Cast-Off Splint Armor"},
        {optionID: "Studded Leather", label: "Cast-Off Studded Leather Armor"},
      ]
    }}
  ]
} as const satisfies Item;
const CHARLATANS_DIE = {
  label: "Charlatan's Die",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const CLOAK_OF_BILLOWING = {
  label: "Cloak of Billowing",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const CLOAK_OF_MANY_FASHIONS = {
  label: "Cloak of Many Fashions",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const CLOCKWORK_AMULET = {
  label: "Clockwork Amulet",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const CLOTHES_OF_MENDING = {
  label: "Clothes of Mending",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const DARK_SHARD_AMULET = {
  label: "Dark Shard Amulet",
  tier: "Major",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const DREAD_HELM = {
  label: "Dread Helm",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const EAR_HORN_OF_HEARING = {
  label: "Ear Horn of Hearing",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const ENDURING_SPELLBOOK = {
  label: "Enduring Spellbook",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const ERSATZ_EYE = {
  label: "Ersatz Eye",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const HAT_OF_VERMIN = {
  label: "Hat of Vermin",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const HAT_OF_WIZARDRY = {
  label: "Hat of Wizardry",
  tier: "Major",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const HEWARDS_HANDY_SPICE_POUCH = {
  label: "Heward's Handy Spice Pouch",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const HORN_OF_SILENT_ALARM = {
  label: "Horn of Silent Alarm",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const INSTRUMENT_OF_ILLUSIONS = {
  label: "Instrument of Illusions",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const INSTRUMENT_OF_SCRIBING = {
  label: "Instrument of Scribing",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const LOCK_OF_TRICKERY = {
  label: "Lock of Trickery",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const MOON_TOUCHED_SWORD = {
  label: "Moon-Touched Sword",
  rarity: "Common",
  tier: "Major",
  choices: [
    {type: "simple", data: {
      label: "Variant",
      choiceID: "variant",
      options: [
        // {optionID: "Double-Bladed Scimitar", label: "Moon-Touched Double-Bladed Scimitar"},
        {optionID: "Greatsword", label: "Moon-Touched Greatsword"},
        {optionID: "Longsword", label: "Moon-Touched Longsword"},
        {optionID: "Rapier", label: "Moon-Touched Rapier"},
        {optionID: "Scimitar", label: "Moon-Touched Scimitar"},
        {optionID: "Shortsword", label: "Moon-Touched Shortsword"}
      ]
    }}
  ]
} as const satisfies Item;
const MYSTERY_KEY = {
  label: "Mystery Key",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const ORB_OF_DIRECTION = {
  label: "Orb of Direction",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const ORB_OF_TIME = {
  label: "Orb of Time",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const PERFUME_OF_BEWITCHING = {
  label: "Perfume of Bewitching",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const PIPE_OF_SMOKE_MONSTERS = {
  label: "Pipe of Smoke Monsters",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const POLE_OF_ANGLING = {
  label: "Pole of Angling",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const POLE_OF_COLLAPSING = {
  label: "Pole of Collapsing",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const POT_OF_AWAKENING = {
  label: "Pot of Awakening",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const POTION_OF_CLIMBING = {
  label: "Potion of Climbing",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const POTION_OF_COMPREHENSION = {
  label: "Potion of Comprehension",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const POTION_OF_HEALING = {
  label: "Potion of Healing",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const PROSTHETIC_LIMB = {
  label: "Prosthetic Limb",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const RIVAL_COIN = {
  label: "Rival Coin",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const ROPE_OF_MENDING = {
  label: "Rope of Mending",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const RUBY_OF_THE_WAR_MAGE = {
  label: "Ruby of the War Mage",
  tier: "Major",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const SHIELD_OF_EXPRESSION = {
  label: "Shield of Expression",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const SILVERED_WEAPON = {
  label: "Silvered Weapon",
  tier: "Major",
  rarity: "Common",
  choices: [
    {type: "simple", data: {
      label: "Variant",
      choiceID: "variant",
      options: [
        // {optionID: "Antimatter Rifle", label: "Silvered Antimatter Rifle"},
        // {optionID: "Automatic Rifle", label: "Silvered Automatic Rifle"},
        {optionID: "Battleaxe", label: "Silvered Battleaxe"},
        {optionID: "Blowgun", label: "Silvered Blowgun"},
        {optionID: "Club", label: "Silvered Club"},
        {optionID: "Dagger", label: "Silvered Dagger"},
        {optionID: "Dart", label: "Silvered Dart"},
        // {optionID: "Double-Bladed Scimitar", label: "Silvered Double-Bladed Scimitar"},
        {optionID: "Flail", label: "Silvered Flail"},
        {optionID: "Glaive", label: "Silvered Glaive"},
        {optionID: "Greataxe", label: "Silvered Greataxe"},
        {optionID: "Greatclub", label: "Silvered Greatclub"},
        {optionID: "Greatsword", label: "Silvered Greatsword"},
        {optionID: "Halberd", label: "Silvered Halberd"},
        {optionID: "Hand Crossbow", label: "Silvered Hand Crossbow"},
        {optionID: "Handaxe", label: "Silvered Handaxe"},
        {optionID: "Heavy Crossbow", label: "Silvered Heavy Crossbow"},
        // {optionID: "Hooked Shortspear", label: "Silvered Hooked Shortspear"},
        // {optionID: "Hoopak", label: "Silvered Hoopak"},
        // {optionID: "Hunting Rifle", label: "Silvered Hunting Rifle"},
        {optionID: "Javelin", label: "Silvered Javelin"},
        {optionID: "Lance", label: "Silvered Lance"},
        // {optionID: "Laser Pistol", label: "Silvered Laser Pistol"},
        // {optionID: "Laser Rifle", label: "Silvered Laser Rifle"},
        {optionID: "Light Crossbow", label: "Silvered Light Crossbow"},
        {optionID: "Light Hammer", label: "Silvered Light Hammer"},
        {optionID: "Light Repeating Crossbow", label: "Silvered Light Repeating Crossbow"},
        {optionID: "Longbow", label: "Silvered Longbow"},
        {optionID: "Longsword", label: "Silvered Longsword"},
        {optionID: "Mace", label: "Silvered Mace"},
        {optionID: "Maul", label: "Silvered Maul"},
        {optionID: "Morningstar", label: "Silvered Morningstar"},
        {optionID: "Musket", label: "Silvered Musket"},
        {optionID: "Pike", label: "Silvered Pike"},
        {optionID: "Pistol", label: "Silvered Pistol"},
        {optionID: "Quarterstaff", label: "Silvered Quarterstaff"},
        {optionID: "Rapier", label: "Silvered Rapier"},
        // {optionID: "Revolver", label: "Silvered Revolver"},
        {optionID: "Scimitar", label: "Silvered Scimitar"},
        // {optionID: "Semiautomatic Pistol", label: "Silvered Semiautomatic Pistol"},
        {optionID: "Shortbow", label: "Silvered Shortbow"},
        {optionID: "Shortsword", label: "Silvered Shortsword"},
        // {optionID: "Shotgun", label: "Silvered Shotgun"},
        {optionID: "Sickle", label: "Silvered Sickle"},
        {optionID: "Sling", label: "Silvered Sling"},
        {optionID: "Spear", label: "Silvered Spear"},
        {optionID: "Staff", label: "Silvered Staff"},
        {optionID: "Trident", label: "Silvered Trident"},
        {optionID: "War Pick", label: "Silvered War Pick"},
        {optionID: "Warhammer", label: "Silvered Warhammer"},
        {optionID: "Whip", label: "Silvered Whip"},
        {optionID: "Wooden Staff", label: "Silvered Wooden Staff"},
        {optionID: "Yklwa", label: "Silvered Yklwa"},
      ]
    }}
  ]
} as const satisfies Item;
const SMOLDERING_ARMOR = {
  label: "Smoldering Armor",
  rarity: "Common",
  tier: "Major",
  choices: [
    {type: "simple", data: {
      label: "Variant",
      choiceID: "variant",
      options: [
        {optionID: "Breastplate", label: "Smoldering Breastplate"},
        {optionID: "Chain Mail", label: "Smoldering Chain Mail"},
        {optionID: "Chain Shirt", label: "Smoldering Chain Shirt"},
        {optionID: "Half Plate Armor", label: "Smoldering Half Plate Armor"},
        {optionID: "Hide Armor", label: "Smoldering Hide Armor"},
        {optionID: "Leather Armor", label: "Smoldering Leather Armor"},
        {optionID: "Padded Armor", label: "Smoldering Padded Armor"},
        {optionID: "Plate Armor", label: "Smoldering Plate Armor"},
        {optionID: "Ring Mail", label: "Smoldering Ring Mail"},
        {optionID: "Scale Mail", label: "Smoldering Scale Mail"},
        {optionID: "Splint Armor", label: "Smoldering Splint Armor"},
        {optionID: "Studded Leather", label: "Smoldering Studded Leather Armor"},
      ]
    }}
  ]
} as const satisfies Item;
const SPELL_SCROLL_CANTRIP = {
  label: "Spell Scroll (Cantrip)",
  rarity: "Common",
  tier: "Minor",
  choices: [
    {type: "simple", data: {
      label: "Spell",
      choiceID: "spell",
      options: Object.keys(SPELLS)
        .filter(spellID => SPELLS[spellID].level === "cantrip")
        .map(spellID => ({optionID: spellID, label: SPELLS[spellID].label}))
    }}
  ]
} as const satisfies Item;
const SPELL_SCROLL_LEVEL_1 = {
  label: "Spell Scroll (Level 1)",
  rarity: "Common",
  tier: "Minor",
  choices: [
    {type: "simple", data: {
      label: "Spell",
      choiceID: "spell",
      options: Object.keys(SPELLS)
        .filter(spellID => SPELLS[spellID].level === 1)
        .map(spellID => ({optionID: spellID, label: SPELLS[spellID].label}))
    }}
  ]
} as const satisfies Item;
const STAFF_OF_ADORNMENT = {
  label: "Staff of Adornment",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const STAFF_OF_BIRDCALLS = {
  label: "Staff of Birdcalls",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const STAFF_OF_FLOWERS = {
  label: "Staff of Flowers",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const SYLVAN_TALON = {
  label: "Sylvan Talon",
  rarity: "Common",
  tier: "Major",
  choices: [
    {type: "simple", data: {
      label: "Variant",
      choiceID: "variant",
      options: [
        {optionID: "Dagger", label: "Sylvan Talon Dagger"},
        {optionID: "Rapier", label: "Sylvan Talon Rapier"},
        {optionID: "Scimitar", label: "Sylvan Talon Scimitar"},
        {optionID: "Shortsword", label: "Sylvan Talon Shortsword"},
        {optionID: "Sickle", label: "Sylvan Talon Sickle"},
        {optionID: "Spear", label: "Sylvan Talon Spear"}
      ]
    }}
  ]
} as const satisfies Item;
const TALKING_DOLL = {
  label: "Talking Doll",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const TANKARD_OF_SOBRIETY = {
  label: "Tankard of Sobriety",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const VETERANS_CANE = {
  label: "Veteran's Cane",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const WALLOPING_AMMUNITION = {
  label: "Walloping Ammunition",
  rarity: "Common",
  tier: "Major",
  choices: [
    {type: "simple", data: {
      label: "Variant",
      choiceID: "variant",
      options: [
        {optionID: "Arrow", label: "Walloping Arrow"},
        {optionID: "Bolt", label: "Walloping Bolt"},
        // {optionID: "Energy Cell", label: "Walloping Energy Cell"},
        {optionID: "Firearm Bullet", label: "Walloping Firearm Bullet"},
        {optionID: "Needle", label: "Walloping Needle"},
        {optionID: "Sling Bullet", label: "Walloping Sling Bullet"}
      ]
    }}
  ]
} as const satisfies Item;
const WAND_OF_CONDUCTING = {
  label: "Wand of Conducting",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;
const WAND_OF_PYROTECHNICS = {
  label: "Wand of Pyrotechnics",
  tier: "Minor",
  rarity: "Common",
  choices: []
} as const satisfies Item;

export default {
  "Armor of Gleaming": ARMOR_OF_GLEAMING,
  "Bead of Nourishment": BEAD_OF_NOURISHMENT,
  "Bead of Refreshment": BEAD_OF_REFRESHMENT,
  "Boots of False Tracks": BOOTS_OF_FALSE_TRACKS,
  "Candle of the Deep": CANDLE_OF_THE_DEEP,
  "Cast-Off Armor": CAST_OFF_ARMOR,
  "Charlatan's Die": CHARLATANS_DIE,
  "Cloak of Billowing": CLOAK_OF_BILLOWING,
  "Cloak of Many Fashions": CLOAK_OF_MANY_FASHIONS,
  "Clockwork Amulet": CLOCKWORK_AMULET,
  "Clothes of Mending": CLOTHES_OF_MENDING,
  "Dark Shard Amulet": DARK_SHARD_AMULET,
  "Dread Helm": DREAD_HELM,
  "Ear Horn of Hearing": EAR_HORN_OF_HEARING,
  "Enduring Spellbook": ENDURING_SPELLBOOK,
  "Ersatz Eye": ERSATZ_EYE,
  "Hat of Vermin": HAT_OF_VERMIN,
  "Hat of Wizardry": HAT_OF_WIZARDRY,
  "Heward's Handy Spice Pouch": HEWARDS_HANDY_SPICE_POUCH,
  "Horn of Silent Alarm": HORN_OF_SILENT_ALARM,
  "Instrument of Illusions": INSTRUMENT_OF_ILLUSIONS,
  "Instrument of Scribing": INSTRUMENT_OF_SCRIBING,
  "Lock of Trickery": LOCK_OF_TRICKERY,
  "Moon-Touched Sword": MOON_TOUCHED_SWORD,
  "Mystery Key": MYSTERY_KEY,
  "Orb of Direction": ORB_OF_DIRECTION,
  "Orb of Time": ORB_OF_TIME,
  "Perfume of Bewitching": PERFUME_OF_BEWITCHING,
  "Pipe of Smoke Monsters": PIPE_OF_SMOKE_MONSTERS,
  "Pole of Angling": POLE_OF_ANGLING,
  "Pole of Collapsing": POLE_OF_COLLAPSING,
  "Pot of Awakening": POT_OF_AWAKENING,
  "Potion of Climbing": POTION_OF_CLIMBING,
  "Potion of Comprehension": POTION_OF_COMPREHENSION,
  "Potion of Healing": POTION_OF_HEALING,
  "Prosthetic Limb": PROSTHETIC_LIMB,
  "Rival Coin": RIVAL_COIN,
  "Rope of Mending": ROPE_OF_MENDING,
  "Ruby of the War Mage": RUBY_OF_THE_WAR_MAGE,
  "Shield of Expression": SHIELD_OF_EXPRESSION,
  "Silvered Weapon": SILVERED_WEAPON,
  "Smoldering Armor": SMOLDERING_ARMOR,
  "Spell Scroll (Cantrip)": SPELL_SCROLL_CANTRIP,
  "Spell Scroll (Level 1)": SPELL_SCROLL_LEVEL_1,
  "Staff of Adornment": STAFF_OF_ADORNMENT,
  "Staff of Birdcalls": STAFF_OF_BIRDCALLS,
  "Staff of Flowers": STAFF_OF_FLOWERS,
  "Sylvan Talon": SYLVAN_TALON,
  "Talking Doll": TALKING_DOLL,
  "Tankard of Sobriety": TANKARD_OF_SOBRIETY,
  "Veteran's Cane": VETERANS_CANE,
  "Walloping Ammunition": WALLOPING_AMMUNITION,
  "Wand of Conducting": WAND_OF_CONDUCTING,
  "Wand of Pyrotechnics": WAND_OF_PYROTECHNICS
} as const satisfies {[itemID: ItemID]: Item};