import {MenuPassThroughOptions} from "primereact/menu";

export const MENU_PASSTHROUGH: MenuPassThroughOptions = {
  root: {
    className: "bg-white dark:bg-black mt-2"
  },
  action: {
    className: "hover:bg-white/20 px-4 py-2 flex justify-end",
  }
} as const;