import {LabelHTMLAttributes} from "react";
import {twMerge} from "tailwind-merge";

export function SectionLabel(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={twMerge("text-lg font-[family-name:var(--font-audiowide)]", props.className)} {...props} />
}
