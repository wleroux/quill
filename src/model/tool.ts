export const ARTISAN_TOOLS = [
  "alchemist's supplies",
  "brewer's supplies",
  "calligrapher's supplies",
  "carpenter's tools",
  "cartographer's tools",
  "cobbler's tools",
  "cook's utensils",
  "glassblower's tools",
  "jeweler's tools",
  "leatherworker's tools",
  "mason's tools",
  "painter's supplies",
  "potter's tools",
  "smith's tools",
  "tinker's tools",
  "weaver's tools",
  "woodcarver's tools",
] as const;
export type ToolArtisan = typeof ARTISAN_TOOLS[number];

export function isArtisanTool(tool: Tool): tool is ToolArtisan {
  return ARTISAN_TOOLS.includes(tool as ToolArtisan);
}

export const GAMING_SET_TOOLS = [
  "dice",
  "dragonchess",
  "playing cards",
  "three-dragon ante"
] as const;
export type GamingSetTool = typeof GAMING_SET_TOOLS[number];
export function isGamingSetTool(tool: Tool): tool is GamingSetTool {
  return GAMING_SET_TOOLS.includes(tool as GamingSetTool);
}

export const MUSICAL_TOOLS = [
  "bagpipes",
  "drum",
  "dulcimer",
  "flute",
  "horn",
  "lute",
  "lyre",
  "pan flute",
  "shawm",
  "viol"
] as const;
export type MusicalInstrumentTool = typeof MUSICAL_TOOLS[number];
export function isMusicalInstrumentTool(tool: Tool): tool is MusicalInstrumentTool {
  return MUSICAL_TOOLS.includes(tool as MusicalInstrumentTool);
}


export const TOOLS = [
  ...ARTISAN_TOOLS,
  ...MUSICAL_TOOLS,
  ...GAMING_SET_TOOLS,
  "disguise kit",
  "forgery kit",
  "herbalism kit",
  "navigators tools",
  "poisoners kit",
  "thieves tools"
] as const;
export type Tool = typeof TOOLS[number];

export const TOOL_LABELS: {[key in Tool[number]]: string} = {
  // Artisan Tools
  "alchemist's supplies": "Alchemist's Supplies",
  "brewer's supplies": "Brewer's Supplies",
  "calligrapher's supplies": "Calligrapher's Supplies",
  "carpenter's tools": "Carpenter's Tools",
  "cartographer's tools": "Cartographer's Tools",
  "cobbler's tools": "Cobbler's Tools",
  "cook's utensils": "Cook's Utensils",
  "glassblower's tools": "Glassblower's Tools",
  "jeweler's tools": "jeweler's Tools",
  "leatherworker's tools": "Leatherworker's Tools",
  "mason's tools": "Mason's Tools",
  "painter's supplies": "Painter's Supplies",
  "potter's tools": "Potter's Tools",
  "smith's tools": "Smith's Tools",
  "tinker's tools": "Tinker's Tools",
  "weaver's tools": "Weaver's Tools",
  "woodcarver's tools": "Woodcarver's Tools",

  // Gaming Set
  "dice": "Dice",
  "dragonchess": "Dragonchess",
  "playing cards": "Playing Cards",
  "three-dragon ante": "Three-dragon Ante",

  // Musical Instruments
  "bagpipes": "Bagpipes",
  "drum": "Drum",
  "dulcimer": "Dulcimer",
  "flute": "Flute",
  "horn": "Horn",
  "lute": "Lute",
  "lyre": "Lyre",
  "pan flute": "Pan Flute",
  "shawm": "Shawm",
  "viol": "Viol",

  // Other
  "disguise kit": "Disguise Kit",
  "forgery kit": "Forgery Kit",
  "herbalism kit": "Herbalism Kit",
  "navigators tools": "Navigator's Tools",
  "poisoners kit": "Poisoner's Kit",
  "thieves tools": "Thieves' Tools"
};