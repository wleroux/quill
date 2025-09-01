import React, {HTMLAttributes, PropsWithChildren} from "react";
import {twMerge} from "tailwind-merge";

export function Tag({className, children, variant, ...props}: HTMLAttributes<HTMLSpanElement> & PropsWithChildren<{
  variant: "blue" | "green" | "yellow" | "red"
}>) {
  return <div {...props} className={twMerge(
    "font-light text-sm py-1 px-2 rounded-md [font-variant:small-caps] border-1",
    variant === "blue" && "border-blue-500 text-blue-100 bg-blue-700",
    variant === "green" && "border-green-500 text-green-100 bg-green-700",
    variant === "yellow" && "border-yellow-500 text-yellow-100 bg-yellow-700",
    variant === "red" && "border-red-500 text-red-100 bg-red-700",
    className
  )}>{children}</div>;
}
