import {PropsWithChildren} from "react";

export function Field(props: PropsWithChildren<{}>) {
  return <div className="flex flex-col gap-2">
    {props.children}
  </div>
}