import React from "react";
import {ScribeCharacters} from "@/app/scribe/characters/Characters";
import {isScribe} from "@/lib/authentication/isAuthenticated";
import {CharacterRepository} from "@/core/character/CharacterRepository";

export default async function CharacterPage() {
  const characters = (await isScribe())
    ? await CharacterRepository.getAllCharacters()
    : [];
  return <ScribeCharacters characters={characters} />
}