export const ARTISAN_TOOLS = [
  "carpenter’s tools",
  "leatherworker’s tools",
  "mason’s tools",
  "potter’s tools",
  "smith’s tools",
  "tinker’s tools",
  "weaver’s tools",
  "woodcarver’s tools"
] as const;
export type ArtisanTool = typeof ARTISAN_TOOLS[number];

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
export type MusicalTool = typeof MUSICAL_TOOLS[number];


export const TOOLS = [
  ...ARTISAN_TOOLS,
  ...MUSICAL_TOOLS
] as const;

export type Tool = typeof TOOLS[number];

export const TOOL_LABELS: {[key in Tool[number]]: string} = {
  "carpenter’s tools": "Carpenter’s Tools",
  "leatherworker’s tools": "Leatherworker’s Tools",
  "mason’s tools": "Mason’s Tools",
  "potter’s tools": "Potter’s Tools",
  "smith’s tools": "Smith’s Tools",
  "tinker’s tools": "Tinker’s Tools",
  "weaver’s tools": "Weaver’s Tools",
  "woodcarver’s tools": "Woodcarver’s Tools",

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
};