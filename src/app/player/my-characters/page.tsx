"use client";

import {PageTitle} from "@/lib/components/PageTitle";
import {twMerge} from "tailwind-merge";
import React from "react";
import {Spacer} from "@/lib/components/Spacer";
import {CreateCharacterDialog} from "@/app/player/my-characters/CreateCharacterDialog";
import {Button} from "@/lib/components/Button";

function CharacterSlot({name, disabled}: {name: string, disabled?: boolean}) {
  return <div className={twMerge(
    "w-64 p-4 h-96 rounded-md bg-[color:var(--background)] border border-[color:var(--foreground)]/20",
    disabled && "opacity-50 -z-1"
  )}>
    <h2 className="font-bold">{name}</h2>
  </div>
}

export default function MyCharacters() {
  const [createNewCharacterDialog, setCreateNewCharacterDialog] = React.useState<boolean>(false);

  return <>
    <div className="flex flex-row items-center">
      <PageTitle>
        My Characters
      </PageTitle>
      <Spacer/>
      <Button icon="pi pi-user" label="New Character" onClick={() => setCreateNewCharacterDialog(true)} />
    </div>

    <CreateCharacterDialog visible={createNewCharacterDialog} onClose={() => setCreateNewCharacterDialog(false)} />

    <div className="flex flex-row gap-4 justify-around justify-items-center flex-wrap">
      <CharacterSlot name="Slot 1" disabled/>
      <CharacterSlot name="Slot 2" disabled/>
      <CharacterSlot name="Slot 3" disabled/>
    </div>
  </>
}