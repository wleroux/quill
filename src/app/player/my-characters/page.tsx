import React from "react";
import {getCharactersAction} from "@/actions/CharactersActions";
import {MyCharacters} from "@/app/player/my-characters/MyCharacters";

export default async function Page() {
  const characters = await getCharactersAction();
  return <MyCharacters characters={characters} />
}
