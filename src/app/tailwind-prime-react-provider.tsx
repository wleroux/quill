"use client";

import {APIOptions, PrimeReactProvider} from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import {PropsWithChildren} from "react";
import {twMerge} from "tailwind-merge";

const tailwindConfig: Partial<APIOptions> = {
  unstyled: true,
  cssTransition: false,
  pt: Tailwind,
  ptOptions: {
    mergeSections: true,
    mergeProps: true,
    classNameMergeFunction: twMerge
  }
};

export function TailwindPrimeReactProvider(props: PropsWithChildren<{ }>) {
  return <PrimeReactProvider value={tailwindConfig}>
    {props.children}
  </PrimeReactProvider>
}