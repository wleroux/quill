import {twMerge} from "tailwind-merge";
import React, {HTMLAttributes, PropsWithChildren} from "react";

export function Card({children, className, ...props}: HTMLAttributes<HTMLDivElement> & PropsWithChildren<{}>) {
  return <div {...props} className={twMerge(
    "relative w-full box-content rounded-md bg-white dark:bg-black/40 border border-[color:var(--foreground)]/20 flex flex-col gap-4",
    className
  )}>
    {children}
  </div>
}

export function CardHeader({className, children, ...props}: HTMLAttributes<HTMLDivElement> & PropsWithChildren<{}>) {
  return <div {...props} className={twMerge("flex-1 flex flex-row p-4 rounded-t-md h-24 box-content gap-4 font-bold text-lg items-center", className)}>
    {children}
  </div>
}