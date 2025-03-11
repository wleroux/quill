import { PropsWithChildren } from "react";

export function PageTitle({children}: PropsWithChildren<{}>) {
  return (<span className="text-xl font-[family-name:var(--font-audiowide)]">
    {children}
  </span>)
}