import {Item, ItemID} from "@/model/source/model/Item";
import {any} from "@/model/source/condition/generic/AnyCondition";
import {cantripSpell} from "@/model/source/condition/spell/CantripSpellCondition";
import {spellLevel} from "@/model/source/condition/spell/SpellLevelCondition";
import {all} from "@/model/source/condition/generic/AllCondition";
import {spellSchool} from "@/model/source/condition/spell/SpellSchool";
import SPELLS from "@/model/source/phb/spell/index";

const PLUS_ONE_AMMUNITION = {
  label: "+1 Ammunition (10)",
  rarity: "Uncommon",
  tier: "Minor",
  choices: [
    {type: "simple", data: {
      label: "Variant",
      choiceID: "variant",
      options: [
        {optionID: "Arrow", label: "+1 Arrow"},
        {optionID: "Bolt", label: "+1 Bolt"},
        // {optionID: "Energy Cell", label: "+1 Energy Cell"},
        {optionID: "Firearm Bullet", label: "+1 Firearm Bullet"},
        {optionID: "Needle", label: "+1 Needle"},
        {optionID: "Sling Bullet", label: "+1 Sling Bullet"},
      ]
    }}
  ]
} as const satisfies Item;

const PLUS_ONE_ROD_OF_THE_PACT_KEEPER = {
  label: "+1 Rod of the Pact Keeper",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const PLUS_ONE_SHIELD = {
  label: "+1 Shield",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const PLUS_ONE_WAND_OF_THE_WAR_MAGE = {
  label: "+1 Wand of the War Mage",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const PLUS_ONE_WEAPON = {
  label: "+1 Weapon",
  rarity: "Uncommon",
  tier: "Major",
  choices: [
    {type: "simple", data: {
      label: "Variant",
      choiceID: "variant",
      options: [
        // {optionID: "Antimatter Rifle", label: "+1 Antimatter Rifle"},
        // {optionID: "Automatic Rifle", label: "+1 Automatic Rifle"},
        {optionID: "Battleaxe", label: "+1 Battleaxe"},
        {optionID: "Blowgun", label: "+1 Blowgun"},
        {optionID: "Club", label: "+1 Club"},
        {optionID: "Dagger", label: "+1 Dagger"},
        {optionID: "Dart", label: "+1 Dart"},
        // {optionID: "Double-Bladed Scimitar", label: "+1 Double-Bladed Scimitar"},
        {optionID: "Flail", label: "+1 Flail"},
        {optionID: "Glaive", label: "+1 Glaive"},
        {optionID: "Greataxe", label: "+1 Greataxe"},
        {optionID: "Greatclub", label: "+1 Greatclub"},
        {optionID: "Greatsword", label: "+1 Greatsword"},
        {optionID: "Halberd", label: "+1 Halberd"},
        {optionID: "Hand Crossbow", label: "+1 Hand Crossbow"},
        {optionID: "Handaxe", label: "+1 Handaxe"},
        {optionID: "Heavy Crossbow", label: "+1 Heavy Crossbow"},
        // {optionID: "Hooked Shortspear", label: "+1 Hooked Shortspear"},
        // {optionID: "Hoopak", label: "+1 Hoopak"},
        // {optionID: "Hunting Rifle", label: "+1 Hunting Rifle"},
        {optionID: "Javelin", label: "+1 Javelin"},
        {optionID: "Lance", label: "+1 Lance"},
        // {optionID: "Laser Pistol", label: "+1 Laser Pistol"},
        // {optionID: "Laser Rifle", label: "+1 Laser Rifle"},
        {optionID: "Light Crossbow", label: "+1 Light Crossbow"},
        {optionID: "Light Hammer", label: "+1 Light Hammer"},
        {optionID: "Light Repeating Crossbow", label: "+1 Light Repeating Crossbow"},
        {optionID: "Longbow", label: "+1 Longbow"},
        {optionID: "Longsword", label: "+1 Longsword"},
        {optionID: "Mace", label: "+1 Mace"},
        {optionID: "Maul", label: "+1 Maul"},
        {optionID: "Morningstar", label: "+1 Morningstar"},
        {optionID: "Musket", label: "+1 Musket"},
        {optionID: "Pike", label: "+1 Pike"},
        {optionID: "Pistol", label: "+1 Pistol"},
        {optionID: "Quarterstaff", label: "+1 Quarterstaff"},
        {optionID: "Rapier", label: "+1 Rapier"},
        // {optionID: "Revolver", label: "+1 Revolver"},
        {optionID: "Scimitar", label: "+1 Scimitar"},
        // {optionID: "Semiautomatic Pistol", label: "+1 Semiautomatic Pistol"},
        {optionID: "Shortbow", label: "+1 Shortbow"},
        {optionID: "Shortsword", label: "+1 Shortsword"},
        // {optionID: "Shotgun", label: "+1 Shotgun"},
        {optionID: "Sickle", label: "+1 Sickle"},
        {optionID: "Sling", label: "+1 Sling"},
        {optionID: "Spear", label: "+1 Spear"},
        {optionID: "Trident", label: "+1 Trident"},
        {optionID: "War Pick", label: "+1 War Pick"},
        {optionID: "Warhammer", label: "+1 Warhammer"},
        {optionID: "Whip", label: "+1 Whip"},
        {optionID: "Yklwa", label: "+1 Yklwa"}
      ]
    }
  }]
} as const satisfies Item;

const PLUS_ONE_WRAPS_OF_UNARMED_POWER = {
  label: "+1 Wraps of Unarmed Power",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;


const ADAMANTINE_ARMOR = {
  label: "Adamantine Armor",
  rarity: "Uncommon",
  tier: "Major",
  choices: [
    {type: "simple", data: {
      label: "Variant",
      choiceID: "variant",
      options: [
        {optionID: "Breastplate", label: "Adamantine Breastplate"},
        {optionID: "Chain Mail", label: "Adamantine Chain Mail"},
        {optionID: "Chain Shirt", label: "Adamantine Chain Shirt"},
        {optionID: "Half Plate Armor", label: "Adamantine Half Plate Armor"},
        {optionID: "Plate Armor", label: "Adamantine Plate Armor"},
        {optionID: "Ring Mail", label: "Adamantine Ring Mail"},
        {optionID: "Scale Mail", label: "Adamantine Scale Mail"},
        {optionID: "Splint Armor", label: "Adamantine Splint Armor"},
      ]
    }
  }]
} as const satisfies Item;


const ADAMANTINE_WEAPON = {
  label: "Adamantine Weapon",
  rarity: "Uncommon",
  tier: "Major",
  choices: [
    {type: "simple", data: {
        label: "Variant",
        choiceID: "variant",
        options: [
          {optionID: "Battleaxe", label: "Adamantine Battleaxe"},
          {optionID: "Bolt", label: "Adamantine Bolt"},
          {optionID: "Club", label: "Adamantine Club"},
          {optionID: "Dagger", label: "Adamantine Dagger"},
          {optionID: "Flail", label: "Adamantine Flail"},
          {optionID: "Glaive", label: "Adamantine Glaive"},
          {optionID: "Greataxe", label: "Adamantine Greataxe"},
          {optionID: "Greatclub", label: "Adamantine Greatclub"},
          {optionID: "Greatsword", label: "Adamantine Greatsword"},
          {optionID: "Halberd", label: "Adamantine Halberd"},
          {optionID: "Handaxe", label: "Adamantine Handaxe"},
          {optionID: "Javelin", label: "Adamantine Javelin"},
          {optionID: "Lance", label: "Adamantine Lance"},
          {optionID: "Light Hammer", label: "Adamantine Light Hammer"},
          {optionID: "Longsword", label: "Adamantine Longsword"},
          {optionID: "Mace", label: "Adamantine Mace"},
          {optionID: "Maul", label: "Adamantine Maul"},
          {optionID: "Morningstar", label: "Adamantine Morningstar"},
          {optionID: "Needle", label: "Adamantine Needle"},
          {optionID: "Pike", label: "Adamantine Pike"},
          {optionID: "Quarterstaff", label: "Adamantine Quarterstaff"},
          {optionID: "Rapier", label: "Adamantine Rapier"},
          {optionID: "Scimitar", label: "Adamantine Scimitar"},
          {optionID: "Shortsword", label: "Adamantine Shortsword"},
          {optionID: "Sickle", label: "Adamantine Sickle"},
          {optionID: "Spear", label: "Adamantine Spear"},
          {optionID: "Trident", label: "Adamantine Trident"},
          {optionID: "War Pick", label: "Adamantine War Pick"},
          {optionID: "Warhammer", label: "Adamantine Warhammer"},
          {optionID: "Whip", label: "Adamantine Whip"},
        ]
      }
    }]
} as const satisfies Item;

const ADAMANTINE_AMMUNITION = {
  label: "Adamantine Ammunition (10)",
  rarity: "Uncommon",
  tier: "Minor",
  choices: [
    {type: "simple", data: {
        label: "Variant",
        choiceID: "variant",
        options: [
          {optionID: "Arrow", label: "Adamantine Arrow"},
          // {optionID: "Energy Cell", label: "Adamantine Energy Cell"},
          // {optionID: "Firearm Bullet", label: "Adamantine Firearm Bullet"},
          {optionID: "Sling Bullet", label: "Adamantine Sling Bullet"},
        ]
      }
    }]
} as const satisfies Item;

const ALCHEMY_JUG = {
  label: "Alchemy Jug",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;

const AMULET_OF_PROOF_AGAINST_DETECTION_AND_LOCATION = {
  label: "Amulet of Proof against Detection and Location",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;

const BABA_YAGA_S_DANCING_BROOM = {
  label: "Baba Yaga's Dancing Broom",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;

const BAG_OF_HOLDING = {
  label: "Bag of Holding",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const BAG_OF_TRICKS = {
  label: "Bag of Tricks",
  rarity: "Uncommon",
  tier: "Major",
  choices: [
    {type: "simple", data: {
      label: "Variant",
      choiceID: "variant",
      options: [
        {optionID: "Gray", label: "Bag of Tricks, Gray"},
        {optionID: "Rust", label: "Bag of Tricks, Rust"},
        {optionID: "Tan", label: "Bag of Tricks, Tan"},
      ]
    }}
  ]
} as const satisfies Item;

const BOOTS_OF_ELVENKIND = {
  label: "Boots of Elvenkind",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const BOOTS_OF_STRIDING_AND_SPRINGING = {
  label: "Boots of Striding and Springing",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const BOOTS_OF_THE_WINTERLANDS = {
  label: "Boots of the Winterlands",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const BRACERS_OF_ARCHERY = {
  label: "Bracers of Archery",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const BROOCH_OF_SHIELDING = {
  label: "Brooch of Shielding",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const BROOM_OF_FLYING = {
  label: "Broom of Flying",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const CAP_OF_WATER_BREATHING = {
  label: "Cap of Water Breathing",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;

const CIRCLET_OF_BLASTING = {
  label: "Circlet of Blasting",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;

const CLOAK_OF_ELVENKIND = {
  label: "Cloak of Elvenkind",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const CLOAK_OF_PROTECTION = {
  label: "Cloak of Protection",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const CLOAK_OF_THE_MANTA_RAY = {
  label: "Cloak of the Manta Ray",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const DECANTER_OF_ENDLESS_WATER = {
  label: "Decanter of Endless Water",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;

const DECK_OF_ILLUSIONS = {
  label: "Deck of Illusions",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const DRIFTGLOBE = {
  label: "Driftglobe",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;

const DUST_OF_DISAPPEARANCE = {
  label: "Dust of Disappearance",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;

const DUST_OF_DRYNESS = {
  label: "Dust of Dryness",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;

const DUST_OF_SNEEZING_AND_CHOKING = {
  label: "Dust of Sneezing and Choking",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;

const ELEMENTAL_GEM = {
  label: "Elemental Gem",
  rarity: "Uncommon",
  tier: "Major",
  choices: [
    {type: "simple", data: {
        label: "Variant",
        choiceID: "variant",
        options: [
          {optionID: "Blue Sapphire", label: "Elemental Gem, Blue Sapphire"},
          {optionID: "Emerald", label: "Elemental Gem, Emerald"},
          {optionID: "Red Corundum", label: "Elemental Gem, Red Corundum"},
          {optionID: "Yellow Diamond", label: "Elemental Gem, Yellow Diamond"},
        ]
      }}
  ]
} as const satisfies Item;

const ENSPELLED_ARMOR = {
  label: "Enspelled Armor",
  rarity: "Uncommon",
  tier: "Major",
  choices: [
    {type: "simple", data: {
      choiceID: "variant",
      label: "Variant",
      options: [
        {optionID: "Breastplate", label: "Enspelled Breastplate"},
        {optionID: "Chain Mail", label: "Enspelled Chain Mail"},
        {optionID: "Chain Shirt", label: "Enspelled Chain Shirt"},
        {optionID: "Half Plate Armor", label: "Enspelled Half Plate Armor"},
        {optionID: "Hide Armor", label: "Enspelled Hide Armor"},
        {optionID: "Leather Armor", label: "Enspelled Leather Armor"},
        {optionID: "Padded Armor", label: "Enspelled Padded Armor"},
        {optionID: "Plate Armor", label: "Enspelled Plate Armor"},
        {optionID: "Ring Mail", label: "Enspelled Ring Mail"},
        {optionID: "Scale Mail", label: "Enspelled Scale Mail"},
        {optionID: "Splint Armor", label: "Enspelled Splint Armor"},
        {optionID: "Studded Leather Armor", label: "Enspelled Studded Leather Armor"}
      ]
    }},
    {type: "spell", data: {
        label: "Enspelled Spell",
        choiceID: "spell",
        condition: all(any(cantripSpell, spellLevel(1)), spellSchool("Abjuration", "Illusion"))
      }}
  ]
} as const satisfies Item;

const ENSPELLED_STAFF = {
  label: "Enspelled Staff",
  rarity: "Uncommon",
  tier: "Major",
  choices: [
    {type: "spell", data: {
      label: "Enspelled Spell",
      choiceID: "spell",
      condition: all(any(cantripSpell, spellLevel(1)))
    }}
  ]
} as const satisfies Item;

const ENSPELLED_WEAPON = {
  label: "Enspelled Weapon",
  rarity: "Uncommon",
  tier: "Major",
  choices: [
    {type: "simple", data: {
        choiceID: "variant",
        label: "Variant",
        options: [
          // {optionID: "Antimatter Rifle", label: "Enspelled Antimatter Rifle"},
          // {optionID: "Automatic Rifle", label: "Enspelled Automatic Rifle"},
          {optionID: "Battleaxe", label: "Enspelled Battleaxe"},
          {optionID: "Blowgun", label: "Enspelled Blowgun"},
          {optionID: "Club", label: "Enspelled Club"},
          {optionID: "Dagger", label: "Enspelled Dagger"},
          {optionID: "Dart", label: "Enspelled Dart"},
          // {optionID: "Double-Bladed Scimitar", label: "Enspelled Double-Bladed Scimitar"},
          {optionID: "Flail", label: "Enspelled Flail"},
          {optionID: "Glaive", label: "Enspelled Glaive"},
          {optionID: "Greataxe", label: "Enspelled Greataxe"},
          {optionID: "Greatclub", label: "Enspelled Greatclub"},
          {optionID: "Greatsword", label: "Enspelled Greatsword"},
          {optionID: "Halberd", label: "Enspelled Halberd"},
          {optionID: "Hand Crossbow", label: "Enspelled Hand Crossbow"},
          {optionID: "Handaxe", label: "Enspelled Handaxe"},
          {optionID: "Heavy Crossbow", label: "Enspelled Heavy Crossbow"},
          // {optionID: "Hooked Shortspear", label: "Enspelled Hooked Shortspear"},
          // {optionID: "Hoopak", label: "Enspelled Hoopak"},
          // {optionID: "Hunting Rifle", label: "Enspelled Hunting Rifle"},
          {optionID: "Javelin", label: "Enspelled Javelin"},
          {optionID: "Lance", label: "Enspelled Lance"},
          // {optionID: "Laser Pistol", label: "Enspelled Laser Pistol"},
          // {optionID: "Laser Rifle", label: "Enspelled Laser Rifle"},
          {optionID: "Light Crossbow", label: "Enspelled Light Crossbow"},
          {optionID: "Light Hammer", label: "Enspelled Light Hammer"},
          {optionID: "Light Repeating Crossbow", label: "Enspelled Light Repeating Crossbow"},
          {optionID: "Longbow", label: "Enspelled Longbow"},
          {optionID: "Longsword", label: "Enspelled Longsword"},
          {optionID: "Mace", label: "Enspelled Mace"},
          {optionID: "Maul", label: "Enspelled Maul"},
          {optionID: "Morningstar", label: "Enspelled Morningstar"},
          {optionID: "Musket", label: "Enspelled Musket"},
          {optionID: "Pike", label: "Enspelled Pike"},
          {optionID: "Pistol", label: "Enspelled Pistol"},
          {optionID: "Quarterstaff", label: "Enspelled Quarterstaff"},
          {optionID: "Rapier", label: "Enspelled Rapier"},
          // {optionID: "Revolver", label: "Enspelled Revolver"},
          {optionID: "Scimitar", label: "Enspelled Scimitar"},
          // {optionID: "Semiautomatic Pistol", label: "Enspelled Semiautomatic Pistol"},
          {optionID: "Shortbow", label: "Enspelled Shortbow"},
          {optionID: "Shortsword", label: "Enspelled Shortsword"},
          // {optionID: "Shotgun", label: "Enspelled Shotgun"},
          {optionID: "Sickle", label: "Enspelled Sickle"},
          {optionID: "Sling", label: "Enspelled Sling"},
          {optionID: "Spear", label: "Enspelled Spear"},
          {optionID: "Trident", label: "Enspelled Trident"},
          {optionID: "War Pick", label: "Enspelled War Pick"},
          {optionID: "Warhammer", label: "Enspelled Warhammer"},
          {optionID: "Whip", label: "Enspelled Whip"},
          {optionID: "Yklwa", label: "Enspelled Yklwa"}
        ]
      }},
    {type: "spell", data: {
      label: "Enspelled Spell",
      choiceID: "spell",
      condition: all(any(cantripSpell, spellLevel(1)), spellSchool("Conjuration", "Divination", "Evocation", "Necromancy", "Transmutation"))
    }}
  ]
} as const satisfies Item;

const EVERSMOKING_BOTTLE = {
  label: "Eversmoking Bottle",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const EYES_OF_CHARMING = {
  label: "Eyes of Charming",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;

const EYES_OF_MINUTE_SEEING = {
  label: "Eyes of Minute Seeing",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;

const EYES_OF_THE_EAGLE = {
  label: "Eyes of the Eagle",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;

const FIGURINE_OF_WONDROUS_POWER__SILVER_RAVEN = {
  label: "Figurine of Wondrous Power, Silver Raven",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const GAUNTLETS_OF_OGRE_POWER = {
  label: "Gauntlets of Ogre Power",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const GEM_OF_BRIGHTNESS = {
  label: "Gem of Brightness",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const GLOVES_OF_MISSILE_SNARING = {
  label: "Gloves of Missile Snaring",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const GLOVES_OF_SWIMMING_AND_CLIMBING = {
  label: "Gloves of Swimming and Climbing",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const GLOVES_OF_THIEVERY = {
  label: "Gloves of Thievery",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const GOGGLES_OF_NIGHT = {
  label: "Goggles of Night",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const HAG_EYE = {
  label: "Hag Eye",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const HAT_OF_DISGUISE = {
  label: "Hat of Disguise",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const HEADBAND_OF_INTELLECT = {
  label: "Headband of Intellect",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const HELM_OF_COMPREHENDING_LANGUAGES = {
  label: "Helm of Comprehending Languages",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const HELM_OF_TELEPATHY = {
  label: "Helm of Telepathy",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;

const IMMOVABLE_ROD = {
  label: "Immovable Rod",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;

const INSTRUMENT_OF_THE_BARDS = {
  label: "Instrument of the Bards",
  rarity: "Uncommon",
  tier: "Major",
  choices: [
    {type: "simple", data: {
      label: "Variant",
      choiceID: "variant",
      options: [
        {optionID: "Doss Lute", label: "Instrument of the Bards, Doss Lute"},
        {optionID: "Fochlucan Bandore", label: "Instrument of the Bards, Fochlucan Bandore"},
        {optionID: "Mac-Fuirmidh Cittern", label: "Instrument of the Bards, Mac-Fuirmidh Cittern"}
      ]
    }}
  ]
} as const satisfies Item;
const JAVELIN_OF_LIGHTNING = {
  label: "Javelin of Lightning",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const KEOGHTOM_S_OINTMENT = {
  label: "Keoghtom's Ointment",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const LANTERN_OF_REVEALING = {
  label: "Lantern of Revealing",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const MARINER_S_ARMOR = {
  label: "Mariner's Armor",
  rarity: "Uncommon",
  tier: "Major",
  choices: [
    {type: "simple", data: {
        choiceID: "variant",
        label: "Variant",
        options: [
          {optionID: "Breastplate", label: "Mariner's Breastplate"},
          {optionID: "Chain Mail", label: "Mariner's Chain Mail"},
          {optionID: "Chain Shirt", label: "Mariner's Chain Shirt"},
          {optionID: "Half Plate Armor", label: "Mariner's Half Plate Armor"},
          {optionID: "Hide Armor", label: "Mariner's Hide Armor"},
          {optionID: "Leather Armor", label: "Mariner's Leather Armor"},
          {optionID: "Padded Armor", label: "Mariner's Padded Armor"},
          {optionID: "Plate Armor", label: "Mariner's Plate Armor"},
          {optionID: "Ring Mail", label: "Mariner's Ring Mail"},
          {optionID: "Scale Mail", label: "Mariner's Scale Mail"},
          {optionID: "Splint Armor", label: "Mariner's Splint Armor"},
          {optionID: "Studded Leather Armor", label: "Mariner's Studded Leather Armor"}
        ]
      }},
  ]
} as const satisfies Item;

const MEDALLION_OF_THOUGHTS = {
  label: "Medallion of Thoughts",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;

const MITHRAL_ARMOR = {
  label: "Mithral Armor",
  rarity: "Uncommon",
  tier: "Major",
  choices: [
    {type: "simple", data: {
      choiceID: "variant",
      label: "Variant",
      options: [
        {optionID: "Breastplate", label: "Mithral Breastplate"},
        {optionID: "Chain Mail", label: "Mithral Chain Mail"},
        {optionID: "Chain Shirt", label: "Mithral Chain Shirt"},
        {optionID: "Half Plate Armor", label: "Mithral Half Plate Armor"},
        {optionID: "Plate Armor", label: "Mithral Plate Armor"},
        {optionID: "Ring Mail", label: "Mithral Ring Mail"},
        {optionID: "Scale Mail", label: "Mithral Scale Mail"}
      ]
    }},
  ]
} as const satisfies Item;
const NATURE_S_MANTLE = {
  label: "Nature's Mantle",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const NECKLACE_OF_ADAPTATION = {
  label: "Necklace of Adaptation",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const OIL_OF_SLIPPERINESS = {
  label: "Oil of Slipperiness",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const PEARL_OF_POWER = {
  label: "Pearl of Power",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const PERIAPT_OF_HEALTH = {
  label: "Periapt of Health",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const PERIAPT_OF_WOUND_CLOSURE = {
  label: "Periapt of Wound Closure",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const PHILTER_OF_LOVE = {
  label: "Philter of Love",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;

const PIPES_OF_HAUNTING = {
  label: "Pipes of Haunting",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const PIPES_OF_THE_SEWERS = {
  label: "Pipes of the Sewers",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

const POTION_OF_ANIMAL_FRIENDSHIP = {
  label: "Potion of Animal Friendship",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;
const POTION_OF_FIRE_BREATH = {
  label: "Potion of Fire Breath",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;
const POTION_OF_GREATER_HEALING = {
  label: "Potion of Greater Healing",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;
const POTION_OF_GROWTH = {
  label: "Potion of Growth",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;
const POTION_OF_HILL_GIANT_STRENGTH = {
  label: "Potion of Hill Giant Strength",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;
const POTION_OF_POISON = {
  label: "Potion of Poison",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;
const POTION_OF_PUGILISM = {
  label: "Potion of Pugilism",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;
const POTION_OF_RESISTANCE = {
  label: "Potion of Resistance",
  rarity: "Uncommon",
  tier: "Minor",
  choices: [
    {type: "simple", data: {
      choiceID: "variant",
      label: "Variant",
      options: [
        {optionID: "Acid", label: "Acid"},
        {optionID: "Cold", label: "Cold"},
        {optionID: "Fire", label: "Fire"},
        {optionID: "Force", label: "Force"},
        {optionID: "Lightning", label: "Lightning"},
        {optionID: "Necrotic", label: "Necrotic"},
        {optionID: "Poison", label: "Poison"},
        {optionID: "Psychic", label: "Psychic"},
        {optionID: "Radiant", label: "Radiant"},
        {optionID: "Thunder", label: "Thunder"},
      ]
    }}
  ]
} as const satisfies Item;
const POTION_OF_WATER_BREATHING = {
  label: "Potion of Water Breathing",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;
const QUAAL_S_FEATHER_TOKEN = {
  label: "Quaal's Feather Token",
  rarity: "Uncommon",
  tier: "Minor",
  choices: [
    {type: "simple", data: {
      choiceID: "variant",
      label: "Variant",
      options: [
        {optionID: "Anchor", label: "Anchor"},
        {optionID: "Fan", label: "Fan"},
        {optionID: "Tree", label: "Tree"},
      ]
    }}
  ]
} as const satisfies Item;
const QUIVER_OF_EHLONNA = {
  label: "Quiver of Ehlonna",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;
const RING_OF_JUMPING = {
  label: "Ring of Jumping",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const RING_OF_MIND_SHIELDING = {
  label: "Ring of Mind Shielding",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const RING_OF_SWIMMING = {
  label: "Ring of Swimming",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const RING_OF_WARMTH = {
  label: "Ring of Warmth",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const RING_OF_WATER_WALKING = {
  label: "Ring of Water Walking",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const ROPE_OF_CLIMBING = {
  label: "Rope of Climbing",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const SADDLE_OF_THE_CAVALIER = {
  label: "Saddle of the Cavalier",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const SENDING_STONES = {
  label: "Sending Stones",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;
const SENTINEL_SHIELD = {
  label: "Sentinel Shield",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const SLIPPERS_OF_SPIDER_CLIMBING = {
  label: "Slippers of Spider Climbing",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const SPELL_SCROLL__LEVEL_2 = {
  label: "Spell Scroll (Level 2)",
  rarity: "Uncommon",
  tier: "Minor",
  choices: [
    {type: "simple", data: {
      label: "Spell",
      choiceID: "spell",
      options: Object.keys(SPELLS)
        .filter(spellID => SPELLS[spellID].level === 2)
        .map(spellID => ({optionID: spellID, label: SPELLS[spellID].label}))
    }}
  ]
} as const satisfies Item;
const SPELL_SCROLL__LEVEL_3 = {
  label: "Spell Scroll (Level 3)",
  rarity: "Uncommon",
  tier: "Minor",
  choices: [
    {type: "simple", data: {
      label: "Spell",
      choiceID: "spell",
      options: Object.keys(SPELLS)
        .filter(spellID => SPELLS[spellID].level === 3)
        .map(spellID => ({optionID: spellID, label: SPELLS[spellID].label}))
    }}
  ]
} as const satisfies Item;
const STAFF_OF_THE_ADDER = {
  label: "Staff of the Adder",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const STAFF_OF_THE_PYTHON = {
  label: "Staff of the Python",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const STONE_OF_GOOD_LUCK = {
  label: "Stone of Good Luck",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const SWORD_OF_VENGEANCE = {
  label: "Sword of Vengeance",
  rarity: "Uncommon",
  tier: "Major",
  choices: [
    {type: "simple", data: {
      label: "Variant",
      choiceID: "variant",
      options: [
        {optionID: "Glaive", label: "Glaive of Vengeance"},
        {optionID: "Greatsword", label: "Greatsword of Vengeance"},
        {optionID: "Longsword", label: "Longsword of Vengeance"},
        {optionID: "Rapier", label: "Rapier of Vengeance"},
        {optionID: "Scimitar", label: "Scimitar of Vengeance"},
        {optionID: "Shortsword", label: "Shortsword of Vengeance"},
      ]
    }}
  ]
} as const satisfies Item;
const TRIDENT_OF_FISH_COMMAND = {
  label: "Trident of Fish Command",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const WAND_OF_MAGIC_DETECTION = {
  label: "Wand of Magic Detection",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;
const WAND_OF_MAGIC_MISSILES = {
  label: "Wand of Magic Missiles",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const WAND_OF_SECRETS = {
  label: "Wand of Secrets",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;
const WAND_OF_WEB = {
  label: "Wand of Web",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;
const WEAPON_OF_WARNING = {
  label: "Weapon of Warning",
  rarity: "Uncommon",
  tier: "Major",
  choices: [
    {type: "simple", data: {
      label: "Variant",
      choiceID: "variant",
      options: [
        // {optionID: "Antimatter Rifle", label: "Antimatter Rifle of Warning"},
        // {optionID: "Automatic Rifle", label: "Automatic Rifle of Warning"},
        {optionID: "Battleaxe", label: "Battleaxe of Warning"},
        {optionID: "Blowgun", label: "Blowgun of Warning"},
        {optionID: "Club", label: "Club of Warning"},
        {optionID: "Dagger", label: "Dagger of Warning"},
        {optionID: "Dart", label: "Dart of Warning"},
        // {optionID: "Double-Bladed Scimitar", label: "Double-Bladed Scimitar of Warning"},
        {optionID: "Flail", label: "Flail of Warning"},
        {optionID: "Glaive", label: "Glaive of Warning"},
        {optionID: "Greataxe", label: "Greataxe of Warning"},
        {optionID: "Greatclub", label: "Greatclub of Warning"},
        {optionID: "Greatsword", label: "Greatsword of Warning"},
        {optionID: "Halberd", label: "Halberd of Warning"},
        {optionID: "Hand Crossbow", label: "Hand Crossbow of Warning"},
        {optionID: "Handaxe", label: "Handaxe of Warning"},
        {optionID: "Heavy Crossbow", label: "Heavy Crossbow of Warning"},
        // {optionID: "Hooked Shortspear", label: "Hooked Shortspear of Warning"},
        // {optionID: "Hoopak", label: "Hoopak of Warning"},
        // {optionID: "Hunting Rifle", label: "Hunting Rifle of Warning"},
        {optionID: "Javelin", label: "Javelin of Warning"},
        {optionID: "Lance", label: "Lance of Warning"},
        // {optionID: "Laser Pistol", label: "Laser Pistol of Warning"},
        // {optionID: "Laser Rifle", label: "Laser Rifle of Warning"},
        {optionID: "Light Crossbow", label: "Light Crossbow of Warning"},
        {optionID: "Light Hammer", label: "Light Hammer of Warning"},
        {optionID: "Light Repeating Crossbow", label: "Light Repeating Crossbow of Warning"},
        {optionID: "Longbow", label: "Longbow of Warning"},
        {optionID: "Longsword", label: "Longsword of Warning"},
        {optionID: "Mace", label: "Mace of Warning"},
        {optionID: "Maul", label: "Maul of Warning"},
        {optionID: "Morningstar", label: "Morningstar of Warning"},
        {optionID: "Musket", label: "Musket of Warning"},
        {optionID: "Pike", label: "Pike of Warning"},
        {optionID: "Pistol", label: "Pistol of Warning"},
        {optionID: "Quarterstaff", label: "Quarterstaff of Warning"},
        {optionID: "Rapier", label: "Rapier of Warning"},
        // {optionID: "Revolver", label: "Revolver of Warning"},
        {optionID: "Scimitar", label: "Scimitar of Warning"},
        // {optionID: "Semiautomatic Pistol", label: "Semiautomatic Pistol of Warning"},
        {optionID: "Shortbow", label: "Shortbow of Warning"},
        {optionID: "Shortsword", label: "Shortsword of Warning"},
        // {optionID: "Shotgun", label: "Shotgun of Warning"},
        {optionID: "Sickle", label: "Sickle of Warning"},
        {optionID: "Sling", label: "Sling of Warning"},
        {optionID: "Spear", label: "Spear of Warning"},
        {optionID: "Trident", label: "Trident of Warning"},
        {optionID: "War Pick", label: "War Pick of Warning"},
        {optionID: "Warhammer", label: "Warhammer of Warning"},
        {optionID: "Whip", label: "Whip of Warning"},
        {optionID: "Yklwa", label: "Yklwa of Warning"}
      ]
    }}
  ]
} as const satisfies Item;
const WIND_FAN = {
  label: "Wind Fan",
  rarity: "Uncommon",
  tier: "Minor",
  choices: []
} as const satisfies Item;
const WINGED_BOOTS = {
  label: "Winged Boots",
  rarity: "Uncommon",
  tier: "Major",
  choices: []
} as const satisfies Item;

export const UNCOMMON = {
  [PLUS_ONE_AMMUNITION.label]: PLUS_ONE_AMMUNITION,
  [PLUS_ONE_ROD_OF_THE_PACT_KEEPER.label]: PLUS_ONE_ROD_OF_THE_PACT_KEEPER,
  [PLUS_ONE_SHIELD.label]: PLUS_ONE_SHIELD,
  [PLUS_ONE_WAND_OF_THE_WAR_MAGE.label]: PLUS_ONE_WAND_OF_THE_WAR_MAGE,
  [PLUS_ONE_WEAPON.label]: PLUS_ONE_WEAPON,
  [PLUS_ONE_WRAPS_OF_UNARMED_POWER.label]: PLUS_ONE_WRAPS_OF_UNARMED_POWER,
  [ADAMANTINE_ARMOR.label]: ADAMANTINE_ARMOR,
  [ADAMANTINE_WEAPON.label]: ADAMANTINE_WEAPON,
  [ADAMANTINE_AMMUNITION.label]: ADAMANTINE_AMMUNITION,
  [ALCHEMY_JUG.label]: ALCHEMY_JUG,
  [AMULET_OF_PROOF_AGAINST_DETECTION_AND_LOCATION.label]: AMULET_OF_PROOF_AGAINST_DETECTION_AND_LOCATION,
  [BABA_YAGA_S_DANCING_BROOM.label]: BABA_YAGA_S_DANCING_BROOM,
  [BAG_OF_HOLDING.label]: BAG_OF_HOLDING,
  [BAG_OF_TRICKS.label]: BAG_OF_TRICKS,
  [BOOTS_OF_ELVENKIND.label]: BOOTS_OF_ELVENKIND,
  [BOOTS_OF_STRIDING_AND_SPRINGING.label]: BOOTS_OF_STRIDING_AND_SPRINGING,
  [BOOTS_OF_THE_WINTERLANDS.label]: BOOTS_OF_THE_WINTERLANDS,
  [BRACERS_OF_ARCHERY.label]: BRACERS_OF_ARCHERY,
  [BROOCH_OF_SHIELDING.label]: BROOCH_OF_SHIELDING,
  [BROOM_OF_FLYING.label]: BROOM_OF_FLYING,
  [CAP_OF_WATER_BREATHING.label]: CAP_OF_WATER_BREATHING,
  [CIRCLET_OF_BLASTING.label]: CIRCLET_OF_BLASTING,
  [CLOAK_OF_ELVENKIND.label]: CLOAK_OF_ELVENKIND,
  [CLOAK_OF_PROTECTION.label]: CLOAK_OF_PROTECTION,
  [CLOAK_OF_THE_MANTA_RAY.label]: CLOAK_OF_THE_MANTA_RAY,
  [DECANTER_OF_ENDLESS_WATER.label]: DECANTER_OF_ENDLESS_WATER,
  [DECK_OF_ILLUSIONS.label]: DECK_OF_ILLUSIONS,
  [DRIFTGLOBE.label]: DRIFTGLOBE,
  [DUST_OF_DISAPPEARANCE.label]: DUST_OF_DISAPPEARANCE,
  [DUST_OF_DRYNESS.label]: DUST_OF_DRYNESS,
  [DUST_OF_SNEEZING_AND_CHOKING.label]: DUST_OF_SNEEZING_AND_CHOKING,
  [ELEMENTAL_GEM.label]: ELEMENTAL_GEM,
  [ENSPELLED_ARMOR.label]: ENSPELLED_ARMOR,
  [ENSPELLED_STAFF.label]: ENSPELLED_STAFF,
  [ENSPELLED_WEAPON.label]: ENSPELLED_WEAPON,
  [EVERSMOKING_BOTTLE.label]: EVERSMOKING_BOTTLE,
  [EYES_OF_CHARMING.label]: EYES_OF_CHARMING,
  [EYES_OF_MINUTE_SEEING.label]: EYES_OF_MINUTE_SEEING,
  [EYES_OF_THE_EAGLE.label]: EYES_OF_THE_EAGLE,
  [FIGURINE_OF_WONDROUS_POWER__SILVER_RAVEN.label]: FIGURINE_OF_WONDROUS_POWER__SILVER_RAVEN,
  [GAUNTLETS_OF_OGRE_POWER.label]: GAUNTLETS_OF_OGRE_POWER,
  [GEM_OF_BRIGHTNESS.label]: GEM_OF_BRIGHTNESS,
  [GLOVES_OF_MISSILE_SNARING.label]: GLOVES_OF_MISSILE_SNARING,
  [GLOVES_OF_SWIMMING_AND_CLIMBING.label]: GLOVES_OF_SWIMMING_AND_CLIMBING,
  [GLOVES_OF_THIEVERY.label]: GLOVES_OF_THIEVERY,
  [GOGGLES_OF_NIGHT.label]: GOGGLES_OF_NIGHT,
  [HAG_EYE.label]: HAG_EYE,
  [HAT_OF_DISGUISE.label]: HAT_OF_DISGUISE,
  [HEADBAND_OF_INTELLECT.label]: HEADBAND_OF_INTELLECT,
  [HELM_OF_COMPREHENDING_LANGUAGES.label]: HELM_OF_COMPREHENDING_LANGUAGES,
  [HELM_OF_TELEPATHY.label]: HELM_OF_TELEPATHY,
  [IMMOVABLE_ROD.label]: IMMOVABLE_ROD,
  [INSTRUMENT_OF_THE_BARDS.label]: INSTRUMENT_OF_THE_BARDS,
  [JAVELIN_OF_LIGHTNING.label]: JAVELIN_OF_LIGHTNING,
  [KEOGHTOM_S_OINTMENT.label]: KEOGHTOM_S_OINTMENT,
  [LANTERN_OF_REVEALING.label]: LANTERN_OF_REVEALING,
  [MARINER_S_ARMOR.label]: MARINER_S_ARMOR,
  [MEDALLION_OF_THOUGHTS.label]: MEDALLION_OF_THOUGHTS,
  [MITHRAL_ARMOR.label]: MITHRAL_ARMOR,
  [NATURE_S_MANTLE.label]: NATURE_S_MANTLE,
  [NECKLACE_OF_ADAPTATION.label]: NECKLACE_OF_ADAPTATION,
  [OIL_OF_SLIPPERINESS.label]: OIL_OF_SLIPPERINESS,
  [PEARL_OF_POWER.label]: PEARL_OF_POWER,
  [PERIAPT_OF_HEALTH.label]: PERIAPT_OF_HEALTH,
  [PERIAPT_OF_WOUND_CLOSURE.label]: PERIAPT_OF_WOUND_CLOSURE,
  [PHILTER_OF_LOVE.label]: PHILTER_OF_LOVE,
  [PIPES_OF_HAUNTING.label]: PIPES_OF_HAUNTING,
  [PIPES_OF_THE_SEWERS.label]: PIPES_OF_THE_SEWERS,
  [POTION_OF_ANIMAL_FRIENDSHIP.label]: POTION_OF_ANIMAL_FRIENDSHIP,
  [POTION_OF_FIRE_BREATH.label]: POTION_OF_FIRE_BREATH,
  [POTION_OF_GREATER_HEALING.label]: POTION_OF_GREATER_HEALING,
  [POTION_OF_GROWTH.label]: POTION_OF_GROWTH,
  [POTION_OF_HILL_GIANT_STRENGTH.label]: POTION_OF_HILL_GIANT_STRENGTH,
  [POTION_OF_POISON.label]: POTION_OF_POISON,
  [POTION_OF_PUGILISM.label]: POTION_OF_PUGILISM,
  [POTION_OF_RESISTANCE.label]: POTION_OF_RESISTANCE,
  [POTION_OF_WATER_BREATHING.label]: POTION_OF_WATER_BREATHING,
  [QUAAL_S_FEATHER_TOKEN.label]: QUAAL_S_FEATHER_TOKEN,
  [QUIVER_OF_EHLONNA.label]: QUIVER_OF_EHLONNA,
  [RING_OF_JUMPING.label]: RING_OF_JUMPING,
  [RING_OF_MIND_SHIELDING.label]: RING_OF_MIND_SHIELDING,
  [RING_OF_SWIMMING.label]: RING_OF_SWIMMING,
  [RING_OF_WARMTH.label]: RING_OF_WARMTH,
  [RING_OF_WATER_WALKING.label]: RING_OF_WATER_WALKING,
  [ROPE_OF_CLIMBING.label]: ROPE_OF_CLIMBING,
  [SADDLE_OF_THE_CAVALIER.label]: SADDLE_OF_THE_CAVALIER,
  [SENDING_STONES.label]: SENDING_STONES,
  [SENTINEL_SHIELD.label]: SENTINEL_SHIELD,
  [SLIPPERS_OF_SPIDER_CLIMBING.label]: SLIPPERS_OF_SPIDER_CLIMBING,
  [SPELL_SCROLL__LEVEL_2.label]: SPELL_SCROLL__LEVEL_2,
  [SPELL_SCROLL__LEVEL_3.label]: SPELL_SCROLL__LEVEL_3,
  [STAFF_OF_THE_ADDER.label]: STAFF_OF_THE_ADDER,
  [STAFF_OF_THE_PYTHON.label]: STAFF_OF_THE_PYTHON,
  [STONE_OF_GOOD_LUCK.label]: STONE_OF_GOOD_LUCK,
  [SWORD_OF_VENGEANCE.label]: SWORD_OF_VENGEANCE,
  [TRIDENT_OF_FISH_COMMAND.label]: TRIDENT_OF_FISH_COMMAND,
  [WAND_OF_MAGIC_DETECTION.label]: WAND_OF_MAGIC_DETECTION,
  [WAND_OF_MAGIC_MISSILES.label]: WAND_OF_MAGIC_MISSILES,
  [WAND_OF_SECRETS.label]: WAND_OF_SECRETS,
  [WAND_OF_WEB.label]: WAND_OF_WEB,
  [WEAPON_OF_WARNING.label]: WEAPON_OF_WARNING,
  [WIND_FAN.label]: WIND_FAN,
  [WINGED_BOOTS.label]: WINGED_BOOTS,
} as {[itemID: ItemID]: Item};
