import {ErrorResult, Result, ValidResult} from "@/model/processor/Result";
import {GameList} from "@/core/game/pick/GameList";
import {CharacterRepository} from "@/core/character/CharacterRepository";
import {GAME_TIERS, GameTier, getTier} from "@/model/game/GameTier";
import {APIMessage} from "discord-api-types/v10";
import {Character} from "@/model/character/Character";
import {getCurrentLevel} from "@/model/character/level/LevelChoice";

export async function getList(message: APIMessage, minPlayers: number, maxPlayers: number): Promise<Result<GameList | undefined, string>> {
  const listMakerID = message.author.id;
  const listMembers = message.mentions.map(mention => mention.id);

  if (listMembers.length < minPlayers) return ValidResult.of(undefined);
  if (listMembers.length > maxPlayers) return ValidResult.of(undefined);
  if (!listMembers.includes(listMakerID)) return ValidResult.of(undefined);
  const availableCharacters = await Promise.all(listMembers.map(async (member) => {
    const characters = await CharacterRepository.getCharactersByUserID(member);
    return characters.filter(character => !character.retired);
  }));

  const validGameTiers = GAME_TIERS.flatMap((tier): [GameTier, Character[]][] => {
    const tierPlayerCharacters = availableCharacters.map(playerCharacters => {
      return playerCharacters.filter(character => getTier(getCurrentLevel(character)) === tier);
    });

    if (!tierPlayerCharacters.every(playerCharacters => playerCharacters.length > 0)) return [];

    return [[tier, tierPlayerCharacters.map(playerCharacters => playerCharacters[0])]]
  });

  if (validGameTiers.length === 0) return ErrorResult.of("Could not find a valid game tier.");

  return ValidResult.of({
    messageID: message.id,
    listMakerID,
    tier: validGameTiers[0][0],
    characters: validGameTiers[0][1]
  } satisfies GameList);
}
