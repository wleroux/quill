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
import { Menu } from "primereact/menu";
import {MENU_PASSTHROUGH} from "@/lib/components/Menu";
import {RenameDialog} from "@/lib/character/train/RenameDialog";
import {CharacterProfile} from "@/app/player/my-characters/CharacterProfile";

function getLevelDisplay(classIDs: ClassID[]) {
  return classIDs.filter(classID => {
    return !classIDs.some(o => REPOSITORY.CLASSES[o].replace === classID);
  }).join(" / ");
}

function ScribeActionButton({value}: {value: Character}) {
  const router = useRouter();
  const refresh = useMutation({
    mutationFn: ({characterID}: {characterID: CharacterID}) => {
      return fetch(`/api/characters/${characterID}/refresh`, {
        method: "POST"
      });
    },
    onSuccess: () => {
      router.refresh();
    }
  });
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

  return <>
    <Button size="small" label="Actions" onClick={(ev) => {
      menu.current?.toggle(ev);
    }} />
    <Menu pt={MENU_PASSTHROUGH} ref={menu} popup model={[
      {label: `Rename ${value.name}`, disabled: isRenameOpen, command() {
        setIsRenameOpen(true);
      }},
      {label: `Refresh ${value.name}`, disabled: refresh.isPending, command() {
        refresh.mutate({characterID: value.id});
      }},
      {label: `Retire ${value.name}`, disabled: retire.isPending, command() {
        retire.mutate({characterID: value.id});
      }}
    ]} />
    <RenameDialog value={value} visible={isRenameOpen} onClose={() => setIsRenameOpen(false)} />
  </>
}

export function ScribeCharacters({characters, members}: {characters: Character[], members: {[userID: string]: string}}) {

  const [character, setCharacter] = useState<Character | undefined>(undefined);
  const ACTIVE_CHARACTERS = characters.filter(character => !character.retired);
  const RETIRED_CHARACTERS = characters.filter(character => character.retired);
  return <>
    <PageTitle>All Characters</PageTitle>
    {character && <>
      <PageTitle>Selected Character</PageTitle>
      <CharacterProfile value={character} full />
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
        <th>Valid</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {ACTIVE_CHARACTERS.map(character => {
        const result = validateCharacter(character);
        return (<tr key={character.id} className="even:bg-black/50 h-10">
          <td className="text-center" onClick={() => setCharacter(character)}>{character.name}</td>
          <td className="text-center">{members[character.ownerID] ?? character.ownerID}</td>
          <td className="text-center">{character.species?.speciesID}</td>
          <td className="text-center">{character.background?.backgroundID}</td>
          <td className="text-center">{getLevelDisplay(character.classIDs ?? [])}</td>
          <td className="text-center w-20 text-xs">{result.valid ? "" : result.error.map(error => `${error.code} (${error.path.join("/")})`).join("\n")}</td>
          <td className="text-center">
            <ScribeActionButton value={character} />
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
          <th>Valid</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {RETIRED_CHARACTERS.map(character => {
          const result = validateCharacter(character);
          return (<tr key={character.id} className="even:bg-black/50 h-10">
            <td className="text-center" onClick={() => setCharacter(character)}>{character.name}</td>
            <td className="text-center">{members[character.ownerID] ?? character.ownerID}</td>
            <td className="text-center">{character.species?.speciesID}</td>
            <td className="text-center">{character.background?.backgroundID}</td>
            <td className="text-center">{getLevelDisplay(character.classIDs ?? [])}</td>
            <td className="text-center">{result.valid ? "" : result.error.map(error => `${error.code} ${error.path.join("/")}`).join(", ")}</td>
            <td className="text-center">
              <ScribeActionButton value={character} />
            </td>
          </tr>)
        })}
        </tbody>
      </table>
    </>}
  </>
}
