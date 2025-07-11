import {is} from "@/model/source/condition/generic/IsCondition";

export const wizardSpell = is(
  // Cantrips (Level 0 Wizard Spells)
  "Acid Splash",
  "Blade Ward",
  "Chill Touch",
  "Dancing Lights",
  "Elementalism",
  "Fire Bolt",
  "Friends",
  "Light",
  "Mage Hand",
  "Mending",
  "Message",
  "Mind Sliver",
  "Minor Illusion",
  "Poison Spray",
  "Prestidigitation",
  "Ray of Frost",
  "Shocking Grasp",
  "Thunderclap",
  "Toll the Dead",
  "True Strike",
  // Level 1 Wizard Spells
  "Alarm",
  "Burning Hands",
  "Charm Person",
  "Chromatic Orb",
  "Color Spray",
  "Comprehend Languages",
  "Detect Magic",
  "Disguise Self",
  "Expeditious Retreat",
  "False Life",
  "Feather Fall",
  "Find Familiar",
  "Fog Cloud",
  "Grease",
  "Ice Knife",
  "Identify",
  "Illusory Script",
  "Jump",
  "Longstrider",
  "Mage Armor",
  "Magic Missile",
  "Protection from Evil and Good",
  "Ray of Sickness",
  "Shield",
  "Silent Image",
  "Sleep",
  "Tasha's Hideous Laughter",
  "Tenser's Floating Disk",
  "Thunderwave",
  "Unseen Servant",
  "Witch Bolt",
  // Level 2 Wizard Spells
  "Alter Self",
  "Arcane Lock",
  "Arcane Vigor",
  "Augury",
  "Blindness/Deafness",
  "Blur",
  "Cloud of Daggers",
  "Continual Flame",
  "Crown of Madness",
  "Darkness",
  "Darkvision",
  "Detect Thoughts",
  "Dragon's Breath",
  "Enhance Ability",
  "Enlarge/Reduce",
  "Flaming Sphere",
  "Gentle Repose",
  "Gust of Wind",
  "Hold Person",
  "Invisibility",
  "Knock",
  "Levitate",
  "Locate Object",
  "Magic Mouth",
  "Magic Weapon",
  "Melf's Acid Arrow",
  "Mind Spike",
  "Mirror Image",
  "Misty Step",
  "Nystul's Magic Aura",
  "Phantasmal Force",
  "Ray of Enfeeblement",
  "Rope Trick",
  "Scorching Ray",
  "See Invisibility",
  "Shatter",
  "Spider Climb",
  "Suggestion",
  "Web",
  // Level 3 Wizard Spells
  "Animate Dead",
  "Bestow Curse",
  "Blink",
  "Clairvoyance",
  "Counterspell",
  "Dispel Magic",
  "Fear",
  "Feign Death",
  "Fireball",
  "Fly",
  "Gaseous Form",
  "Glyph of Warding",
  "Haste",
  "Hypnotic Pattern",
  "Leomund's Tiny Hut",
  "Lightning Bolt",
  "Magic Circle",
  "Major Image",
  "Nondetection",
  "Phantom Steed",
  "Protection from Energy",
  "Remove Curse",
  "Sending",
  "Sleet Storm",
  "Slow",
  "Speak with Dead",
  "Stinking Cloud",
  "Summon Fey",
  "Summon Undead",
  "Tongues",
  "Vampiric Touch",
  "Water Breathing",
  // Level 4 Wizard Spells
  "Arcane Eye",
  "Banishment",
  "Blight",
  "Charm Monster",
  "Confusion",
  "Conjure Minor Elementals",
  "Control Water",
  "Dimension Door",
  "Divination",
  "Evard's Black Tentacles",
  "Fabricate",
  "Fire Shield",
  "Greater Invisibility",
  "Hallucinatory Terrain",
  "Ice Storm",
  "Leomund's Secret Chest",
  "Locate Creature",
  "Mordenkainen's Faithful Hound",
  "Mordenkainen's Private Sanctum",
  "Otiluke's Resilient Sphere",
  "Phantasmal Killer",
  "Polymorph",
  "Stone Shape",
  "Stoneskin",
  "Summon Aberration",
  "Summon Construct",
  "Summon Elemental",
  "Vitriolic Sphere",
  "Wall of Fire",
  // Level 5 Wizard Spells
  "Animate Objects",
  "Bigby's Hand",
  "Circle of Power",
  "Cloudkill",
  "Cone of Cold",
  "Conjure Elemental",
  "Contact Other Plane",
  "Creation",
  "Dominate Person",
  "Dream",
  "Geas",
  "Hold Monster",
  "Jallarzi's Storm of Radiance",
  "Legend Lore",
  "Mislead",
  "Modify Memory",
  "Passwall",
  "Planar Binding",
  "Rary's Telepathic Bond",
  "Scrying",
  "Seeming",
  "Steel Wind Strike",
  "Summon Dragon",
  "Synaptic Static",
  "Telekinesis",
  "Teleportation Circle",
  "Wall of Force",
  "Wall of Stone",
  "Yolande's Regal Presence",
  // Level 6 Wizard Spells
  "Arcane Gate",
  "Chain Lightning",
  "Circle of Death",
  "Contingency",
  "Create Undead",
  "Disintegrate",
  "Drawmij's Instant Summons",
  "Eyebite",
  "Flesh to Stone",
  "Globe of Invulnerability",
  "Guards and Wards",
  "Magic Jar",
  "Mass Suggestion",
  "Move Earth",
  "Otiluke's Freezing Sphere",
  "Otto's Irresistible Dance",
  "Programmed Illusion",
  "Summon Fiend",
  "Sunbeam",
  "Tasha's Bubbling Cauldron",
  "True Seeing",
  "Wall of Ice",
  // Level 7 Wizard Spells
  "Delayed Blast Fireball",
  "Etherealness",
  "Finger of Death",
  "Forcecage",
  "Mirage Arcane",
  "Mordenkainen's Magnificent Mansion",
  "Mordenkainen's Sword",
  "Plane Shift",
  "Prismatic Spray",
  "Project Image",
  "Reverse Gravity",
  "Sequester",
  "Simulacrum",
  "Symbol",
  "Teleport",
  // Level 8 Wizard Spells
  "Antimagic Field",
  "Antipathy/Sympathy",
  "Befuddlement",
  "Clone",
  "Control Weather",
  "Demiplane",
  "Dominate Monster",
  "Incendiary Cloud",
  "Maze",
  "Mind Blank",
  "Power Word Stun",
  "Sunburst",
  "Telepathy",
  // Level 9 Wizard Spells
  "Astral Projection",
  "Foresight",
  "Gate",
  "Imprisonment",
  "Meteor Swarm",
  "Power Word Kill",
  "Prismatic Wall",
  "Shapechange",
  "Time Stop",
  "True Polymorph",
  "Weird",
  "Wish"
);
