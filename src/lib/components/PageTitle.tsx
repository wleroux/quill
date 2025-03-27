import { PropsWithChildren } from "react";
import {twMerge} from "tailwind-merge";

export function PageTitle({className, children}: PropsWithChildren<{className?: string}>) {
  return (<span className={twMerge("text-xl font-[family-name:var(--font-audiowide)]", className)}>
    {children}
  </span>)
}