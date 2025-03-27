import {PropsWithChildren} from "react";

export function FieldRow(props: PropsWithChildren<{}>) {
  return <div className="grid grid-cols-3 gap-4">
    {props.children}
  </div>
}