import React from "react";
import {isScribe} from "@/lib/authentication/isAuthenticated";
import {CharacterRepository} from "@/core/character/CharacterRepository";
import {CharacterPage} from "@/app/player/my-characters/[characterID]/CharacterPage";
import {CharacterID} from "@/model/character/CharacterID";
import {GameRepository} from "@/core/game/GameRepository";

export const dynamic = 'force-dynamic';

export default async function Page({params}: {
  params: Promise<{characterID: CharacterID}>
}) {
  if (!(await isScribe())) return <>Unauthorized.</>

  const characterID = (await params).characterID;
  const character = await CharacterRepository.getCharacterByID(characterID);
  const games = await GameRepository.getGamesByCharacterID(characterID);
  const gamesRan = await GameRepository.getGamesByGameMasterID(character.ownerID);

  return <CharacterPage character={character} games={games} gamesRan={gamesRan} />
}