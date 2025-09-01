import { PropsWithChildren } from "react";
import {twMerge} from "tailwind-merge";

export function PageTitle({className, children}: PropsWithChildren<{className?: string}>) {
  return (<span className={twMerge("text-xl font-[family-name:var(--font-audiowide)] flex flex-row gap-4", className)}>
    {children}
  </span>)
}