import {TabPanelPassThroughOptions, TabViewPassThroughOptions} from "primereact/tabview";
import {twMerge} from "tailwind-merge";

// PrimeReact does not have proper type definitions.
declare module "primereact/tabview" {
  export interface TabViewContext {
    active: boolean;
  }
}

export const TAB_PANEL_PT: TabPanelPassThroughOptions = {
  headerAction: (options) => ({
    className: twMerge(
      "bg-transparent px-4 py-2 pb-2 border-2 border-b-0 border-transparent text-[color:var(--foreground)]/50",
      options?.context.active && "border-[color:var(--foreground)]/20 text-[color:var(--foreground)]")
  }),
  content: {
    className: "bg-transparent"
  }
}

export const TAB_VIEW_PT: TabViewPassThroughOptions = {
  nav: {
    className: "border-b-2 gap-2 border-[color:var(--foreground)]"
  }
};