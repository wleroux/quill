import {PropsWithChildren} from "react";
import {twMerge} from "tailwind-merge";

export function FieldSet({inline = false, className, children}: PropsWithChildren<{inline?: boolean, className?: string}>) {
  return <div className={twMerge(
    "col-span-3 grid grid-cols-3 gap-4",
    !inline && "p-4 bg-black/20 -mx-4 border-y border-[color:var(--foreground)]/10 shadow-md",
    className
  )}>
    {children}
  </div>
}
