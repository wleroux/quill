import { InputNumber, InputNumberProps, InputNumberPassThroughOptions } from 'primereact/inputnumber';
import {twMerge} from "tailwind-merge";

const inputNumberPt: InputNumberPassThroughOptions = {
  root: {
    className: "bg-[color:var(--background)] rounded-md flex-inline h-8 focus-within:outline hover:outline",
  },
  incrementButton: {
    className: "rounded-tr-md border-t border-r border-b w-6 flex justify-center"
  },
  decrementButton: {
    className: "rounded-br-md border-b border-r w-6 flex justify-center"
  },

  input: {
    root: ({
      className: twMerge(
        "rounded-l-md bg-transparent p-2 flex-1 w-10 text-sm text-center focus:ring-0 focus:outline-none",
      )
    })
  }
};

export function NumberField(props: InputNumberProps) {
  return <InputNumber pt={inputNumberPt} {...props} />
}