import {CharacterID} from "@/model/character/CharacterID";
import {useMutation} from "@tanstack/react-query";
import {RetrainDecision} from "@/model/character/retrain/RetrainDecision";

export function useRetrainMutation(params?: {onSuccess?: () => void}) {
  return useMutation({
    mutationFn: async ({characterID, decision}: {characterID: CharacterID, decision: RetrainDecision}) => {
      const response = await fetch(`/api/characters/${characterID}/retrain`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(decision)
      });
      if (response.ok) return response.json();
      else throw new Error(await response.text());
    },
    onSuccess: params?.onSuccess
  });
}