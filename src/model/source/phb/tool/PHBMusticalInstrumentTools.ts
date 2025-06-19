import {Tool, ToolID} from "@/model/source/model/Tool";


export const PHB_BAGPIPES: Tool = {
  label: "Bagpipes",
  type: "musical instrument"
};
export const PHB_DRUM: Tool = {
  label: "Drum",
  type: "musical instrument"
};
export const PHB_DULCIMER: Tool = {
  label: "Dulcimer",
  type: "musical instrument"
};
export const PHB_FLUTE: Tool = {
  label: "Flute",
  type: "musical instrument"
};
export const PHB_HORN: Tool = {
  label: "Horn",
  type: "musical instrument"
};
export const PHB_LUTE: Tool = {
  label: "Lute",
  type: "musical instrument"
};
export const PHB_LYRE: Tool = {
  label: "Lyre",
  type: "musical instrument"
};
export const PHB_PAN_FLUTE: Tool = {
  label: "Pan Flute",
  type: "musical instrument"
};
export const PHB_SHAWM: Tool = {
  label: "Shawm",
  type: "musical instrument"
};
export const PHB_VIOL: Tool = {
  label: "Viol",
  type: "musical instrument"
};

export const PHB_MUSICAL_INSTRUMENT_TOOLS: {[toolID: ToolID]: Tool} = {
  "Bagpipes": PHB_BAGPIPES,
  "Drum": PHB_DRUM,
  "Dulcimer": PHB_DULCIMER,
  "Flute": PHB_FLUTE,
  "Horn": PHB_HORN,
  "Lute": PHB_LUTE,
  "Lyre": PHB_LYRE,
  "Pan flute": PHB_PAN_FLUTE,
  "Shawm": PHB_SHAWM,
  "Viol": PHB_VIOL
} as const;

