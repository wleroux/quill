import React from "react";
import {Button as PRButton, ButtonPassThroughOptions as PRButtonPassThroughOptions, ButtonProps as PRButtonProps} from "primereact/button";
import {twMerge} from "tailwind-merge";

const ICON_SIZE_CLASSES = {
  "small": "w-6 h-6",
  "medium": "w-8 h-8",
  "large": ""
};

const buttonPt: PRButtonPassThroughOptions = {
  root: (options) => ({
    className: twMerge(
      "border border-[color:var(--foreground)]/50 rounded-md bg-black/20 hover:outline focus-within:outline disabled:opacity-50 gap-2",
      !(options?.props.label) && `${ICON_SIZE_CLASSES[options?.props.size ?? "medium"]} flex-inline items-center justify-center`,
      options?.props.label && "px-4 py-2",
      options?.props.className
    )
  }),
  label: (options) => ({
    className: twMerge(
      !(options?.props.label) ? "hidden" : undefined,
      options?.props.className
    )
  }),
};

export function Button(props: PRButtonProps) {
  return <PRButton pt={buttonPt} {...props} />
}