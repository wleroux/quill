"use client";

import {PageTitle} from "@/lib/components/PageTitle";
import {twMerge} from "tailwind-merge";
import React from "react";
import {Spacer} from "@/lib/components/Spacer";
import {Button} from "@/lib/components/Button";
import {CharacterID} from "@/model/player/character/CharacterDecision";
import {REPOSITORY} from "@/model/source/index";
import {Character} from "@/model/player/character/Character";
import {CreateCharacterDialog} from "@/app/player/my-characters/CreateCharacterDialog";

function CharacterSlot({id, value, active}: {id: CharacterID, value: Character, active?: boolean}) {
  return <div className={twMerge(
    "relative w-full p-4 h-24 box-content rounded-md bg-[color:var(--background)] border border-[color:var(--foreground)]/20 flex flex-row gap-4"
  )}>
    <span className={twMerge("pi pi-user w-30 h-30 text-[96px]", !active && "opacity-50")}/>
    <div className={twMerge("", !active && "opacity-50")}>
      <h2 className={"font-bold text-2xl"}>{value.name}</h2>
      <div>
        <strong>Specie:</strong> {REPOSITORY.SPECIES[value.choices["specie"]]?.label}
      </div>
      <div>
        <strong>Background:</strong> {REPOSITORY.BACKGROUNDS[value.choices["background"]]?.label}
      </div>
      <div>
        <strong>Class:</strong> {value.levels.map(levelID => REPOSITORY.LEVELS[levelID].label).join(" / ")}
      </div>
    </div>
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
      <Button icon="pi pi-user" label="New Character" onClick={() => setCreateNewCharacterDialog(true)}/>
    </div>

    <CreateCharacterDialog visible={createNewCharacterDialog} onClose={() => setCreateNewCharacterDialog(false)} />

    <PageTitle>Active Character</PageTitle>
    <div className="flex flex-row gap-4 justify-around justify-items-center flex-wrap">
    </div>
    <PageTitle>Inactive Characters</PageTitle>
    <div className="flex flex-row gap-4 justify-around justify-items-center flex-wrap">
    </div>
  </>
}