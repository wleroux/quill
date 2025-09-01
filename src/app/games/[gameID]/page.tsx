"use server";
import "server-only";
import React from "react";
import {CharacterRepository} from "@/core/character/CharacterRepository";
import {CharacterID} from "@/model/character/CharacterID";
import {GameRepository} from "@/core/game/GameRepository";
import {GamePage} from "@/app/games/[gameID]/GamePage";

export default async function Page({params}: {
  params: Promise<{gameID: CharacterID}>
}) {
  const gameID = (await params).gameID;
  const game = await GameRepository.getGameByID(gameID);
  const characters = await Promise.all(game.characterIDs.map(CharacterRepository.getCharacterByID));
  return <GamePage game={game} characters={characters} />
}
