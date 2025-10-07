import {CharacterProfile} from "@/app/player/my-characters/[characterID]/CharacterProfile";
import React from "react";
import {Character} from "@/model/character/Character";
import {Game} from "@/model/game/Game";

export function CharacterPage({character, games, gamesRan}: {
  character: Character,
  games: Game[],
  gamesRan: Game[]
}) {
  return <CharacterProfile key={character.id} value={character} games={games} gamesRan={gamesRan} />
}