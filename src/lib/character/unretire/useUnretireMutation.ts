import {CharacterID} from "@/model/character/CharacterID";
import {useMutation} from "@tanstack/react-query";

export function useUnretireMutation({onSuccess}: {onSuccess?: () => void}) {
  return useMutation({
    mutationFn: ({characterID}: { characterID: CharacterID }) => {
      return fetch(`/api/characters/${characterID}/unretire`, {
        method: "POST"
      });
    },
    onSuccess
  });
}