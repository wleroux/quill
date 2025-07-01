"use client";

import {PageTitle} from "@/lib/components/PageTitle";
import {Button} from "@/lib/components/Button";
import {useMutation} from "@tanstack/react-query";
import {Toast, ToastPassThroughOptions} from "primereact/toast";
import {useRef} from "react";
import {twMerge} from "tailwind-merge";

const TOAST_PASSTHROUGH: ToastPassThroughOptions = {
  root: {
    className: "flex flex-col justify-center items-center"
  },
  message: (options) => {
    // @ts-ignore
    const message = options.state.messages[options.index].message;
    return ({
      className: twMerge(
        "bg-white dark:bg-black pl-4 pr-2 py-1 rounded-md mb-2 border border-black/40 dark:border-white/40 w-fit mx-auto drop-shadow-lg",
        message.severity === "error" && "bg-red-950 border border-red-500/40 text-red-100"
      )
    })
  }
};

export function AdminDiscordPage() {
  const toast = useRef<Toast>(null);
  const refreshCommandMutation = useMutation({
    mutationFn: async () => {
      return fetch("/api/discord/refresh", {method: "POST"});
    },
    onSuccess: () => {
      toast.current?.show({
        severity: "success",
        content: "Discord Commands Refreshed"
      })
    },
    onError: () => {
      toast.current?.show({
        severity: "error",
        content: "Failed to update Discord Commands"
      })
    }
  });

  return <>
    <PageTitle>Discord</PageTitle>
    <Toast ref={toast}  position={"top-center"} pt={TOAST_PASSTHROUGH} />
    <Button disabled={refreshCommandMutation.isPending} className="w-fit" label="Refresh Discord Commands" onClick={() => refreshCommandMutation.mutate()} />
  </>
}
