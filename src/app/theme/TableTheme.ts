import {twMerge} from "tailwind-merge";

export const TABLE_PT = {
  root: {
    className: "w-full bg-black/20 dark:bg-black/50 rounded-md overflow-hidden shadow-md"
  },
  thead: {
    className: "bg-black/50"
  },
  tbodyRow: {
    className: twMerge("even:bg-black/50 h-12")
  },
  theadRow: {
    className: "h-10"
  }
} as const;