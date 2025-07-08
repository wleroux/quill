export const MELEE_SIMPLE_WEAPON_TYPES = [
  "Club",
  "Dagger",
  "Greatclub",
  "Handaxe",
  "Javelin",
  "Light Hammer",
  "Mace",
  "Quarterstaff",
  "Sickle",
  "Spear",
  "Staff",
  "Yklwa",
  "Wooden Staff"
] as const;

export const MELEE_MARTIAL_WEAPON_TYPES = [
  "Battleaxe",
  "Double-Bladed Scimitar",
  "Flail",
  "Glaive",
  "Greataxe",
  "Greatsword",
  "Halberd",
  "Hooked Shortspear",
  "Hoopak",
  "Lance",
  "Longsword",
  "Maul",
  "Morningstar",
  "Pike",
  "Rapier",
  "Scimitar",
  "Shortsword",
  "Trident",
  "War Pick",
  "Warhammer",
  "Whip"
] as const;

export const RANGED_SIMPLE_WEAPON_TYPES = [
  "Dart",
  "Light Crossbow",
  "Light Repeating Crossbow",
  "Shortbow",
  "Sling",
] as const;
export const RANGED_MARTIAL_WEAPON_TYPES = [
  // "Antimatter Rifle",
  // "Automatic Rifle",
  "Blowgun",
  "Hand Crossbow",
  "Heavy Crossbow",
  // "Hunting Rifle",
  // "Laser Pistol",
  // "Laser Rifle",
  "Longbow",
  "Musket",
  "Pistol",
  // "Revolver",
  // "Semiautomatic Pistol",
  // "Shotgun",
] as const;

export const MELEE_WEAPON_TYPES = [
  ...MELEE_SIMPLE_WEAPON_TYPES,
  ...MELEE_MARTIAL_WEAPON_TYPES
] as const;

export const WEAPON_TYPES = [
  ...MELEE_WEAPON_TYPES,
  ...RANGED_SIMPLE_WEAPON_TYPES,
  ...RANGED_MARTIAL_WEAPON_TYPES
] as const;
