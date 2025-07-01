"use server";
import "server-only";
import React from "react";
import {MyCharacters} from "@/app/player/my-characters/MyCharacters";
import {getUserID} from "@/lib/authentication/getUserID";
import {CharacterRepository} from "@/core/character/CharacterRepository";

export default async function Page() {
  const userID = await getUserID();
  const characters = userID
    ? await CharacterRepository.getCharactersByUserID(userID)
    : [];
  return <MyCharacters characters={characters} />
}
