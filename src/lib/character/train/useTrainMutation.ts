"use client";
import {CharacterID} from "@/model/character/CharacterID";
import {ProgressDecision} from "@/model/character/progress/ProgressDecision";
import {useMutation} from "@tanstack/react-query";
import {useRouter} from "next/navigation";

export function useTrainMutation(params?: {onSuccess?: () => void}) {
  const router = useRouter();
  return useMutation({
    mutationFn: async ({characterID, decision}: {characterID: CharacterID, decision: ProgressDecision}) => {
      const response = await fetch(`/api/characters/${characterID}/train`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(decision)
      });
      if (response.ok) return response.json();
      else throw new Error(await response.text());
    },
    onSuccess: () => {
      params?.onSuccess?.();
      router.refresh();
    }
  });
}