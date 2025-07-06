import {CharacterID} from "@/model/character/CharacterID";
import {useMutation} from "@tanstack/react-query";

export function useRetireMutation({onSuccess}: {onSuccess?: () => void}) {
  return useMutation({
    mutationFn: ({characterID}: { characterID: CharacterID }) => {
      return fetch(`/api/characters/${characterID}/retire`, {
        method: "POST"
      });
    },
    onSuccess
  });
}