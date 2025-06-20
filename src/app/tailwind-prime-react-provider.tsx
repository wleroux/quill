"use client";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {APIOptions, PrimeReactProvider} from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import {PropsWithChildren, useMemo} from "react";
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
  const queryClient = useMemo(() => new QueryClient(), []);
  return <QueryClientProvider client={queryClient}>
    <PrimeReactProvider value={tailwindConfig}>
      {props.children}
    </PrimeReactProvider>
  </QueryClientProvider>
}