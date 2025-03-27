import {PropsWithChildren} from "react";
import {twMerge} from "tailwind-merge";

export function FieldSet({inline = false, children}: PropsWithChildren<{inline?: boolean}>) {
  return <div className={twMerge(
    "flex flex-col gap-4",
    !inline && "rounded-md p-4 bg-black/20"
  )}>
    {children}
  </div>
}
