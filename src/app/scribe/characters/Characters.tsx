import {Character} from "@/model/character/Character";
import React from "react";
import {PageTitle} from "@/lib/components/PageTitle";
import {CharacterProfile} from "@/app/scribe/characters/CharacterProfile";

export function ScribeCharacters({characters}: {characters: Character[]}) {
  const ACTIVE_CHARACTERS = characters.filter(character => !character.retired);
  const RETIRED_CHARACTERS = characters.filter(character => character.retired);
  return <>
    <PageTitle>All Characters</PageTitle>

    {ACTIVE_CHARACTERS.length > 0 && <>
      <PageTitle>Active Character</PageTitle>
      <div className="flex flex-row gap-4 justify-around justify-items-center flex-wrap">
        {ACTIVE_CHARACTERS.map(character => <CharacterProfile key={character.id} value={character} />)}
      </div>
    </>}
    {RETIRED_CHARACTERS.length > 0 && <>
      <PageTitle>Retired Characters</PageTitle>
      <div className="flex flex-row gap-4 justify-around justify-items-center flex-wrap">
        {RETIRED_CHARACTERS.map(character => <CharacterProfile key={character.id} value={character} />)}
      </div>
    </>}
  </>
}