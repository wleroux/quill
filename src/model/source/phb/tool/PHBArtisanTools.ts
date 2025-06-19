import {Tool, ToolID} from "@/model/source/model/Tool";

const PHB_TOOL_ALCHEMISTS_SUPPLIES: Tool = {
  label: "Alchemist's Supplies",
  type: "artisan tool"
};
const PHB_BREWERS_SUPPLIES: Tool = {
  label: "Brewer's Supplies",
  type: "artisan tool"
};
const PHB_CALLIGRAPHERS_SUPPLIES: Tool = {
  label: "Calligrapher's Supplies",
  type: "artisan tool"
};
const PHB_CARPENTERS_TOOLS: Tool = {
  label: "Carpenter's Tools",
  type: "artisan tool"
};
const PHB_CARTOGRAPHERS_TOOLS: Tool = {
  label: "Cartographer's Tools",
  type: "artisan tool"
};
const PHB_COBBLERS_TOOLS: Tool = {
  label: "Cobbler's Tools",
  type: "artisan tool"
};
const PHB_COOKS_UTENSILS: Tool = {
  label: "Cook's Utensils",
  type: "artisan tool"
};
const PHB_GLASSBLOWERS_TOOLS: Tool = {
  label: "Glassblower's Tools",
  type: "artisan tool"
};
const PHB_JEWELERS_TOOLS: Tool = {
  label: "Jeweler's Tools",
  type: "artisan tool"
};
const PHB_LEATHERWORKERS_TOOLS: Tool = {
  label: "Leatherworker's Tools",
  type: "artisan tool"
};
const PHB_MASONS_TOOLS: Tool = {
  label: "Mason's Tools",
  type: "artisan tool"
};
const PHB_PAINTERS_SUPPLIES: Tool = {
  label: "Painter's Supplies",
  type: "artisan tool"
};
const PHB_POTTERS_TOOLS: Tool = {
  label: "Potter's Tools",
  type: "artisan tool"
};
const PHB_SMITHS_TOOLS: Tool = {
  label: "Smith's Tools",
  type: "artisan tool"
};
const PHB_TINKERS_TOOLS: Tool = {
  label: "Tinker's Tools",
  type: "artisan tool"
};
const PHB_WAVERS_TOOLS: Tool = {
  label: "Weaver's Tools",
  type: "artisan tool"
};
const PHB_WOODCARVERS_TOOLS: Tool = {
  label: "Woodcarver's Tools",
  type: "artisan tool"
};

export const PHB_ARTISAN_TOOLS: {[toolID: ToolID]: Tool} = {
  "Alchemist's Supplies": PHB_TOOL_ALCHEMISTS_SUPPLIES,
  "Brewer's Supplies": PHB_BREWERS_SUPPLIES,
  "Calligrapher's Supplies": PHB_CALLIGRAPHERS_SUPPLIES,
  "Carpenter's Tools": PHB_CARPENTERS_TOOLS,
  "Cartographer's Tools": PHB_CARTOGRAPHERS_TOOLS,
  "Cobbler's Tools": PHB_COBBLERS_TOOLS,
  "Cook's Utensils": PHB_COOKS_UTENSILS,
  "Glassblower's Tools": PHB_GLASSBLOWERS_TOOLS,
  "Jeweler's Tools": PHB_JEWELERS_TOOLS,
  "Leatherworker's Tools": PHB_LEATHERWORKERS_TOOLS,
  "Mason's Tools": PHB_MASONS_TOOLS,
  "Painter's Supplies": PHB_PAINTERS_SUPPLIES,
  "Potter's Tools": PHB_POTTERS_TOOLS,
  "Smith's Tools": PHB_SMITHS_TOOLS,
  "Tinker's Tools": PHB_TINKERS_TOOLS,
  "Weaver's Tools": PHB_WAVERS_TOOLS,
  "Woodcarver's Tools": PHB_WOODCARVERS_TOOLS,
};
