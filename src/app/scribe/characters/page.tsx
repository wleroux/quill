import {getCharactersAction} from "@/actions/CharactersActions";
import React from "react";
import {ScribeCharacters} from "@/app/scribe/characters/Characters";

export default async function CharacterPage() {
  const characters = await getCharactersAction();
  return <ScribeCharacters characters={characters} />
}