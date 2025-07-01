"use client";
import {Character} from "@/model/character/Character";
import React from "react";
import {PageTitle} from "@/lib/components/PageTitle";
import {Spacer} from "@/lib/components/Spacer";
import {Button} from "@/lib/components/Button";
import {CreateCharacterDialog} from "./CreateCharacterDialog";
import {CharacterProfile} from "./CharacterProfile";

export function MyCharacters({characters}: {characters: Character[]}) {
  const [createNewCharacterDialog, setCreateNewCharacterDialog] = React.useState<boolean>(false);

  const ACTIVE_CHARACTERS = characters.filter(character => !character.retired);
  const RETIRED_CHARACTERS = characters.filter(character => character.retired);

  return <>
    <div className="flex flex-row items-center">
      <PageTitle>
        My Characters
      </PageTitle>
      <Spacer/>
      <Button  icon="pi pi-user" disabled={Object.values(characters).some(character => !character.retired)} label="New Character" onClick={() => setCreateNewCharacterDialog(true)}/>
    </div>

    <CreateCharacterDialog visible={createNewCharacterDialog} onClose={() => setCreateNewCharacterDialog(false)} />

    {Object.keys(characters).length === 0 && <div className={"flex flex-col justify-center gap-10 items-center py-10"}>
      <span>You have no characters yet.</span>
      <div>
        <Button className="py-2 px-4" size="large" label="Create New Character" icon="pi pi-user" onClick={() => setCreateNewCharacterDialog(true)} />
      </div>
    </div>}

    {ACTIVE_CHARACTERS.length > 0 && <>
      <PageTitle>Active Character</PageTitle>
      <div className="flex flex-row gap-4 justify-around justify-items-center flex-wrap">
        {ACTIVE_CHARACTERS.map(character => <CharacterProfile key={character.id} value={character} full/>)}
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