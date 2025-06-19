export type ToolCategory = "musical instrument" | "artisan tool" | "gaming set" | undefined;
export type ToolID = string;
export type Tool = {
  label: string;
  type: ToolCategory;
};
