import {PropsWithChildren} from "react";

export function FieldSet(props: PropsWithChildren<{}>) {
  return <div className="flex flex-col gap-4 border border-[color:var(--foreground)]/10 rounded-md p-4 bg-black/10">
    {props.children}
  </div>
}
