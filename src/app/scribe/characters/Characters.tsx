"use client";
import {Character} from "@/model/character/Character";
import React, {useRef, useState} from "react";
import {PageTitle} from "@/lib/components/PageTitle";
import {validateCharacter} from "@/app/scribe/characters/validateCharacter";
import {ClassID} from "@/model/source/model/Level";
import {REPOSITORY} from "@/model/source/index";
import {Button} from "@/lib/components/Button";
import {useMutation} from "@tanstack/react-query";
import {CharacterID} from "@/model/character/CharacterID";
import {useRouter} from "next/navigation";
import {Menu} from "primereact/menu";
import {MENU_PASSTHROUGH} from "@/lib/components/Menu";
import {RenameDialog} from "@/lib/character/train/RenameDialog";
import {CharacterProfile} from "@/app/player/my-characters/CharacterProfile";
import {RetrainDialog} from "@/app/player/my-characters/RetrainDialog";
import {twMerge} from "tailwind-merge";

function getLevelDisplay(classIDs: ClassID[]) {
  return classIDs.filter(classID => {
    return !classIDs.some(o => REPOSITORY.CLASSES[o].replace === classID);
  }).join(" / ");
}

function ScribeActionButton({value}: {value: Character}) {
  const router = useRouter();
  const retire = useMutation({
    mutationFn: ({characterID}: {characterID: CharacterID}) => {
      return fetch(`/api/characters/${characterID}/retire`, {
        method: "POST"
      });
    },
    onSuccess: () => {
      router.refresh();
    }
  });
  const menu = useRef<Menu>(null);

  const [isRenameOpen, setIsRenameOpen] = React.useState(false);
  const [isRetrainOpen, setIsRetrainOpen] = React.useState(false);

  return <>
    <Button size="small" label="Actions" onClick={(ev) => {
      menu.current?.toggle(ev);
    }} />
    <Menu pt={MENU_PASSTHROUGH} ref={menu} popup model={[
      {label: `Rename ${value.name}`, disabled: isRenameOpen, command() {
        setIsRenameOpen(true);
      }},
      {label: `Retrain ${value.name}`, disabled: retire.isPending, command() {
        setIsRetrainOpen(true);
      }},
      {label: `Retire ${value.name}`, disabled: retire.isPending, command() {
        retire.mutate({characterID: value.id});
      }}
    ]} />
    <RetrainDialog value={value} visible={isRetrainOpen} onClose={() => setIsRetrainOpen(false)} />
    <RenameDialog value={value} visible={isRenameOpen} onClose={() => setIsRenameOpen(false)} />
  </>
}

export function ScribeCharacters({characters, members}: {characters: Character[], members: {[userID: string]: string}}) {
  const [selectedCharacterID, setSelectedCharacterID] = useState<CharacterID | undefined>(undefined);
  const ACTIVE_CHARACTERS = characters.filter(character => !character.retired);
  const RETIRED_CHARACTERS = characters.filter(character => character.retired);
  const selectedCharacter = characters.find(character => character.id === selectedCharacterID);
  return <>
    <PageTitle>All Characters</PageTitle>
    {selectedCharacter && <>
      <PageTitle>Selected Character</PageTitle>
      <CharacterProfile value={selectedCharacter} full />
    </>}
    <PageTitle>Active Characters</PageTitle>
    <table className="w-full bg-black/20 dark:bg-black/50 rounded-md overflow-hidden shadow-md">
      <thead className="bg-black/50">
      <tr className="h-10">
        <th>Name</th>
        <th>Owner</th>
        <th>Specie</th>
        <th>Background</th>
        <th>Class</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {ACTIVE_CHARACTERS.map(character => {
        const result = validateCharacter(character);
        return (<tr key={character.id} className={twMerge("even:bg-black/50 h-10", selectedCharacterID === character.id && "rounded-md outline -outline-offset-2 outline-2 outline-blue-500/50")}>
          <td className="text-center w-[18%] cursor-pointer" onClick={() => setSelectedCharacterID(character.id)}>{character.name}</td>
          <td className="text-center w-[18%]">{members[character.ownerID] ?? character.ownerID}</td>
          <td className="text-center w-[18%]">{character.species?.speciesID}</td>
          <td className="text-center w-[18%]">{character.background?.backgroundID}</td>
          <td className="text-center w-[18%]">{getLevelDisplay(character.classIDs ?? [])}</td>
          <td className="text-center flex flex-row items-center w-full justify-end px-1 gap-4 h-10">
            {!result.valid && <span className="pi pi-exclamation-circle text-red-400" title={result.error.map(error => `${error.code} ${error.path.join("/")}`).join(", ")}/>}
            <ScribeActionButton value={character}/>
          </td>
        </tr>);
      })}
      </tbody>
    </table>

    {RETIRED_CHARACTERS.length > 0 && <>
      <PageTitle>Retired Characters</PageTitle>
      <table className="w-full bg-black/20 dark:bg-black/50 rounded-md overflow-hidden shadow-md">
        <thead className="bg-black/50">
        <tr className="h-10">
          <th>Name</th>
          <th>Owner</th>
          <th>Specie</th>
          <th>Background</th>
          <th>Class</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {RETIRED_CHARACTERS.map(character => {
          const result = validateCharacter(character);
          return (<tr key={character.id} className={twMerge("even:bg-black/50 h-10", selectedCharacterID === character.id && "rounded-md outline -outline-offset-2 outline-2 outline-blue-500/50")}>
            <td className="text-center w-[18%] cursor-pointer" onClick={() => setSelectedCharacterID(character.id)}>{character.name}</td>
            <td className="text-center w-[18%]">{members[character.ownerID] ?? character.ownerID}</td>
            <td className="text-center w-[18%]">{character.species?.speciesID}</td>
            <td className="text-center w-[18%]">{character.background?.backgroundID}</td>
            <td className="text-center w-[18%]">{getLevelDisplay(character.classIDs ?? [])}</td>
            <td className="text-center flex flex-row items-center w-full justify-end px-1 gap-4 h-10">
              {!result.valid && <span className="pi pi-exclamation-circle text-red-400" title={result.error.map(error => `${error.code} ${error.path.join("/")}`).join(", ")} />}
              <ScribeActionButton value={character}/>
            </td>
          </tr>)
        })}
        </tbody>
      </table>
    </>}
  </>
}
