import { LabelHTMLAttributes } from "react";
import {twMerge} from "tailwind-merge";

export function FieldLabel(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={twMerge("font-bold", props.className)} {...props} />
}