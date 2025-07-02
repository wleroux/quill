"use client";
import {Character} from "@/model/character/Character";
import React from "react";
import {PageTitle} from "@/lib/components/PageTitle";
import {validateCharacter} from "@/app/scribe/characters/validateCharacter";
import {ClassID} from "@/model/source/model/Level";
import {REPOSITORY} from "@/model/source/index";
import {Button} from "@/lib/components/Button";
import {useMutation} from "@tanstack/react-query";
import {CharacterID} from "@/model/character/CharacterID";
import {useRouter} from "next/navigation";

function getLevelDisplay(classIDs: ClassID[]) {
  return classIDs.filter(classID => {
    return !classIDs.some(o => REPOSITORY.CLASSES[o].replace === classID);
  }).join(" / ");
}

export function ScribeCharacters({characters, members}: {characters: Character[], members: {[userID: string]: string}}) {
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

  const ACTIVE_CHARACTERS = characters.filter(character => !character.retired);
  const RETIRED_CHARACTERS = characters.filter(character => character.retired);
  return <>
    <PageTitle>All Characters</PageTitle>
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
          <td className="text-center">{character.name}</td>
          <td className="text-center">{members[character.ownerID] ?? character.ownerID}</td>
          <td className="text-center">{character.species?.speciesID}</td>
          <td className="text-center">{character.background?.backgroundID}</td>
          <td className="text-center">{getLevelDisplay(character.classIDs ?? [])}</td>
          <td className="text-center w-20 text-xs">{result.valid ? "" : result.error.map(error => `${error.code} (${error.path.join("/")})`).join("\n")}</td>
          <td className="text-center">
            <Button disabled={refresh.isPending} label="Refresh" onClick={() => {
              refresh.mutate({characterID: character.id});
            }} />
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
            <td className="text-center">{character.name}</td>
            <td className="text-center">{members[character.ownerID] ?? character.ownerID}</td>
            <td className="text-center">{character.species?.speciesID}</td>
            <td className="text-center">{character.background?.backgroundID}</td>
            <td className="text-center">{getLevelDisplay(character.classIDs ?? [])}</td>
            <td className="text-center">{result.valid ? "" : result.error.map(error => `${error.code} ${error.path.join("/")}`).join(", ")}</td>
            <td className="text-center">
              <Button disabled={refresh.isPending} label="Refresh" onClick={() => {
                refresh.mutate({characterID: character.id});
              }} />
            </td>
          </tr>)
        })}
        </tbody>
      </table>
    </>}
  </>
}
