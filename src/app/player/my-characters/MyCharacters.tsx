"use client";
import {Character} from "@/model/character/Character";
import React, {useRef} from "react";
import {PageTitle} from "@/lib/components/PageTitle";
import {Spacer} from "@/lib/components/Spacer";
import {Button} from "@/lib/components/Button";
import {CreateCharacterDialog} from "@/app/player/my-characters/CreateCharacterDialog";
import {REPOSITORY} from "@/model/source/index";
import {twMerge} from "tailwind-merge";
import {useMutation} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import {retireCharacterAction} from "@/actions/CharactersActions";
import {ConfirmPopup} from "primereact/confirmpopup";

function CharacterSlot({value, active}: {value: Character, active?: boolean}) {
  const router = useRouter();
  const retireMutation = useMutation({
    mutationFn: async () => {
      return retireCharacterAction(value.id);
    },
    onSuccess: () => {
      router.refresh();
    }
  });

  const [visible, setVisible] = React.useState(false);
  const retireButtonRef = useRef(null);

  return <div className={twMerge(
    "relative w-full p-4 h-24 box-content rounded-md bg-[color:var(--background)] border border-[color:var(--foreground)]/20 flex flex-row gap-4"
  )}>
    <span className={twMerge("pi pi-user w-30 h-30 text-[96px]", !active && "opacity-50")}/>
    <div className={twMerge("", !active && "opacity-50")}>
      <h2 className={"font-bold text-2xl"}>{value.name}</h2>
      <div>
        <strong>Specie:</strong> {REPOSITORY.SPECIES[value.specieID]?.label}
      </div>
      <div>
        <strong>Background:</strong> {REPOSITORY.BACKGROUNDS[value.backgroundID]?.label}
      </div>
      <div>
        <strong>Class:</strong> {value.levels.map(classID => REPOSITORY.CLASSES[classID].label).join(" / ")}
      </div>
    </div>
    {!value.retired && <div className="absolute right-4 top-4">
      <ConfirmPopup pt={{
        root: {className: "bg-red-950 border border-red-400/50 p-4 mt-4 gap-4 flex flex-col"},
        message: {className: "pl-4 text-red-100"},
        icon: {className: "text-red-100"}
      }} target={retireButtonRef.current ?? undefined} visible={visible} onHide={() => setVisible(false)}
                    message={`Are you sure you want to retire ${value.name}? Once retired, they cannot be unretired.`} icon="pi pi-exclamation-triangle" accept={() => {
        retireMutation.mutate();
      }} reject={() => setVisible(false)}  />

      <Button ref={retireButtonRef} icon="pi pi-trash" severity="danger" label="Retire" disabled={retireMutation.isPending} onClick={() => {
        setVisible(true);
      }} />
    </div>}
  </div>
}

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
        {ACTIVE_CHARACTERS.map(character => <CharacterSlot key={character.id} value={character} active />)}
      </div>
    </>}
    {RETIRED_CHARACTERS.length > 0 && <>
      <PageTitle>Retired Characters</PageTitle>
      <div className="flex flex-row gap-4 justify-around justify-items-center flex-wrap">
        {RETIRED_CHARACTERS.map(character => <CharacterSlot key={character.id} value={character} />)}
      </div>
    </>}
  </>
}