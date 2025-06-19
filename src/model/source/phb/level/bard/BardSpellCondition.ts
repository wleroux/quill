import {SpellID} from "@/model/source/model/Spell";
import {Condition} from "@/model/source/condition/Condition";
import {all} from "@/model/source/condition/generic/AllCondition";
import {spellLevel} from "@/model/source/condition/spell/SpellLevelCondition";
import {is} from "@/model/source/condition/generic/IsCondition";

export function bardSpell(): Condition<SpellID> {
  return is(
    // bard cantrip
    "Blade Ward",
    "Dancing Lights",
    "Friends",
    "Light",
    "Mage Hand",
    "Mending",
    "Message",
    "Minor",
    "Prestidigitation",
    "Starry Wisp",
    "Thunderclap",
    "True Strike",
    "Vicious Mockery",

    // bard level 1
    "Animal Friendship",
    "Bane",
    "Charm Person",
    "Color Spray",
    "Command",
    "Comprehend Languages",
    "Cure Wounds",
    "Detect Magic",
    "Disguise Self",
    "Dissonant Whispers",
    "Faerie Fire",
    "Feather Fall",
    "Healing Word",
    "Heroism",
    "Identify",
    "Illusory Script",
    "Longstrider",
    "Silent",
    "Sleep",
    "Speak with Animals",
    "Tasha’s Hideous Laughter",
    "Thunderwave",
    "Unseen Servant",

    // bard level 2
    "Aid",
    "Animal Messenger",
    "Blindness/Deafness",
    "Calm Emotions",
    "Cloud of Daggers",
    "Crown of Madness",
    "Detect Thoughts",
    "Enhance Ability",
    "Enlarge/Reduce",
    "Enthrall",
    "Heat Metal",
    "Hold Person",
    "Invisibility",
    "Knock",
    "Lesser Restoration",
    "Locate Animals or Plants",
    "Locate Object",
    "Magic Mouth",
    "Mirror Image",
    "Phantasmal Force",
    "See Invisibility",
    "Shatter",
    "Silence",
    "Suggestion",
    "Zone of Truth",

    // bard level 3
    "Bestow Curse",
    "Clairvoyance",
    "Dispel Magic",
    "Fear",
    "Feign Death",
    "Glyph of Warding",
    "Hypnotic Pattern",
    "Leomund’s Tiny Hut",
    "Major Image",
    "Mass Healing Word",
    "Nondetection",
    "Plant Growth",
    "Sending",
    "Slow",
    "Speak with Dead",
    "Speak with Plants",
    "Stinking Cloud",
    "Tongues",

    // bard level 4
    "Charm Monster",
    "Compulsion",
    "Confusion",
    "Dimension Door",
    "Fount of Moonlight",
    "Freedom of Movement",
    "Greater Invisibility",
    "Hallucinatory Terrain",
    "Locate Creature",
    "Phantasmal Killer",
    "Polymorph",

    // bard level 5
    "Animate Objects",
    "Awaken",
    "Dominate Person",
    "Dream",
    "Geas",
    "Greater Restoration",
    "Hold Monster",
    "Legend Lore",
    "Mass Cure Wounds",
    "Mislead",
    "Modify Memory",
    "Planar Binding",
    "Raise Dead",
    "Rary’s Telepathic Bond",
    "Scrying",
    "Seeming",
    "Synaptic Static",
    "Teleportation Circle",
    "Yolande’s Regal Presence",

    // bard level 6
    "Eyebite",
    "Find the Path",
    "Guards and Wards",
    "Heroes’ Feast",
    "Mass Suggestion",
    "Otto’s Irresistible Dance",
    "Programmed Illusion",
    "True Seeing",

    // bard level 7
    "Etherealness",
    "Forcecage",
    "Mirage Arcane",
    "Mordenkainen’s Magnificent Mansion",
    "Mordenkainen’s Sword",
    "Power Word Fortify",
    "Prismatic Spray",
    "Project Image",
    "Regenerate",
    "Resurrection",
    "Symbol",
    "Teleport",

    // bard level 8
    "Antipathy/Sympathy",
    "Befuddlement",
    "Dominate Monster",
    "Glibness",
    "Mind Blank",
    "Power Word Stun",

    // bard level 9
    "Foresight",
    "Power Word Heal",
    "Power Word Kill",
    "Prismatic Wall",
    "True Polymorph"
  );
}

export function bardCantripSpell() {
  return all(spellLevel("cantrip"), bardSpell());
}
