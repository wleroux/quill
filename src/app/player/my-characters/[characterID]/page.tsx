"use server";
import "server-only";
import React from "react";
import {getUserID} from "@/lib/authentication/getUserID";
import {CharacterRepository} from "@/core/character/CharacterRepository";
import {CharacterID} from "@/model/character/CharacterID";
import {CharacterPage} from "@/app/player/my-characters/[characterID]/CharacterPage";
import {GameRepository} from "@/core/game/GameRepository";

export default async function MyCharacterPage({params}: {
  params: Promise<{characterID: CharacterID}>
}) {
  const userID = await getUserID();
  const characterID = (await params).characterID;
  const character = await CharacterRepository.getCharacterByID(characterID);
  if (character.ownerID !== userID) return <>Unauthorized.</>;

  const games = await GameRepository.getGamesByCharacterID(characterID);

  return <CharacterPage character={character} games={games} />
}
