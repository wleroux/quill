import {CharacterID} from "@/model/character/CharacterID";
import {useMutation} from "@tanstack/react-query";
import {LongRestDecision} from "@/model/character/long-rest/LongRestDecision";

export function useLongRestMutation(params?: {onSuccess?: () => void}) {
  return useMutation({
    mutationFn: async ({characterID, decision}: {characterID: CharacterID, decision: LongRestDecision["data"]["decisions"]}) => {
      const response = await fetch(`/api/characters/${characterID}/long-rest`, {
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