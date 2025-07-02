import {Character} from "@/model/character/Character";
import React from "react";
import {PageTitle} from "@/lib/components/PageTitle";
import {ClassID} from "@/model/source/model/Level";
import {ChoiceID} from "@/model/source/choice/ChoiceID";
import {Decision} from "@/model/source/choice/Decision";
import {REPOSITORY} from "@/model/source/index";

function getLevelDisplay(levels: {classID: ClassID, decisions: {[choiceID: ChoiceID]: Decision}}[]) {
  return levels.filter(level => {
    return !levels.some(o => REPOSITORY.CLASSES[o.classID].replace === level.classID);
  }).map(level => level.classID).join(" / ");
}


export function ScribeCharacters({characters, members}: {characters: Character[], members: {[userID: string]: string}}) {
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
        <th></th>
      </tr>
      </thead>
      <tbody>
      {ACTIVE_CHARACTERS.map(character => <tr key={character.id} className="even:bg-black/50 h-10">
        <td className="text-center">{character.name}</td>
        <td className="text-center">{members[character.ownerID] ?? character.ownerID}</td>
        <td className="text-center">{character.specie.specieID}</td>
        <td className="text-center">{character.background.backgroundID}</td>
        <td className="text-center">{getLevelDisplay(character.levels)}</td>
        <td className="text-center">&nbsp;</td>
      </tr>)}
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
        {RETIRED_CHARACTERS.map(character => <tr key={character.id} className="even:bg-black/50 h-10">
          <td className="text-center">{character.name}</td>
          <td className="text-center">{members[character.ownerID] ?? character.ownerID}</td>
          <td className="text-center">{character.specie.specieID}</td>
          <td className="text-center">{character.background.backgroundID}</td>
          <td className="text-center">{getLevelDisplay(character.levels)}</td>
          <td className="text-center">&nbsp;</td>
        </tr>)}
        </tbody>
      </table>
    </>}
  </>
}