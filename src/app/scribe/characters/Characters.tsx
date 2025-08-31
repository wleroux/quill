"use client";
import {Character} from "@/model/character/Character";
import React, {useRef} from "react";
import {PageTitle} from "@/lib/components/PageTitle";
import {validateCharacter} from "@/app/scribe/characters/validateCharacter";
import {ClassID} from "@/model/source/model/Level";
import {REPOSITORY} from "@/model/source/index";
import {Button} from "@/lib/components/Button";
import {useRouter} from "next/navigation";
import {Menu} from "primereact/menu";
import {MENU_PASSTHROUGH} from "@/lib/components/Menu";
import {RenameDialog} from "@/lib/character/train/RenameDialog";
import {RetrainDialog} from "@/app/player/my-characters/RetrainDialog";
import {twMerge} from "tailwind-merge";
import {useRetireMutation} from "@/lib/character/retire/useRetireMutation";
import {useUnretireMutation} from "@/lib/character/unretire/useUnretireMutation";
import {TABLE_PT} from "@/app/theme/TableTheme";

function getLevelDisplay(classIDs: ClassID[]) {
  return classIDs.filter(classID => {
    return !classIDs.some(o => REPOSITORY.CLASSES[o].replace === classID);
  }).join(" / ");
}

function ScribeActionButton({value}: {value: Character}) {
  const router = useRouter();
  const retire = useRetireMutation({
    onSuccess() {router.refresh()}
  });
  const unretire = useUnretireMutation({
    onSuccess() {router.refresh();}
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
      !value.retired
        ? {label: `Retire ${value.name}`, disabled: retire.isPending, command() {
            retire.mutate({characterID: value.id});
          }}
        : {label: `Unretire ${value.name}`, disabled: unretire.isPending, command() {
            unretire.mutate({characterID: value.id});
          }}
    ]} />
    <RetrainDialog value={value} visible={isRetrainOpen} onClose={() => setIsRetrainOpen(false)} />
    <RenameDialog value={value} visible={isRenameOpen} onClose={() => setIsRenameOpen(false)} />
  </>
}

export function ScribeCharacters({characters, members}: {characters: Character[], members: {[userID: string]: string}}) {
  const ACTIVE_CHARACTERS = characters.filter(character => !character.retired);
  const RETIRED_CHARACTERS = characters.filter(character => character.retired);
  const router = useRouter();
  return <>
    <PageTitle>All Characters</PageTitle>
    <PageTitle>Active Characters</PageTitle>
    <table className={TABLE_PT.root.className}>
      <thead className={TABLE_PT.thead.className}>
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
        return (<tr key={character.id} className={twMerge("even:bg-black/50 h-12")}>
          <td className="text-center w-[18%] cursor-pointer" onClick={() => router.push(`/scribe/characters/${character.id}`)}>{character.name}</td>`
          <td className="text-center w-[18%]">{members[character.ownerID] ?? character.ownerID}</td>
          <td className="text-center w-[18%]">{character.species?.speciesID}</td>
          <td className="text-center w-[18%]">{character.background?.backgroundID}</td>
          <td className="text-center w-[18%]">{getLevelDisplay(character.classIDs ?? [])}</td>
          <td className="text-center flex flex-row items-center w-full justify-end px-1 gap-4 h-12">
            {!result.valid && <span className="pi pi-exclamation-circle text-red-400" title={result.error.map(error => `${error.code} ${error.path.join("/")}`).join(", ")}/>}
            <ScribeActionButton value={character}/>
          </td>
        </tr>);
      })}
      </tbody>
    </table>

    {RETIRED_CHARACTERS.length > 0 && <>
      <PageTitle>Retired Characters</PageTitle>
      <table className={TABLE_PT.root.className}>
        <thead className={TABLE_PT.thead.className}>
        <tr className={TABLE_PT.theadRow.className}>
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
          return (<tr key={character.id} className={TABLE_PT.tbodyRow.className}>
            <td className="text-center w-[18%] cursor-pointer" onClick={() => router.push(`/scribe/characters/${character.id}`)}>{character.name}</td>
            <td className="text-center w-[18%]">{members[character.ownerID] ?? character.ownerID}</td>
            <td className="text-center w-[18%]">{character.species?.speciesID}</td>
            <td className="text-center w-[18%]">{character.background?.backgroundID}</td>
            <td className="text-center w-[18%]">{getLevelDisplay(character.classIDs ?? [])}</td>
            <td className="text-center flex flex-row items-center w-full justify-end px-1 gap-4 h-12">
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
